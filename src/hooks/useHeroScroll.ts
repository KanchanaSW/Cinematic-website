import { useEffect, useRef } from 'react'
import gsap from 'gsap'

export function useHeroScroll() {
  const bgTextRef = useRef<HTMLHeadingElement>(null)

  useEffect(() => {
    const bgText = bgTextRef.current
    if (!bgText) return

    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches

    if (prefersReducedMotion) {
      bgText.style.opacity = '0.3'
      return
    }

    const tween = gsap.fromTo(
      bgText,
      { opacity: 1 },
      {
        opacity: 0.3,
        ease: 'none',
        scrollTrigger: {
          trigger: bgText.closest('section'),
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      },
    )

    return () => {
      tween.scrollTrigger?.kill()
      tween.kill()
    }
  }, [])

  return bgTextRef
}
