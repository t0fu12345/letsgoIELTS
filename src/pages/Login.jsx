import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuthSession } from '../hooks/useAuthSession';

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  
  const { isLoggedIn } = useAuthSession();

  const handleLogin = async (e) => {
    e.preventDefault();
    
    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      });
      const data = await res.json();
      
      if (res.ok) {
        setError('');
        navigate('/dashboard');
      } else {
        setError(data.error || 'Invalid email or password.');
      }
    } catch (err) {
      setError('An error occurred. Please try again.');
    }
  };

  return (
    <div className="bg-background min-h-screen flex items-center justify-center font-body-md text-on-surface">
      <div className="w-full min-h-screen flex flex-col md:flex-row">
        {/* Left Column (Brand) */}
        <div className="hidden md:flex md:w-1/2 relative bg-primary-container flex-col justify-between p-12 overflow-hidden" style={{ backgroundColor: '#1CB0F6' }}>
          {/* Subtle Mesh Background */}
          {/* Top Left: Logo */}
          <div className="relative z-10">
            <Link to={isLoggedIn ? "/dashboard" : "/"}>
                <span className="font-headline-lg text-headline-lg text-on-primary tracking-tight font-bold">letsgoIELTS</span>
            </Link>
          </div>
          {/* Center: 3D Illustration */}
          <div className="relative z-10 flex-grow flex items-center justify-center">
            <img 
                alt="IELTS Journey Illustration" 
                className="max-w-full h-auto object-contain mix-blend-multiply" 
                src="/login.svg" 
                style={{ filter: 'contrast(1.1)', backgroundColor: 'transparent', border: 'none', boxShadow: 'none' }}
            />
          </div>
          {/* Bottom: Quote */}
          <div className="relative z-10 mt-8 mx-auto">
            <p className="font-title-lg text-title-lg text-on-primary max-w-md text-center">"Welcome back! Your IELTS journey awaits."</p>
          </div>
        </div>

        {/* Right Column (Form) */}
        <div className="w-full md:w-1/2 bg-surface-white flex flex-col justify-center px-8 sm:px-12 md:px-24 py-12 md:py-0">
          {/* Mobile Logo */}
          <div className="md:hidden mb-8 text-center">
             <Link to={isLoggedIn ? "/dashboard" : "/"}>
                 <span className="font-headline-lg text-headline-lg text-primary tracking-tight font-bold">letsgoIELTS</span>
             </Link>
          </div>

          <div className="max-w-md w-full mx-auto space-y-8">
            {/* Header */}
            <div className="text-center md:text-left mb-6">
              <h2 className="font-headline-lg text-headline-lg text-on-surface-text mb-2">Welcome Back</h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant">Please enter your details to sign in.</p>
            </div>

            {error && (
              <div className="mb-4 p-3 rounded bg-error-container text-on-error-container text-body-md font-medium text-center">
                {error}
              </div>
            )}

            {/* Form */}
            <form className="space-y-6" onSubmit={handleLogin}>
              {/* Email Field */}
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <span className="material-symbols-outlined text-outline">mail</span>
                </div>
                <input className="block w-full pl-10 pr-3 py-3 border border-outline rounded-lg bg-transparent text-on-surface focus:ring-primary focus:border-primary font-body-lg text-body-lg transition-colors peer outline-none" id="email" placeholder=" " required type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <label className="absolute text-outline duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-surface-white px-2 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-9 font-body-lg text-body-lg" htmlFor="email">Email Address</label>
              </div>

              {/* Password Field */}
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <span className="material-symbols-outlined text-outline">lock</span>
                </div>
                <input className="block w-full pl-10 pr-10 py-3 border border-outline rounded-lg bg-transparent text-on-surface focus:ring-primary focus:border-primary font-body-lg text-body-lg transition-colors peer outline-none" id="password" placeholder=" " required type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <label className="absolute text-outline duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-surface-white px-2 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-9 font-body-lg text-body-lg" htmlFor="password">Password</label>
                <button className="absolute inset-y-0 right-0 pr-3 flex items-center text-outline hover:text-primary transition-colors" type="button">
                  <span className="material-symbols-outlined">visibility</span>
                </button>
              </div>

              {/* Helper Row */}
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input className="h-4 w-4 text-primary focus:ring-primary border-outline rounded cursor-pointer" id="remember-me" name="remember-me" type="checkbox"/>
                  <label className="ml-2 block font-body-md text-body-md text-on-surface-variant cursor-pointer" htmlFor="remember-me">
                    Remember me
                  </label>
                </div>
                <div className="text-sm">
                  <a className="font-label-lg text-label-lg text-primary-container hover:text-primary transition-colors font-medium" href="#">
                    Forgot password?
                  </a>
                </div>
              </div>

              {/* Action Button */}
              <div>
                <button className="w-full flex justify-center py-3 px-4 border border-transparent rounded-full shadow-sm font-label-lg text-label-lg text-on-primary bg-primary-container hover:bg-primary hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-all duration-200 ease-in-out uppercase tracking-wider" type="submit">
                  Sign In
                </button>
              </div>
            </form>

            {/* Divider */}
            <div className="mt-6">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-surface-variant"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-surface-white font-body-md text-body-md text-outline">OR</span>
                </div>
              </div>
            </div>

            {/* Social Logins */}
            <div className="mt-6 grid grid-cols-1 gap-3">
              <button className="w-full flex justify-center items-center py-2.5 px-4 border border-outline rounded-lg shadow-sm bg-transparent hover:bg-surface-container-lowest font-label-lg text-label-lg text-on-surface hover:-translate-y-0.5 transition-all duration-200">
                <img alt="Google logo" className="h-5 w-5 mr-2" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDFYfB1rWLUWj2dBBmjTspSgkDnPoGwMYjcoozudCV56oOu9zqznXRCgZ3aNnVqCqWsEhhTeBWVo6XG7KebCiiXS_4XM7u6zZQ59Dkexza3kasqrwylw-pjj1qP0GBDUaRW-fTWIBVjyVpng29w0SHWNeUozh9_S9Q7juARESD2eWGxHn2UagEmCs7tlpIX-Vh8Tuh_0AqIyPJzgFo6uxczArny1aEKpeWc3t_lkNiRQH5eFlQQyInPtDxTZfyKNCYkfx3f9GonleEZ"/>
                Sign in with Google
              </button>
              <button className="w-full flex justify-center items-center py-2.5 px-4 border border-outline rounded-lg shadow-sm bg-transparent hover:bg-surface-container-lowest font-label-lg text-label-lg text-on-surface hover:-translate-y-0.5 transition-all duration-200">
                <img alt="Facebook logo" className="h-5 w-5 mr-2" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAUC0kuHBk5KCdPMGXSMf_mTu7aIcwHjRc5ngq8MQovGYyHYEIdBdK5H1j90Iydroa0EwpHSuq6JW9znvxwyPWsSOYqX_yyDIettTry-zGlvDkM7hdWjZWtpZgKRfu7881aLn60q3kqnflqNzveR2ywZ6VhkJEO_rRsOwY3elMhl6Cf5x9wa71jzis9hGQfVKm9PIyBCLop95Ji2ndLNoZjZ9OGlJs_-XoUnvIg6yWHjZoSSOT2JHiZcK9yD6kB5OjIL-EseyyS-4jE"/>
                Sign in with Facebook
              </button>
            </div>

            {/* Footer */}
            <div className="mt-8 text-center">
              <p className="font-body-md text-body-md text-on-surface-variant">
                  Don't have an account?{' '}
                  <Link className="font-label-lg text-label-lg text-primary-container hover:text-primary transition-colors font-medium" to="/signup">Sign up</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
