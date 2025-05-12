"use client"

import { motion } from "framer-motion"

interface FeedbackBoxesProps {
  decision: "YES" | "NO" | null
  isLoading: boolean
}

export default function FeedbackBoxes({ decision, isLoading }: FeedbackBoxesProps) {
  return (
    <div className="grid grid-cols-2 gap-6 w-full">
      <FeedbackBox type="NO" isActive={decision === "NO"} isLoading={isLoading} />
      <FeedbackBox type="YES" isActive={decision === "YES"} isLoading={isLoading} />
    </div>
  )
}

interface FeedbackBoxProps {
  type: "YES" | "NO"
  isActive: boolean
  isLoading: boolean
}

function FeedbackBox({ type, isActive, isLoading }: FeedbackBoxProps) {
  const baseColor = "bg-gray-800/50"
  const activeColor = type === "YES" ? "bg-green-500/20" : "bg-red-500/20"
  const activeBorderColor = type === "YES" ? "border-green-500/50" : "border-red-500/50"
  const activeShadowColor = type === "YES" ? "shadow-green-500/30" : "shadow-red-500/30"

  const pulseAnimation = {
    inactive: {
      opacity: 0.8,
      scale: 1,
      boxShadow: "0 0 0px rgba(0, 0, 0, 0)",
    },
    active: {
      opacity: 1,
      scale: [1, 1.03, 1],
      boxShadow:
        type === "YES"
          ? ["0 0 0px rgba(74, 222, 128, 0)", "0 0 40px rgba(74, 222, 128, 0.7)", "0 0 10px rgba(74, 222, 128, 0.4)"]
          : [
              "0 0 0px rgba(248, 113, 113, 0)",
              "0 0 40px rgba(248, 113, 113, 0.7)",
              "0 0 10px rgba(248, 113, 113, 0.4)",
            ],
      transition: {
        repeat: Number.POSITIVE_INFINITY,
        duration: 2,
      },
    },
    breathing: {
      scale: [1, 1.01, 1],
      opacity: [0.7, 0.8, 0.7],
      transition: {
        repeat: Number.POSITIVE_INFINITY,
        duration: 3,
      },
    },
    loading: {
      opacity: [0.5, 0.7, 0.5],
      transition: {
        repeat: Number.POSITIVE_INFINITY,
        duration: 1.5,
      },
    },
  }

  return (
    <motion.div
      className={`relative h-32 rounded-xl backdrop-blur-sm border ${isActive ? activeBorderColor : "border-white/10"} ${isActive ? activeColor : baseColor} flex flex-col items-center justify-center transition-colors duration-300`}
      initial="inactive"
      animate={isLoading ? "loading" : isActive ? "active" : "breathing"}
      variants={pulseAnimation}
    >
      <span className="text-xs uppercase tracking-wider font-mono opacity-60 mb-2">AI Says</span>
      <span className={`text-2xl font-bold font-mono ${type === "YES" ? "text-green-400" : "text-red-400"}`}>
        {type}
      </span>
    </motion.div>
  )
}
