"use client"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { useState } from "react"
import { motion } from "framer-motion"
import { Copy, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import type { ShowcaseItemProps } from "../types/showcase"
import { tomorrow } from "react-syntax-highlighter/dist/cjs/styles/prism"

export function ShowcaseItem({
  title,
  description,
  code,
  children,
}: ShowcaseItemProps) {
  const [showCode, setShowCode] = useState(false)
  const [copied, setCopied] = useState(false)

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full"
    >
      <Card className="overflow-hidden group  mx-auto">
        <div className="p-6 space-y-6">
          <div className="space-y-2">
            <h3 className="text-2xl font-bold tracking-tight">{title}</h3>
            <p className="text-muted-foreground">{description}</p>
          </div>

          <div className="rounded-lg border bg-muted/50 p-6 transition-colors group-hover:border-primary/50">
            <div className="flex items-center justify-center p-10">
              {children}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 sm:justify-between sm:items-center">
            <Button
              variant="outline"
              onClick={() => setShowCode(!showCode)}
              className="w-full sm:w-auto"
            >
              {showCode ? "Hide Code" : "View Code"}
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={copyToClipboard}
              className="hidden sm:inline-flex text-muted-foreground hover:text-foreground"
            >
              {copied ? (
                <Check className="h-4 w-4" />
              ) : (
                <Copy className="h-4 w-4" />
              )}
            </Button>
          </div>

          {showCode && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="relative"
            >
              <SyntaxHighlighter
                language="jsx"
                style={tomorrow}
                className="rounded-lg font-mono text-sm"
              >
                {code.trim()}
              </SyntaxHighlighter>

              <Button
                variant="ghost"
                size="icon"
                onClick={copyToClipboard}
                className="absolute top-2 right-2 sm:hidden text-muted-foreground hover:text-foreground"
              >
                {copied ? (
                  <Check className="h-4 w-4" />
                ) : (
                  <Copy className="h-4 w-4" />
                )}
              </Button>
            </motion.div>
          )}
        </div>
      </Card>
    </motion.div>
  )
}
