import type { ShowcaseGridProps } from "../types/showcase"

export function ShowcaseGrid({ children }: ShowcaseGridProps) {
  return (
    <div className="flex items-center justify-center">
      <div className=" grid gap-8 sm:gap-6 md:grid-cols-2 lg:grid-cols-2 container px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </div>
  )
}
