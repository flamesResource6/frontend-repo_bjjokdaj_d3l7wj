import React from 'react';
import { Crown, BadgeCheck } from 'lucide-react';

const tiers = [
  {
    name: 'Free',
    price: '₹0',
    subtitle: 'Try the builder with limits',
    features: [
      '20 AI builds included',
      'Access to 3D builder UI',
      'Community support',
    ],
    cta: 'Start for free',
    highlight: false,
  },
  {
    name: 'Premium',
    price: '₹800 / month',
    subtitle: 'Faster builds and deploys',
    features: [
      'Unlimited AI builds',
      'Priority deploy pipeline',
      'Custom domains',
      'Basic analytics',
    ],
    cta: 'Upgrade to Premium',
    highlight: true,
  },
  {
    name: 'Pro',
    price: '₹10,000 / month',
    subtitle: 'For power users & teams',
    features: [
      'Everything in Premium',
      'Team collaboration',
      'Advanced security suite',
      'SLA + support',
    ],
    cta: 'Go Pro',
    highlight: false,
  },
];

const Pricing = () => {
  return (
    <section id="pricing" className="relative mx-auto mt-16 max-w-6xl px-6">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold text-white">Simple pricing</h2>
        <p className="mt-2 text-white/70">Start free. Upgrade when you need more power and unlimited builds.</p>
      </div>

      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {tiers.map((t) => (
          <div
            key={t.name}
            className={`relative rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent p-6 text-white ${
              t.highlight ? 'ring-2 ring-indigo-400/50' : ''
            }`}
          >
            {t.highlight && (
              <div className="absolute -top-3 left-6 inline-flex items-center gap-1 rounded-full bg-indigo-500 px-2 py-1 text-xs font-semibold text-white">
                <Crown className="h-3.5 w-3.5" /> Most popular
              </div>
            )}
            <div className="text-sm text-white/70">{t.name}</div>
            <div className="mt-1 text-3xl font-bold">{t.price}</div>
            <div className="text-sm text-white/60">{t.subtitle}</div>
            <ul className="mt-4 space-y-2 text-sm">
              {t.features.map((f) => (
                <li key={f} className="flex items-center gap-2">
                  <BadgeCheck className="h-4 w-4 text-emerald-300" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
            <button className="mt-6 w-full rounded-xl bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-cyan-400 px-4 py-2 font-semibold text-white shadow-md shadow-indigo-500/30 transition hover:brightness-110">
              {t.cta}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Pricing;
