import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuthSession } from '../hooks/useAuthSession';

export default function Signup() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const { isLoggedIn } = useAuthSession();

  const handleSignup = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    setError('');
    
    try {
      const res = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      });
      const data = await res.json();
      
      if (res.ok) {
        navigate('/login');
      } else {
        setError(data.error || 'Failed to sign up');
      }
    } catch (err) {
      setError('An error occurred. Please try again.');
    }
  };

  return (
    <div className="bg-background min-h-screen flex flex-col md:flex-row overflow-x-hidden">
      {/* Left Column (Branding) */}
      <div className="hidden md:flex flex-col justify-between bg-[#F3C41B] w-1/2 p-10 lg:p-16 relative overflow-hidden">
        {/* Top Left Logo */}
        <div className="z-10">
          <Link to={isLoggedIn ? "/dashboard" : "/"}>
             <span className="font-headline-md text-headline-md font-bold text-on-surface-text text-[#1A1A1A]">letsgoIELTS</span>
          </Link>
        </div>
        {/* Center 3D Trophy */}
        <div className="flex-grow flex items-center justify-center relative z-10 my-10">
          <img 
              alt="Brand Illustration" 
              className="max-w-[80%] max-h-[60vh] object-contain mix-blend-multiply" 
              src="/signup.svg" 
              style={{ opacity: 0.9, background: 'transparent', borderRadius: 0 }}
          />
        </div>
        {/* Bottom Center Quote */}
        <div className="z-10 text-center max-w-md mx-auto">
          <p className="font-title-lg text-title-lg text-on-surface-text text-[#1A1A1A]">Start your IELTS mastery today. Free tests, AI grading, and more!</p>
        </div>
      </div>

      {/* Right Column (Sign Up Form) */}
      <div className="w-full md:w-1/2 bg-surface-white flex flex-col justify-center min-h-screen p-6 sm:p-10 lg:p-16">
        {/* Mobile Logo */}
        <div className="md:hidden mb-8 text-center">
          <Link to={isLoggedIn ? "/dashboard" : "/"}>
              <span className="font-headline-md text-headline-md font-bold text-on-surface-text">letsgoIELTS</span>
          </Link>
        </div>

        <div className="w-full max-w-md mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="font-headline-lg text-headline-lg text-on-surface-text mb-2">Create an Account</h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant">Join letsgoIELTS and accelerate your progress.</p>
          </div>

          {error && (
            <div className="mb-4 p-3 rounded bg-error-container text-on-error-container text-body-md font-medium text-center">
              {error}
            </div>
          )}

          {/* Form */}
          <form className="space-y-5" onSubmit={handleSignup}>
            {/* Name Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="relative">
                <input className="block px-4 pb-2.5 pt-5 w-full text-body-lg text-on-surface bg-transparent rounded-lg border-2 border-outline appearance-none focus:outline-none focus:ring-0 focus:border-primary peer" id="firstName" placeholder=" " type="text"/>
                <label className="absolute text-label-lg text-on-surface-variant duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] bg-surface-white px-2 peer-focus:px-2 peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-4 peer-focus:scale-75 peer-focus:-translate-y-4 start-3 cursor-text" htmlFor="firstName">First Name</label>
              </div>
              <div className="relative">
                <input className="block px-4 pb-2.5 pt-5 w-full text-body-lg text-on-surface bg-transparent rounded-lg border-2 border-outline appearance-none focus:outline-none focus:ring-0 focus:border-primary peer" id="lastName" placeholder=" " type="text"/>
                <label className="absolute text-label-lg text-on-surface-variant duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] bg-surface-white px-2 peer-focus:px-2 peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-4 peer-focus:scale-75 peer-focus:-translate-y-4 start-3 cursor-text" htmlFor="lastName">Last Name</label>
              </div>
            </div>

            {/* Email */}
            <div className="relative">
              <div className="absolute inset-y-0 start-0 flex items-center ps-4 pointer-events-none text-on-surface-variant">
                <span className="material-symbols-outlined">mail</span>
              </div>
              <input className="block ps-11 pe-4 pb-2.5 pt-5 w-full text-body-lg text-on-surface bg-transparent rounded-lg border-2 border-outline appearance-none focus:outline-none focus:ring-0 focus:border-primary peer" id="email" placeholder=" " type="email" required value={email} onChange={(e) => setEmail(e.target.value)} />
              <label className="absolute text-label-lg text-on-surface-variant duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] bg-surface-white px-2 peer-focus:px-2 peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-4 peer-focus:scale-75 peer-focus:-translate-y-4 start-10 cursor-text" htmlFor="email">Email Address</label>
            </div>

            {/* Target Band Dropdown */}
            <div className="relative">
              <select className="block px-4 pb-2.5 pt-5 w-full text-body-lg text-on-surface bg-transparent rounded-lg border-2 border-outline appearance-none focus:outline-none focus:ring-0 focus:border-primary peer cursor-pointer" id="targetBand" defaultValue="">
                <option disabled hidden value=""></option>
                <option value="5.5">5.5</option>
                <option value="6.0">6.0</option>
                <option value="6.5">6.5</option>
                <option value="7.0">7.0</option>
                <option value="7.5">7.5</option>
                <option value="8.0+">8.0+</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 end-0 flex items-center px-4 text-on-surface-variant">
                <span className="material-symbols-outlined">expand_more</span>
              </div>
              <label className="absolute text-label-lg text-on-surface-variant duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] bg-surface-white px-2 peer-focus:px-2 peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-4 peer-focus:scale-75 peer-focus:-translate-y-4 start-3 cursor-text" htmlFor="targetBand">Your Target IELTS Band</label>
            </div>

            {/* Password */}
            <div>
              <div className="relative">
                <input className="block px-4 pe-11 pb-2.5 pt-5 w-full text-body-lg text-on-surface bg-transparent rounded-lg border-2 border-outline appearance-none focus:outline-none focus:ring-0 focus:border-primary peer" id="password" placeholder=" " type="password" required value={password} onChange={(e) => setPassword(e.target.value)} />
                <label className="absolute text-label-lg text-on-surface-variant duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] bg-surface-white px-2 peer-focus:px-2 peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-4 peer-focus:scale-75 peer-focus:-translate-y-4 start-3 cursor-text" htmlFor="password">Create Password</label>
                <button aria-label="Toggle password visibility" className="absolute inset-y-0 end-0 flex items-center pe-4 text-on-surface-variant hover:text-on-surface" type="button">
                  <span className="material-symbols-outlined">visibility_off</span>
                </button>
              </div>
              {/* Password Strength Indicator (Visual Only) */}
              <div className="mt-2 flex gap-1 h-1.5 w-full mb-5">
                <div className="h-full w-1/4 rounded-full bg-surface-dim"></div>
                <div className="h-full w-1/4 rounded-full bg-surface-dim"></div>
                <div className="h-full w-1/4 rounded-full bg-surface-dim"></div>
                <div className="h-full w-1/4 rounded-full bg-surface-dim"></div>
              </div>
              <div className="relative">
                <input className="block px-4 pe-11 pb-2.5 pt-5 w-full text-body-lg text-on-surface bg-transparent rounded-lg border-2 border-outline appearance-none focus:outline-none focus:ring-0 focus:border-primary peer" id="confirmPassword" placeholder=" " type="password" required value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                <label className="absolute text-label-lg text-on-surface-variant duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] bg-surface-white px-2 peer-focus:px-2 peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-4 peer-focus:scale-75 peer-focus:-translate-y-4 start-3 cursor-text" htmlFor="confirmPassword">Confirm Password</label>
              </div>
            </div>

            {/* Checkbox */}
            <div className="flex items-start gap-3 mt-4">
              <div className="flex items-center h-5">
                <input className="w-5 h-5 border-2 border-outline rounded text-primary focus:ring-primary bg-surface-white cursor-pointer" id="terms" type="checkbox"/>
              </div>
              <label className="font-body-md text-body-md text-on-surface-variant cursor-pointer" htmlFor="terms">
                  I agree to the <a className="text-primary hover:underline" href="#">Terms of Service</a> and <a className="text-primary hover:underline" href="#">Privacy Policy</a>
              </label>
            </div>

            {/* Primary CTA */}
            <button className="w-full h-12 bg-primary-container text-on-primary-container font-label-lg text-label-lg uppercase rounded-full hover:-translate-y-0.5 hover:shadow-md transition-all duration-200 mt-6" type="submit">
                Create Account
            </button>
          </form>

          {/* Divider */}
          <div className="flex items-center my-8">
            <div className="flex-1 border-t border-surface-variant"></div>
            <span className="px-4 font-label-lg text-label-lg text-outline">OR</span>
            <div className="flex-1 border-t border-surface-variant"></div>
          </div>

          {/* Social Sign Up */}
          <div className="space-y-4">
            <button className="w-full h-12 flex items-center justify-center gap-3 bg-surface-white border-2 border-outline rounded-full text-on-surface font-label-lg text-label-lg hover:-translate-y-0.5 hover:bg-surface-container-low hover:shadow-sm transition-all duration-200" type="button">
              {/* Placeholder for Google Icon */}
              <span className="w-5 h-5 rounded-full bg-surface-dim flex items-center justify-center text-[10px] text-on-surface-variant">G</span>
              Continue with Google
            </button>
            <button className="w-full h-12 flex items-center justify-center gap-3 bg-surface-white border-2 border-outline rounded-full text-on-surface font-label-lg text-label-lg hover:-translate-y-0.5 hover:bg-surface-container-low hover:shadow-sm transition-all duration-200" type="button">
              {/* Placeholder for Facebook Icon */}
              <span className="w-5 h-5 rounded bg-[#1877F2] text-white flex items-center justify-center text-[12px] font-bold">f</span>
              Continue with Facebook
            </button>
          </div>

          {/* Login Link */}
          <div className="mt-8 text-center font-body-md text-body-md text-on-surface-variant">
              Already have an account? <Link className="text-primary font-bold hover:underline" to="/login">Log in</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
