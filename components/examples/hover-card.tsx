"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"

export function HoverCard() {
  return (
    <motion.div
      whileHover={{
        rotateY: 15,
        rotateX: 15,
        scale: 1.05,
      }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <Card className="p-4 bg-gradient-to-br from-purple-500 to-pink-500 text-white">
        <h4 className="text-lg font-bold">3D Hover Effect</h4>
        <p>Hover over this card to see the effect</p>
      </Card>
    </motion.div>
  )
}

export const HoverCardCode = `'use client'

import { motion } from 'framer-motion'
import { Card } from '@/components/ui/card'

export function HoverCard() {
  return (
    <motion.div
      whileHover={{ 
        rotateY: 15,
        rotateX: 15,
        scale: 1.05
      }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <Card className="p-4 bg-gradient-to-br from-purple-500 to-pink-500 text-white">
        <h4 className="text-lg font-bold">3D Hover Effect</h4>
        <p>Hover over this card to see the effect</p>
      </Card>
    </motion.div>
  )
}`
