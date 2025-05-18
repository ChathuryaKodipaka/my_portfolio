"use client"

import { motion } from "framer-motion"
import {
  Code,
  BarChart,
  Cloud,
  GitBranch,
  BrainCircuit,
  LineChart,
  Sparkles,
  Database
} from "lucide-react"
import { useState } from "react"

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState(null)

  const skillCategories = [
    {
      name: "Languages",
      icon: <Code className="h-6 w-6" />,
      skills: ["Python", "SQL", "R", "SAS", "Java"],
      color: "teal",
    },
    {
      name: "ML/AI",
      icon: <BrainCircuit className="h-6 w-6" />,
      skills: ["PyTorch", "TensorFlow", "LangChain", "Hugging Face", "scikit-learn", "ResNet", "OpenCV", "Streamlit"],
      color: "lavender",
    },
    {
      name: "GenAI & RAG",
      icon: <Sparkles className="h-6 w-6" />,
      skills: ["LangChain", "FAISS", "LangGraph", "CrewAI", "OpenAI"],
      color: "fuchsia",
    },
    {
      name: "BI Tools",
      icon: <BarChart className="h-6 w-6" />,
      skills: ["Power BI", "Tableau", "Looker Studio", "Metabase"],
      color: "mint",
    },
    {
      name: "Cloud & Data",
      icon: <Cloud className="h-6 w-6" />,
      skills: ["Azure", "Databricks", "Fabric", "Data Lake", "Synapse", "Azure ADF", "Snowflake"],
      color: "blue",
    },
    {
      name: "Data Engineering",
      icon: <Database className="h-6 w-6" />,
      skills: ["PySpark", "Spark", "Airflow", "SQL Pipelines", "PostgreSQL", "MongoDB"],
      color: "indigo",
    },
    {
      name: "Statistics",
      icon: <LineChart className="h-6 w-6" />,
      skills: ["Bayesian Analysis", "Hypothesis Testing", "Regression", "Time Series", "Survival Analysis", "A/B Testing"],
      color: "rose",
    },
    {
      name: "PM Tools",
      icon: <GitBranch className="h-6 w-6" />,
      skills: ["JIRA", "Confluence", "Git", "VS Code", "GitHub Actions"],
      color: "amber",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  const getColorClass = (color, type) => {
    const colorMap = {
      teal: {
        bg: "bg-teal-50 dark:bg-slate-800/80",
        hoverBg: "hover:bg-teal-100 dark:hover:bg-slate-800",
        text: "text-teal-600 dark:text-teal-400",
        border: "border-teal-200 dark:border-teal-800",
        activeBg: "bg-teal-100 dark:bg-slate-700",
      },
      lavender: {
        bg: "bg-lavender-50 dark:bg-slate-800/80",
        hoverBg: "hover:bg-lavender-100 dark:hover:bg-slate-800",
        text: "text-lavender-600 dark:text-lavender-400",
        border: "border-lavender-200 dark:border-lavender-800",
        activeBg: "bg-lavender-100 dark:bg-slate-700",
      },
      mint: {
        bg: "bg-mint-50 dark:bg-slate-800/80",
        hoverBg: "hover:bg-mint-100 dark:hover:bg-slate-800",
        text: "text-mint-600 dark:text-mint-400",
        border: "border-mint-200 dark:border-mint-800",
        activeBg: "bg-mint-100 dark:bg-slate-700",
      },
      blue: {
        bg: "bg-blue-50 dark:bg-slate-800/80",
        hoverBg: "hover:bg-blue-100 dark:hover:bg-slate-800",
        text: "text-blue-600 dark:text-blue-400",
        border: "border-blue-200 dark:border-blue-800",
        activeBg: "bg-blue-100 dark:bg-slate-700",
      },
      amber: {
        bg: "bg-amber-50 dark:bg-slate-800/80",
        hoverBg: "hover:bg-amber-100 dark:hover:bg-slate-800",
        text: "text-amber-600 dark:text-amber-400",
        border: "border-amber-200 dark:border-amber-800",
        activeBg: "bg-amber-100 dark:bg-slate-700",
      },
      rose: {
        bg: "bg-rose-50 dark:bg-slate-800/80",
        hoverBg: "hover:bg-rose-100 dark:hover:bg-slate-800",
        text: "text-rose-600 dark:text-rose-400",
        border: "border-rose-200 dark:border-rose-800",
        activeBg: "bg-rose-100 dark:bg-slate-700",
      },
      fuchsia: {
        bg: "bg-fuchsia-50 dark:bg-slate-800/80",
        hoverBg: "hover:bg-fuchsia-100 dark:hover:bg-slate-800",
        text: "text-fuchsia-600 dark:text-fuchsia-400",
        border: "border-fuchsia-200 dark:border-fuchsia-800",
        activeBg: "bg-fuchsia-100 dark:bg-slate-700",
      },
      indigo: {
        bg: "bg-indigo-50 dark:bg-slate-800/80",
        hoverBg: "hover:bg-indigo-100 dark:hover:bg-slate-800",
        text: "text-indigo-600 dark:text-indigo-400",
        border: "border-indigo-200 dark:border-indigo-800",
        activeBg: "bg-indigo-100 dark:bg-slate-700",
      },
    }

    return colorMap[color][type]
  }

  return (
    <section id="skills" className="py-24 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-800 dark:text-slate-100">Skills</h2>
          <div className="w-20 h-1 bg-teal-500 dark:bg-teal-400 mx-auto"></div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`${getColorClass(category.color, "bg")} rounded-lg p-6 hover:shadow-md transition-all duration-300 border border-slate-100 dark:border-slate-800 cursor-pointer`}
              onClick={() => setActiveCategory(activeCategory === index ? null : index)}
            >
              <div className="flex items-center mb-4">
                <div className={`${getColorClass(category.color, "text")} mr-3`}>{category.icon}</div>
                <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-200">{category.name}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skillIndex}
                    initial={{ scale: 1 }}
                    animate={{
                      scale: activeCategory === index ? [1, 1.05, 1] : 1,
                      transition: {
                        duration: 0.5,
                        delay: activeCategory === index ? skillIndex * 0.1 : 0,
                      },
                    }}
                    className={`bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 px-3 py-1.5 rounded-full text-sm border ${getColorClass(category.color, "border")} ${
                      activeCategory === index ? getColorClass(category.color, "activeBg") : ""
                    }`}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16 max-w-3xl mx-auto"
        >
          <h3 className="text-xl font-semibold mb-6 text-center text-slate-800 dark:text-slate-200">Proficiency</h3>
          <div className="space-y-4">
            {[
              { name: "Data Analysis", level: 95 },
              { name: "Machine Learning", level: 85 },
              { name: "Statistical Modeling & Inference", level: 90 },
              { name: "BI & Data Visualization", level: 80 },
              { name: "Cloud Computing", level: 85 },
              { name: "ETL & Data Pipelines", level: 85 },
            ].map((skill, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-slate-700 dark:text-slate-300">{skill.name}</span>
                  <span className="text-slate-500 dark:text-slate-400">{skill.level}%</span>
                </div>
                <div className="h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-teal-500 to-teal-400 dark:from-teal-400 dark:to-teal-500"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                  ></motion.div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
