import { brand, navLinks } from '../../data/siteContent'

export function StickyNav() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-6 mix-blend-difference">
      <a href="#home" className="flex items-center gap-3">
        <span
          className="h-2.5 w-2.5 shrink-0 animate-pulse rounded-full bg-red-500"
          aria-hidden
        />
        <span className="text-sm font-bold tracking-wider uppercase md:text-base">
          {brand.name}
        </span>
      </a>

      <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-10 md:flex">
        {navLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="text-xs font-bold tracking-[0.2em] uppercase transition-opacity duration-200 hover:opacity-70"
          >
            {link.label}
          </a>
        ))}
      </nav>

      <a
        href="#pricing"
        className="accent-gradient rounded-full px-5 py-2.5 text-xs font-bold tracking-wider uppercase transition-transform duration-200 hover:scale-[1.02] md:px-6 md:text-sm"
      >
        GET STARTED
      </a>
    </header>
  )
}
