import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ListeningRoom = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [playbackRate, setPlaybackRate] = useState(1.0);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const cycleSpeed = () => {
    const speeds = [1.0, 1.25, 1.5];
    const currentIndex = speeds.indexOf(playbackRate);
    setPlaybackRate(speeds[(currentIndex + 1) % speeds.length]);
  };

  return (
    <div className="bg-background text-on-surface font-body-lg min-h-screen">
      {/* Top Navigation */}
      <header className="fixed top-0 left-0 w-full h-nav-height z-50 flex justify-between items-center px-4 md:px-margin-desktop bg-surface dark:bg-surface-dim shadow-sm elevation-1">
        <div className="flex items-center gap-4 max-w-[800px] w-full mx-auto justify-between">
          <Link to="/dashboard" className="p-2 rounded-full hover:bg-surface-container-high transition-colors flex items-center justify-center text-primary dark:text-primary-fixed">
            <span className="material-symbols-outlined">arrow_back</span>
          </Link>
          <div className="text-title-lg font-headline-lg text-primary dark:text-primary-fixed-dim">
            letsgoIELTS
          </div>
          <div className="flex items-center gap-4">
            <span className="text-label-lg font-label-lg px-3 py-1 bg-surface-container-high rounded-full border border-outline-variant hidden sm:inline-block">
              Target: 7.0
            </span>
            <button className="bg-primary text-on-primary text-label-lg font-label-lg px-6 py-2 rounded-full uppercase hover:-translate-y-0.5 transition-transform duration-200 shadow-sm flex items-center gap-2">
              SUBMIT TO AI
            </button>
          </div>
        </div>
      </header>

      <main className="pt-[calc(64px+32px)] pb-section-padding px-4 md:px-0">
        {/* Focused Centered Layout */}
        <div className="max-w-[800px] w-full mx-auto relative flex flex-col gap-8">
          
          {/* Sticky Audio Player */}
          <div className="sticky top-[80px] z-40 bg-surface-container-lowest rounded-xl shadow-[0_2px_4px_rgba(0,0,0,0.08)] border border-surface-variant p-4 flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <button 
                  onClick={togglePlay}
                  className="w-12 h-12 rounded-full bg-primary-container text-on-primary-container flex items-center justify-center hover:-translate-y-0.5 transition-transform shadow-sm"
                >
                  <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>
                    {isPlaying ? 'pause' : 'play_arrow'}
                  </span>
                </button>
                <div>
                  <div className="font-title-lg text-title-lg text-on-surface">Practice Test 4 - Section 1</div>
                  <div className="text-body-md font-body-md text-on-surface-variant">00:00 / 06:45</div>
                </div>
              </div>
              <div className="relative">
                <button onClick={cycleSpeed} className="flex items-center gap-1 px-3 py-1.5 rounded border border-outline-variant text-label-lg font-label-lg text-on-surface-variant hover:bg-surface-container-low transition-colors">
                  {playbackRate.toFixed(2)}x <span className="material-symbols-outlined text-[18px]">expand_more</span>
                </button>
              </div>
            </div>
            {/* Progress Bar */}
            <div className="w-full h-2 bg-surface-container-highest rounded-full overflow-hidden cursor-pointer">
              <div className="h-full bg-primary-container relative" style={{ width: '20%' }}>
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-surface-container-lowest rounded-full shadow-sm border border-outline-variant hidden"></div>
              </div>
            </div>
          </div>

          {/* Question Area */}
          <div className="flex flex-col gap-8">
            {/* Section 1 Card */}
            <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-6 md:p-8 relative overflow-hidden">
              {/* Ghost Index */}
              <div className="absolute bottom-4 right-4 text-index-bg font-index-bg text-index-number-gray opacity-30 select-none z-0">
                01
              </div>
              <div className="relative z-10">
                <h2 className="text-headline-md font-headline-md text-primary mb-6">Questions 1-10</h2>
                <p className="text-body-lg font-body-lg mb-6 italic text-on-surface-variant">Complete the notes below. Write ONE WORD AND/OR A NUMBER for each answer.</p>
                
                <div className="bg-surface-container-low p-6 rounded-lg border border-surface-variant">
                  <h3 className="text-title-lg font-title-lg mb-4 text-center">Flanders Conference Centre</h3>
                  
                  <div className="grid gap-6">
                    <div className="flex flex-col sm:flex-row sm:items-baseline gap-2">
                      <span className="font-label-lg text-label-lg w-32 shrink-0">Customer:</span>
                      <span className="text-body-lg font-body-lg">
                        Andrew 
                        <span className="inline-flex items-center gap-2 ml-2">
                          <span className="text-label-lg font-label-lg text-primary w-6 text-right">1</span>
                          <input className="border-b-2 border-x-0 border-t-0 border-outline bg-transparent focus:ring-0 focus:border-primary px-2 py-1 w-48 text-body-lg font-body-lg text-on-surface" tabIndex="1" type="text" />
                        </span>
                      </span>
                    </div>
                    
                    <div className="flex flex-col sm:flex-row sm:items-baseline gap-2">
                      <span className="font-label-lg text-label-lg w-32 shrink-0">Company:</span>
                      <span className="text-body-lg font-body-lg">
                        Herald 
                        <span className="inline-flex items-center gap-2 ml-2">
                          <span className="text-label-lg font-label-lg text-primary w-6 text-right">2</span>
                          <input className="border-b-2 border-x-0 border-t-0 border-outline bg-transparent focus:ring-0 focus:border-primary px-2 py-1 w-48 text-body-lg font-body-lg text-on-surface" tabIndex="2" type="text" />
                        </span>
                      </span>
                    </div>

                    <div className="flex flex-col sm:flex-row sm:items-baseline gap-2">
                      <span className="font-label-lg text-label-lg w-32 shrink-0">Address:</span>
                      <span className="text-body-lg font-body-lg">
                        Room 5, 23 
                        <span className="inline-flex items-center gap-2 mx-2">
                          <span className="text-label-lg font-label-lg text-primary w-6 text-right">3</span>
                          <input className="border-b-2 border-x-0 border-t-0 border-outline bg-transparent focus:ring-0 focus:border-primary px-2 py-1 w-48 text-body-lg font-body-lg text-on-surface" tabIndex="3" type="text" />
                        </span> 
                        Road, London
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Transcript Toggle */}
          <div className="mt-4 flex justify-center">
            <button className="flex items-center gap-2 text-primary font-label-lg text-label-lg hover:underline p-2">
              <span className="material-symbols-outlined">visibility</span>
              View Transcript
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ListeningRoom;
