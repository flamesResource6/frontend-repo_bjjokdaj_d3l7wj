import React, { useState } from 'react';
import { Sparkles, Wand2, Send, Shield } from 'lucide-react';

const examplePrompts = [
  'Recipe planner with grocery list and nutrition facts',
  'Personal finance dashboard with budgeting and bill reminders',
  'Fitness tracker with habit streaks and community challenges',
];

const BuilderForm = () => {
  const [idea, setIdea] = useState('');
  const [status, setStatus] = useState('idle'); // idle | building | preview
  const [usage, setUsage] = useState(0);

  const handleBuild = (e) => {
    e.preventDefault();
    if (!idea.trim()) return;

    // Simulated local limit for free plan preview only
    if (usage >= 20) {
      setStatus('limit');
      return;
    }

    setStatus('building');
    setTimeout(() => {
      setStatus('preview');
      setUsage((u) => u + 1);
    }, 1400);
  };

  const reset = () => {
    setStatus('idle');
    setIdea('');
  };

  return (
    <section id="builder" className="relative mx-auto -mt-16 w-full max-w-6xl rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur md:-mt-24 md:p-10">
      <div className="flex flex-col gap-6 md:flex-row md:items-start">
        <div className="flex-1">
          <h2 className="text-2xl font-bold text-white">Describe your app idea</h2>
          <p className="mt-1 text-white/70">Use natural language. Our AI turns it into a real, deployable app.</p>

          <form onSubmit={handleBuild} className="mt-5 space-y-3">
            <div className="rounded-2xl border border-white/10 bg-black/40 p-2 focus-within:ring-2 focus-within:ring-indigo-400/50">
              <textarea
                value={idea}
                onChange={(e) => setIdea(e.target.value)}
                placeholder="e.g., A task manager with Kanban boards, real-time chat, and calendar sync"
                rows={4}
                className="w-full resize-none rounded-xl bg-transparent p-3 text-white placeholder-white/50 outline-none"
              />
              <div className="flex items-center justify-between px-2 pb-2">
                <div className="flex items-center gap-2 text-xs text-white/60">
                  <Shield className="h-4 w-4" />
                  <span>Your ideas are private and encrypted.</span>
                </div>
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-cyan-400 px-4 py-2 text-sm font-semibold text-white shadow-md shadow-indigo-500/30 transition hover:brightness-110"
                >
                  {status === 'building' ? (
                    <>
                      <Wand2 className="h-4 w-4 animate-spin" /> Building...
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4" /> Build App
                    </>
                  )}
                </button>
              </div>
            </div>
          </form>

          <div className="mt-4 flex flex-wrap gap-2">
            {examplePrompts.map((p) => (
              <button
                key={p}
                onClick={() => setIdea(p)}
                className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80 hover:bg-white/10"
              >
                <Sparkles className="mr-1 inline h-3.5 w-3.5" /> {p}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-6 w-full md:mt-0 md:w-[360px]">
          <div className="rounded-2xl border border-white/10 bg-black/40 p-4 text-white">
            <h3 className="mb-1 text-lg font-semibold">Free plan usage</h3>
            <p className="text-sm text-white/70">Limited to 20 AI builds. Upgrade for unlimited, faster builds and deployment.</p>
            <div className="mt-4 h-2 w-full overflow-hidden rounded-full bg-white/10">
              <div
                className="h-full rounded-full bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-cyan-400"
                style={{ width: `${Math.min(usage, 20) / 20 * 100}%` }}
              />
            </div>
            <div className="mt-2 text-right text-xs text-white/70">{Math.min(usage, 20)} / 20</div>
            {status === 'limit' && (
              <div className="mt-3 rounded-xl border border-rose-300/30 bg-rose-500/10 p-3 text-sm text-rose-200">
                Free limit reached. See pricing below to continue building without limits.
              </div>
            )}
          </div>
        </div>
      </div>

      {status === 'preview' && (
        <div className="mt-8 rounded-2xl border border-white/10 bg-black/40 p-5 text-white">
          <h3 className="text-lg font-semibold">Instant preview</h3>
          <p className="mt-1 text-sm text-white/70">This is a conceptual preview. In a full deployment, we would generate backend APIs, UI screens, data models, and CI to deploy automatically.</p>
          <div className="mt-4 grid gap-3 sm:grid-cols-3">
            <div className="rounded-xl border border-white/10 bg-white/5 p-4">
              <div className="text-xs uppercase tracking-wide text-white/60">Design</div>
              <div className="mt-1 font-medium">Colorful 3D, modern layout</div>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-4">
              <div className="text-xs uppercase tracking-wide text-white/60">Backend</div>
              <div className="mt-1 font-medium">Secure APIs, database schemas</div>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-4">
              <div className="text-xs uppercase tracking-wide text-white/60">Deployment</div>
              <div className="mt-1 font-medium">1-click deploy to the cloud</div>
            </div>
          </div>
          <div className="mt-4 flex gap-2">
            <button onClick={reset} className="rounded-lg border border-white/15 px-3 py-2 text-sm text-white/90 hover:bg-white/10">Reset</button>
            <a href="#pricing" className="rounded-lg bg-gradient-to-r from-indigo-500 to-cyan-400 px-3 py-2 text-sm font-semibold text-white">Upgrade to deploy</a>
          </div>
        </div>
      )}
    </section>
  );
};

export default BuilderForm;
