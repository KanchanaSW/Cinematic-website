import { brand, footer } from '../../data/siteContent'

export function EditorialFooter() {
  return (
    <footer
      id="about"
      className="border-t border-white/10 bg-cinematic px-6 py-24 md:py-32"
    >
      <div className="mx-auto max-w-[90rem]">
        <h2 className="text-[10vw] leading-none font-black tracking-tighter uppercase">
          {footer.headline}
        </h2>
        <p className="mt-8 max-w-xl font-light text-text-secondary">
          {brand.tagline}. We craft immersive digital experiences with brutalist
          precision and cinematic motion.
        </p>

        <nav className="mt-12 flex flex-wrap gap-8">
          {footer.links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-bold tracking-[0.2em] uppercase transition-opacity duration-200 hover:opacity-70"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <p className="mt-16 text-xs tracking-[0.2em] text-text-secondary uppercase">
          {footer.copyright}
        </p>
      </div>
    </footer>
  )
}
