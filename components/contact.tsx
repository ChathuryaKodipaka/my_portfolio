"use client"

import * as React from "react"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, Linkedin, Github, Send, CheckCircle, AlertCircle, X } from "lucide-react"
import { useToast } from "@/components/ui/use-toast"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"

// Updated SuccessDialog Component with cleaner UI and responsive design
const SuccessDialog = ({ open, onClose }: { open: boolean; onClose: () => void }) => {
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-md mx-auto p-0 overflow-hidden border-0 shadow-lg sm:rounded-lg">
        {/* Single gradient header with no X button in the header */}
        <div className="bg-gradient-to-r from-teal-500 to-emerald-500 h-16 sm:h-24 relative" />
        
        <div className="p-4 sm:p-6 pt-10 sm:pt-12 text-center">
          {/* Centered success icon overlapping the gradient */}
          <motion.div 
            initial={{ y: 60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="absolute left-1/2 top-12 sm:top-16 -translate-x-1/2 bg-white dark:bg-slate-800 rounded-full p-2 sm:p-3 shadow-lg"
          >
            <div className="bg-teal-100 dark:bg-teal-900/30 h-10 w-10 sm:h-14 sm:w-14 rounded-full flex items-center justify-center">
              <CheckCircle className="h-6 w-6 sm:h-8 sm:w-8 text-teal-600 dark:text-teal-400" />
            </div>
          </motion.div>
          
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.4 }}
          >
            <DialogTitle className="text-xl sm:text-2xl font-bold text-slate-800 dark:text-slate-100 mb-2 sm:mb-3">
              Message Sent Successfully!
            </DialogTitle>
            
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 mb-3 sm:mb-4">
              Thank you for reaching out. I appreciate your interest and will get back to you within 24-48 hours.
            </p>
            
            <Button
              onClick={onClose}
              className="mt-2 sm:mt-4 w-full bg-teal-500 hover:bg-teal-600 dark:bg-teal-500 dark:hover:bg-teal-600 rounded-full py-4 sm:py-6 text-sm"
            >
              Close
            </Button>
          </motion.div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
export default function Contact() {
  const { toast } = useToast()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formError, setFormError] = useState("")
  const [showSuccessDialog, setShowSuccessDialog] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    // Clear any previous error when user types
    if (formError) {
      setFormError("")
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    // Check if Enter key is pressed and not in the message textarea
    if (e.key === 'Enter' && (e.target as HTMLElement).getAttribute('name') !== 'message' && !e.shiftKey) {
      e.preventDefault();
      
      // Make sure all fields are filled before submitting
      if (formData.name && formData.email && formData.message) {
        handleSubmit(e as unknown as React.FormEvent);
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setFormError("")

    try {
      // Send data to API route
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });
      
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.error || 'Failed to send message');
      }

      // Reset form on success
      setFormData({ name: "", email: "", message: "" });
      
      // Show success dialog instead of toast
      setShowSuccessDialog(true);
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : "Unknown error occurred";
      setFormError(errorMessage);
      
      // Use plain toast without the variant property
      toast({
        title: "Error sending message",
        description: errorMessage,
        action: (
          <div className="h-8 w-8 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center">
            <AlertCircle className="h-5 w-5 text-red-600 dark:text-red-400" />
          </div>
        ),
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section id="contact" className="py-16 sm:py-20 md:py-24 bg-slate-50 dark:bg-slate-900">
      <div className="container mx-auto px-4 sm:px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 text-slate-800 dark:text-slate-100">Get In Touch</h2>
          <div className="w-16 sm:w-20 h-1 bg-teal-500 dark:bg-teal-400 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <Card className="h-full border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="p-4 sm:p-6 md:p-8">
                <h3 className="text-xl sm:text-2xl font-semibold mb-6 sm:mb-8 text-teal-600 dark:text-teal-400">Contact Information</h3>

                <div className="space-y-6 sm:space-y-8">
                  <motion.div
                    className="flex items-center"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <div className="bg-teal-50 dark:bg-slate-800 p-2 sm:p-3 rounded-full mr-3 sm:mr-4 shadow-sm">
                      <Mail className="h-5 w-5 sm:h-6 sm:w-6 text-teal-600 dark:text-teal-400" />
                    </div>
                    <div>
                      <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mb-1">Email</p>
                      <a
                        href="mailto:kodipakachathuryagoud@gmail.com"
                        className="text-sm sm:text-base text-slate-700 dark:text-slate-300 hover:text-teal-600 dark:hover:text-teal-400 transition-colors break-all"
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
                    <div className="bg-teal-50 dark:bg-slate-800 p-2 sm:p-3 rounded-full mr-3 sm:mr-4 shadow-sm">
                      <Linkedin className="h-5 w-5 sm:h-6 sm:w-6 text-teal-600 dark:text-teal-400" />
                    </div>
                    <div>
                      <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mb-1">LinkedIn</p>
                      <a
                        href="https://linkedin.com/in/chathuryagoud"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm sm:text-base text-slate-700 dark:text-slate-300 hover:text-teal-600 dark:hover:text-teal-400 transition-colors"
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
                    <div className="bg-teal-50 dark:bg-slate-800 p-2 sm:p-3 rounded-full mr-3 sm:mr-4 shadow-sm">
                      <Github className="h-5 w-5 sm:h-6 sm:w-6 text-teal-600 dark:text-teal-400" />
                    </div>
                    <div>
                      <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mb-1">GitHub</p>
                      <a
                        href="https://github.com/ChathuryaKodipaka"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm sm:text-base text-slate-700 dark:text-slate-300 hover:text-teal-600 dark:hover:text-teal-400 transition-colors"
                      >
                        github.com/ChathuryaKodipaka
                      </a>
                    </div>
                  </motion.div>
                </div>

                <div className="mt-8 sm:mt-12 p-4 sm:p-6 bg-slate-100 dark:bg-slate-800/50 rounded-lg">
                  <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 italic">
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
              <CardContent className="p-4 sm:p-6 md:p-8">
                <h3 className="text-xl sm:text-2xl font-semibold mb-6 sm:mb-8 text-teal-600 dark:text-teal-400">Send a Message</h3>

                <form onSubmit={handleSubmit} onKeyDown={handleKeyDown} className="space-y-4 sm:space-y-5">
                  <div>
                    <label htmlFor="name" className="block text-xs sm:text-sm font-medium text-slate-700 dark:text-slate-300 mb-1 sm:mb-2">
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
                      className="block text-xs sm:text-sm font-medium text-slate-700 dark:text-slate-300 mb-1 sm:mb-2"
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
                      className="block text-xs sm:text-sm font-medium text-slate-700 dark:text-slate-300 mb-1 sm:mb-2"
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
                      className="min-h-[120px] sm:min-h-[150px] bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 focus:border-teal-500 focus:ring-teal-500 dark:focus:border-teal-400 dark:focus:ring-teal-400"
                    />
                  </div>

                  {formError && (
                    <div className="p-2 sm:p-3 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-md">
                      <p className="text-xs sm:text-sm text-red-600 dark:text-red-400 flex items-center">
                        <AlertCircle className="h-3 w-3 sm:h-4 sm:w-4 mr-1 flex-shrink-0" />
                        {formError}
                      </p>
                    </div>
                  )}

                  <Button
                    type="submit"
                    className="w-full bg-teal-500 hover:bg-teal-600 dark:bg-teal-500 dark:hover:bg-teal-600 rounded-full py-5 sm:py-6 text-sm mt-2"
                    size="lg"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <div className="flex items-center">
                        <div className="animate-spin mr-2 h-3 w-3 sm:h-4 sm:w-4 border-2 border-white border-t-transparent rounded-full"></div>
                        Sending...
                      </div>
                    ) : (
                      <>
                        Send Message
                        <Send className="ml-2 h-3 w-3 sm:h-4 sm:w-4" />
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
        
        {/* Success Dialog */}
        <SuccessDialog 
          open={showSuccessDialog} 
          onClose={() => setShowSuccessDialog(false)} 
        />
      </div>
    </section>
  )
}