import {
  AnimatedButton,
  AnimatedButtonCode,
} from "@/components/examples/animated-button"
import { HoverCard, HoverCardCode } from "@/components/examples/hover-card"
import { ShowcaseGrid } from "@/components/showcase-grid"
import { ShowcaseItem } from "@/components/showcase-item"
import { Header } from "@/components/heading"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto py-12 space-y-12">
        <Header />
        <ShowcaseGrid>
          <ShowcaseItem
            title="Animated Button"
            description="A simple button with hover and tap animations"
            code={AnimatedButtonCode}
          >
            <AnimatedButton />
          </ShowcaseItem>

          <ShowcaseItem
            title="3D Hover Card"
            description="A card with a 3D hover effect using Framer Motion"
            code={HoverCardCode}
          >
            <HoverCard />
          </ShowcaseItem>
        </ShowcaseGrid>
      </main>
    </div>
  )
}
