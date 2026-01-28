import { HeroSection } from "@/components/hero-section"
import { ProjectSection } from "@/components/project-section"
import { GallerySection } from "@/components/gallery-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      
      <ProjectSection
        id="movie-shorts"
        title="AI-Generated Animated Movie Shorts"
        description="Crafting compelling narratives through AI-powered animation, bringing stories to life with cutting-edge generative technology."
        videos={[
          { id: "7W1X5X0pblY", title: "Animated Short 1" },
          { id: "U_g4wYxWiaw", title: "Animated Short 2" },
        ]}
      />

      <ProjectSection
        id="ad-creation"
        title="AI-Generated Ad Creation"
        description="Transforming brand storytelling with AI-crafted advertisements that captivate and convert."
        videos={[
          { id: "2hKxQ2HjGb0", title: "Ad Creation 1" },
          { id: "AxxqFDUCezI", title: "Ad Creation 2" },
          { id: "RnK_3sZMxpE", title: "Ad Creation 3" },
          { id: "kLTa1bqb7nU", title: "Ad Creation 4" },
        ]}
      />

      <GallerySection
        id="character-consistency"
        title="Consistent Character Across Multiple Scenes"
        description="Demonstrating AI's ability to maintain character identity and style consistency across varied contexts and environments."
        images={[
          "/placeholder.svg?height=400&width=300",
          "/placeholder.svg?height=400&width=300",
          "/placeholder.svg?height=400&width=300",
          "/placeholder.svg?height=400&width=300",
          "/placeholder.svg?height=400&width=300",
          "/placeholder.svg?height=400&width=300",
        ]}
      />

      <ProjectSection
        id="architectural"
        title="Architectural Visualization Demo"
        description="Reimagining spaces through AI-powered architectural rendering and visualization."
        videos={[
          { id: "T-yT-TL2oWQ", title: "Architectural Demo 1" },
          { id: "dj5tDMLvZuw", title: "Architectural Demo 2" },
        ]}
      />

      <ProjectSection
        id="sprite-generator"
        title="AI-Powered Sprite Sheet Generator"
        description="Automated game asset creation with consistent style and animation-ready sprite sheets."
        videos={[
          { id: "S5dTT8NLJzA", title: "Sprite Generator Demo" },
        ]}
        extraContent={
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-lg border border-border overflow-hidden bg-card">
              <img
                src="/placeholder.svg?height=300&width=600"
                alt="Sprite Sheet Example 1"
                className="w-full h-auto"
              />
            </div>
            <div className="rounded-lg border border-border overflow-hidden bg-card">
              <img
                src="/placeholder.svg?height=300&width=600"
                alt="Sprite Sheet Example 2"
                className="w-full h-auto"
              />
            </div>
          </div>
        }
      />

      <Footer />
    </main>
  )
}
