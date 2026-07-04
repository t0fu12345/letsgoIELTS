import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SpeakingRoom = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [status, setStatus] = useState('listening'); // 'listening', 'recording', 'analyzing'
  const [subtitle, setSubtitle] = useState("Part 1: Let's talk about your hometown. Where is your hometown located?");

  const toggleRecording = () => {
    if (isRecording) {
      setIsRecording(false);
      setStatus('analyzing');
      
      // Simulate processing
      setTimeout(() => {
        setStatus('listening');
        setSubtitle("What do you like most about living there?");
      }, 3000);
    } else {
      setIsRecording(true);
      setStatus('recording');
    }
  };

  return (
    <div className="bg-surface text-on-surface font-body-md min-h-screen flex flex-col overflow-hidden">
      {/* Top App Bar - Minimal for focused task */}
      <header className="w-full h-nav-height flex justify-between items-center px-4 md:px-margin-desktop max-w-container-max mx-auto z-50">
        <Link to="/dashboard" aria-label="Go back" className="w-12 h-12 flex items-center justify-center rounded-full hover:bg-surface-variant transition-colors text-on-surface-variant">
          <span className="material-symbols-outlined text-[24px]">arrow_back</span>
        </Link>
        <div className="text-title-lg font-title-lg text-primary">
          Speaking Room
        </div>
        <div className="w-12 h-12"></div> {/* Spacer for centering */}
      </header>

      {/* Main Content Canvas */}
      <main className="flex-grow flex flex-col items-center justify-center px-margin-mobile relative">
        {/* Interactive AI Interviewer Visual */}
        <div className="flex-grow flex flex-col items-center justify-center w-full max-w-2xl gap-8">
          
          {/* Waveform Container */}
          <div className="relative w-60 h-60 flex items-center justify-center mb-8">
            {status !== 'recording' && (
              <>
                <div className="absolute w-full h-full rounded-full border-2 border-primary-container opacity-0 animate-[pulse_2s_ease-out_infinite]" style={{ animationDelay: '0s' }}></div>
                <div className="absolute w-full h-full rounded-full border-2 border-primary-container opacity-0 animate-[pulse_2s_ease-out_infinite]" style={{ animationDelay: '0.5s' }}></div>
                <div className="absolute w-full h-full rounded-full border-2 border-primary-container opacity-0 animate-[pulse_2s_ease-out_infinite]" style={{ animationDelay: '1s' }}></div>
              </>
            )}
            
            <div className="w-[120px] h-[120px] bg-gradient-to-br from-primary to-primary-container rounded-full relative z-10 shadow-[0_4px_20px_rgba(28,176,246,0.4)] flex items-center justify-center">
              <span className="material-symbols-outlined text-white text-[48px]" style={{ fontVariationSettings: "'FILL' 1" }}>graphic_eq</span>
            </div>
          </div>

          {/* Subtitle Panel */}
          <div className="w-full text-center min-h-[100px] flex items-center justify-center px-4">
            <h2 
              className="text-headline-md font-headline-md text-on-surface-text max-w-xl transition-opacity duration-300"
              style={{ opacity: status === 'recording' ? 0.5 : 1 }}
            >
              "{subtitle}"
            </h2>
          </div>

          {/* Contextual Status */}
          <div className={`text-label-lg font-label-lg h-6 flex items-center space-x-2 opacity-80 ${status === 'recording' ? 'text-error' : 'text-primary-container'}`}>
            {status === 'recording' && (
              <>
                <span className="w-2 h-2 rounded-full bg-error animate-pulse"></span>
                <span>Recording...</span>
              </>
            )}
            {status === 'listening' && (
              <>
                <span className="w-2 h-2 rounded-full bg-primary-container animate-pulse"></span>
                <span>AI is listening...</span>
              </>
            )}
            {status === 'analyzing' && (
              <>
                <span className="material-symbols-outlined text-[16px] animate-spin">sync</span>
                <span>AI is analyzing your pronunciation...</span>
              </>
            )}
          </div>
        </div>

        {/* Recording Controls */}
        <div className="pb-12 pt-8 w-full flex flex-col items-center justify-center">
          <button 
            aria-label="Start Recording" 
            onClick={toggleRecording}
            className={`w-20 h-20 rounded-full flex items-center justify-center shadow-[0_4px_8px_rgba(0,0,0,0.1)] transition-all duration-300 ${
              isRecording 
                ? 'bg-error border-none rounded-[24px] scale-90' 
                : 'bg-white border-4 border-error'
            }`}
          >
            <span 
              className="material-symbols-outlined text-[36px] transition-colors duration-300" 
              style={{ fontVariationSettings: "'FILL' 1", color: isRecording ? 'white' : '#ba1a1a' }}
            >
              {isRecording ? 'stop' : 'mic'}
            </span>
          </button>
          <p className="text-label-lg font-label-lg text-on-surface-variant mt-4">Tap to record</p>
        </div>
      </main>
    </div>
  );
};

export default SpeakingRoom;
