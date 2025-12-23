export function Pricing() {
  return (
    <section className="w-full py-20 px-4 bg-[#1a1a1a]">
      <div className="max-w-4xl mx-auto">
        <div className="bg-gradient-to-br from-[#2a2a2a] to-[#1f1f1f] rounded-3xl p-12 border border-white/10">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            {/* Left Side - Pricing Info */}
            <div>
              <div className="inline-block bg-[#f59e0b]/20 px-4 py-2 rounded-full text-[#f59e0b] text-sm mb-6">
                Limited Time Offer
              </div>
              
              <h2 className="text-white mb-4">
                Superpower: starting $9.99/month.
              </h2>
              <p className="text-white/60 mb-2">
                Free trial for 7 days.
              </p>
              
              <div className="mt-8 space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 bg-[#10b981] rounded-full flex items-center justify-center">
                    <svg width="12" height="12" fill="none" stroke="white" strokeWidth="2">
                      <path d="M2 6l3 3 5-5" />
                    </svg>
                  </div>
                  <span className="text-white/80">240+ premium apps for Mac & iOS</span>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 bg-[#10b981] rounded-full flex items-center justify-center">
                    <svg width="12" height="12" fill="none" stroke="white" strokeWidth="2">
                      <path d="M2 6l3 3 5-5" />
                    </svg>
                  </div>
                  <span className="text-white/80">No ads, no in-app purchases</span>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 bg-[#10b981] rounded-full flex items-center justify-center">
                    <svg width="12" height="12" fill="none" stroke="white" strokeWidth="2">
                      <path d="M2 6l3 3 5-5" />
                    </svg>
                  </div>
                  <span className="text-white/80">Cancel anytime</span>
                </div>
              </div>
            </div>

            {/* Right Side - CTA */}
            <div className="shrink-0">
              <div className="space-y-4">
                <button className="w-full md:w-auto bg-white text-black px-8 py-4 rounded-lg hover:bg-white/90 transition-colors">
                  Start free trial
                </button>
                
                <button className="w-full md:w-auto border border-white/30 text-white px-8 py-4 rounded-lg hover:bg-white/10 transition-colors">
                  View all plans
                </button>
              </div>
              
              <p className="text-white/40 text-xs mt-4 text-center">
                No credit card required
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
