import { useEffect, useRef } from 'react'
import gsap from 'gsap'

export function useCubeRotation() {
  const cubeRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const cube = cubeRef.current
    if (!cube) return

    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches

    if (prefersReducedMotion) return

    const tween = gsap.to(cube, {
      rotateX: 360,
      duration: 20,
      repeat: -1,
      ease: 'none',
    })

    return () => {
      tween.kill()
    }
  }, [])

  return cubeRef
}
