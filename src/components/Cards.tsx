export function Cards() {
  return (
    <section className="w-full py-20 px-4 bg-[#1a1a1a]">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <h2 className="text-white mb-4">Setapp in your words.</h2>
          <p className="text-white/60">
            Discover how our members are building their best workflows
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 - Purple */}
          <div className="bg-gradient-to-br from-[#6b4c7f] to-[#5a3d6a] rounded-2xl p-8 min-h-[320px] flex flex-col justify-between">
            <div>
              <div className="mb-6">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                  <circle cx="16" cy="16" r="14" stroke="white" strokeWidth="2" opacity="0.3"/>
                  <path d="M16 10v12M10 16h12" stroke="white" strokeWidth="2"/>
                </svg>
              </div>
              
              <h3 className="text-white mb-3">
                I get even more value from
              </h3>
              <p className="text-white/80 mb-2">
                Setapp when I'm working on my
              </p>
              <p className="text-white/80">
                side projects. More apps,
              </p>
              <p className="text-white/80">
                more productivity.
              </p>
            </div>
            
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/20 rounded-full" />
              <div>
                <p className="text-white text-sm">Sarah Chen</p>
                <p className="text-white/60 text-xs">Product Designer</p>
              </div>
            </div>
          </div>

          {/* Card 2 - Beige */}
          <div className="bg-gradient-to-br from-[#e5c8a6] to-[#d4b895] rounded-2xl p-8 min-h-[320px] flex flex-col justify-between">
            <div>
              <div className="mb-6">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                  <rect x="6" y="6" width="20" height="20" rx="4" stroke="#5a3d2f" strokeWidth="2" opacity="0.3"/>
                  <path d="M12 16l4 4 8-8" stroke="#5a3d2f" strokeWidth="2"/>
                </svg>
              </div>
              
              <h3 className="text-[#5a3d2f] mb-3">
                Honest curation
              </h3>
              <p className="text-[#5a3d2f]/80 mb-2">
                Every app is carefully vetted
              </p>
              <p className="text-[#5a3d2f]/80">
                to ensure the best quality and
              </p>
              <p className="text-[#5a3d2f]/80">
                user experience.
              </p>
            </div>
            
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#5a3d2f]/20 rounded-full" />
              <div>
                <p className="text-[#5a3d2f] text-sm">Alex Rivera</p>
                <p className="text-[#5a3d2f]/60 text-xs">Developer</p>
              </div>
            </div>
          </div>

          {/* Card 3 - Dark Purple */}
          <div className="bg-gradient-to-br from-[#4a3d5a] to-[#3d3249] rounded-2xl p-8 min-h-[320px] flex flex-col justify-between">
            <div>
              <div className="mb-6">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                  <path d="M16 4l4 8 8 2-6 6 2 8-8-4-8 4 2-8-6-6 8-2z" stroke="white" strokeWidth="2" opacity="0.3"/>
                </svg>
              </div>
              
              <h3 className="text-white mb-3">
                $9.99/month is an absolute
              </h3>
              <p className="text-white/80 mb-2">
                steal when you consider the
              </p>
              <p className="text-white/80">
                value of all the individual app
              </p>
              <p className="text-white/80">
                subscriptions I've replaced.
              </p>
            </div>
            
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/20 rounded-full" />
              <div>
                <p className="text-white text-sm">Maya Patel</p>
                <p className="text-white/60 text-xs">Content Creator</p>
              </div>
            </div>
          </div>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center gap-2 mt-8">
          <div className="w-2 h-2 bg-white rounded-full" />
          <div className="w-2 h-2 bg-white/30 rounded-full" />
          <div className="w-2 h-2 bg-white/30 rounded-full" />
          <div className="w-2 h-2 bg-white/30 rounded-full" />
          <div className="w-2 h-2 bg-white/30 rounded-full" />
        </div>
      </div>
    </section>
  );
}
