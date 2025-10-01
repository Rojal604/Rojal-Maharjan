"use client"

import { Suspense, useState } from "react"
import { Canvas } from "@react-three/fiber"
import { OrbitControls, PerspectiveCamera } from "@react-three/drei"
import ProjectCard3D from "@/components/3d/project-card-3d"
import RevealOnScroll from "@/components/reveal-on-scroll"
import { motion, AnimatePresence } from "framer-motion"
import { ExternalLink, Github } from "lucide-react"

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<number | null>(null)

  const projects = [
    {
      title: "3D Product Configurator",
      description:
        "Interactive 3D product customization tool with real-time rendering, material switching, and AR preview capabilities. Built for e-commerce platforms.",
      tech: ["Three.js", "React", "WebGL", "GSAP"],
      image: "/3d-product-configurator-interface.jpg",
      github: "#",
      demo: "#",
      highlights: ["Real-time 3D rendering", "Material customization", "AR integration", "60fps performance"],
    },
    {
      title: "Immersive Portfolio",
      description:
        "Award-winning portfolio with scroll-triggered 3D animations, particle systems, and cinematic camera movements. Featured on Awwwards.",
      tech: ["GSAP", "R3F", "Lenis", "Framer Motion"],
      image: "/immersive-3d-portfolio-website.jpg",
      github: "#",
      demo: "#",
      highlights: ["Scroll animations", "Particle effects", "Post-processing", "Mobile optimized"],
    },
    {
      title: "Virtual Showroom",
      description:
        "VR-ready virtual showroom with physics interactions, spatial audio, and multi-user support. Enables remote product demonstrations.",
      tech: ["Cannon.js", "Three.js", "React", "WebRTC"],
      image: "/virtual-reality-showroom.jpg",
      github: "#",
      demo: "#",
      highlights: ["Physics simulation", "VR support", "Multi-user", "Spatial audio"],
    },
  ]

  return (
    <section id="projects" className="relative min-h-screen py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <RevealOnScroll>
          <h2 className="section-title text-4xl md:text-6xl font-sans font-bold mb-4 text-center">
            Featured <span className="text-primary">Projects</span>
          </h2>
          <p className="text-center text-foreground/70 mb-16 max-w-2xl mx-auto">
            A selection of my best work showcasing advanced 3D web development and interactive experiences
          </p>
        </RevealOnScroll>

        {/* 3D Project Cards Preview */}
        <RevealOnScroll delay={0.2}>
          <div className="h-[400px] rounded-lg overflow-hidden border border-border bg-card/30 mb-16 hidden lg:block">
            <Canvas>
              <PerspectiveCamera makeDefault position={[0, 0, 8]} />
              <Suspense fallback={null}>
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} intensity={1} />
                <pointLight position={[-10, -10, -10]} intensity={0.5} color="#8b5cf6" />
                {projects.map((project, index) => (
                  <ProjectCard3D
                    key={project.title}
                    position={[(index - 1) * 3, 0, 0]}
                    title={project.title}
                    index={index}
                  />
                ))}
              </Suspense>
              <OrbitControls enableZoom={false} />
            </Canvas>
          </div>
        </RevealOnScroll>

        {/* Project Cards Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <RevealOnScroll key={project.title} delay={0.3 + index * 0.1}>
              <motion.div
                className="animate-card bg-card rounded-lg overflow-hidden border border-border hover:border-primary transition-colors group cursor-pointer"
                onClick={() => setSelectedProject(index)}
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
              >
                <div className="aspect-video bg-secondary relative overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent opacity-60" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-sans font-bold mb-2 text-card-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-card-foreground/70 mb-4 line-clamp-2">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span key={tech} className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    <a
                      href={project.github}
                      className="flex items-center gap-2 text-sm text-card-foreground/70 hover:text-primary transition-colors"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Github size={16} />
                      Code
                    </a>
                    <a
                      href={project.demo}
                      className="flex items-center gap-2 text-sm text-card-foreground/70 hover:text-primary transition-colors"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <ExternalLink size={16} />
                      Demo
                    </a>
                  </div>
                </div>
              </motion.div>
            </RevealOnScroll>
          ))}
        </div>

        {/* Project Detail Modal */}
        <AnimatePresence>
          {selectedProject !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="bg-card rounded-lg max-w-3xl w-full max-h-[90vh] overflow-y-auto border border-border"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="relative">
                  <img
                    src={projects[selectedProject].image || "/placeholder.svg"}
                    alt={projects[selectedProject].title}
                    className="w-full h-64 object-cover"
                  />
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="absolute top-4 right-4 w-10 h-10 bg-background/80 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-background transition-colors"
                  >
                    ✕
                  </button>
                </div>
                <div className="p-8">
                  <h3 className="text-3xl font-sans font-bold mb-4 text-card-foreground">
                    {projects[selectedProject].title}
                  </h3>
                  <p className="text-card-foreground/80 mb-6 leading-relaxed">
                    {projects[selectedProject].description}
                  </p>
                  <div className="mb-6">
                    <h4 className="text-lg font-sans font-bold mb-3 text-card-foreground">Key Features</h4>
                    <ul className="grid sm:grid-cols-2 gap-3">
                      {projects[selectedProject].highlights.map((highlight) => (
                        <li key={highlight} className="flex items-center gap-2 text-card-foreground/70">
                          <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex gap-4">
                    <a
                      href={projects[selectedProject].github}
                      className="flex-1 px-6 py-3 bg-transparent border-2 border-primary text-primary rounded-lg font-sans font-bold hover:bg-primary hover:text-primary-foreground transition-colors text-center"
                    >
                      View Code
                    </a>
                    <a
                      href={projects[selectedProject].demo}
                      className="flex-1 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-sans font-bold hover:bg-primary/90 transition-colors text-center"
                    >
                      Live Demo
                    </a>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
