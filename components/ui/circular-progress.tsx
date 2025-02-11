import { useState, useEffect } from "react"

interface CircularProgressProps {
  value?: number
  color?: string
  size?: number
}

export function CircularProgress({ value = 0, color = "#000000", size = 40 }: CircularProgressProps) {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    setProgress(value)
  }, [value])

  const strokeWidth = 4 // Increased stroke width for better visibility
  const radius = (size - strokeWidth) / 2
  const circumference = radius * 2 * Math.PI
  const offset = circumference - (progress / 100) * circumference

  const hexToRGBA = (hex: string, opacity: number) => {
    let r = 0,
      g = 0,
      b = 0
    hex = hex.replace(/^#/, "")

    if (hex.length === 3) {
      r = parseInt(hex[0] + hex[0], 16)
      g = parseInt(hex[1] + hex[1], 16)
      b = parseInt(hex[2] + hex[2], 16)
    } else if (hex.length === 6) {
      r = parseInt(hex.substring(0, 2), 16)
      g = parseInt(hex.substring(2, 4), 16)
      b = parseInt(hex.substring(4, 6), 16)
    }

    return `rgba(${r}, ${g}, ${b}, ${opacity})`
  }

  const fadedStroke = hexToRGBA(color, 0.2)

  return (
    <div className="relative" style={{ width: size, height: size }}>
      {/* Background circle */}
      <svg className="absolute -rotate-90 w-full h-full">
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          strokeWidth={strokeWidth}
          stroke={fadedStroke}
        />
      </svg>

      {/* Progress circle */}
      <svg className="absolute -rotate-90 w-full h-full">
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          className="transition-all duration-500 ease-out"
          style={{
            stroke: color,
            strokeLinecap: "round",
            transition: "stroke-dashoffset 0.5s ease-in-out",
          }}
        />
      </svg>

      {/* Percentage text */}
      <div
        className="absolute inset-0 flex items-center justify-center text-xs font-medium"
        style={{ color, fontSize: size * 0.25 }}
      >
        {progress}%
      </div>
    </div>
  )
}






