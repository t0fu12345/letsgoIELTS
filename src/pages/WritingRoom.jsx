import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const WritingRoom = () => {
  const [text, setText] = useState('');
  
  const words = text.trim() ? text.trim().split(/\s+/).length : 0;
  const isGoalReached = words >= 250;

  return (
    <div className="bg-background h-screen overflow-hidden flex flex-col font-body-md text-body-md text-on-surface">
      {/* TopNavBar */}
      <header className="shadow-sm bg-surface elevation-1 fixed top-0 left-0 w-full h-nav-height z-50 flex justify-between items-center px-4 md:px-gutter mx-auto shrink-0">
        <div className="flex items-center gap-4">
          <Link to="/dashboard" className="p-2 rounded-full hover:bg-surface-variant transition-colors group flex items-center justify-center">
            <span className="material-symbols-outlined text-on-surface group-hover:text-primary transition-colors">arrow_back</span>
          </Link>
          <span className="text-title-lg font-headline-lg text-primary font-bold hidden sm:inline-block">IELTS Academic Writing - Task 2</span>
        </div>
        
        {/* Timer */}
        <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center gap-2">
          <span className="material-symbols-outlined text-on-surface-variant" style={{ fontVariationSettings: "'FILL' 0" }}>timer</span>
          <span className="font-headline-md text-headline-md font-semibold tracking-wide">40:00</span>
        </div>

        {/* Target Badge & Submit */}
        <div className="flex items-center gap-6">
          <div className="flex flex-col items-end hidden md:flex">
            <span className="text-label-lg font-label-lg text-on-surface-variant">Target: 7.0</span>
          </div>
          <button className="bg-primary-container text-on-primary-container px-6 py-2.5 rounded-full font-label-lg text-label-lg uppercase tracking-wider hover:translate-y-[-2px] transition-transform duration-200 shadow-sm flex items-center gap-2">
            SUBMIT TO AI
          </button>
        </div>
      </header>

      {/* Main Workspace (Split Screen) */}
      <main className="flex-1 flex flex-col md:flex-row mt-nav-height h-[calc(100vh-64px)] w-full relative">
        
        {/* Left Column: Prompt Panel (40%) */}
        <section className="w-full md:w-[40%] bg-surface border-r border-outline-variant h-1/2 md:h-full overflow-y-auto p-6 md:p-8 lg:p-12">
          <div className="max-w-2xl mx-auto">
            <div className="mb-6 flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-secondary-container flex items-center justify-center">
                <span className="material-symbols-outlined text-on-secondary-container" style={{ fontVariationSettings: "'FILL' 1" }}>assignment</span>
              </div>
              <h2 className="text-title-lg font-headline-md font-semibold text-primary">Task 2 Prompt</h2>
            </div>
            <div className="text-on-surface-text text-[16px] md:text-[18px] leading-[1.6] space-y-4">
              <p>
                <strong>You should spend about 40 minutes on this task.</strong>
              </p>
              <p>
                Write about the following topic:
              </p>
              <div className="p-6 bg-surface-container-low rounded-xl border border-surface-variant shadow-sm my-6">
                <p className="font-medium italic text-on-surface">
                  "Some people believe that unpaid community service should be a compulsory part of high school programmes (for example working for a charity, improving the neighbourhood or teaching sports to younger children)."
                </p>
                <p className="mt-4 font-medium text-on-surface">
                  To what extent do you agree or disagree?
                </p>
              </div>
              <p>
                Give reasons for your answer and include any relevant examples from your own knowledge or experience.
              </p>
              <p className="font-bold">
                Write at least 250 words.
              </p>
            </div>
          </div>
        </section>

        {/* Right Column: Editor Panel (60%) */}
        <section className="w-full md:w-[60%] bg-surface-white relative h-1/2 md:h-full flex flex-col">
          <textarea 
            className="flex-1 w-full resize-none outline-none border-none font-body-lg text-body-lg text-on-surface-text p-6 md:p-8 overflow-y-auto hover:scrollbar-thumb-outline-variant hover:scrollbar-track-transparent"
            placeholder="Start writing here... Focus on your thoughts, not formatting." 
            spellCheck="false"
            value={text}
            onChange={(e) => setText(e.target.value)}
            style={{ lineHeight: 1.8 }}
          ></textarea>
          
          {/* Floating Word Count */}
          <div className={`absolute bottom-6 right-8 px-4 py-2 rounded-full shadow-sm flex items-center gap-2 border transition-colors duration-300 ${isGoalReached ? 'bg-[#E6F4EA] border-[#14AE5C]' : 'bg-surface-container-high border-surface-variant'}`}>
            <span className={`material-symbols-outlined text-[18px] ${isGoalReached ? 'text-[#14AE5C]' : 'text-on-surface-variant'}`}>edit_document</span>
            <span className={`font-label-lg text-label-lg font-medium ${isGoalReached ? 'text-[#14AE5C]' : 'text-on-surface-variant'}`}>
              Word count: {words} / 250
            </span>
          </div>
        </section>

      </main>
    </div>
  );
};

export default WritingRoom;
