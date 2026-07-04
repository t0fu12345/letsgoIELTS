import { Navigate } from 'react-router-dom';
import { useAuthSession } from '../hooks/useAuthSession';

const ProtectedRoute = ({ children }) => {
  const { isLoggedIn, isLoading } = useAuthSession();

  if (isLoading) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  }

  if (!isLoggedIn) {
    // Redirect them to the /login page
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute;
