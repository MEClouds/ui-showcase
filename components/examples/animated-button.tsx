"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

export function AnimatedButton() {
  return (
    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
      <Button>Hover Me</Button>
    </motion.div>
  )
}

export const AnimatedButtonCode = `"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"


export function AnimatedButton() {
  return (
    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
      <Button>Hover Me</Button>
    </motion.div>
  )
}`
