"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { ArrowRight, Download, ChevronDown } from "lucide-react"
import Link from "next/link"

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] sm:min-h-screen flex items-center pt-16 sm:pt-20 pb-12 sm:pb-16 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-slate-50 to-slate-100 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800 -z-10"></div>

      {/* Animated background elements */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          className="absolute top-20 left-10 w-48 sm:w-64 h-48 sm:h-64 rounded-full bg-teal-400/10 dark:bg-teal-600/5 blur-3xl"
          animate={{
            x: [0, 10, 0],
            y: [0, 15, 0],
          }}
          transition={{
            repeat: Number.POSITIVE_INFINITY,
            duration: 12,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-56 sm:w-72 h-56 sm:h-72 rounded-full bg-lavender-400/10 dark:bg-purple-600/5 blur-3xl"
          animate={{
            x: [0, -15, 0],
            y: [0, 10, 0],
          }}
          transition={{
            repeat: Number.POSITIVE_INFINITY,
            duration: 15,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 md:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 sm:gap-12 md:gap-16">
          <motion.div
            className="flex-1 text-center md:text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 text-slate-800 dark:text-slate-100">
              Chathurya Goud <span className="text-teal-600 dark:text-teal-400">Kodipaka</span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-slate-600 dark:text-slate-300 mb-6 sm:mb-8 font-light leading-relaxed">
              Turning Data into Action – From Clinical Trials to Community Impact
            </p>
            <div className="flex flex-wrap gap-3 sm:gap-4 justify-center md:justify-start">
              <Button onClick={() => document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-teal-600 hover:bg-teal-700 dark:bg-teal-500 dark:hover:bg-teal-600 rounded-full px-4 sm:px-6 py-5 sm:py-6 text-sm"
                size="lg"
              >
                View My Work <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                className="border-teal-600 text-teal-600 hover:bg-teal-50 dark:border-teal-400 dark:text-teal-400 dark:hover:bg-gray-800 rounded-full px-4 sm:px-6 py-5 sm:py-6 text-sm"
                size="lg"
                asChild
              >
                <a
                  href="https://drive.google.com/file/d/1rfX03F3to-9byGJ4wm8e1VRhWgQK4IP_/view"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Download Resume <Download className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          </motion.div>

          <motion.div
            className="relative w-56 h-56 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 mt-8 sm:mt-0"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-teal-400/30 via-lavender-400/20 to-mint-400/30 dark:from-teal-400/20 dark:via-lavender-400/10 dark:to-mint-400/20 blur-md"></div>
            <div className="absolute inset-2 rounded-full bg-white dark:bg-gray-900 overflow-hidden shadow-lg">
              {/* Replace with actual profile image */}
              <div className="w-full h-full rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-400 dark:text-slate-500 hover:scale-105 transition-all duration-300 hover:shadow-xl hover:shadow-teal-600/20 hover:border-2 hover:border-teal-600">
              <a href='https://postimg.cc/SY2pYzkS' target='_blank'><img src='https://i.postimg.cc/qqQBY8F3/IMG-4838.jpg' alt='IMG-4838' className="w-full h-full object-cover"/></a>              
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          <span className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mb-2">Scroll to explore</span>
          <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}>
            <Link href="#about">
              <ChevronDown className="h-5 w-5 sm:h-6 sm:w-6 text-teal-600 dark:text-teal-400" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
