"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Briefcase, Calendar } from "lucide-react"

export default function Experience() {
  const experienceData = [
    {
      title: "Data Scientist",
      company: "CSA",
      period: "May 2025 – Present",
      description:
        "Developing reporting pipelines and Power BI dashboards for underserved communities. Creating data-driven solutions to optimize resource allocation and service delivery.",
      skills: ["Power BI", "Python", "Azure", "Data Pipeline"],
    },
    {
      title: "Math Coach",
      company: "UMBC",
      period: "Jan 2024 – Dec 2024",
      description:
        "Provided statistical and mathematical guidance to undergraduate students. Developed learning materials and conducted workshops on data analysis techniques.",
      skills: ["Statistics", "R", "Teaching", "Data Analysis"],
    },
    {
      title: "Biostatistics Intern",
      company: "GSK",
      period: "Jan 2022 – Jun 2022",
      description:
        "Implemented Bayesian modeling techniques for clinical trial analysis. Worked with SDTM/ADaM standards for clinical data management and analysis.",
      skills: ["Bayesian Statistics", "SAS", "Clinical Trials", "SDTM/ADaM"],
    },
    {
      title: "Statistical Consultant",
      company: "MAHE",
      period: "Oct 2020 – Dec 2021",
      description:
        "Provided statistical consulting for research projects across medical departments. Designed study protocols and performed power analysis for clinical studies.",
      skills: ["Study Design", "Power Analysis", "R", "Statistical Consulting"],
    },
  ]
  return (
    <section id="experience" className="py-16 sm:py-20 md:py-24 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 text-slate-800 dark:text-slate-100">Experience</h2>
          <div className="w-16 sm:w-20 h-1 bg-teal-500 dark:bg-teal-400 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
          {experienceData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full border-slate-200 dark:border-slate-700 hover:shadow-md transition-all duration-300">
                <CardContent className="p-4 sm:p-6 md:p-8">
                  <div className="flex items-start">
                    <div className="bg-teal-50 dark:bg-slate-800 p-2 sm:p-3 rounded-lg mr-3 sm:mr-4 mt-1">
                      <Briefcase className="h-5 w-5 sm:h-6 sm:w-6 text-teal-600 dark:text-teal-400" />
                    </div>
                    <div>
                      <h3 className="text-base sm:text-lg md:text-xl font-semibold text-slate-800 dark:text-slate-200 mb-1">
                        {item.title}
                      </h3>
                      <div className="text-sm text-slate-600 dark:text-slate-400 mb-3 flex items-center">
                        <span className="font-medium mr-2">{item.company}</span>
                        <span className="text-slate-400 dark:text-slate-500 flex items-center text-xs sm:text-sm">
                          <Calendar className="h-3 w-3 sm:h-4 sm:w-4 mr-1" />
                          {item.period}
                        </span>
                      </div>
                      <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300">{item.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
