"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { GraduationCap, Calendar } from "lucide-react"

export default function Education() {
  const educationData = [
    {
      degree: "MPS in Data Science",
      institution: "University of Maryland, Baltimore County",
      year: "2024",
      description:
        "Focused on machine learning, data engineering, and AI applications in healthcare and social services.",
    },
    {
      degree: "M.Sc. in Biostatistics",
      institution: "Manipal Academy of Higher Education",
      year: "2022",
      description:
        "Specialized in clinical trial design, statistical analysis, and Bayesian modeling for healthcare applications.",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <section id="education" className="py-24 bg-slate-50 dark:bg-slate-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-800 dark:text-slate-100">Education</h2>
          <div className="w-20 h-1 bg-teal-500 dark:bg-teal-400 mx-auto"></div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-4xl mx-auto"
        >
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-teal-200 dark:bg-teal-800/50"></div>

            {educationData.map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`relative mb-16 md:w-1/2 ${index % 2 === 0 ? "md:pr-12 md:ml-auto" : "md:pl-12"}`}
              >
                {/* Timeline dot */}
                <div
                  className={`absolute top-6 ${
                    index % 2 === 0 ? "left-0 md:-left-3" : "md:-right-3"
                  } w-6 h-6 rounded-full bg-teal-500 dark:bg-teal-400 border-4 border-white dark:border-slate-900 z-10`}
                ></div>

                <Card className="border-slate-200 dark:border-slate-700 hover:shadow-lg transition-all duration-300 overflow-hidden group">
                  <div className="h-1 bg-gradient-to-r from-teal-400 to-teal-500 dark:from-teal-500 dark:to-teal-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                  <CardContent className="p-6">
                    <div className="flex items-center mb-3">
                      <div className="bg-teal-50 dark:bg-slate-800 p-2 rounded-lg mr-3">
                        <GraduationCap className="h-5 w-5 text-teal-600 dark:text-teal-400" />
                      </div>
                      <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-200">{item.degree}</h3>
                    </div>
                    <p className="text-slate-700 dark:text-slate-300 mb-2 font-medium">{item.institution}</p>
                    <div className="flex items-center text-slate-500 dark:text-slate-400 mb-4">
                      <Calendar className="h-4 w-4 mr-2" />
                      <span>{item.year}</span>
                    </div>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{item.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
