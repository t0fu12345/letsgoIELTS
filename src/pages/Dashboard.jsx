import React from 'react';
import { Link } from 'react-router-dom';
import Sidebar from '../components/Sidebar';

const Dashboard = () => {
  return (
    <div className="bg-surface text-on-surface min-h-screen flex">
      <Sidebar />
      {/* Main Content Area */}
      <main className="flex-1 md:ml-64 flex flex-col pb-20 md:pb-0">
        {/* Top App Bar */}
        <header className="sticky top-0 bg-surface/90 backdrop-blur-md z-30 shadow-sm h-nav-height flex items-center justify-between px-margin-mobile md:px-gutter">
          <h1 className="font-title-lg text-title-lg text-on-surface hidden md:block">Dashboard</h1>
          <div className="font-headline-md text-headline-md font-black text-primary md:hidden">letsgoIELTS</div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1 font-label-lg text-label-lg text-secondary-container bg-surface-container-highest px-3 py-1.5 rounded-full">
              <span className="text-lg leading-none">🔥</span>
              <span className="text-on-surface font-semibold">12 Days</span>
            </div>
            <button className="text-on-surface-variant hover:bg-surface-container-high p-2 rounded-full transition-colors hidden sm:block">
              <span className="material-symbols-outlined">notifications</span>
            </button>
            <img 
              alt="A smiling young student" 
              className="w-10 h-10 rounded-full object-cover border-2 border-surface-container-high cursor-pointer hover:border-primary transition-colors" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCtyMHkGLRlPs-2yDpjl1eyXfX5LR0VOWtuJ-gJvOG6kopoobAsWOx6GeYL9uWu-oaANbBnsIMbtpaohLgFiDuBkucpw-K8dg8z7-YcXlfD3BHNhOFvS54VnLq2C6gE10qfXbkHmjmH15wU-t3Ui1VUKuAgwQUaxqL6WsxMAGf08sOzWyhnGTX1yY13YVs5JBMGRwLQlL1XsTielmypKGTLAtxlzwefylQV1ildbGcecwc9pzDsT-7p6zjpfKHs2TwAZK7Metb8FD6y"
            />
          </div>
        </header>

        <div className="p-margin-mobile md:p-gutter max-w-container-max mx-auto w-full flex flex-col gap-section-padding">
          
          {/* Hero Banner */}
          <section className="relative bg-gradient-to-r from-primary to-primary-container rounded-[24px] shadow-sm overflow-hidden flex flex-col md:flex-row items-center justify-between p-8 md:p-10 text-on-primary group hover:-translate-y-1 transition-transform duration-300">
            {/* Background Mesh Decoration */}
            <div className="absolute top-0 right-0 w-full h-full opacity-20 pointer-events-none" style={{ backgroundImage: "radial-gradient(circle at top right, rgba(255,255,255,0.8) 0%, transparent 60%)" }}></div>
            
            <div className="relative z-10 flex-1 w-full md:w-auto">
              <h2 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg mb-2">Welcome back, Alex!</h2>
              <p className="font-body-lg text-body-lg text-primary-fixed-dim mb-6 md:mb-0">You are 70% closer to your target goal. Keep up the great work!</p>
            </div>
            
            <div className="relative z-10 flex items-center gap-6 w-full md:w-auto mt-6 md:mt-0">
              <img alt="Hero illustration" className="hidden lg:block h-32 w-auto object-contain" src="https://lh3.googleusercontent.com/aida/AP1WRLsVE6QIl2nsf6QPaVHhQehUASXdrt-TtYwrkwVAekawssHA69iolB8unk8Rz3XG6Ahi4z57ZE41dGXmfQiQtVGNamP3Rx3vOa6yweec3agJK1IFRDe5MTzcZT44fTm2m4DlZNKGcwweyJvimHMs72BvN_BFj1f9LTJnv28Fq5VYQdiPMS_EgJKF6nTKyd0VMmxlLfHFW2fMxmZ7URP6vteK_-qUFAzSmEgkSSTmZVoE7ltTsi8cRldc46e1" />
              <div className="bg-surface-white/10 backdrop-blur-md border border-surface-white/20 rounded-2xl p-6 w-full md:w-64">
                <div className="flex items-center justify-between mb-4">
                  <span className="font-title-lg text-title-lg font-semibold">Target: IELTS 7.0</span>
                  <span className="material-symbols-outlined text-secondary-container">flag</span>
                </div>
                <div className="w-full bg-surface-white/20 rounded-full h-2.5 mb-2 overflow-hidden">
                  <div className="bg-secondary-container h-2.5 rounded-full" style={{ width: '70%' }}></div>
                </div>
                <div className="text-right font-label-lg text-label-lg text-primary-fixed-dim">70% Ready</div>
              </div>
            </div>
          </section>

          {/* AI Analytics Grid */}
          <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Card 1: Skill Radar Chart */}
            <div className="bg-surface-white border border-outline-variant rounded-[16px] p-6 shadow-sm flex flex-col hover:-translate-y-1 transition-transform duration-300">
              <div className="flex items-center gap-2 mb-4">
                <span className="material-symbols-outlined text-primary">radar</span>
                <h3 className="font-title-lg text-title-lg text-on-surface">Skill Balance</h3>
              </div>
              <div className="flex-1 flex items-center justify-center relative min-h-[200px]">
                <svg className="max-w-[200px] overflow-visible" height="100%" viewBox="0 0 200 200" width="100%">
                  <polygon fill="none" points="100,20 180,100 100,180 20,100" stroke="#e1e3e4" strokeWidth="1"></polygon>
                  <polygon fill="none" points="100,40 160,100 100,160 40,100" stroke="#e1e3e4" strokeWidth="1"></polygon>
                  <polygon fill="none" points="100,60 140,100 100,140 60,100" stroke="#e1e3e4" strokeWidth="1"></polygon>
                  <polygon fill="rgba(28, 176, 246, 0.2)" points="100,40 160,100 100,140 50,100" stroke="#1cb0f6" strokeWidth="2"></polygon>
                  <text className="text-[10px] fill-on-surface-variant font-medium" textAnchor="middle" x="100" y="10">Reading</text>
                  <text className="text-[10px] fill-on-surface-variant font-medium" textAnchor="start" x="190" y="105">Listening</text>
                  <text className="text-[10px] fill-on-surface-variant font-medium" textAnchor="middle" x="100" y="195">Writing</text>
                  <text className="text-[10px] fill-on-surface-variant font-medium" textAnchor="end" x="10" y="105">Speaking</text>
                </svg>
              </div>
            </div>

            {/* Card 2: Estimated Band Scores */}
            <div className="bg-surface-white border border-outline-variant rounded-[16px] p-6 shadow-sm flex flex-col hover:-translate-y-1 transition-transform duration-300">
              <div className="flex items-center gap-2 mb-6">
                <span className="material-symbols-outlined text-primary">analytics</span>
                <h3 className="font-title-lg text-title-lg text-on-surface">Estimated Scores</h3>
              </div>
              <div className="grid grid-cols-2 gap-4 flex-1">
                <div className="bg-surface-container-low rounded-xl p-4 flex flex-col items-center justify-center relative">
                  <span className="font-label-lg text-label-lg text-on-surface-variant mb-1">Listening</span>
                  <span className="font-headline-md text-headline-md font-bold text-primary">6.5</span>
                </div>
                <div className="bg-surface-container-low rounded-xl p-4 flex flex-col items-center justify-center relative">
                  <span className="font-label-lg text-label-lg text-on-surface-variant mb-1">Reading</span>
                  <span className="font-headline-md text-headline-md font-bold text-primary">7.0</span>
                </div>
                <div className="bg-error-container/30 border border-error/20 rounded-xl p-4 flex flex-col items-center justify-center relative">
                  <span className="font-label-lg text-label-lg text-on-surface-variant mb-1">Writing</span>
                  <span className="font-headline-md text-headline-md font-bold text-error">6.0</span>
                  <div className="absolute -top-2 -right-2 bg-error text-on-error text-[10px] font-bold px-2 py-0.5 rounded-full shadow-sm">Needs focus</div>
                </div>
                <div className="bg-surface-container-low rounded-xl p-4 flex flex-col items-center justify-center relative">
                  <span className="font-label-lg text-label-lg text-on-surface-variant mb-1">Speaking</span>
                  <span className="font-headline-md text-headline-md font-bold text-primary">6.5</span>
                </div>
              </div>
            </div>

            {/* Card 3: Weekly Activity */}
            <div className="bg-surface-white border border-outline-variant rounded-[16px] p-6 shadow-sm flex flex-col hover:-translate-y-1 transition-transform duration-300 lg:col-span-1 md:col-span-2">
              <div className="flex items-center gap-2 mb-6">
                <span className="material-symbols-outlined text-primary">bar_chart</span>
                <h3 className="font-title-lg text-title-lg text-on-surface">Weekly Activity</h3>
              </div>
              <div className="flex-1 flex items-end justify-between gap-2 mt-auto h-[150px] pb-6 relative">
                {/* Bars */}
                {[{ h: '40%', l: 'M', bg: 'bg-primary-container/40' },
                  { h: '60%', l: 'T', bg: 'bg-primary-container/60' },
                  { h: '90%', l: 'W', bg: 'bg-primary' },
                  { h: '30%', l: 'T', bg: 'bg-primary-container/30' },
                  { h: '75%', l: 'F', bg: 'bg-primary-container/80' },
                  { h: '10%', l: 'S', bg: 'bg-surface-container-highest' },
                  { h: '5%', l: 'S', bg: 'bg-surface-container-highest' }
                ].map((bar, i) => (
                  <div key={i} className="w-full flex flex-col items-center gap-2">
                    <div className={`w-full ${bar.bg} rounded-t-sm`} style={{ height: bar.h }}></div>
                    <span className="text-xs text-on-surface-variant">{bar.l}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Up Next (AI Recommendations) */}
          <section className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-secondary-container" style={{ fontVariationSettings: "'FILL' 1" }}>bolt</span>
              <h2 className="font-headline-md text-headline-md text-on-surface">Recommended by AI</h2>
            </div>
            
            <div className="flex overflow-x-auto hide-scrollbar gap-4 pb-4 -mx-margin-mobile px-margin-mobile md:mx-0 md:px-0">
              {/* Card 1 */}
              <div className="min-w-[280px] md:min-w-[320px] bg-surface-white border-2 border-primary/20 rounded-[16px] p-6 shadow-sm flex flex-col gap-4 hover:shadow-md hover:-translate-y-1 hover:border-primary transition-all duration-300 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-bl-[100px] -z-0"></div>
                <div className="flex items-start justify-between relative z-10">
                  <div className="bg-error-container text-on-error-container p-2 rounded-lg">
                    <span className="material-symbols-outlined">edit_square</span>
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-error bg-error-container/50 px-2 py-1 rounded-full">High Priority</span>
                </div>
                <div className="relative z-10">
                  <h3 className="font-title-lg text-title-lg font-bold text-on-surface mb-1">Boost your Writing Task 2</h3>
                  <p className="font-body-md text-body-md text-on-surface-variant line-clamp-2">Focus on developing clear arguments and cohesive paragraph structures to improve from Band 6.0.</p>
                </div>
                <Link to="/writing" className="mt-auto bg-primary text-on-primary font-label-lg text-label-lg py-2.5 px-4 rounded-full w-full hover:bg-primary/90 transition-colors flex items-center justify-center gap-2">
                  Start Practice <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                </Link>
              </div>

              {/* Card 2 */}
              <div className="min-w-[280px] md:min-w-[320px] bg-surface-white border border-outline-variant rounded-[16px] p-6 shadow-sm flex flex-col gap-4 hover:shadow-md hover:-translate-y-1 hover:border-primary/50 transition-all duration-300">
                <div className="flex items-start justify-between">
                  <div className="bg-primary-container/20 text-primary p-2 rounded-lg">
                    <span className="material-symbols-outlined">headphones</span>
                  </div>
                </div>
                <div>
                  <h3 className="font-title-lg text-title-lg font-bold text-on-surface mb-1">Cambridge 18 - Listening Test 2</h3>
                  <p className="font-body-md text-body-md text-on-surface-variant line-clamp-2">Continue where you left off. This mock test targets multiple-choice question formats.</p>
                </div>
                <Link to="/listening" className="mt-auto border border-outline text-on-surface font-label-lg text-label-lg py-2.5 px-4 rounded-full w-full hover:bg-surface-container-high transition-colors text-center block">
                  Resume Test
                </Link>
              </div>
              
              {/* Card 3 */}
              <div className="min-w-[280px] md:min-w-[320px] bg-surface-white border border-outline-variant rounded-[16px] p-6 shadow-sm flex flex-col gap-4 hover:shadow-md hover:-translate-y-1 hover:border-primary/50 transition-all duration-300">
                <div className="flex items-start justify-between">
                  <div className="bg-secondary-container/30 text-on-secondary-container p-2 rounded-lg">
                    <span className="material-symbols-outlined">record_voice_over</span>
                  </div>
                </div>
                <div>
                  <h3 className="font-title-lg text-title-lg font-bold text-on-surface mb-1">Speaking Part 1 Review</h3>
                  <p className="font-body-md text-body-md text-on-surface-variant line-clamp-2">Work on your fluency and pronunciation with our AI interviewer.</p>
                </div>
                <Link to="/speaking" className="mt-auto text-primary border border-primary/20 font-label-lg text-label-lg py-2.5 px-4 rounded-full w-full hover:bg-primary/10 transition-colors text-center block">
                  Start Speaking
                </Link>
              </div>
              
              {/* Card 4 */}
              <div className="min-w-[280px] md:min-w-[320px] bg-surface-white border border-outline-variant rounded-[16px] p-6 shadow-sm flex flex-col gap-4 hover:shadow-md hover:-translate-y-1 hover:border-primary/50 transition-all duration-300">
                <div className="flex items-start justify-between">
                  <div className="bg-primary/20 text-primary p-2 rounded-lg">
                    <span className="material-symbols-outlined">auto_stories</span>
                  </div>
                </div>
                <div>
                  <h3 className="font-title-lg text-title-lg font-bold text-on-surface mb-1">Reading Practice</h3>
                  <p className="font-body-md text-body-md text-on-surface-variant line-clamp-2">Improve your skimming and scanning skills with an interactive passage.</p>
                </div>
                <Link to="/reading" className="mt-auto text-primary border border-primary/20 font-label-lg text-label-lg py-2.5 px-4 rounded-full w-full hover:bg-primary/10 transition-colors text-center block">
                  Start Reading
                </Link>
              </div>

            </div>
          </section>

          {/* Recent Tests List */}
          <section className="flex flex-col gap-4">
            <h2 className="font-headline-md text-headline-md text-on-surface">Recent Tests</h2>
            <div className="bg-surface-white border border-outline-variant rounded-[16px] overflow-hidden flex flex-col">
              
              {/* List Item 1 */}
              <div className="flex items-center justify-between p-4 md:p-6 border-b border-surface-container hover:bg-surface-container-lowest transition-colors group cursor-pointer">
                <div className="flex items-center gap-4">
                  <div className="bg-surface-container p-3 rounded-full hidden md:block">
                    <span className="material-symbols-outlined text-on-surface-variant">assignment</span>
                  </div>
                  <div>
                    <h4 className="font-title-lg text-[18px] font-semibold text-on-surface">IELTS Mock Test #4</h4>
                    <p className="font-body-md text-body-md text-on-surface-variant">2 days ago</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 md:gap-8">
                  <div className="text-right">
                    <div className="font-body-md text-[12px] text-on-surface-variant">Overall</div>
                    <div className="font-headline-md text-[20px] font-bold text-primary">6.5</div>
                  </div>
                  <button className="hidden md:flex items-center gap-1 text-primary font-label-lg hover:underline opacity-0 group-hover:opacity-100 transition-opacity">
                    View AI Feedback <span className="material-symbols-outlined text-[16px]">chevron_right</span>
                  </button>
                </div>
              </div>

              {/* List Item 2 */}
              <div className="flex items-center justify-between p-4 md:p-6 border-b border-surface-container hover:bg-surface-container-lowest transition-colors group cursor-pointer">
                <div className="flex items-center gap-4">
                  <div className="bg-surface-container p-3 rounded-full hidden md:block">
                    <span className="material-symbols-outlined text-on-surface-variant">assignment</span>
                  </div>
                  <div>
                    <h4 className="font-title-lg text-[18px] font-semibold text-on-surface">Reading Practice Set A</h4>
                    <p className="font-body-md text-body-md text-on-surface-variant">5 days ago</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 md:gap-8">
                  <div className="text-right">
                    <div className="font-body-md text-[12px] text-on-surface-variant">Score</div>
                    <div className="font-headline-md text-[20px] font-bold text-primary">7.0</div>
                  </div>
                  <button className="hidden md:flex items-center gap-1 text-primary font-label-lg hover:underline opacity-0 group-hover:opacity-100 transition-opacity">
                    View AI Feedback <span className="material-symbols-outlined text-[16px]">chevron_right</span>
                  </button>
                </div>
              </div>

              {/* List Item 3 */}
              <div className="flex items-center justify-between p-4 md:p-6 hover:bg-surface-container-lowest transition-colors group cursor-pointer">
                <div className="flex items-center gap-4">
                  <div className="bg-surface-container p-3 rounded-full hidden md:block">
                    <span className="material-symbols-outlined text-on-surface-variant">assignment</span>
                  </div>
                  <div>
                    <h4 className="font-title-lg text-[18px] font-semibold text-on-surface">Writing Task 1 - Bar Chart</h4>
                    <p className="font-body-md text-body-md text-on-surface-variant">1 week ago</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 md:gap-8">
                  <div className="text-right">
                    <div className="font-body-md text-[12px] text-on-surface-variant">Score</div>
                    <div className="font-headline-md text-[20px] font-bold text-error">6.0</div>
                  </div>
                  <button className="hidden md:flex items-center gap-1 text-primary font-label-lg hover:underline opacity-0 group-hover:opacity-100 transition-opacity">
                    View AI Feedback <span className="material-symbols-outlined text-[16px]">chevron_right</span>
                  </button>
                </div>
              </div>

            </div>
          </section>

        </div>
      </main>
    </div>
  );
};

export default Dashboard;
