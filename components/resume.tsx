"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Download, FileText, ExternalLink } from "lucide-react"

export default function Resume() {
  const resumeLink = "https://drive.google.com/file/d/1rfX03F3to-9byGJ4wm8e1VRhWgQK4IP_/view"

  const resumeCategories = [
    {
      title: "Technical Skills",
      items: [
        "Data Science & Machine Learning",
        "Statistical Analysis & Modeling",
        "Data Visualization & Reporting",
        "Cloud Computing & Big Data",
        "Programming (Python, R, SQL)",
      ],
    },
    {
      title: "Education",
      items: [
        "MPS in Data Science - University of Maryland, Baltimore County",
        "M.Sc. in Biostatistics - Manipal Academy of Higher Education",
      ],
    },
    {
      title: "Professional Experience",
      items: [
        "Data Scientist at CSA",
        "Math Coach at UMBC",
        "Biostatistics Intern at GSK",
        "Statistical Consultant at MAHE",
      ],
    },
  ]

  return (
    <section id="resume" className="py-24 bg-slate-50 dark:bg-slate-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-800 dark:text-slate-100">Resume</h2>
          <div className="w-20 h-1 bg-teal-500 dark:bg-teal-400 mx-auto"></div>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <Card className="border-slate-200 dark:border-slate-700 shadow-md overflow-hidden">
            <div className="h-2 bg-gradient-to-r from-teal-400 to-lavender-400 dark:from-teal-500 dark:to-lavender-500"></div>
            <CardContent className="p-8">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
                <div className="flex items-center">
                  <div className="bg-teal-50 dark:bg-slate-800 p-3 rounded-lg mr-4">
                    <FileText className="h-8 w-8 text-teal-600 dark:text-teal-400" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-slate-800 dark:text-slate-200">My Resume</h3>
                    <p className="text-slate-600 dark:text-slate-400">View or download my complete resume</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Button
                    className="bg-teal-500 hover:bg-teal-600 dark:bg-teal-500 dark:hover:bg-teal-600 rounded-full"
                    asChild
                  >
                    <a href={resumeLink} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      View Resume
                    </a>
                  </Button>
                 
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                {resumeCategories.map((category, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <h4 className="text-lg font-semibold mb-4 text-teal-600 dark:text-teal-400 border-b border-slate-200 dark:border-slate-700 pb-2">
                      {category.title}
                    </h4>
                    <ul className="space-y-2">
                      {category.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="text-slate-700 dark:text-slate-300 flex items-start">
                          <span className="inline-block w-1.5 h-1.5 rounded-full bg-teal-500 dark:bg-teal-400 mt-2 mr-2"></span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>

             
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
