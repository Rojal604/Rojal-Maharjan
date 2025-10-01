"use client"

import RevealOnScroll from "@/components/reveal-on-scroll"
import { motion } from "framer-motion"

export default function Skills() {

  const skills = [
    { name: "React & Next.js", level: 95, category: "Frontend" },
    { name: "CSS3 & Animations", level: 90, category: "Styling" },
    { name: "TypeScript", level: 92, category: "Languages" },
    { name: "Framer Motion", level: 88, category: "Animation" },
    { name: "Node.js & APIs", level: 85, category: "Backend" },
    { name: "UI/UX Design", level: 80, category: "Design" },
  ]

  const categories = Array.from(new Set(skills.map((s) => s.category)))

  return (
    <section id="skills" className="relative min-h-screen py-20 px-6 bg-card/5">
      <div className="max-w-6xl mx-auto">
        <RevealOnScroll>
          <h2 className="section-title text-4xl md:text-6xl font-sans font-bold mb-4 text-center">
            Technical <span className="text-primary">Skills</span>
          </h2>
          <p className="text-center text-foreground/70 mb-12 max-w-2xl mx-auto">
            A comprehensive toolkit of modern technologies and frameworks for building exceptional web experiences
          </p>
        </RevealOnScroll>

        <div className="space-y-12">
          {categories.map((category, catIndex) => (
            <RevealOnScroll key={category} delay={0.2 + catIndex * 0.1}>
              <div>
                <h3 className="text-xl font-sans font-bold mb-6 text-primary">{category}</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  {skills
                    .filter((s) => s.category === category)
                    .map((skill, index) => (
                      <div
                        key={skill.name}
                        className="space-y-2"
                      >
                        <div className="flex justify-between items-center">
                          <span className="text-lg font-sans font-semibold">{skill.name}</span>
                          <span className="text-primary font-bold">{skill.level}%</span>
                        </div>
                        <div className="h-3 bg-secondary rounded-full overflow-hidden">
                          <div
                            className="skill-bar h-full bg-gradient-to-r from-primary to-primary/70 rounded-full"
                            style={{ width: `${skill.level}%` }}
                          />
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>

        {/* Additional Skills Grid */}
        <RevealOnScroll delay={0.5}>
          <div className="mt-16">
            <h3 className="text-2xl font-sans font-bold mb-8 text-center">Tools & Technologies</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                "Git",
                "Docker",
                "AWS",
                "Vercel",
                "Figma",
                "Blender",
                "Photoshop",
                "VS Code",
                "Webpack",
                "Vite",
                "Jest",
                "Cypress",
              ].map((tool, index) => (
                <motion.span
                  key={tool}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.05 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.1 }}
                  className="px-4 py-2 bg-card border border-border rounded-full text-sm font-sans text-card-foreground hover:border-primary hover:text-primary transition-colors cursor-default"
                >
                  {tool}
                </motion.span>
              ))}
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  )
}
