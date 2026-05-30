type PricingCardProps = {
  name: string
  price: string
  description: string
  features: string[]
  highlighted?: boolean
}

export function PricingCard({
  name,
  price,
  description,
  features,
  highlighted = false,
}: PricingCardProps) {
  if (highlighted) {
    return (
      <article className="relative z-10 flex scale-105 flex-col rounded-2xl bg-white p-8 text-[#111111] md:p-10">
        <h3 className="text-sm font-bold tracking-[0.2em] uppercase">{name}</h3>
        <p className="mt-4 text-4xl font-black md:text-5xl">{price}</p>
        <p className="mt-4 text-base font-light text-[#555555]">{description}</p>
        <ul className="mt-8 flex flex-col gap-3">
          {features.map((feature) => (
            <li key={feature} className="text-sm font-medium">
              {feature}
            </li>
          ))}
        </ul>
        <button
          type="button"
          className="accent-gradient mt-10 rounded-full px-6 py-3 text-sm font-bold tracking-wider uppercase text-white transition-transform duration-200 hover:scale-[1.02]"
        >
          GET STARTED
        </button>
      </article>
    )
  }

  return (
    <article className="flex flex-col rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-md md:p-10">
      <h3 className="text-sm font-bold tracking-[0.2em] uppercase text-text-secondary">
        {name}
      </h3>
      <p className="mt-4 text-4xl font-black md:text-5xl">{price}</p>
      <p className="mt-4 font-light text-text-secondary">{description}</p>
      <ul className="mt-8 flex flex-col gap-3 text-text-secondary">
        {features.map((feature) => (
          <li key={feature} className="text-sm">
            {feature}
          </li>
        ))}
      </ul>
      <button
        type="button"
        className="mt-10 rounded-full border border-white/10 px-6 py-3 text-sm font-bold tracking-wider uppercase transition-all duration-200 hover:scale-[1.02] hover:border-white/30"
      >
        GET STARTED
      </button>
    </article>
  )
}
