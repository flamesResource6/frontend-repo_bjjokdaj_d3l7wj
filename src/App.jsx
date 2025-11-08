import React from 'react';
import Hero3D from './components/Hero3D';
import BuilderForm from './components/BuilderForm';
import Pricing from './components/Pricing';
import SecurityBadge from './components/SecurityBadge';

function App() {
  return (
    <div className="min-h-screen bg-[#0b0b12]">
      <header className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-xl bg-gradient-to-br from-indigo-500 via-fuchsia-500 to-cyan-400" />
          <span className="text-lg font-semibold text-white">Lovable AI Builder</span>
        </div>
        <nav className="hidden items-center gap-5 text-white/80 sm:flex">
          <a href="#builder" className="hover:text-white">Builder</a>
          <a href="#pricing" className="hover:text-white">Pricing</a>
          <a href="#security" className="hover:text-white">Security</a>
        </nav>
        <div className="flex items-center gap-2">
          <button className="rounded-lg border border-white/15 px-3 py-1.5 text-sm text-white/90 hover:bg-white/10">Sign in</button>
          <button className="rounded-lg bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-cyan-400 px-3 py-1.5 text-sm font-semibold text-white">Get started</button>
        </div>
      </header>

      <Hero3D />
      <BuilderForm />
      <Pricing />
      <div id="security">
        <SecurityBadge />
      </div>

      <footer className="mx-auto mt-20 max-w-6xl px-6 py-8 text-center text-white/60">
        © {new Date().getFullYear()} Lovable AI Builder — All rights reserved.
      </footer>
    </div>
  );
}

export default App;
