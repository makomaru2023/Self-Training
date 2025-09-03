
import PriceCard from '@/components/PriceCard';
import type { PricePlan } from '@/types';

const plans: PricePlan[] = [
  { id: 'basic', name: 'Basic', items: 30, price: 980, badge: '準備中' },
  { id: 'standard', name: 'Standard', items: 80, price: 1980, badge: '準備中' },
  { id: 'pro', name: 'Pro', items: 150, price: 2980, badge: '準備中' }
];

export default function PricingPage() {
  return (
    <div className="container py-12">
      <h1 className="text-3xl font-bold text-center mb-10">料金プラン</h1>
      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {plans.map((plan, i) => (
          <PriceCard key={plan.id} plan={plan} featured={i === 1} />
        ))}
      </div>

      <div className="mt-10 text-center text-gray-600">
        有料プランは準備中です。リリース通知をご希望の方はXをご確認ください。
      </div>
    </div>
  );
}
