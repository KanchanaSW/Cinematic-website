import { brand } from '../../data/siteContent'
import { useHeroScroll } from '../../hooks/useHeroScroll'
import { TransformCube } from './TransformCube'

export function RolodexHero() {
  const bgTextRef = useHeroScroll()

  return (
    <section
      id="home"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-cinematic px-4 pt-24"
    >
      <h1
        ref={bgTextRef}
        className="pointer-events-none absolute top-1/2 left-1/2 z-0 w-full -translate-x-1/2 -translate-y-1/2 text-center text-[12vw] leading-none font-black tracking-tighter whitespace-nowrap uppercase"
        aria-hidden
      >
        {brand.name}
      </h1>

      <TransformCube />

      <div className="absolute bottom-12 left-1/2 z-20 flex -translate-x-1/2 flex-col items-center gap-3">
        <span className="h-8 w-px bg-white" aria-hidden />
        <span className="text-[10px] tracking-[0.3em] uppercase text-text-secondary">
          SCROLL DOWN
        </span>
      </div>
    </section>
  )
}
