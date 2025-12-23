import imgIconCmmPng from "figma:asset/2ea3dc225416273459df81ca06ad426d29a3cb56.png";
import imgIconCoderunnerPng from "figma:asset/5c27d428a3e97ddc13f8ebcef94454f36d2aab18.png";
import imgIconMeeterPng from "figma:asset/daecfd6fc447d2a6b62fc72cbb5af2c7ac6bee48.png";

export function Hero() {
  return (
    <section className="relative w-full min-h-[600px] flex flex-col items-center justify-center px-4 py-20 overflow-hidden">
      {/* Floating App Icons */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Top Left */}
        <div className="absolute top-20 left-[10%] w-16 h-16 bg-[#99D7F1] rounded-xl flex items-center justify-center rotate-12 shadow-lg">
          <img src={imgIconCmmPng} alt="App" className="w-10 h-10" />
        </div>
        
        {/* Top Right */}
        <div className="absolute top-32 right-[15%] w-20 h-20 bg-[#F6CF98] rounded-xl flex items-center justify-center -rotate-6 shadow-lg">
          <img src={imgIconCoderunnerPng} alt="App" className="w-12 h-12" />
        </div>
        
        {/* Left Side */}
        <div className="absolute top-1/2 left-[5%] w-12 h-12 bg-[#DF96AE] rounded-xl rotate-6 shadow-lg" />
        
        {/* Right Side */}
        <div className="absolute top-1/2 right-[8%] w-14 h-14 bg-[#DBEBEA] rounded-xl -rotate-12 shadow-lg">
          <img src={imgIconMeeterPng} alt="App" className="w-full h-full object-contain" />
        </div>
        
        {/* Bottom Left */}
        <div className="absolute bottom-32 left-[20%] w-16 h-16 bg-[#F0AD84] rounded-xl rotate-3 shadow-lg" />
        
        {/* Bottom Right */}
        <div className="absolute bottom-40 right-[12%] w-12 h-12 bg-[#99D7F1] rounded-xl -rotate-6 shadow-lg" />
      </div>

      {/* Center Logo */}
      <div className="relative z-10 mb-8">
        <div className="w-16 h-16 bg-white rounded-lg rotate-45 flex items-center justify-center">
          <div className="w-8 h-8 bg-[#1a1a1a] rounded-sm -rotate-45" />
        </div>
      </div>

      {/* Hero Text */}
      <div className="relative z-10 text-center max-w-3xl mx-auto">
        <h1 className="text-white mb-6 tracking-wide">
          <div className="mb-2">Dozens of apps.</div>
          <div>One curation.</div>
          <div>$9.99/</div>
        </h1>
        
        <div className="flex items-center justify-center gap-4 mt-8">
          <button className="bg-white text-black px-8 py-3 rounded-md hover:bg-white/90 transition-colors">
            Start free trial
          </button>
          <button className="border border-white text-white px-8 py-3 rounded-md hover:bg-white/10 transition-colors flex items-center gap-2">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <circle cx="10" cy="10" r="9" stroke="currentColor" strokeWidth="2"/>
              <path d="M8 7l5 3-5 3z" fill="currentColor"/>
            </svg>
            Watch video
          </button>
        </div>
      </div>

      {/* Bottom Description */}
      <div className="relative z-10 mt-12 text-center text-white/60 max-w-sm">
        <p>Safe and secure access to your favorite apps</p>
        <p>whenever you need them most.</p>
      </div>
    </section>
  );
}
