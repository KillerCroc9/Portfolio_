import type { ReactNode } from "react"

interface Video {
  id: string
  title: string
}

interface ProjectSectionProps {
  id: string
  title: string
  description: string
  videos: Video[]
  extraContent?: ReactNode
}

export function ProjectSection({
  id,
  title,
  description,
  videos,
  extraContent,
}: ProjectSectionProps) {
  return (
    <section id={id} className="py-24 md:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12 md:mb-16">
          <p className="text-muted-foreground text-xs tracking-widest uppercase mb-3">
            Project
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light tracking-tight text-foreground mb-4 text-balance">
            {title}
          </h2>
          <p className="text-muted-foreground max-w-2xl leading-relaxed text-pretty">
            {description}
          </p>
        </div>

        <div
          className={`grid gap-6 ${
            videos.length === 1
              ? "grid-cols-1 max-w-3xl"
              : videos.length === 2
                ? "grid-cols-1 md:grid-cols-2"
                : videos.length === 3
                  ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
                  : "grid-cols-1 md:grid-cols-2"
          }`}
        >
          {videos.map((video) => (
            <div
              key={video.id}
              className="group relative aspect-video rounded-lg overflow-hidden border border-border bg-card"
            >
              <iframe
                src={`https://www.youtube.com/embed/${video.id}`}
                title={video.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
              />
            </div>
          ))}
        </div>

        {extraContent}
      </div>
    </section>
  )
}
