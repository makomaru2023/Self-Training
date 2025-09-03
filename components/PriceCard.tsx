
import type { PricePlan } from '@/types';

export default function PriceCard({ plan, featured = false }: { plan: PricePlan; featured?: boolean }) {
  return (
    <div className={`card p-6 relative ${featured ? 'ring-2 ring-primary-600' : ''}`}>
      {plan.badge && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-yellow-300 text-yellow-900 text-xs font-bold px-3 py-1 rounded-full">
          {plan.badge}
        </span>
      )}

      <div className="text-center mb-5">
        <h3 className="text-xl font-bold">{plan.name}</h3>
        <p className="text-gray-600">{plan.items}点の素材</p>
      </div>

      <div className="text-center mb-5">
        <span className="text-4xl font-bold">¥{plan.price.toLocaleString()}</span>
        <span className="text-gray-600 ml-2">（税込）</span>
      </div>

      <button
        disabled
        className="w-full px-5 py-3 rounded-lg bg-gray-100 text-gray-400 cursor-not-allowed"
        title="準備中です"
      >
        準備中
      </button>
    </div>
  );
}
