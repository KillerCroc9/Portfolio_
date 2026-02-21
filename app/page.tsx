"use client"

import { SvgBackground } from "@/components/svg-background"
// Portfolio page - renders the static HTML portfolio as a Next.js page for preview

const videos = {
  movieShorts: [
    { src: "https://www.youtube.com/embed/SKD7Bxq41a8?loop=1&playlist=SKD7Bxq41a8", title: "George Washington" },
    { src: "https://www.youtube.com/embed/643ba2nN2Jk?loop=1&playlist=643ba2nN2Jk", title: "The Promise Unkept" },
  ],
  ads: [
    { src: "https://www.youtube.com/embed/4eatWipS-0k?loop=1&playlist=4eatWipS-0k", title: "Niki Product Showcase" },
    { src: "https://www.youtube.com/embed/y03qlguaX1c?loop=1&playlist=y03qlguaX1c", title: "Product Ad Example" },
    { src: "https://www.youtube.com/embed/xAGDRRxfhKA?loop=1&playlist=xAGDRRxfhKA", title: "Market Campaign" },
    { src: "https://www.youtube.com/embed/YkisLmYsBiY?loop=1&playlist=YkisLmYsBiY", title: "Generated Ad Output" },
  ],
  architecture: [
    { src: "https://www.youtube.com/embed/PSnfUz9hrjQ?loop=1&playlist=PSnfUz9hrjQ", title: "Final Architectural Demo" },
    { src: "https://www.youtube.com/embed/yGvD7qlnTxw?loop=1&playlist=yGvD7qlnTxw", title: "Architectural Demo Video" },
  ],
}

const characterImages = [
  { src: "/assets/generative-ai/Image01.jpg", alt: "Character Scene 1" },
  { src: "/assets/generative-ai/Image02.jpg", alt: "Character Scene 2" },
  { src: "/assets/generative-ai/Image03.jpg", alt: "Character Scene 3" },
  { src: "/assets/generative-ai/Image04.jpg", alt: "Character Scene 4" },
  { src: "/assets/generative-ai/Image05.jpg", alt: "Character Scene 5" },
  { src: "/assets/generative-ai/Image06.jpg", alt: "Character Scene 6" },
]

const spriteImages = [
  { src: "/assets/generative-ai/SpriteSheet BlueBird.png", alt: "Sprite Sheet BlueBird" },
  { src: "/assets/generative-ai/SpriteSheet Cute Anime.png", alt: "Sprite Sheet Cute Anime" },
]

function VideoGrid({ items }: { items: { src: string; title: string }[] }) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
        gap: "1.5rem",
      }}
    >
      {items.map((v) => (
        <iframe
          key={v.src}
          style={{
            aspectRatio: "16/9",
            width: "100%",
            borderRadius: "0.75rem",
            border: "1px solid #222",
            background: "#181818",
          }}
          src={v.src}
          title={v.title}
          allowFullScreen
        />
      ))}
    </div>
  )
}

function ImageGallery({ items }: { items: { src: string; alt: string }[] }) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
        gap: "1rem",
        marginBottom: "2rem",
      }}
    >
      {items.map((img) => (
        <img
          key={img.src}
          src={img.src}
          alt={img.alt}
          style={{
            width: "100%",
            borderRadius: "0.75rem",
            background: "#181818",
            border: "1px solid #222",
            objectFit: "cover",
          }}
        />
      ))}
    </div>
  )
}

function Section({
  title,
  description,
  children,
}: {
  title: string
  description: string
  children: React.ReactNode
}) {
  return (
    <section style={{ margin: "3rem 0", position: "relative", zIndex: 1 }}>
      <div
        style={{
          fontSize: "2rem",
          fontWeight: 300,
          marginBottom: "0.5rem",
          color: "#fff",
        }}
      >
        {title}
      </div>
      <div style={{ color: "#b0b0b0", marginBottom: "2rem" }}>{description}</div>
      {children}
    </section>
  )
}

export default function Page() {
  return (
    <div
      style={{
        margin: 0,
        background: "#0a0a0a",
        color: "#f3f3f3",
        minHeight: "100vh",
      }}
    >
      <SvgBackground />

      <div
        style={{
          maxWidth: 900,
          margin: "0 auto",
          padding: "2rem 1rem",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* Hero */}
        <section
          style={{
            textAlign: "center",
            padding: "2.5rem 1rem",
            position: "relative",
            zIndex: 1,
            animation: "fadeIn 1.2s both",
          }}
        >
          <div
            style={{
              fontSize: "3rem",
              fontWeight: 300,
              letterSpacing: "-2px",
              marginBottom: "1rem",
              color: "#fff",
              animation: "fadeIn 1.2s both",
            }}
          >
            KillerCroc9
          </div>
          <div
            style={{
              color: "#b0b0b0",
              fontSize: "1.25rem",
              marginBottom: "2rem",
              animation: "fadeIn 1.2s both",
            }}
          >
            Exploring the frontiers of AI-generated content. From animated
            narratives to architectural visions, pushing the boundaries of what
            machines can create.
          </div>
          <div
            style={{
              marginTop: "2.5rem",
              display: "flex",
              justifyContent: "center",
              gap: "1.5rem",
              animation: "fadeIn 1.2s 0.2s both",
            }}
          >
            <button
              className="hero-btn"
              onClick={() => {
                document
                  .querySelector<HTMLElement>(".portfolio-section")
                  ?.scrollIntoView({ behavior: "smooth" })
              }}
            >
              View Work
            </button>
            <a href="mailto:Muqeeta2@gmail.com" className="hero-btn">
              Get in Touch
            </a>
          </div>
        </section>

        {/* Sections */}
        <div className="portfolio-section">
          <Section
            title="AI-Generated Animated Movie Shorts"
            description="Crafting compelling narratives through AI-powered animation, bringing stories to life with cutting-edge generative technology."
          >
            <VideoGrid items={videos.movieShorts} />
          </Section>

          <Section
            title="AI-Generated Ad Creation"
            description="Transforming brand storytelling with AI-crafted advertisements that captivate and convert."
          >
            <VideoGrid items={videos.ads} />
          </Section>

          <Section
            title="Architectural Visualization Demo"
            description="Reimagining spaces through AI-powered architectural rendering and visualization."
          >
            <VideoGrid items={videos.architecture} />
          </Section>

          <Section
            title="Consistent Character Across Multiple Scenes"
            description="Demonstrating AI's ability to maintain character identity and style consistency across varied contexts and environments."
          >
            <ImageGallery items={characterImages} />
          </Section>

          <Section
            title="AI-Powered Sprite Sheet Generator"
            description="Automated game asset creation with consistent style and animation-ready sprite sheets."
          >
            <ImageGallery items={spriteImages} />
          </Section>
        </div>
      </div>

      {/* Footer */}
      <footer
        style={{
          marginTop: "4rem",
          padding: "2rem 0",
          textAlign: "center",
          color: "#b0b0b0",
          fontSize: "1rem",
          borderTop: "1px solid #222",
          position: "relative",
          zIndex: 1,
        }}
      >
        <div style={{ marginBottom: "0.5rem" }}>
          &copy; 2026 KillerCroc9. All rights reserved.
        </div>
        <div style={{ marginBottom: "0.5rem" }}>
          <a
            href="https://github.com/KillerCroc9"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#00d4ff", margin: "0 1rem", textDecoration: "none" }}
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/abdul-muqeet-765283207/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#00d4ff", margin: "0 1rem", textDecoration: "none" }}
          >
            LinkedIn
          </a>
          <a
            href="mailto:Muqeeta2@gmail.com"
            style={{ color: "#00d4ff", margin: "0 1rem", textDecoration: "none" }}
          >
            Email
          </a>
        </div>
      </footer>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: none; }
        }
        .hero-btn {
          background: #111;
          color: #fff;
          border: 2px solid #fff;
          border-radius: 2rem;
          padding: 0.85rem 2.2rem;
          font-size: 1.1rem;
          font-family: inherit;
          font-weight: 500;
          letter-spacing: 0.5px;
          cursor: pointer;
          box-shadow: 0 2px 16px 0 rgba(0,0,0,0.5);
          transition: transform 0.18s cubic-bezier(.4,2,.6,1), box-shadow 0.18s, background 0.18s, color 0.18s;
          outline: none;
          position: relative;
          z-index: 1;
          text-decoration: none;
          display: inline-block;
        }
        .hero-btn:hover, .hero-btn:focus {
          background: #222;
          color: #fff;
          transform: translateY(-3px) scale(1.04);
          box-shadow: 0 4px 32px 0 rgba(255,255,255,0.13);
        }
      `}</style>
    </div>
  )
}
