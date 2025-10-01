"use client"

import { useEffect, useState } from "react"

export default function WebGLDetector({ children, fallback }: { children: React.ReactNode; fallback: React.ReactNode }) {
  const [webglSupported, setWebglSupported] = useState<boolean | null>(null)

  useEffect(() => {
    const checkWebGL = () => {
      try {
        const canvas = document.createElement('canvas')
        const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl')
        return !!gl
      } catch (e) {
        return false
      }
    }

    setWebglSupported(checkWebGL())
  }, [])

  if (webglSupported === null) {
    return <div className="w-full h-full bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-lg animate-pulse" />
  }

  if (!webglSupported) {
    return <>{fallback}</>
  }

  return <>{children}</>
}
