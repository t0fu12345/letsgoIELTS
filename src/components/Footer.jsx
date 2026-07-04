export default function Footer() {
  return (
    <footer className="w-full min-h-[300px] bg-footer-background text-footer-on-surface">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter px-6 md:px-margin-desktop py-section-padding max-w-container-max mx-auto">
        <div className="flex flex-col gap-6">
          <div>
            <h2 className="font-display-lg text-[40px] font-black leading-tight">letsgoIELTS</h2>
            <p className="font-headline-md text-headline-md opacity-90 mt-[-8px]">the IELTS workshop</p>
          </div>
          <p className="font-body-md opacity-80 max-w-xs">Empowering the next generation of global citizens with language mastery and academic confidence.</p>
          <div className="flex gap-4">
            <a aria-label="Facebook" className="social-icon-box border-black" href="#">
              <span className="material-symbols-outlined">face_nod</span>
            </a>
            <a aria-label="Instagram" className="social-icon-box border-black" href="#">
              <span className="material-symbols-outlined">camera</span>
            </a>
            <a aria-label="YouTube" className="social-icon-box border-black" href="#">
              <span className="material-symbols-outlined">play_circle</span>
            </a>
            <a aria-label="Phone" className="social-icon-box border-black" href="#">
              <span className="material-symbols-outlined">call</span>
            </a>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <h3 className="font-headline-lg text-headline-lg mb-4 uppercase">ABOUT US</h3>
          <nav className="flex flex-col gap-3">
            <a className="text-footer-on-surface opacity-80 hover:opacity-100 transition-opacity font-body-md" href="#">Privacy Policy</a>
            <a className="text-footer-on-surface opacity-80 hover:opacity-100 transition-opacity font-body-md" href="#">Terms of Service</a>
            <a className="text-footer-on-surface opacity-80 hover:opacity-100 transition-opacity font-body-md" href="#">Cookie Policy</a>
            <a className="text-footer-on-surface opacity-80 hover:opacity-100 transition-opacity font-body-md" href="#">Careers</a>
          </nav>
        </div>
        <div className="flex flex-col gap-4">
          <h3 className="font-headline-lg text-headline-lg mb-4 uppercase">Contact</h3>
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined">mail</span>
              <span className="font-body-md">hello@letsgoielts.vn</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined">location_on</span>
              <span className="font-body-md">123 Learning Way, Education District</span>
            </div>
          </div>
          <div className="mt-8">
            <p className="font-body-md font-bold mb-2">Subscribe to our newsletter</p>
            <div className="flex">
              <input className="bg-white/20 border border-black/20 rounded-l-lg px-4 py-2 w-full focus:outline-none focus:bg-white/30 text-black placeholder:text-black/60 outline-none" placeholder="Email address" type="email"/>
              <button className="bg-black text-white px-4 py-2 rounded-r-lg font-bold">JOIN</button>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full border-t border-black/10 py-6 text-center">
        <p className="font-body-md opacity-60">© 2026 letsgoIELTS - the IELTS workshop</p>
      </div>
    </footer>
  );
}
