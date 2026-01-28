import { Github, Linkedin, Mail } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer id="contact" className="py-24 md:py-32 px-6 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          <div className="md:col-span-2">
            <h2 className="text-3xl md:text-4xl font-light tracking-tight text-foreground mb-4">
              {"Let's work together"}
            </h2>
            <p className="text-muted-foreground max-w-md leading-relaxed">
              Interested in collaborating on AI-powered creative projects? 
              {"I'm always open to discussing new opportunities."}
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <p className="text-muted-foreground text-xs tracking-widest uppercase">
              Connect
            </p>
            <div className="flex flex-col gap-3">
              <a
                href="https://github.com/KillerCroc9"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 text-foreground hover:text-muted-foreground transition-colors group"
              >
                <Github className="w-5 h-5" />
                <span className="text-sm">GitHub</span>
                <span className="text-xs text-muted-foreground group-hover:translate-x-1 transition-transform">
                  {"\u2192"}
                </span>
              </a>
              <a
                href="https://www.linkedin.com/in/aditya-jagdale-994b3b1a9/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 text-foreground hover:text-muted-foreground transition-colors group"
              >
                <Linkedin className="w-5 h-5" />
                <span className="text-sm">LinkedIn</span>
                <span className="text-xs text-muted-foreground group-hover:translate-x-1 transition-transform">
                  {"\u2192"}
                </span>
              </a>
              <a
                href="mailto:adityajagdale2001@gmail.com"
                className="inline-flex items-center gap-3 text-foreground hover:text-muted-foreground transition-colors group"
              >
                <Mail className="w-5 h-5" />
                <span className="text-sm">Email</span>
                <span className="text-xs text-muted-foreground group-hover:translate-x-1 transition-transform">
                  {"\u2192"}
                </span>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            {"\u00A9"} {currentYear} KillerCroc9. All rights reserved.
          </p>
          <p className="text-muted-foreground text-xs">
            Built with AI-assisted development
          </p>
        </div>
      </div>
    </footer>
  )
}
