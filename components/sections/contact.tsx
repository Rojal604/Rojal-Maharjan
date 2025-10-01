"use client"

import type React from "react"

import { useState } from "react"
import RevealOnScroll from "@/components/reveal-on-scroll"
import MagneticButton from "@/components/magnetic-button"
import { motion } from "framer-motion"
import { Mail, MapPin, Phone, Send, Github, Linkedin, Twitter } from "lucide-react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus("idle")

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSubmitStatus("success")
        setFormData({ name: "", email: "", subject: "", message: "" })
        setTimeout(() => setSubmitStatus("idle"), 5000)
      } else {
        setSubmitStatus("error")
        setTimeout(() => setSubmitStatus("idle"), 5000)
      }
    } catch (error) {
      console.error('Error sending email:', error)
      setSubmitStatus("error")
      setTimeout(() => setSubmitStatus("idle"), 5000)
    } finally {
      setIsSubmitting(false)
    }
  }

  const contactInfo = [
    { icon: Mail, label: "Email", value: "rojalmaharjan052@gmail.com", href: "mailto:hello@example.com" },
    { icon: Phone, label: "Phone", value: "(+977) 9843100643", href: "tel:+15551234567" },
    { icon: MapPin, label: "Location", value: "Kathmandu, Nepal", href: "#" },
  ]

  const socialLinks = [
    { icon: Github, label: "GitHub", href: "#" },
    { icon: Linkedin, label: "LinkedIn", href: "#" },
    { icon: Twitter, label: "Twitter", href: "#" },
  ]

  return (
    <section id="contact" className="relative min-h-screen py-20 px-6 pb-40">
      <div className="max-w-6xl mx-auto">
        <RevealOnScroll>
          <h2 className="section-title text-4xl md:text-6xl font-sans font-bold mb-4 text-center">
            Get in <span className="text-primary">Touch</span>
          </h2>
          <p className="text-center text-foreground/70 mb-16 max-w-2xl mx-auto">
            Have a project in mind or just want to chat? I'd love to hear from you. Let's create something amazing
            together.
          </p>
        </RevealOnScroll>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <RevealOnScroll direction="left" delay={0.2}>
            <div className="bg-card rounded-lg p-8 border border-border shadow-lg">
              <h3 className="text-2xl font-sans font-bold mb-6 text-card-foreground">Send a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-sans font-semibold mb-2 text-card-foreground">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-foreground transition-all"
                    placeholder="Full Name"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-sans font-semibold mb-2 text-card-foreground">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-foreground transition-all"
                    placeholder="Name@example.com"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-sans font-semibold mb-2 text-card-foreground">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-foreground transition-all"
                    placeholder="Project Inquiry"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-sans font-semibold mb-2 text-card-foreground">
                    Message
                  </label>
                  <textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={6}
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-foreground resize-none transition-all"
                    placeholder="Tell me about your project..."
                    required
                  />
                </div>
                <MagneticButton
                  type="submit"
                  className="w-full px-8 py-4 bg-primary text-primary-foreground rounded-lg font-sans font-bold hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1, ease: "linear" }}
                        className="w-5 h-5 border-2 border-primary-foreground border-t-transparent rounded-full"
                      />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={20} />
                      Send Message
                    </>
                  )}
                </MagneticButton>

                {submitStatus === "success" && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-green-500 text-center font-semibold"
                  >
                    Message sent successfully! I'll get back to you soon.
                  </motion.p>
                )}
                
                {submitStatus === "error" && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-red-500 text-center font-semibold"
                  >
                    Failed to send message. Please try again or contact me directly.
                  </motion.p>
                )}
              </form>
            </div>
          </RevealOnScroll>

          {/* Contact Info */}
          <RevealOnScroll direction="right" delay={0.4}>
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-sans font-bold mb-6">Contact Information</h3>
                <div className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <motion.a
                      key={info.label}
                      href={info.href}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      viewport={{ once: false }}
                      whileHover={{ x: 8 }}
                      className="flex items-center gap-4 p-4 bg-card rounded-lg border border-border hover:border-primary transition-colors group"
                    >
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <info.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm text-card-foreground/70">{info.label}</p>
                        <p className="font-sans font-semibold text-card-foreground">{info.value}</p>
                      </div>
                    </motion.a>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-sans font-bold mb-6">Follow Me</h3>
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1 }}
                      viewport={{ once: false }}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="w-14 h-14 bg-card rounded-lg border border-border hover:border-primary flex items-center justify-center transition-colors group"
                      aria-label={social.label}
                    >
                      <social.icon className="w-6 h-6 text-card-foreground group-hover:text-primary transition-colors" />
                    </motion.a>
                  ))}
                </div>
              </div>

              <div className="bg-card rounded-lg p-6 border border-border">
                <h4 className="text-lg font-sans font-bold mb-3 text-card-foreground">Availability</h4>
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-card-foreground font-semibold">Available for new projects</span>
                </div>
                <p className="text-sm text-card-foreground/70">
                  Currently accepting freelance work and full-time opportunities. Let's discuss your project!
                </p>
              </div>
            </div>
          </RevealOnScroll>
        </div>

        {/* Footer */}
        <div className="mt-20">
          <RevealOnScroll delay={0.6}>
            <div className="pt-8 border-t-2 border-primary/20 text-center bg-card/50 rounded-lg p-6">
              <p className="text-foreground text-base font-semibold">
                © 2025 Cinematic Portfolio. Crafted with passion using Next.js. Bringing digital dreams to life ✨
              </p>
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  )
}
