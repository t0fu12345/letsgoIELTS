import React from 'react';
import Sidebar from '../components/Sidebar';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  RadialLinearScale,
  RadarController,
  Filler,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line, Radar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  RadialLinearScale,
  RadarController,
  Filler,
  Tooltip,
  Legend
);

const Statistic = () => {
  // Chart configurations based on code.html
  const trendData = {
    labels: ['T1', 'T2', 'T3', 'T4', 'T5', 'T6', 'T7', 'T8', 'T9', 'T10'],
    datasets: [
      {
        label: 'Actual Score',
        data: [5.5, 6.0, 6.0, 6.5, 6.5, 7.0, 6.5, 7.0, 7.0, 7.5],
        borderColor: '#1cb0f6', // Primary color
        backgroundColor: 'rgba(28, 176, 246, 0.1)',
        borderWidth: 3,
        tension: 0.4, // Smooth curve
        fill: true,
        pointBackgroundColor: '#fff',
        pointBorderColor: '#1cb0f6',
        pointBorderWidth: 2,
        pointRadius: 4
      },
      {
        label: 'Target (7.0)',
        data: [7.0, 7.0, 7.0, 7.0, 7.0, 7.0, 7.0, 7.0, 7.0, 7.0],
        borderColor: '#ffcf2a', // Secondary container yellow
        borderWidth: 2,
        borderDash: [5, 5],
        pointRadius: 0,
        fill: false
      }
    ]
  };

  const trendOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { position: 'top', align: 'end', labels: { usePointStyle: true, boxWidth: 8, font: { family: 'Inter', size: 12 } } }
    },
    scales: {
      y: { min: 4.0, max: 9.0, grid: { color: 'rgba(0,0,0,0.05)' }, ticks: { stepSize: 0.5, font: { family: 'Inter' } } },
      x: { grid: { display: false }, ticks: { font: { family: 'Inter' } } }
    }
  };

  const radarData = {
    labels: ['Listening', 'Reading', 'Speaking', 'Writing'],
    datasets: [{
      label: 'Current Score',
      data: [7.5, 8.0, 6.5, 5.5],
      backgroundColor: 'rgba(28, 176, 246, 0.2)',
      borderColor: '#1cb0f6',
      pointBackgroundColor: ['#1cb0f6', '#1cb0f6', '#1cb0f6', '#ba1a1a'], // Highlight writing point in red
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: '#1cb0f6',
      borderWidth: 2
    }]
  };

  const radarOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false }
    },
    scales: {
      r: {
        angleLines: { color: 'rgba(0,0,0,0.1)' },
        grid: { color: 'rgba(0,0,0,0.1)' },
        pointLabels: {
          font: { family: 'Inter', size: 13, weight: 500 },
          color: (context) => context.label === 'Writing' ? '#ba1a1a' : '#3e4850' // Highlight writing label
        },
        ticks: { min: 0, max: 9, stepSize: 1, display: false }
      }
    }
  };

  // Generate heatmap dummy data
  const heatmapRows = [];
  for (let i = 0; i < 7; i++) {
    const row = [];
    for (let j = 0; j < 15; j++) {
      row.push(Math.floor(Math.random() * 5)); // 0-4
    }
    heatmapRows.push(row);
  }
  const days = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];

  return (
    <div className="bg-background text-on-background font-body-md min-h-screen flex">
      {/* SideNavBar */}
      <Sidebar />

      {/* Main Content Wrapper */}
      <div className="flex-1 md:ml-64 flex flex-col min-h-screen">
        {/* TopNavBar */}
        <header className="sticky top-0 shadow-sm backdrop-blur-md bg-surface/80 dark:bg-background/80 elevation-1 flex justify-between items-center h-nav-height px-4 md:px-gutter z-30">
          <div className="flex items-center gap-4">
            <h2 className="font-headline-md text-headline-md font-bold text-primary">Performance Analytics</h2>
          </div>
          <div className="flex items-center gap-4">
            <div className="relative hidden sm:block">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant">search</span>
              <input className="pl-10 pr-4 py-2 rounded-full border border-outline bg-surface-container-lowest focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all w-64 text-body-md" placeholder="Search..." type="text" />
            </div>
            <div className="flex items-center gap-2 bg-surface-variant/30 px-3 py-1.5 rounded-full">
              <span className="text-error font-bold">🔥 12 Days</span>
            </div>
            <button className="p-2 text-on-surface-variant hover:bg-surface-variant/50 rounded-full transition-all relative">
              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>notifications</span>
              <span className="absolute top-1 right-1 w-2 h-2 bg-error rounded-full"></span>
            </button>
            <button className="p-2 text-on-surface-variant hover:bg-surface-variant/50 rounded-full transition-all">
              <span className="material-symbols-outlined">account_circle</span>
            </button>
          </div>
        </header>

        {/* Main Content Area */}
        <main className="flex-1 p-margin-mobile md:p-gutter max-w-container-max mx-auto w-full space-y-8 py-8 mb-16 md:mb-0">
          {/* Band Score Trend */}
          <section className="bg-surface-white rounded-xl shadow-[0px_2px_4px_0px_rgba(0,0,0,0.08)] p-6 relative overflow-hidden group hover:-translate-y-0.5 transition-transform">
            <div className="absolute -bottom-4 -right-4 font-index-bg text-[72px] font-extrabold text-[#E5E5E5]/30 pointer-events-none select-none z-0">01</div>
            <div className="relative z-10">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
                <div>
                  <h3 className="font-title-lg text-title-lg text-on-surface mb-1">Band Score Trend</h3>
                  <p className="font-body-md text-body-md text-on-surface-variant">Your progress over the last 10 practice tests.</p>
                </div>
                <div className="bg-primary/10 text-primary px-4 py-2 rounded-full font-label-lg text-label-lg whitespace-nowrap">
                  Current Average: <span className="font-bold">6.8</span>
                </div>
              </div>
              <div className="w-full h-64">
                <Line data={trendData} options={trendOptions} />
              </div>
            </div>
          </section>

          {/* Grid Layout for Radar & Heatmap */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
            {/* Skill Breakdown (Radar) */}
            <section className="bg-surface-white rounded-xl shadow-[0px_2px_4px_0px_rgba(0,0,0,0.08)] p-6 relative overflow-hidden hover:-translate-y-0.5 transition-transform">
              <div className="absolute -bottom-4 -right-4 font-index-bg text-[72px] font-extrabold text-[#E5E5E5]/30 pointer-events-none select-none z-0">02</div>
              <div className="relative z-10 flex flex-col h-full">
                <div className="mb-4">
                  <h3 className="font-title-lg text-title-lg text-on-surface mb-1">Skill Breakdown</h3>
                  <p className="font-body-md text-body-md text-on-surface-variant">Identifying strengths and bottlenecks.</p>
                </div>
                <div className="flex-1 flex items-center justify-center min-h-[250px]">
                  <Radar data={radarData} options={radarOptions} />
                </div>
                <div className="mt-4 flex flex-wrap gap-2 justify-center">
                  <span className="px-3 py-1 rounded-full bg-primary/10 text-primary font-label-lg text-label-lg text-xs">Reading: Strong</span>
                  <span className="px-3 py-1 rounded-full bg-error-container text-on-error-container font-label-lg text-label-lg text-xs flex items-center gap-1 border border-error/20">
                    <span className="material-symbols-outlined text-[16px]">warning</span> Writing: Bottleneck
                  </span>
                </div>
              </div>
            </section>

            {/* Practice Heatmap */}
            <section className="bg-surface-white rounded-xl shadow-[0px_2px_4px_0px_rgba(0,0,0,0.08)] p-6 relative overflow-hidden hover:-translate-y-0.5 transition-transform">
              <div className="absolute -bottom-4 -right-4 font-index-bg text-[72px] font-extrabold text-[#E5E5E5]/30 pointer-events-none select-none z-0">03</div>
              <div className="relative z-10 flex flex-col h-full">
                <div className="mb-4 flex justify-between items-end">
                  <div>
                    <h3 className="font-title-lg text-title-lg text-on-surface mb-1">Study Consistency</h3>
                    <p className="font-body-md text-body-md text-on-surface-variant">Daily practice intensity (Last 30 days).</p>
                  </div>
                  <div className="text-right">
                    <div className="font-headline-md text-headline-md font-bold text-primary">87%</div>
                    <div className="font-label-lg text-label-lg text-on-surface-variant text-xs">Consistency Score</div>
                  </div>
                </div>
                <div className="flex-1 flex flex-col justify-center overflow-x-auto pb-4">
                  <div className="flex flex-col gap-1 min-w-max mx-auto">
                    <div className="flex gap-1 text-xs text-on-surface-variant mb-1 ml-6">
                      <div className="w-[14px] mr-[18px]">Mon</div>
                      <div className="w-[14px] mr-[18px]">Wed</div>
                      <div className="w-[14px]">Fri</div>
                    </div>
                    {heatmapRows.map((row, i) => (
                      <div key={i} className="flex gap-1">
                        <div className="w-5 text-xs text-on-surface-variant flex items-center">{days[i]}</div>
                        <div className="flex gap-1">
                          {row.map((val, j) => {
                            let bgColor = '#ebedf0';
                            if (val === 1) bgColor = '#c6e48b';
                            else if (val === 2) bgColor = '#7bc96f';
                            else if (val === 3) bgColor = '#239a3b';
                            else if (val === 4) bgColor = '#196127';
                            
                            return (
                              <div key={`${i}-${j}`} className="w-[14px] h-[14px] rounded-[2px]" style={{ backgroundColor: bgColor }}></div>
                            );
                          })}
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="flex items-center justify-end gap-2 mt-4 text-xs text-on-surface-variant">
                    <span>Less</span>
                    <div className="w-[14px] h-[14px] rounded-[2px] bg-[#ebedf0]"></div>
                    <div className="w-[14px] h-[14px] rounded-[2px] bg-[#c6e48b]"></div>
                    <div className="w-[14px] h-[14px] rounded-[2px] bg-[#7bc96f]"></div>
                    <div className="w-[14px] h-[14px] rounded-[2px] bg-[#239a3b]"></div>
                    <div className="w-[14px] h-[14px] rounded-[2px] bg-[#196127]"></div>
                    <span>More</span>
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* AI Deep Insights Section */}
          <section className="mt-8">
            <div className="flex items-center gap-2 mb-6">
              <span className="material-symbols-outlined text-secondary-container" style={{ fontVariationSettings: "'FILL' 1" }}>auto_awesome</span>
              <h2 className="font-headline-md text-headline-md text-on-surface font-bold">AI Deep Insights</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
              {/* Writing Insights Card */}
              <div className="border border-outline-variant rounded-xl p-6 bg-surface-white hover:bg-surface-container-lowest transition-colors flex flex-col shadow-[0px_2px_4px_0px_rgba(0,0,0,0.08)]">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-error/10 flex items-center justify-center text-error">
                      <span className="material-symbols-outlined">edit_note</span>
                    </div>
                    <div>
                      <h4 className="font-title-lg text-title-lg text-on-surface">Writing Task 2</h4>
                      <p className="font-label-lg text-label-lg text-on-surface-variant text-sm">Grammatical Range</p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 rounded-full bg-error-container text-on-error-container font-label-lg text-label-lg text-xs border border-error/20">Articles (a/an/the)</span>
                  <span className="px-3 py-1 rounded-full bg-error-container text-on-error-container font-label-lg text-label-lg text-xs border border-error/20">Repetition</span>
                </div>
                <p className="font-body-md text-body-md text-on-surface-variant mb-6 flex-1">
                  Your recent essays show a consistent pattern of dropping definite articles before specific nouns. Additionally, you often repeat the word "important" instead of using synonyms like "crucial" or "vital".
                </p>
                <button className="w-full py-2.5 rounded-lg border-2 border-primary text-primary font-label-lg text-label-lg hover:bg-primary/5 transition-colors">
                  Review Grammar Exercises
                </button>
              </div>

              {/* Speaking Insights Card */}
              <div className="border border-outline-variant rounded-xl p-6 bg-surface-white hover:bg-surface-container-lowest transition-colors flex flex-col shadow-[0px_2px_4px_0px_rgba(0,0,0,0.08)]">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-secondary-container/20 flex items-center justify-center text-secondary">
                      <span className="material-symbols-outlined">record_voice_over</span>
                    </div>
                    <div>
                      <h4 className="font-title-lg text-title-lg text-on-surface">Speaking Part 2</h4>
                      <p className="font-label-lg text-label-lg text-on-surface-variant text-sm">Fluency & Pronunciation</p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 rounded-full bg-surface-variant text-on-surface-variant font-label-lg text-label-lg text-xs border border-outline/20">Th- sounds</span>
                  <span className="px-3 py-1 rounded-full bg-surface-variant text-on-surface-variant font-label-lg text-label-lg text-xs border border-outline/20">Hesitation</span>
                </div>
                <p className="font-body-md text-body-md text-on-surface-variant mb-6 flex-1">
                  Audio analysis indicates slight difficulty with unvoiced 'th' sounds (e.g., 'think', 'through'). There are also noticeable pauses longer than 2 seconds when transitioning between main ideas.
                </p>
                <button className="w-full py-2.5 rounded-lg border-2 border-outline text-on-surface-variant font-label-lg text-label-lg hover:bg-surface-variant/20 transition-colors flex items-center justify-center gap-2">
                  <span className="material-symbols-outlined text-[18px]">mic</span> Practice Pronunciation
                </button>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default Statistic;
