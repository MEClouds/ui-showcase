"use client"
import { AnimatePresence, motion, useAnimationControls } from "framer-motion"
import { useState, useEffect } from "react"

export default function CountdownImageFade() {
  const totalTime = 10 // Total countdown time in seconds
  const [remainingTime, setRemainingTime] = useState(totalTime)
  const controls = useAnimationControls()

  useEffect(() => {
    if (remainingTime > 0) {
      const timer = setTimeout(() => {
        setRemainingTime((prev) => prev - 1)
      }, 1000)

      return () => clearTimeout(timer)
    }
  }, [remainingTime])

  // Animate the conic gradient mask
  useEffect(() => {
    const progress = ((remainingTime - 1) / totalTime) * 360
    controls.start({
      maskImage: `conic-gradient( black ${progress}deg,transparent ${progress}deg)`,
      WebkitMaskImage: `conic-gradient( black ${progress}deg,transparent ${progress}deg)`,
    })
  }, [remainingTime, controls])

  return (
    <div className="flex-col justify-center items-center  ">
      <div className="relative w-40 h-40 shadow-md  bg-gray-300 rounded-lg">
        {/* Image with Mask */}
        <motion.div
          className="absolute inset-0 "
          style={{
            borderRadius: 20,
            margin: 10,
            backgroundImage: "url('/image.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          animate={controls}
          transition={{
            duration: 1, // Smooth transition between mask states
            ease: "linear",
          }}
        ></motion.div>
      </div>
      {remainingTime === 0 ? (
        <AnimatePresence>
          <motion.button
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            onClick={() => setRemainingTime(11)}
            className=" w-full mt-2 bg-gray-500 text-white p-2 rounded-lg"
          >
            Reset
          </motion.button>
        </AnimatePresence>
      ) : (
        <div className="flex mt-2 items-center justify-center ">
          <motion.span
            className="text-3xl font-bold text-muted-foreground"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            key={remainingTime} // Animates on number change
          >
            {remainingTime > 0 ? remainingTime : "Done"}
          </motion.span>
        </div>
      )}
    </div>
  )
}

export const countdownCode = `"use client"
import { AnimatePresence, motion, useAnimationControls } from "framer-motion"
import { useState, useEffect } from "react"

export default function CountdownImageFade() {
  const totalTime = 10 // Total countdown time in seconds
  const [remainingTime, setRemainingTime] = useState(totalTime)
  const controls = useAnimationControls()

  useEffect(() => {
    if (remainingTime > 0) {
      const timer = setTimeout(() => {
        setRemainingTime((prev) => prev - 1)
      }, 1000)

      return () => clearTimeout(timer)
    }
  }, [remainingTime])

  // Animate the conic gradient mask
  useEffect(() => {
    const progress = ((remainingTime - 1) / totalTime) * 360
    controls.start({
      maskImage: \`conic-gradient( black \${progress}deg,transparent \${progress}deg)\`,
      WebkitMaskImage: \`conic-gradient( black \${progress}deg,transparent \${progress}deg)\`,
    })  
  }, [remainingTime, controls])

  return (
    <div className="flex-col justify-center items-center  ">
      <div className="relative w-40 h-40 shadow-md  bg-gray-300 rounded-lg">
        {/* Image with Mask */}
        <motion.div
          className="absolute inset-0 "
          style={{
            borderRadius: 20,
            margin: 10,
            backgroundImage: "url('/image.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          animate={controls}
          transition={{
            duration: 1, // Smooth transition between mask states
            ease: "linear",
          }}
        ></motion.div>
      </div>
      {remainingTime === 0 ? (
        <AnimatePresence>
          <motion.button
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            onClick={() => setRemainingTime(11)}
            className=" w-full mt-2 bg-gray-500 text-white p-2 rounded-lg"
          >
            Reset
          </motion.button>
        </AnimatePresence>
      ) : (
        <div className="flex mt-2 items-center justify-center ">
          <motion.span
            className="text-3xl font-bold text-muted-foreground"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            key={remainingTime} // Animates on number change
          >
            {remainingTime > 0 ? remainingTime : "Done"}
          </motion.span>
        </div>
      )}
    </div>
  )
}`
