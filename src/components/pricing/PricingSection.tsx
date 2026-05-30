import { pricingTiers } from '../../data/siteContent'
import { PriceCalculator } from './PriceCalculator'
import { PricingCard } from './PricingCard'

export function PricingSection() {
  return (
    <section
      id="pricing"
      className="relative overflow-hidden bg-pricing-bg px-6 py-24 md:py-32"
    >
      <div
        className="pointer-events-none absolute top-1/2 left-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-glow-purple opacity-30 blur-[100px]"
        aria-hidden
      />

      <div className="relative mx-auto max-w-[90rem]">
        <h2 className="mb-16 text-center text-[10vw] leading-none font-black tracking-tighter uppercase">
          PRICING
        </h2>

        <div className="grid items-center gap-8 md:grid-cols-3">
          {pricingTiers.map((tier) => (
            <PricingCard
              key={tier.name}
              name={tier.name}
              price={tier.price}
              description={tier.description}
              features={tier.features}
              highlighted={tier.highlighted}
            />
          ))}
        </div>

        <PriceCalculator />
      </div>
    </section>
  )
}
