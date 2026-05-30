import { caseStudies } from '../../data/siteContent'
import { ProjectCard } from './ProjectCard'

export function CaseStudiesGrid() {
  const { title, featured, projects } = caseStudies

  return (
    <section
      id="portfolio"
      className="bg-cinematic px-6 py-24 md:py-32"
    >
      <div className="mx-auto max-w-[90rem]">
        <h2 className="mb-16 text-[10vw] leading-none font-black tracking-tighter uppercase">
          {title}
        </h2>

        <div className="mb-6">
          <ProjectCard
            title={featured.title}
            image={featured.image}
            aspectClass="aspect-video"
            featured
          />
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              image={project.image}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
