import React from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket, Zap } from 'lucide-react';

const Hero3D = () => {
  return (
    <section className="relative h-[90vh] w-full overflow-hidden rounded-b-3xl border-b border-white/10 bg-[#0b0b12]">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/GSq9rPp0fMuozw3F/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0b0b12] via-transparent to-[#0b0b12]/40" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_30%,rgba(59,130,246,0.3),rgba(0,0,0,0))]" />

      <div className="relative mx-auto flex h-full max-w-6xl flex-col items-center justify-center px-6 text-center text-white">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs backdrop-blur">
          <Zap className="h-3.5 w-3.5 text-yellow-300" />
          <span className="opacity-90">AI App Builder • Deploy in minutes</span>
        </div>

        <h1 className="bg-gradient-to-br from-white via-white to-indigo-200 bg-clip-text text-4xl font-extrabold tracking-tight text-transparent sm:text-5xl md:text-6xl">
          Build lovable apps with a prompt
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/80 sm:text-lg">
          Describe your idea. Our AI designs, builds, and deploys a production-ready app with a colorful, engaging 3D UI.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a
            href="#builder"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-cyan-400 px-6 py-3 font-semibold text-white shadow-lg shadow-indigo-500/30 transition hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-cyan-300"
          >
            <Rocket className="h-5 w-5" />
            Start Building
          </a>
          <a
            href="#pricing"
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 font-semibold text-white/90 backdrop-blur transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/20"
          >
            See Pricing
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero3D;
