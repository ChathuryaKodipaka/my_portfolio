"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar, Briefcase } from "lucide-react"

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
    <section id="experience" className="py-24 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-800 dark:text-slate-100">Experience</h2>
          <div className="w-20 h-1 bg-teal-500 dark:bg-teal-400 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {experienceData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full border-slate-100 dark:border-slate-800 hover:shadow-lg transition-all duration-300 overflow-hidden group">
                <div className="h-1 bg-gradient-to-r from-teal-400 to-lavender-400 dark:from-teal-500 dark:to-lavender-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-5">
                    <div className="flex items-center">
                      <div className="bg-teal-50 dark:bg-slate-800 p-2 rounded-lg mr-3">
                        <Briefcase className="h-5 w-5 text-teal-600 dark:text-teal-400" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-200">{item.title}</h3>
                        <p className="text-slate-600 dark:text-slate-400">{item.company}</p>
                      </div>
                    </div>
                    <div className="flex items-center text-slate-500 dark:text-slate-400 text-sm bg-slate-100 dark:bg-slate-800 px-3 py-1 rounded-full">
                      <Calendar className="h-3.5 w-3.5 mr-1.5" />
                      <span>{item.period}</span>
                    </div>
                  </div>
                  <p className="text-slate-600 dark:text-slate-400 mb-5 leading-relaxed">{item.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {item.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="text-xs bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300 px-3 py-1 rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
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
