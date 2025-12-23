export function Navigation() {
  return (
    <nav className="w-full px-6 py-4 flex items-center justify-between">
      <div className="flex items-center gap-8">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 bg-white rounded rotate-45" />
          <span className="text-white">Setapp</span>
        </div>
        <div className="hidden md:flex items-center gap-6 text-white/80 text-sm">
          <a href="#apps" className="hover:text-white transition-colors">Apps</a>
          <a href="#pricing" className="hover:text-white transition-colors">Pricing</a>
          <a href="#for-teams" className="hover:text-white transition-colors">For Teams</a>
          <a href="#support" className="hover:text-white transition-colors">Support</a>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <button className="text-white/80 hover:text-white transition-colors">Log in</button>
        <button className="bg-white text-black px-6 py-2 rounded-md hover:bg-white/90 transition-colors">
          Try free
        </button>
      </div>
    </nav>
  );
}
