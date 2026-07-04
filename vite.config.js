import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import fs from 'fs';
import path from 'path';

const DB_FILE = path.resolve(__dirname, 'db.json');

const readDB = () => {
  if (!fs.existsSync(DB_FILE)) {
    fs.writeFileSync(DB_FILE, JSON.stringify({ users: [], currentSession: null }, null, 2));
  }
  return JSON.parse(fs.readFileSync(DB_FILE, 'utf-8'));
};

const writeDB = (data) => {
  fs.writeFileSync(DB_FILE, JSON.stringify(data, null, 2));
};

const mockApiPlugin = () => ({
  name: 'mock-api',
  configureServer(server) {
    server.middlewares.use((req, res, next) => {
      if (req.url.startsWith('/api/auth/')) {
        let body = '';
        req.on('data', chunk => {
          body += chunk.toString();
        });
        req.on('end', () => {
          const parsedBody = body ? JSON.parse(body) : {};
          const db = readDB();

          res.setHeader('Content-Type', 'application/json');

          if (req.url === '/api/auth/signup' && req.method === 'POST') {
            const { email, password } = parsedBody;
            if (db.users.find(u => u.email === email)) {
              res.statusCode = 400;
              return res.end(JSON.stringify({ error: 'User already exists' }));
            }
            db.users.push({ email, password });
            writeDB(db);
            res.statusCode = 201;
            return res.end(JSON.stringify({ success: true }));
          }

          if (req.url === '/api/auth/login' && req.method === 'POST') {
            const { email, password } = parsedBody;
            const user = db.users.find(u => u.email === email && u.password === password);
            if (user) {
              db.currentSession = email;
              writeDB(db);
              res.statusCode = 200;
              return res.end(JSON.stringify({ success: true, user: { email } }));
            }
            res.statusCode = 401;
            return res.end(JSON.stringify({ error: 'Invalid email or password' }));
          }

          if (req.url === '/api/auth/session' && req.method === 'GET') {
            if (db.currentSession) {
              res.statusCode = 200;
              return res.end(JSON.stringify({ user: { email: db.currentSession } }));
            }
            res.statusCode = 401;
            return res.end(JSON.stringify({ user: null }));
          }

          if (req.url === '/api/auth/logout' && req.method === 'POST') {
            db.currentSession = null;
            writeDB(db);
            res.statusCode = 200;
            return res.end(JSON.stringify({ success: true }));
          }

          next();
        });
      } else {
        next();
      }
    });
  }
});

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), mockApiPlugin()],
});
