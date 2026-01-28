"use client"

import { useEffect, useRef } from "react"
import Link from "next/link"
import { ArrowDown } from "lucide-react"

export function HeroSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    interface Star {
      x: number
      y: number
      size: number
      speed: number
      opacity: number
    }

    const stars: Star[] = []
    const numStars = 100

    for (let i = 0; i < numStars; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 1.5 + 0.5,
        speed: Math.random() * 0.5 + 0.1,
        opacity: Math.random() * 0.5 + 0.3,
      })
    }

    interface ShootingStar {
      x: number
      y: number
      length: number
      speed: number
      opacity: number
      angle: number
    }

    const shootingStars: ShootingStar[] = []

    const createShootingStar = () => {
      if (shootingStars.length < 3 && Math.random() < 0.01) {
        shootingStars.push({
          x: Math.random() * canvas.width,
          y: 0,
          length: Math.random() * 80 + 40,
          speed: Math.random() * 8 + 6,
          opacity: 1,
          angle: Math.PI / 4 + (Math.random() - 0.5) * 0.3,
        })
      }
    }

    const animate = () => {
      ctx.fillStyle = "rgba(10, 10, 10, 0.1)"
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      stars.forEach((star) => {
        ctx.beginPath()
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`
        ctx.fill()

        star.y += star.speed
        if (star.y > canvas.height) {
          star.y = 0
          star.x = Math.random() * canvas.width
        }
      })

      createShootingStar()

      shootingStars.forEach((star, index) => {
        const gradient = ctx.createLinearGradient(
          star.x,
          star.y,
          star.x - Math.cos(star.angle) * star.length,
          star.y - Math.sin(star.angle) * star.length
        )
        gradient.addColorStop(0, `rgba(255, 255, 255, ${star.opacity})`)
        gradient.addColorStop(1, "rgba(255, 255, 255, 0)")

        ctx.beginPath()
        ctx.moveTo(star.x, star.y)
        ctx.lineTo(
          star.x - Math.cos(star.angle) * star.length,
          star.y - Math.sin(star.angle) * star.length
        )
        ctx.strokeStyle = gradient
        ctx.lineWidth = 2
        ctx.stroke()

        star.x += Math.cos(star.angle) * star.speed
        star.y += Math.sin(star.angle) * star.speed
        star.opacity -= 0.01

        if (star.opacity <= 0 || star.y > canvas.height || star.x > canvas.width) {
          shootingStars.splice(index, 1)
        }
      })

      requestAnimationFrame(animate)
    }

    ctx.fillStyle = "#0a0a0a"
    ctx.fillRect(0, 0, canvas.width, canvas.height)
    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
    }
  }, [])

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 -z-10"
        aria-hidden="true"
      />
      
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <p className="text-muted-foreground text-sm tracking-widest uppercase mb-4">
          Generative AI Portfolio
        </p>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-light tracking-tight text-foreground mb-6 text-balance">
          KillerCroc9
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed text-pretty">
          Exploring the frontiers of AI-generated content. From animated narratives 
          to architectural visions, pushing the boundaries of what machines can create.
        </p>
        
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="#movie-shorts"
            className="inline-flex items-center gap-2 px-8 py-3 border border-foreground text-foreground hover:bg-foreground hover:text-background transition-colors duration-300 text-sm tracking-wide"
          >
            View Work
          </Link>
          <Link
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-3 text-muted-foreground hover:text-foreground transition-colors duration-300 text-sm tracking-wide"
          >
            Get in Touch
          </Link>
        </div>
      </div>

      <Link
        href="#movie-shorts"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-foreground transition-colors animate-bounce"
        aria-label="Scroll to projects"
      >
        <ArrowDown className="w-6 h-6" />
      </Link>
    </section>
  )
}
