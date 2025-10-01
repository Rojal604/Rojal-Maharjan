"use client"

import { Suspense } from "react"
import { Canvas } from "@react-three/fiber"
import { OrbitControls, PerspectiveCamera } from "@react-three/drei"
import AboutScene from "@/components/3d/about-scene"
import RevealOnScroll from "@/components/reveal-on-scroll"
import { Code2, Rocket, Sparkles, Zap } from "lucide-react"

export default function About() {
  const highlights = [
    {
      icon: Code2,
      title: "Clean Code",
      description: "Writing maintainable, scalable, and performant code",
    },
    {
      icon: Rocket,
      title: "Fast Delivery",
      description: "Rapid prototyping and efficient project execution",
    },
    {
      icon: Sparkles,
      title: "Creative Solutions",
      description: "Innovative approaches to complex problems",
    },
    {
      icon: Zap,
      title: "Performance",
      description: "Optimized for speed and user experience",
    },
  ]

  return (
    <section id="about" className="relative min-h-screen py-20 px-6">
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/2 h-96 opacity-30 pointer-events-none hidden lg:block">
        <Canvas>
          <PerspectiveCamera makeDefault position={[0, 0, 8]} />
          <Suspense fallback={null}>
            <AboutScene />
          </Suspense>
          <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
        </Canvas>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <RevealOnScroll>
          <h2 className="section-title text-4xl md:text-6xl font-sans font-bold mb-12 text-center">
            About <span className="text-primary">Me</span>
          </h2>
        </RevealOnScroll>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <RevealOnScroll direction="left" delay={0.2}>
            <div className="space-y-6">
              <p className="text-lg text-foreground/80 leading-relaxed">
                I'm a passionate full-stack developer with a focus on creating{" "}
                <span className="text-primary font-semibold">immersive 3D web experiences</span>. My expertise lies in
                combining cutting-edge technologies like Framer Motion, React, and Next.js to build performant and visually
                stunning applications.
              </p>
              <p className="text-lg text-foreground/80 leading-relaxed">
                With years of experience in web development, I specialize in transforming complex ideas into elegant,
                user-friendly interfaces that push the boundaries of what's possible on the web. Every project is an
                opportunity to create something extraordinary.
              </p>
              <p className="text-lg text-foreground/80 leading-relaxed">
                My approach combines technical excellence with creative vision, ensuring that every line of code serves
                both functionality and aesthetics. I believe in the power of{" "}
                <span className="text-primary font-semibold">performance-first development</span> and creating
                experiences that delight users.
              </p>
            </div>
          </RevealOnScroll>

          <RevealOnScroll direction="right" delay={0.4}>
            <div className="bg-card rounded-lg p-8 border border-border shadow-lg">
              <h3 className="text-2xl font-sans font-bold mb-6 text-card-foreground">Quick Facts</h3>
              <ul className="space-y-4 text-card-foreground/80">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <span>
                    <strong className="text-card-foreground">5+ years</strong> of web development experience
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <span>
                    Specialized in <strong className="text-card-foreground">3D web graphics</strong> and WebGL
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <span>
                    <strong className="text-card-foreground">Performance optimization</strong> expert
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <span>
                    Active <strong className="text-card-foreground">open source</strong> contributor
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <span>
                    Passionate about <strong className="text-card-foreground">creative coding</strong> and generative
                    art
                  </span>
                </li>
              </ul>
            </div>
          </RevealOnScroll>
        </div>

        <RevealOnScroll delay={0.6}>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((highlight, index) => (
              <RevealOnScroll key={highlight.title} delay={0.7 + index * 0.1}>
                <div className="animate-card bg-card/50 backdrop-blur-sm rounded-lg p-6 border border-border hover:border-primary transition-colors group">
                  <highlight.icon className="w-10 h-10 text-primary mb-4 group-hover:scale-110 transition-transform" />
                  <h4 className="text-lg font-sans font-bold mb-2 text-card-foreground">{highlight.title}</h4>
                  <p className="text-sm text-card-foreground/70">{highlight.description}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </RevealOnScroll>
      </div>
    </section>
  )
}
