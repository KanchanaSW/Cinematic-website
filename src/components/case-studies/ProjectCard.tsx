type ProjectCardProps = {
  title: string
  image: string
  aspectClass?: string
  featured?: boolean
}

function TrafficLights() {
  return (
    <div className="flex gap-2" aria-hidden>
      <span className="h-3 w-3 rounded-full bg-red-500" />
      <span className="h-3 w-3 rounded-full bg-yellow-500" />
      <span className="h-3 w-3 rounded-full bg-green-500" />
    </div>
  )
}

export function ProjectCard({
  title,
  image,
  aspectClass = 'aspect-[4/3]',
  featured = false,
}: ProjectCardProps) {
  return (
    <article
      className={`group relative overflow-hidden rounded-lg glass-border backdrop-blur-sm transition-colors duration-200 ${aspectClass}`}
    >
      {featured && (
        <div className="absolute top-4 left-4 z-10">
          <TrafficLights />
        </div>
      )}
      <img
        src={image}
        alt={title}
        loading="lazy"
        className="h-full w-full object-cover grayscale transition-all duration-200 group-hover:grayscale-0"
      />
      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-6">
        <h3 className="text-sm font-bold tracking-[0.2em] uppercase md:text-base">
          {title}
        </h3>
      </div>
    </article>
  )
}
