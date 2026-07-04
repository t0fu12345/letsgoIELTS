import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

const ReadingRoom = () => {
  const [leftWidth, setLeftWidth] = useState(50);
  const isResizing = useRef(false);

  const startResizing = React.useCallback((e) => {
    isResizing.current = true;
    document.body.style.cursor = 'col-resize';
    document.body.style.userSelect = 'none';
  }, []);

  const stopResizing = React.useCallback(() => {
    if (isResizing.current) {
      isResizing.current = false;
      document.body.style.cursor = 'default';
      document.body.style.userSelect = 'auto';
    }
  }, []);

  const resize = React.useCallback((e) => {
    if (isResizing.current) {
      const containerWidth = document.body.clientWidth;
      if (e.clientX > containerWidth * 0.2 && e.clientX < containerWidth * 0.8) {
        setLeftWidth((e.clientX / containerWidth) * 100);
      }
    }
  }, []);

  useEffect(() => {
    window.addEventListener('mousemove', resize);
    window.addEventListener('mouseup', stopResizing);
    return () => {
      window.removeEventListener('mousemove', resize);
      window.removeEventListener('mouseup', stopResizing);
    };
  }, [resize, stopResizing]);

  return (
    <div className="bg-background text-on-surface h-screen overflow-hidden flex flex-col">
      {/* TopNavBar */}
      <header className="bg-surface dark:bg-surface-dim shadow-sm elevation-1 fixed top-0 left-0 w-full h-nav-height z-50 flex justify-between items-center px-4 md:px-margin-desktop max-w-container-max mx-auto">
        <div className="flex items-center gap-4">
          <Link to="/dashboard" className="p-2 hover:bg-surface-container-highest rounded-full transition-colors flex items-center justify-center">
            <span className="material-symbols-outlined text-on-surface-variant">arrow_back</span>
          </Link>
          <h1 className="text-title-lg font-headline-lg text-primary dark:text-primary-fixed-dim">Cambridge 18 - Reading Test 1</h1>
        </div>
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2 text-error font-bold text-headline-md font-headline-md">
            <span className="material-symbols-outlined">timer</span>
            <span>60:00</span>
          </div>
          <div className="hidden md:flex items-center gap-4">
            <span className="text-label-lg font-label-lg text-on-surface-variant bg-surface-container-high px-3 py-1 rounded-full">Target: 7.0</span>
            <button className="bg-primary-container text-on-primary-container px-6 py-2 rounded-full font-label-lg text-label-lg font-bold hover:translate-y-[-2px] transition-transform duration-200 uppercase shadow-sm">
              SUBMIT TO AI
            </button>
          </div>
        </div>
      </header>

      {/* Main Split Workspace */}
      <main className="flex h-[calc(100vh-64px)] mt-nav-height w-full max-w-container-max mx-auto overflow-hidden">
        {/* Left Panel: Passage */}
        <div 
          className="h-full bg-surface-container-lowest overflow-y-auto p-6 md:p-10 relative" 
          style={{ width: `${leftWidth}%` }}
        >
          <h2 className="text-headline-md font-headline-md text-on-surface mb-6">Urban Farming: A New Era of Agriculture</h2>
          <div className="font-serif text-[16px] leading-[1.8] text-on-surface-variant space-y-6">
            <p><strong>A.</strong> The concept of indoor farming is not new, since hothouse production of tomatoes and other produce has been in vogue for some time. What is new is the urgent need to scale up this technology to accommodate another three billion people. Many believe an entirely new approach to indoor farming is required, employing cutting-edge technologies. One such proposal is for the 'Vertical Farm'. The concept is of multi-storey buildings in which food crops are grown in environmentally controlled conditions. Situated in the heart of urban centres, they would drastically reduce the amount of transportation required to bring food to consumers.</p>
            <p><strong>B.</strong> Proponents claim that vertical farms offer many potential advantages for the environment and society. For instance, crops would be produced all year round, as they would be kept in artificially controlled, optimum growing conditions. There would be no weather-related crop failures due to droughts, floods or pests. All the food could be grown organically, eliminating the need for herbicides, pesticides and fertilisers. The system would also greatly reduce the incidence of many infectious diseases that are acquired at the agricultural interface.</p>
            <p><strong>C.</strong> However, a major drawback of vertical farming is the cost of the artificial lighting required. In a multi-storey building, natural sunlight cannot reach all the plants, necessitating the use of energy-intensive grow lights. While LED technology is improving efficiency, the sheer scale of energy required for a large vertical farm remains a significant hurdle. Furthermore, the initial capital investment to construct these high-tech facilities is immense, making it difficult for such projects to be economically viable in the short term without substantial subsidies.</p>
          </div>
        </div>

        {/* Draggable Divider */}
        <div 
          className="w-2 bg-surface-variant cursor-col-resize z-10 hover:bg-outline active:bg-outline transition-colors flex flex-col justify-center items-center"
          onMouseDown={startResizing}
        >
          <div className="w-1 h-8 bg-outline rounded-full opacity-50"></div>
        </div>

        {/* Right Panel: Questions */}
        <div 
          className="h-full bg-surface-white overflow-y-auto p-6 md:p-10"
          style={{ width: `${100 - leftWidth}%` }}
        >
          <h3 className="text-title-lg font-title-lg text-on-surface mb-6">Questions 1-5</h3>
          <p className="text-body-md font-body-md text-on-surface-variant mb-4 italic">Do the following statements agree with the information given in the Reading Passage? In boxes 1-5, choose TRUE, FALSE, or NOT GIVEN.</p>
          
          {/* True/False/Not Given Card */}
          <div className="bg-surface-white border border-outline-variant rounded-xl p-6 shadow-sm elevation-1 mb-8">
            {/* Question 1 */}
            <div className="mb-6 pb-6 border-b border-surface-variant last:border-b-0 last:pb-0 last:mb-0">
              <p className="text-body-lg font-body-lg text-on-surface mb-4"><strong>1.</strong> Vertical farming requires less transportation to get food to consumers compared to traditional farming.</p>
              <div className="flex flex-col gap-2">
                {['TRUE', 'FALSE', 'NOT GIVEN'].map(opt => (
                  <label key={`q1-${opt}`} className="flex items-center gap-3 p-3 rounded-lg hover:bg-surface-container-low cursor-pointer transition-colors has-[:checked]:bg-[#E1F5FE] has-[:checked]:border-primary border border-transparent">
                    <input className="text-primary focus:ring-primary w-5 h-5" name="q1" type="radio" value={opt} />
                    <span className="text-body-md font-body-md">{opt}</span>
                  </label>
                ))}
              </div>
            </div>
            
            {/* Question 2 */}
            <div className="mb-6 pb-6 border-b border-surface-variant last:border-b-0 last:pb-0 last:mb-0">
              <p className="text-body-lg font-body-lg text-on-surface mb-4"><strong>2.</strong> Vertical farms rely completely on natural sunlight for plant growth.</p>
              <div className="flex flex-col gap-2">
                {['TRUE', 'FALSE', 'NOT GIVEN'].map(opt => (
                  <label key={`q2-${opt}`} className="flex items-center gap-3 p-3 rounded-lg hover:bg-surface-container-low cursor-pointer transition-colors has-[:checked]:bg-[#E1F5FE] has-[:checked]:border-primary border border-transparent">
                    <input className="text-primary focus:ring-primary w-5 h-5" name="q2" type="radio" value={opt} />
                    <span className="text-body-md font-body-md">{opt}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>

          <h3 className="text-title-lg font-title-lg text-on-surface mb-6">Questions 6-8</h3>
          <p className="text-body-md font-body-md text-on-surface-variant mb-4 italic">Complete the sentences below. Choose NO MORE THAN TWO WORDS from the passage for each answer.</p>
          
          {/* Fill in the blanks Card */}
          <div className="bg-surface-white border border-outline-variant rounded-xl p-6 shadow-sm elevation-1 mb-8">
            <p className="text-body-lg font-body-lg text-on-surface leading-loose">
                One of the main benefits of vertical farming is that it eliminates weather-related 
                <strong> 6. </strong> <input className="inline-block w-32 border-b-2 border-outline focus:border-primary border-t-0 border-x-0 bg-transparent px-2 py-1 text-center font-bold text-primary focus:ring-0 focus:outline-none transition-colors" placeholder="..." type="text"/> 
                and allows crops to be grown organically without the need for 
                <strong> 7. </strong> <input className="inline-block w-32 border-b-2 border-outline focus:border-primary border-t-0 border-x-0 bg-transparent px-2 py-1 text-center font-bold text-primary focus:ring-0 focus:outline-none transition-colors" placeholder="..." type="text"/>.
                However, the energy intensive nature of artificial 
                <strong> 8. </strong> <input className="inline-block w-32 border-b-2 border-outline focus:border-primary border-t-0 border-x-0 bg-transparent px-2 py-1 text-center font-bold text-primary focus:ring-0 focus:outline-none transition-colors" placeholder="..." type="text"/>
                remains a significant challenge.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ReadingRoom;
