import { Link } from 'react-router-dom';
import { useAuthSession } from '../hooks/useAuthSession';

export default function Header() {
  const { isLoggedIn } = useAuthSession();

  return (
    <header className="fixed top-0 w-full h-[64px] z-50 shadow-[0px_2px_4px_rgba(0,0,0,0.08)] bg-surface dark:bg-surface-dim">
      <nav className="flex justify-between items-center px-6 md:px-margin-desktop w-full max-w-container-max mx-auto h-nav-height">
        <div className="flex items-center gap-8">
          <Link className="font-display-lg text-[32px] font-bold text-primary dark:text-primary-fixed-dim leading-none" to={isLoggedIn ? "/dashboard" : "/"}>letsgoIELTS</Link>
          <div className="hidden md:flex gap-6">
            <Link className="font-label-lg text-label-lg text-primary dark:text-primary-fixed-dim border-b-2 border-primary font-bold pb-1 transition-all active:scale-95 cursor-pointer" to="/">Home</Link>
            <span className="font-label-lg text-label-lg text-on-surface-variant dark:text-outline-variant font-medium nav-item-hover hover:text-primary cursor-pointer">Courses</span>
            <span className="font-label-lg text-label-lg text-on-surface-variant dark:text-outline-variant font-medium nav-item-hover hover:text-primary cursor-pointer">Library</span>
            <span className="font-label-lg text-label-lg text-on-surface-variant dark:text-outline-variant font-medium nav-item-hover hover:text-primary cursor-pointer">Events</span>
            <span className="font-label-lg text-label-lg text-on-surface-variant dark:text-outline-variant font-medium nav-item-hover hover:text-primary cursor-pointer">Contact</span>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="hidden lg:flex items-center bg-surface-container rounded-full px-4 py-2 border border-outline-variant">
            <span className="material-symbols-outlined text-outline mr-2">search</span>
            <input className="bg-transparent border-none focus:ring-0 text-body-md w-48 outline-none" placeholder="Search resources..." type="text"/>
          </div>
          <Link to="/login" className="text-primary font-bold px-4 py-2 hover:translate-y-[-2px] transition-transform">Login</Link>
          <Link to="/signup" className="bg-primary text-on-primary font-bold px-6 py-2 rounded-full hover:translate-y-[-2px] transition-transform active:scale-95 shadow-sm">Signup</Link>
        </div>
      </nav>
    </header>
  );
}
