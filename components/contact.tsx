"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, Linkedin, Github, Send, CheckCircle } from "lucide-react"
import { useToast } from "@/components/ui/use-toast"

export default function Contact() {
  const { toast } = useToast()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      console.log("Form submitted:", formData)
      // Reset form
      setFormData({ name: "", email: "", message: "" })
      setIsSubmitting(false)

      // Show success message
      toast({
        title: "Message sent successfully!",
        description: "Thank you for reaching out. I'll get back to you soon.",
        action: (
          <div className="h-8 w-8 bg-teal-100 dark:bg-teal-900/30 rounded-full flex items-center justify-center">
            <CheckCircle className="h-5 w-5 text-teal-600 dark:text-teal-400" />
          </div>
        ),
      })
    }, 1500)
  }

  return (
    <section id="contact" className="py-24 bg-slate-50 dark:bg-slate-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-800 dark:text-slate-100">Get In Touch</h2>
          <div className="w-20 h-1 bg-teal-500 dark:bg-teal-400 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <Card className="h-full border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-8 text-teal-600 dark:text-teal-400">Contact Information</h3>

                <div className="space-y-8">
                  <motion.div
                    className="flex items-center"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <div className="bg-teal-50 dark:bg-slate-800 p-3 rounded-full mr-4 shadow-sm">
                      <Mail className="h-6 w-6 text-teal-600 dark:text-teal-400" />
                    </div>
                    <div>
                      <p className="text-sm text-slate-500 dark:text-slate-400 mb-1">Email</p>
                      <a
                        href="mailto:kodipakachathuryagoud@gmail.com"
                        className="text-slate-700 dark:text-slate-300 hover:text-teal-600 dark:hover:text-teal-400 transition-colors"
                      >
                        kodipakachathuryagoud@gmail.com
                      </a>
                    </div>
                  </motion.div>

                  <motion.div
                    className="flex items-center"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <div className="bg-teal-50 dark:bg-slate-800 p-3 rounded-full mr-4 shadow-sm">
                      <Linkedin className="h-6 w-6 text-teal-600 dark:text-teal-400" />
                    </div>
                    <div>
                      <p className="text-sm text-slate-500 dark:text-slate-400 mb-1">LinkedIn</p>
                      <a
                        href="https://linkedin.com/in/chathuryagoud"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-700 dark:text-slate-300 hover:text-teal-600 dark:hover:text-teal-400 transition-colors"
                      >
                        linkedin.com/in/chathuryagoud
                      </a>
                    </div>
                  </motion.div>

                  <motion.div
                    className="flex items-center"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <div className="bg-teal-50 dark:bg-slate-800 p-3 rounded-full mr-4 shadow-sm">
                      <Github className="h-6 w-6 text-teal-600 dark:text-teal-400" />
                    </div>
                    <div>
                      <p className="text-sm text-slate-500 dark:text-slate-400 mb-1">GitHub</p>
                      <a
                        href="https://github.com/ChathuryaKodipaka"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-700 dark:text-slate-300 hover:text-teal-600 dark:hover:text-teal-400 transition-colors"
                      >
                        github.com/ChathuryaKodipaka
                      </a>
                    </div>
                  </motion.div>
                </div>

                <div className="mt-12 p-6 bg-slate-100 dark:bg-slate-800/50 rounded-lg">
                  <p className="text-slate-600 dark:text-slate-300 italic">
                    "I'm always open to discussing new projects, opportunities, and partnerships. Feel free to reach
                    out!"
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card className="border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-8 text-teal-600 dark:text-teal-400">Send a Message</h3>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                      Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      required
                      className="bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 focus:border-teal-500 focus:ring-teal-500 dark:focus:border-teal-400 dark:focus:ring-teal-400"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2"
                    >
                      Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Your email"
                      required
                      className="bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 focus:border-teal-500 focus:ring-teal-500 dark:focus:border-teal-400 dark:focus:ring-teal-400"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2"
                    >
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Your message"
                      required
                      className="min-h-[150px] bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 focus:border-teal-500 focus:ring-teal-500 dark:focus:border-teal-400 dark:focus:ring-teal-400"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-teal-500 hover:bg-teal-600 dark:bg-teal-500 dark:hover:bg-teal-600 rounded-full py-6 text-sm"
                    size="lg"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <div className="flex items-center">
                        <div className="animate-spin mr-2 h-4 w-4 border-2 border-white border-t-transparent rounded-full"></div>
                        Sending...
                      </div>
                    ) : (
                      <>
                        Send Message
                        <Send className="ml-2 h-4 w-4" />
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
