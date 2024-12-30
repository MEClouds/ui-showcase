import { Github } from "lucide-react"

export const Navbar = () => {
  return (
    <header className="sticky top-0 mx-4 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center  justify-between">
        <h1 className="text-2xl font-bold">UI Showcase</h1>
        <a
          href="https://github.com/MEClouds"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
        >
          <Github className="h-5 w-5  " />
          <span className="hidden sm:inline">View on GitHub</span>
        </a>
      </div>
    </header>
  )
}
