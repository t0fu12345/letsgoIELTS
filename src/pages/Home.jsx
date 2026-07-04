import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Home() {
  useEffect(() => {
    // Smooth scroll and micro-interactions
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if(targetId && targetId !== '#') {
               const targetElement = document.querySelector(targetId);
               if(targetElement) {
                   targetElement.scrollIntoView({ behavior: 'smooth' });
               }
            }
        });
    });

    // Simple visibility observer for scroll animations
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('opacity-100', 'translate-y-0');
                entry.target.classList.remove('opacity-0', 'translate-y-10');
            }
        });
    }, observerOptions);

    document.querySelectorAll('.elevated-card').forEach(card => {
        card.classList.add('transition-all', 'duration-700', 'opacity-0', 'translate-y-10');
        observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-background text-on-surface font-body-md overflow-x-hidden">
      <Header />
      <main className="mt-[64px]">
        {/* Hero Section */}
        <section className="relative min-h-[819px] flex flex-col items-center justify-center px-margin-mobile md:px-0 py-section-padding overflow-hidden">
          <div className="absolute inset-0 z-0 opacity-10"></div>
          <div className="relative z-10 text-center max-w-4xl mx-auto w-full">
            <div className="mb-12 md:mb-16 flex justify-center w-full max-w-2xl mx-auto px-4">
              <div className="logo-container scale-50 sm:scale-75 md:scale-100 origin-center py-8">
                <div className="static-group">
                  <span className="static-lets primary-text">lets</span>
                  <span className="static-go accent-text">go</span>
                </div>
                <div className="ielts-slot secondary-text">
                  <span className="char char-i">I</span>
                  <span className="char char-e">E</span>
                  <span className="char char-l">L</span>
                  <span className="char char-t">T</span>
                  <span className="char char-s">S</span>
                </div>
              </div>
            </div>
            <div className="elevated-card bg-surface-white/80 backdrop-blur-md p-8 md:p-12 rounded-xl max-w-3xl mx-auto border border-surface-container-highest shadow-lg">
              <p className="font-headline-md text-headline-md italic text-primary leading-relaxed">
                  "Mastering IELTS is not a destination, it's a journey. Let's go together!"
              </p>
              <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
                <Link to="/login" className="bg-primary text-on-primary px-8 py-4 rounded-lg font-bold text-lg hover:translate-y-[-2px] transition-all active:scale-95 uppercase text-center">START LEARNING FREE</Link>
                <button className="border-2 border-primary text-primary px-8 py-4 rounded-lg font-bold text-lg hover:translate-y-[-2px] transition-all active:scale-95 uppercase">EXPLORE COURSES</button>
              </div>
            </div>
          </div>
        </section>

        {/* Feature Section */}
        <section className="bg-surface-container-low py-section-padding">
          <div className="max-w-container-max mx-auto px-6 md:px-margin-desktop">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter">
              {/* Feature Card 1 */}
              <div className="elevated-card relative bg-surface-white p-8 rounded-xl h-64 flex flex-col justify-end overflow-visible group">
                <span className="feature-watermark group-hover:text-primary-container transition-colors">01</span>
                <div className="relative z-10">
                  <span className="material-symbols-outlined text-primary text-4xl mb-4 block">assignment</span>
                  <h3 className="font-title-lg text-title-lg text-on-surface">Free IELTS Test</h3>
                </div>
              </div>
              {/* Feature Card 2 */}
              <div className="elevated-card relative bg-surface-white p-8 rounded-xl h-64 flex flex-col justify-end overflow-visible group">
                <span className="feature-watermark group-hover:text-primary-container transition-colors">02</span>
                <div className="relative z-10">
                  <span className="material-symbols-outlined text-primary text-4xl mb-4 block">psychology</span>
                  <h3 className="font-title-lg text-title-lg text-on-surface">Lộ trình học IELTS tối ưu bằng AI</h3>
                </div>
              </div>
              {/* Feature Card 3 */}
              <div className="elevated-card relative bg-surface-white p-8 rounded-xl h-64 flex flex-col justify-end overflow-visible group">
                <span className="feature-watermark group-hover:text-primary-container transition-colors">03</span>
                <div className="relative z-10">
                  <span className="material-symbols-outlined text-primary text-4xl mb-4 block">record_voice_over</span>
                  <h3 className="font-title-lg text-title-lg text-on-surface">Luyện nói & sửa lỗi trực tiếp với AI</h3>
                </div>
              </div>
              {/* Feature Card 4 */}
              <div className="elevated-card relative bg-surface-white p-8 rounded-xl h-64 flex flex-col justify-end overflow-visible group">
                <span className="feature-watermark group-hover:text-primary-container transition-colors">04</span>
                <div className="relative z-10">
                  <span className="material-symbols-outlined text-primary text-4xl mb-4 block">school</span>
                  <h3 className="font-title-lg text-title-lg text-on-surface">Phòng thi thử ảo chấm điểm ngay</h3>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-section-padding bg-surface-white">
          <div className="max-w-container-max mx-auto px-6 md:px-margin-desktop grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1">
              <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-video">
                <img className="w-full h-full object-cover" alt="A modern IELTS classroom setting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDzrLGB_6TyOlV7UUVahdaz2bF08xupv9wIWUKi2JFfiLxpzaCAYvq_L2HLsIYTX1N3XT7KOuHyvF8pTo-xfb0Xd-qnrMPBA_a3C-Zs3opNOxGOpJ51a2UdGg-5hnpBJ6NmaSbMluhJrLyJ6NLOCIscHj1UZ7rep_NowRhKDoUJDyGPBVcrY8C9XCS5vHtEc9O4TPbXYLAuHZDEbpGbHNEsEqKRnpGuSiLWsBI_4Fx2bsch7gqljFmyYtkgzr4sxhlmdFfzMBRub11X" />
              </div>
            </div>
            <div className="order-1 md:order-2">
              <h2 className="font-headline-lg text-headline-lg mb-6">Why students trust letsgoIELTS</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary-container p-2 rounded-lg">
                    <span className="material-symbols-outlined text-on-primary-container">verified</span>
                  </div>
                  <div>
                    <h4 className="font-title-lg text-title-lg mb-1">98% Success Rate</h4>
                    <p className="font-body-md text-on-surface-variant">Our students consistently achieve 7.0+ overall scores within 3 months of focused study.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-secondary-container p-2 rounded-lg">
                    <span className="material-symbols-outlined text-on-secondary-container">auto_fix_high</span>
                  </div>
                  <div>
                    <h4 className="font-title-lg text-title-lg mb-1">AI-Powered Correction</h4>
                    <p className="font-body-md text-on-surface-variant">Get instant, detailed feedback on your writing and speaking that mimics official examiner criteria.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-tertiary-container p-2 rounded-lg">
                    <span className="material-symbols-outlined text-on-tertiary-container">support_agent</span>
                  </div>
                  <div>
                    <h4 className="font-title-lg text-title-lg mb-1">Expert Mentorship</h4>
                    <p className="font-body-md text-on-surface-variant">Access to certified IELTS examiners and 8.5+ tutors for weekly Q&A sessions.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
