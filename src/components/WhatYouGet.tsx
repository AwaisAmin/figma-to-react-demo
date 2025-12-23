import imgCmmBig2XPng from "figma:asset/8a5203ae86e579ee7c833ad32903a8952c6f32f6.png";
import imgCoderunner2XPng from "figma:asset/5ecec2c860e197b0c252693fa559e428bb28dd4a.png";
import imgMeeter2XPng from "figma:asset/bbd80a807180e55dbcc9d6024b7149e4b93f276f.png";

export function WhatYouGet() {
  return (
    <section className="w-full py-20 px-4 bg-[#1a1a1a]">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <h2 className="text-white mb-4">What you get on Setapp.</h2>
          <p className="text-white/60">
            High quality apps curated with care just for you. All-inclusive
            <br />
            Mac and iOS experience.
          </p>
        </div>

        {/* App Showcase Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* CMM App Card */}
          <div className="bg-gradient-to-br from-[#d97ba7]/80 to-[#c06090]/80 rounded-3xl p-8 relative overflow-hidden min-h-[400px]">
            <div className="relative z-10">
              <div className="mb-4">
                <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-white text-sm">
                  Keep your Mac clean
                </div>
              </div>
              
              <div className="space-y-4 max-w-md">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <p className="text-white text-sm">System Junk</p>
                  <div className="flex items-center gap-2 mt-2">
                    <div className="flex-1 h-2 bg-white/20 rounded-full overflow-hidden">
                      <div className="h-full w-3/4 bg-white rounded-full" />
                    </div>
                    <span className="text-white text-sm">12.3 GB</span>
                  </div>
                </div>
                
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <p className="text-white text-sm">Photo Cache</p>
                  <div className="flex items-center gap-2 mt-2">
                    <div className="flex-1 h-2 bg-white/20 rounded-full overflow-hidden">
                      <div className="h-full w-1/2 bg-white rounded-full" />
                    </div>
                    <span className="text-white text-sm">8.7 GB</span>
                  </div>
                </div>
                
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <p className="text-white text-sm">Mail Attachments</p>
                  <div className="flex items-center gap-2 mt-2">
                    <div className="flex-1 h-2 bg-white/20 rounded-full overflow-hidden">
                      <div className="h-full w-2/3 bg-white rounded-full" />
                    </div>
                    <span className="text-white text-sm">5.2 GB</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="absolute right-8 bottom-8 w-32 h-32 opacity-80">
              <img src={imgCmmBig2XPng} alt="CMM" className="w-full h-full object-contain" />
            </div>
          </div>

          {/* Code Editor Card */}
          <div className="bg-[#1e2433] rounded-3xl p-8 relative overflow-hidden min-h-[400px]">
            <div className="mb-6">
              <div className="inline-block bg-[#3b82f6]/20 backdrop-blur-sm px-4 py-2 rounded-full text-white text-sm">
                Write code in style
              </div>
            </div>
            
            <div className="bg-[#0d1117] rounded-lg p-4 font-mono text-sm space-y-2">
              <div className="flex gap-2">
                <span className="text-gray-500">1</span>
                <span className="text-[#ff7b72]">import</span>
                <span className="text-white"> React </span>
                <span className="text-[#ff7b72]">from</span>
                <span className="text-[#a5d6ff]"> 'react'</span>
              </div>
              <div className="flex gap-2">
                <span className="text-gray-500">2</span>
                <span className="text-white"></span>
              </div>
              <div className="flex gap-2">
                <span className="text-gray-500">3</span>
                <span className="text-[#ff7b72]">function</span>
                <span className="text-[#d2a8ff]"> App</span>
                <span className="text-white">() {"{"}</span>
              </div>
              <div className="flex gap-2">
                <span className="text-gray-500">4</span>
                <span className="text-white ml-4">  </span>
                <span className="text-[#ff7b72]">return</span>
                <span className="text-white"> (</span>
              </div>
              <div className="flex gap-2">
                <span className="text-gray-500">5</span>
                <span className="text-white ml-8">    </span>
                <span className="text-[#7ee787]">&lt;div&gt;</span>
              </div>
              <div className="flex gap-2">
                <span className="text-gray-500">6</span>
                <span className="text-white ml-12">      </span>
                <span className="text-[#7ee787]">&lt;h1&gt;</span>
                <span className="text-white">Hello World</span>
                <span className="text-[#7ee787]">&lt;/h1&gt;</span>
              </div>
            </div>
            
            <div className="absolute bottom-8 right-8">
              <img src={imgCoderunner2XPng} alt="Code Runner" className="w-24 h-24 object-contain" />
            </div>
          </div>

          {/* Meeting App Card */}
          <div className="bg-gradient-to-br from-[#5b7dbe] to-[#4a6aa8] rounded-3xl p-8 relative overflow-hidden min-h-[400px]">
            <div className="mb-6">
              <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-white text-sm">
                One meeting to rule them all
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 flex items-center gap-4">
                <div className="w-12 h-12 bg-[#3b82f6] rounded-full flex items-center justify-center text-white">
                  <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="3" y="4" width="18" height="18" rx="2" />
                    <line x1="16" y1="2" x2="16" y2="6" />
                    <line x1="8" y1="2" x2="8" y2="6" />
                    <line x1="3" y1="10" x2="21" y2="10" />
                  </svg>
                </div>
                <div className="flex-1">
                  <p className="text-white">Team Sync</p>
                  <p className="text-white/60 text-sm">10:00 AM - 11:00 AM</p>
                </div>
                <button className="bg-[#10b981] text-white px-4 py-2 rounded-lg text-sm">
                  Join
                </button>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 flex items-center gap-4">
                <div className="w-12 h-12 bg-[#8b5cf6] rounded-full flex items-center justify-center text-white">
                  <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="3" y="4" width="18" height="18" rx="2" />
                    <line x1="16" y1="2" x2="16" y2="6" />
                    <line x1="8" y1="2" x2="8" y2="6" />
                    <line x1="3" y1="10" x2="21" y2="10" />
                  </svg>
                </div>
                <div className="flex-1">
                  <p className="text-white">Design Review</p>
                  <p className="text-white/60 text-sm">2:00 PM - 3:00 PM</p>
                </div>
                <button className="bg-white/20 text-white px-4 py-2 rounded-lg text-sm">
                  Remind
                </button>
              </div>
            </div>
            
            <div className="absolute bottom-8 right-8 opacity-60">
              <img src={imgMeeter2XPng} alt="Meeter" className="w-20 h-20 object-contain" />
            </div>
          </div>

          {/* Productivity Card */}
          <div className="bg-gradient-to-br from-[#f59e0b] to-[#d97706] rounded-3xl p-8 relative overflow-hidden min-h-[400px] flex flex-col justify-between">
            <div>
              <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-white text-sm mb-6">
                Boost your productivity
              </div>
              
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                    <svg width="16" height="16" fill="none" stroke="#f59e0b" strokeWidth="2">
                      <path d="M4 8l3 3 5-6" />
                    </svg>
                  </div>
                  <span className="text-white">Focus mode enabled</span>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                    <svg width="16" height="16" fill="none" stroke="#f59e0b" strokeWidth="2">
                      <path d="M4 8l3 3 5-6" />
                    </svg>
                  </div>
                  <span className="text-white">Notifications blocked</span>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                    <svg width="16" height="16" fill="none" stroke="#f59e0b" strokeWidth="2">
                      <path d="M4 8l3 3 5-6" />
                    </svg>
                  </div>
                  <span className="text-white">Deep work session</span>
                </div>
              </div>
            </div>
            
            <div className="text-white/80 text-sm">
              240+ apps available
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <button className="text-white flex items-center gap-2 mx-auto hover:gap-4 transition-all">
            View all applications
            <svg width="14" height="24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round">
              <path d="M2 22L12 12L2 2" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
