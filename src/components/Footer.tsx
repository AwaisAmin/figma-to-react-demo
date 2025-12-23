export function Footer() {
  return (
    <footer className="w-full py-16 px-4 bg-[#0a0a0a] border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
          {/* Column 1 - Product */}
          <div>
            <h4 className="text-white mb-4">Product</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-white/60 hover:text-white transition-colors">All apps</a></li>
              <li><a href="#" className="text-white/60 hover:text-white transition-colors">Pricing</a></li>
              <li><a href="#" className="text-white/60 hover:text-white transition-colors">For teams</a></li>
              <li><a href="#" className="text-white/60 hover:text-white transition-colors">For iOS</a></li>
            </ul>
          </div>

          {/* Column 2 - Support */}
          <div>
            <h4 className="text-white mb-4">Support</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-white/60 hover:text-white transition-colors">Help center</a></li>
              <li><a href="#" className="text-white/60 hover:text-white transition-colors">Contact us</a></li>
              <li><a href="#" className="text-white/60 hover:text-white transition-colors">System status</a></li>
              <li><a href="#" className="text-white/60 hover:text-white transition-colors">Updates</a></li>
            </ul>
          </div>

          {/* Column 3 - Company */}
          <div>
            <h4 className="text-white mb-4">Company</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-white/60 hover:text-white transition-colors">About</a></li>
              <li><a href="#" className="text-white/60 hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="text-white/60 hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="text-white/60 hover:text-white transition-colors">Press</a></li>
            </ul>
          </div>

          {/* Column 4 - Resources */}
          <div>
            <h4 className="text-white mb-4">Resources</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-white/60 hover:text-white transition-colors">Community</a></li>
              <li><a href="#" className="text-white/60 hover:text-white transition-colors">Developers</a></li>
              <li><a href="#" className="text-white/60 hover:text-white transition-colors">Partners</a></li>
              <li><a href="#" className="text-white/60 hover:text-white transition-colors">Affiliates</a></li>
            </ul>
          </div>

          {/* Column 5 - Legal */}
          <div>
            <h4 className="text-white mb-4">Legal</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-white/60 hover:text-white transition-colors">Privacy</a></li>
              <li><a href="#" className="text-white/60 hover:text-white transition-colors">Terms</a></li>
              <li><a href="#" className="text-white/60 hover:text-white transition-colors">Security</a></li>
              <li><a href="#" className="text-white/60 hover:text-white transition-colors">Cookies</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Logo & Copyright */}
            <div className="flex items-center gap-8">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-white rounded rotate-45" />
                <span className="text-white">Setapp</span>
              </div>
              <p className="text-white/40 text-sm">© 2024 Setapp</p>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-6">
              {/* Facebook */}
              <a href="#" className="text-white/60 hover:text-white transition-colors">
                <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9.198 21.5h4v-8.01h3.604l.396-3.98h-4V7.5a1 1 0 0 1 1-1h3v-4h-3a5 5 0 0 0-5 5v2.01h-2l-.396 3.98h2.396v8.01Z"/>
                </svg>
              </a>

              {/* Twitter */}
              <a href="#" className="text-white/60 hover:text-white transition-colors">
                <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"/>
                </svg>
              </a>

              {/* Instagram */}
              <a href="#" className="text-white/60 hover:text-white transition-colors">
                <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.216.598 1.772 1.153.509.5.902 1.105 1.153 1.772.247.637.415 1.363.465 2.428.047 1.066.06 1.405.06 4.122 0 2.717-.01 3.056-.06 4.122-.05 1.065-.218 1.79-.465 2.428a4.883 4.883 0 0 1-1.153 1.772c-.5.508-1.105.902-1.772 1.153-.637.247-1.363.415-2.428.465-1.066.047-1.405.06-4.122.06-2.717 0-3.056-.01-4.122-.06-1.065-.05-1.79-.218-2.428-.465a4.89 4.89 0 0 1-1.772-1.153 4.904 4.904 0 0 1-1.153-1.772c-.248-.637-.415-1.363-.465-2.428C2.013 15.056 2 14.717 2 12c0-2.717.01-3.056.06-4.122.05-1.066.217-1.79.465-2.428a4.88 4.88 0 0 1 1.153-1.772A4.897 4.897 0 0 1 5.45 2.525c.638-.248 1.362-.415 2.428-.465C8.944 2.013 9.283 2 12 2Zm0 5a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm6.5-.25a1.25 1.25 0 0 0-2.5 0 1.25 1.25 0 0 0 2.5 0ZM12 9a3 3 0 1 1 0 6 3 3 0 0 1 0-6Z"/>
                </svg>
              </a>

              {/* YouTube */}
              <a href="#" className="text-white/60 hover:text-white transition-colors">
                <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814ZM9.545 15.568V8.432L15.818 12l-6.273 3.568Z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter */}
      <div className="max-w-7xl mx-auto mt-12 pt-12 border-t border-white/10">
        <div className="max-w-md mx-auto text-center">
          <h3 className="text-white mb-4">Stay updated</h3>
          <p className="text-white/60 mb-6">
            Get the latest news about new apps and features
          </p>
          
          <div className="flex gap-3">
            <input 
              type="email" 
              placeholder="Enter your email"
              className="flex-1 bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus:border-white/40"
            />
            <button className="bg-white text-black px-6 py-3 rounded-lg hover:bg-white/90 transition-colors shrink-0">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
