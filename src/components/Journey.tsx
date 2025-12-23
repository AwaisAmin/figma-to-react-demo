export function Journey() {
  return (
    <section className="w-full py-20 px-4 bg-[#1a1a1a]">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <h2 className="text-white mb-4">Your Setapp journey.</h2>
          <p className="text-white/60">
            Start your 7-day free trial and get access to all the premium apps
            <br />
            you love in one place.
          </p>
        </div>

        <div className="relative">
          {/* Timeline */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-white/20 hidden md:block" />
          
          <div className="space-y-12">
            {/* Step 1 */}
            <div className="flex gap-8 items-start">
              <div className="relative z-10 w-16 h-16 bg-gradient-to-br from-[#3b82f6] to-[#2563eb] rounded-2xl flex items-center justify-center text-white shrink-0">
                <span className="text-2xl">1</span>
              </div>
              <div className="flex-1 pt-3">
                <h3 className="text-white mb-2">Download Setapp</h3>
                <p className="text-white/60 mb-4">
                  Install Setapp on your Mac and start exploring the collection
                </p>
                <button className="text-[#3b82f6] hover:underline flex items-center gap-2">
                  Get started
                  <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M2 7h10M8 3l4 4-4 4" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex gap-8 items-start">
              <div className="relative z-10 w-16 h-16 bg-gradient-to-br from-[#8b5cf6] to-[#7c3aed] rounded-2xl flex items-center justify-center text-white shrink-0">
                <span className="text-2xl">2</span>
              </div>
              <div className="flex-1 pt-3">
                <h3 className="text-white mb-2">Browse & Install</h3>
                <p className="text-white/60 mb-4">
                  Find the apps you need and install them with one click
                </p>
                <div className="flex gap-3">
                  <div className="w-12 h-12 bg-[#99D7F1] rounded-lg" />
                  <div className="w-12 h-12 bg-[#F0AD84] rounded-lg" />
                  <div className="w-12 h-12 bg-[#DF96AE] rounded-lg" />
                  <div className="w-12 h-12 bg-[#DBEBEA] rounded-lg" />
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex gap-8 items-start">
              <div className="relative z-10 w-16 h-16 bg-gradient-to-br from-[#10b981] to-[#059669] rounded-2xl flex items-center justify-center text-white shrink-0">
                <span className="text-2xl">3</span>
              </div>
              <div className="flex-1 pt-3">
                <h3 className="text-white mb-2">Use & Enjoy</h3>
                <p className="text-white/60 mb-4">
                  All apps work seamlessly together for the best experience
                </p>
                <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-lg">
                  <div className="w-2 h-2 bg-[#10b981] rounded-full animate-pulse" />
                  <span className="text-white text-sm">240+ apps active</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
