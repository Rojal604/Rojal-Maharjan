"use client"

import RevealOnScroll from "@/components/reveal-on-scroll"
import { motion } from "framer-motion"
import { Briefcase, Calendar } from "lucide-react"

export default function Experience() {
  const experiences = [
    {
      year: "2023 - Present",
      title: "Senior 3D Web Developer",
      company: "Creative Studio",
      location: "Koteshwor, Kathmandu",
      description:
        "Leading development of immersive 3D web experiences for Fortune 500 clients. Architecting scalable WebGL applications and mentoring junior developers.",
      achievements: [
        "Reduced load times by 60% through optimization",
        "Led team of 5 developers on major projects",
        "Implemented CI/CD pipeline for 3D assets",
      ],
      technologies: ["Three.js", "React", "GSAP", "WebGL", "TypeScript"],
    },
    {
      year: "2021 - 2023",
      title: "Full Stack Developer",
      company: "Tech Startup",
      location: "Remote",
      description:
        "Built scalable web applications with modern frameworks. Developed RESTful APIs and implemented real-time features using WebSockets.",
      achievements: [
        "Launched 3 major product features",
        "Improved API response time by 40%",
        "Implemented automated testing suite",
      ],
      technologies: ["Next.js", "Node.js", "PostgreSQL", "AWS", "Docker"],
    },
    {
      year: "2019 - 2021",
      title: "Frontend Developer",
      company: "Digital Agency",
      location: "Putalisadak, Kathmandu",
      description:
        "Developed responsive websites and interactive experiences for diverse clients. Collaborated with designers to bring creative visions to life.",
      achievements: [
        "Delivered 20+ client projects",
        "Achieved 95+ Lighthouse scores",
        "Established component library",
      ],
      technologies: ["React", "Vue.js", "SASS", "Webpack", "Figma"],
    },
  ]

  return (
    <section id="experience" className="relative min-h-screen py-20 px-6 bg-card/5">
      <div className="max-w-5xl mx-auto">
        <RevealOnScroll>
          <h2 className="section-title text-4xl md:text-6xl font-sans font-bold mb-4 text-center">
            Work <span className="text-primary">Experience</span>
          </h2>
          <p className="text-center text-foreground/70 mb-16 max-w-2xl mx-auto">
            A journey through innovative companies and challenging projects that shaped my expertise
          </p>
        </RevealOnScroll>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-border" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <RevealOnScroll key={index} delay={0.2 + index * 0.1}>
                <motion.div
                  className={`timeline-item relative flex flex-col md:flex-row gap-8 ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background z-10" />

                  {/* Content card */}
                  <div className={`flex-1 ml-16 md:ml-0 ${index % 2 === 0 ? "md:pr-12" : "md:pl-12"}`}>
                    <div className="bg-card rounded-lg p-6 border border-border hover:border-primary transition-colors shadow-lg">
                      {/* Header */}
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                            <Briefcase className="w-6 h-6 text-primary" />
                          </div>
                          <div>
                            <h3 className="text-xl font-sans font-bold text-card-foreground">{exp.title}</h3>
                            <p className="text-primary font-semibold">{exp.company}</p>
                          </div>
                        </div>
                      </div>

                      {/* Meta info */}
                      <div className="flex flex-wrap gap-4 mb-4 text-sm text-card-foreground/70">
                        <div className="flex items-center gap-2">
                          <Calendar size={16} />
                          {exp.year}
                        </div>
                        <div className="flex items-center gap-2">📍 {exp.location}</div>
                      </div>

                      {/* Description */}
                      <p className="text-card-foreground/80 mb-4 leading-relaxed">{exp.description}</p>

                      {/* Achievements */}
                      <div className="mb-4">
                        <h4 className="text-sm font-sans font-bold mb-2 text-card-foreground">Key Achievements</h4>
                        <ul className="space-y-2">
                          {exp.achievements.map((achievement, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm text-card-foreground/70">
                              <span className="w-1.5 h-1.5 bg-primary rounded-full mt-1.5 flex-shrink-0" />
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </RevealOnScroll>
            ))}
          </div>
        </div>

        {/* CTA */}
        <RevealOnScroll delay={0.6}>
          <div className="mt-16 text-center">
            <p className="text-foreground/70 mb-6">Want to know more about my experience?</p>
            <motion.a
              href="#"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block px-8 py-4 bg-primary text-primary-foreground rounded-lg font-sans font-bold hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20"
            >
              Download Resume
            </motion.a>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  )
}
