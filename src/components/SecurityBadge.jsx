import React from 'react';
import { ShieldCheck, Lock, EyeOff } from 'lucide-react';

const SecurityBadge = () => {
  return (
    <section className="mx-auto mt-16 max-w-6xl px-6">
      <div className="rounded-2xl border border-white/10 bg-black/40 p-6 text-white">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div>
            <h3 className="text-xl font-semibold">Security-first by design</h3>
            <p className="mt-1 text-white/70">Your ideas are protected. We use encryption in transit and at rest, scoped access controls, and strict isolation so no one can replicate your unique concept.</p>
          </div>
          <div className="grid w-full grid-cols-3 gap-3 md:w-auto">
            <div className="rounded-xl border border-white/10 bg-white/5 p-3 text-center">
              <ShieldCheck className="mx-auto h-5 w-5 text-emerald-300" />
              <div className="mt-1 text-xs text-white/80">Encrypted</div>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-3 text-center">
              <Lock className="mx-auto h-5 w-5 text-indigo-300" />
              <div className="mt-1 text-xs text-white/80">Access control</div>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-3 text-center">
              <EyeOff className="mx-auto h-5 w-5 text-fuchsia-300" />
              <div className="mt-1 text-xs text-white/80">Private ideas</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecurityBadge;
