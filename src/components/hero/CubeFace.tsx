type CubeFaceProps = {
  label: string
  image: string
  transformClass: string
  eager?: boolean
}

export function CubeFace({
  label,
  image,
  transformClass,
  eager = false,
}: CubeFaceProps) {
  return (
    <div
      className={`absolute inset-0 overflow-hidden rounded-2xl glass-border ${transformClass}`}
      style={{ backfaceVisibility: 'hidden' }}
    >
      <img
        src={image}
        alt={label}
        loading={eager ? 'eager' : 'lazy'}
        className="h-full w-full object-cover"
      />
      <div className="absolute inset-0 flex items-center justify-center bg-black/10">
        <span className="text-2xl font-bold tracking-[0.2em] uppercase md:text-3xl">
          {label}
        </span>
      </div>
    </div>
  )
}
