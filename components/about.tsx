"use client"

import { motion } from "framer-motion"
import { Code, Database, LineChart, Heart } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export default function About() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <section id="about" className="py-16 sm:py-20 md:py-24 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 md:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          variants={fadeIn}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 text-slate-800 dark:text-slate-100">About Me</h2>
          <div className="w-16 sm:w-20 h-1 bg-teal-500 dark:bg-teal-400 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 md:gap-12 mb-10 sm:mb-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            variants={fadeIn}
          >
            <h3 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 text-teal-600 dark:text-teal-400">Who I Am</h3>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 mb-4 sm:mb-5 leading-relaxed">
             
              I'm a data scientist with a dual background in Biostatistics and Applied Data Science, passionate about designing solutions that bridge data and impact. My focus is on building tools, dashboards, and models that enable real action.I bring both technical rigor and empathy to every project. 
              For me, data science is more than just models and metrics; it's a way to lift barriers, tell real stories, and spark meaningful change.
            
            </p>
            
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
              I’m volunteering with the Center for Societal Aspiration (CSA), where I help build Power BI dashboards and reporting databases that serve vulnerable populations — connecting people to essential resources like food, housing, and healthcare. 
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.4 }}
            variants={fadeIn}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-5">
              <Card className="border-slate-100 dark:border-slate-800 hover:shadow-md transition-all duration-300 group">
                <CardContent className="p-4 sm:p-6">
                  <div className="bg-teal-50 dark:bg-slate-800 p-2 sm:p-3 rounded-lg inline-block mb-3 sm:mb-4 group-hover:bg-teal-100 dark:group-hover:bg-slate-700 transition-colors duration-300">
                    <Database className="h-6 w-6 sm:h-8 sm:w-8 text-teal-600 dark:text-teal-400" />
                  </div>
                  <h4 className="text-base sm:text-lg font-semibold mb-1 sm:mb-2 text-slate-800 dark:text-slate-200">Data Science</h4>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
                      End-to-end data pipelines, cloud computing, ML models, dashboards, deep learning, GenAI workflows, and agentic AI systems.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-slate-100 dark:border-slate-800 hover:shadow-md transition-all duration-300 group">
                <CardContent className="p-4 sm:p-6">
                  <div className="bg-lavender-50 dark:bg-slate-800 p-2 sm:p-3 rounded-lg inline-block mb-3 sm:mb-4 group-hover:bg-lavender-100 dark:group-hover:bg-slate-700 transition-colors duration-300">
                    <LineChart className="h-6 w-6 sm:h-8 sm:w-8 text-lavender-600 dark:text-lavender-400" />
                  </div>
                  <h4 className="text-base sm:text-lg font-semibold mb-1 sm:mb-2 text-slate-800 dark:text-slate-200">Biostatistics</h4>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
                    Clinical trial analytics, Bayesian and frequentist modeling, survival analysis, and applied epidemiology.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-slate-100 dark:border-slate-800 hover:shadow-md transition-all duration-300 group">
                <CardContent className="p-4 sm:p-6">
                  <div className="bg-mint-50 dark:bg-slate-800 p-2 sm:p-3 rounded-lg inline-block mb-3 sm:mb-4 group-hover:bg-mint-100 dark:group-hover:bg-slate-700 transition-colors duration-300">
                    <Code className="h-6 w-6 sm:h-8 sm:w-8 text-mint-600 dark:text-mint-400" />
                  </div>
                  <h4 className="text-base sm:text-lg font-semibold mb-1 sm:mb-2 text-slate-800 dark:text-slate-200">Development</h4>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">Python, R, SQL, and cloud-native solutions for data engineering, automation, and API-based workflows.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-slate-100 dark:border-slate-800 hover:shadow-md transition-all duration-300 group">
                <CardContent className="p-4 sm:p-6">
                  <div className="bg-rose-50 dark:bg-slate-800 p-2 sm:p-3 rounded-lg inline-block mb-3 sm:mb-4 group-hover:bg-rose-100 dark:group-hover:bg-slate-700 transition-colors duration-300">
                    <Heart className="h-6 w-6 sm:h-8 sm:w-8 text-rose-500 dark:text-rose-400" />
                  </div>
                  <h4 className="text-base sm:text-lg font-semibold mb-1 sm:mb-2 text-slate-800 dark:text-slate-200">Social Impact</h4>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
                    Data-driven systems that empower communities, improve access to resources, and support equity in healthcare and beyond.
                  </p>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
