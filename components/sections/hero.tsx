"use client"
import { useState, useEffect } from "react"
import AnimatedText from "@/components/animated-text"
import MagneticButton from "@/components/magnetic-button"
import { motion } from "framer-motion"

export default function Hero() {
  const [stars, setStars] = useState<Array<{
    left: string
    top: string
    animationDelay: string
    animationDuration: string
  }>>([])

  useEffect(() => {
    // Generate stars only on client side to avoid hydration mismatch
    const generatedStars = Array.from({ length: 50 }).map(() => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      animationDelay: `${Math.random() * 3}s`,
      animationDuration: `${2 + Math.random() * 3}s`,
    }))
    setStars(generatedStars)
  }, [])
  return (
    <section id="hero" className="relative h-screen w-full overflow-hidden min-w-full">
      {/* CSS Animated Background */}
      <div className="absolute inset-0 z-0">
        {/* Animated gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 animate-gradient-shift" />
        
        {/* Floating orbs */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl animate-float-slow" />
        <div className="absolute top-3/4 right-1/4 w-48 h-48 bg-blue-500/20 rounded-full blur-3xl animate-float-reverse" />
        <div className="absolute top-1/2 left-1/2 w-32 h-32 bg-indigo-500/30 rounded-full blur-2xl animate-pulse-slow" />
        
        {/* Animated particles */}
        <div className="absolute inset-0">
          {stars.map((star, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white/30 rounded-full animate-twinkle"
              style={{
                left: star.left,
                top: star.top,
                animationDelay: star.animationDelay,
                animationDuration: star.animationDuration,
              }}
            />
          ))}
        </div>
      </div>

      {/* Gradient overlay for better text readability */}
      <div className="absolute inset-0 z-5 bg-gradient-to-b from-transparent via-background/20 to-background/80" />

      {/* Content Overlay */}
      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="max-w-5xl mx-auto px-3 sm:px-6 text-center container-padding hero-content">
          <AnimatedText
            text="Crafting Immersive Digital Experiences"
            className="text-3xl xs:text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-sans font-bold mb-4 sm:mb-6 text-balance"
            delay={0.2}
          />

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-base sm:text-lg md:text-xl lg:text-2xl text-foreground/70 mb-6 sm:mb-8 text-pretty max-w-3xl mx-auto px-2"
          >
            Full-stack developer specializing in <span className="text-primary font-semibold">3D web experiences</span>{" "}
            and cutting-edge animations with React, and GSAP
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4 mobile-button-container"
          >
            <MagneticButton
              onClick={() => document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" })}
              className="px-6 sm:px-8 py-3 sm:py-4 bg-primary text-primary-foreground rounded-lg font-sans font-bold hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20 text-sm sm:text-base mobile-button"
            >
              View Projects
            </MagneticButton>
            <MagneticButton
              onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
              className="px-6 sm:px-8 py-3 sm:py-4 bg-transparent border-2 border-primary text-primary rounded-lg font-sans font-bold hover:bg-primary hover:text-primary-foreground transition-colors text-sm sm:text-base mobile-button"
            >
              Get in Touch
            </MagneticButton>
          </motion.div>

          {/* Tech stack badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 1 }}
            className="mt-8 sm:mt-12 flex flex-wrap justify-center gap-2 sm:gap-3 px-4"
          >
            {["React", "Framer Motion", "TypeScript", "CSS3", "Next.js"].map((tech, index) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.3 + index * 0.1 }}
                className="px-3 sm:px-4 py-1.5 sm:py-2 bg-card/50 backdrop-blur-sm border border-border rounded-full text-xs sm:text-sm font-sans text-card-foreground"
              >
                {tech}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
          className="w-6 h-10 border-2 border-primary rounded-full flex items-start justify-center p-2"
        >
          <motion.div className="w-1.5 h-1.5 bg-primary rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  )
}
