import { useState } from 'react'

const MIN = 1
const MAX = 100
const MULTIPLIER = 125

export function PriceCalculator() {
  const [value, setValue] = useState(20)
  const price = value * MULTIPLIER

  return (
    <div className="mt-16 rounded-[32px] bg-calc-bg p-8 md:p-12">
      <label
        htmlFor="price-estimate"
        className="mb-2 block text-sm font-bold tracking-[0.2em] uppercase text-text-secondary"
      >
        Estimate your project
      </label>
      <p
        className="mb-8 text-5xl font-black md:text-6xl"
        aria-live="polite"
      >
        ${price.toLocaleString()}
      </p>
      <input
        id="price-estimate"
        type="range"
        min={MIN}
        max={MAX}
        value={value}
        onChange={(e) => setValue(Number(e.target.value))}
        className="price-slider"
        aria-valuemin={MIN}
        aria-valuemax={MAX}
        aria-valuenow={value}
        aria-valuetext={`$${price.toLocaleString()}`}
      />
      <div className="mt-4 flex justify-between text-xs tracking-wider text-text-secondary uppercase">
        <span>Small scope</span>
        <span>Enterprise scale</span>
      </div>
    </div>
  )
}
