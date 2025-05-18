"use client"

import { useState, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, ExternalLink, Github, Maximize2 } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

export default function Projects() {
  const projects = [
    {
      title: "AdventureWorks Data Pipeline",
      description:
        "End-to-end ETL pipeline and dashboard reporting solution for the AdventureWorks dataset, providing business insights and performance metrics.",
      image: "https://www.verywellmind.com/thmb/NUVJDwCLG7SVbtC000SeufXGYys=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/an-overview-of-the-types-of-emotions-4163976-abaafd59e7214706b7cd6326d0dd8257.png",
        
        // "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
      techStack: ["Azure ADF", "Databricks", "Synapse", "Power BI"],
      githubUrl: "https://github.com/ChathuryaKodipaka/UMBC-DATA606-Capstone",
      demoUrl: "#",
      longDescription:
        "This project involved building a comprehensive data pipeline for the AdventureWorks dataset using Azure Data Factory, Databricks, and Synapse Analytics. The pipeline extracts data from various sources, transforms it using Spark in Databricks, and loads it into a data warehouse in Synapse. The final step involves creating interactive Power BI dashboards that provide business insights and performance metrics for sales, inventory, and customer behavior.",
    },
    {
      title: "GenAI Medical Chatbot",
      description:
        "AI-powered medical chatbot using RAG architecture to answer health-related questions with information from uploaded PDF documents.",
      image: "https://images.unsplash.com/photo-1619118884592-11b151f1ae11?q=80&w=2070&auto=format&fit=crop",
      techStack: ["LangChain", "OpenAI", "FAISS", "Streamlit"],
      githubUrl: "#",
      demoUrl: "#",
      longDescription:
        "The GenAI Medical Chatbot is an innovative solution that leverages Retrieval Augmented Generation (RAG) architecture to provide accurate medical information. Users can upload medical PDFs, which are processed and indexed using FAISS vector database. The chatbot uses LangChain and OpenAI models to generate contextually relevant responses to health-related queries, ensuring information is sourced from the uploaded documents. The frontend is built with Streamlit, providing an intuitive interface for users to interact with the AI assistant.",
    },
    {
      title: "Churn Prediction Model",
      description:
        "Machine learning model to predict customer churn in telecom industry, with feature engineering and customer insights generation.",
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2070&auto=format&fit=crop",
      techStack: ["XGBoost", "Random Forest", "Python", "Scikit-learn"],
      githubUrl: "#",
      demoUrl: "#",
      longDescription:
        "This project focuses on predicting customer churn in the telecommunications industry using advanced machine learning techniques. The solution includes comprehensive feature engineering to identify key indicators of churn, model training using ensemble methods like XGBoost and Random Forest, and a detailed analysis of feature importance to generate actionable customer insights. The model achieves over 85% accuracy in predicting which customers are likely to leave, allowing businesses to implement targeted retention strategies.",
    },
  ]

  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const carouselRef = useRef(null)

  const visibleProjects =
    typeof window !== "undefined" && window.innerWidth >= 1024 ? projects : [projects[currentIndex]]

  const nextProject = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length)
    setTimeout(() => setIsAnimating(false), 500)
  }

  const prevProject = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setCurrentIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length)
    setTimeout(() => setIsAnimating(false), 500)
  }

  return (
    <section id="projects" className="py-24 bg-slate-50 dark:bg-slate-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-800 dark:text-slate-100">Projects</h2>
          <div className="w-20 h-1 bg-teal-500 dark:bg-teal-400 mx-auto"></div>
        </motion.div>

        <div className="relative" ref={carouselRef}>
          {/* Mobile/tablet navigation */}
          <div className="flex justify-between items-center mb-8 lg:hidden">
            <Button
              variant="outline"
              size="icon"
              onClick={prevProject}
              className="border-teal-500 text-teal-500 hover:bg-teal-50 dark:border-teal-400 dark:text-teal-400 dark:hover:bg-slate-800 rounded-full"
              disabled={isAnimating}
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <span className="text-slate-500 dark:text-slate-400">
              {currentIndex + 1} / {projects.length}
            </span>
            <Button
              variant="outline"
              size="icon"
              onClick={nextProject}
              className="border-teal-500 text-teal-500 hover:bg-teal-50 dark:border-teal-400 dark:text-teal-400 dark:hover:bg-slate-800 rounded-full"
              disabled={isAnimating}
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="wait">
              {visibleProjects.map((project, index) => (
                <motion.div
                  key={`${project.title}-${index}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="h-full"
                >
                  <Card className="h-full overflow-hidden border-slate-200 dark:border-slate-700 hover:shadow-xl transition-all duration-300 group">
                    <div className="relative h-56 overflow-hidden">
                      <img
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                        <div className="p-4 w-full">
                          <Dialog>
                            <DialogTrigger asChild>
                              <Button
                                variant="ghost"
                                size="icon"
                                className="bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full float-right"
                              >
                                <Maximize2 className="h-4 w-4 text-white" />
                              </Button>
                            </DialogTrigger>
                            <DialogContent className="max-w-4xl">
                              <DialogHeader>
                                <DialogTitle className="text-xl font-semibold mb-2">{project.title}</DialogTitle>
                                <DialogDescription>
                                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                                    <div>
                                      <img
                                        src={project.image || "/placeholder.svg"}
                                        alt={project.title}
                                        className="w-full h-auto rounded-lg"
                                      />
                                    </div>
                                    <div>
                                      <p className="text-slate-600 dark:text-slate-300 mb-4">
                                        {project.longDescription}
                                      </p>
                                      <h4 className="font-medium mb-2 text-slate-800 dark:text-slate-200">
                                        Technologies
                                      </h4>
                                      <div className="flex flex-wrap gap-2 mb-6">
                                        {project.techStack.map((tech, techIndex) => (
                                          <span
                                            key={techIndex}
                                            className="text-xs bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300 px-3 py-1 rounded-full"
                                          >
                                            {tech}
                                          </span>
                                        ))}
                                      </div>
                                      <div className="flex gap-3">
                                        <Button
                                          variant="outline"
                                          size="sm"
                                          className="border-teal-500 text-teal-500 hover:bg-teal-50 dark:border-teal-400 dark:text-teal-400 dark:hover:bg-slate-800"
                                          asChild
                                        >
                                          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                                            <Github className="h-4 w-4 mr-2" />
                                            View Code
                                          </a>
                                        </Button>
                                        <Button
                                          size="sm"
                                          className="bg-teal-500 hover:bg-teal-600 dark:bg-teal-500 dark:hover:bg-teal-600"
                                          asChild
                                        >
                                          <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                                            <ExternalLink className="h-4 w-4 mr-2" />
                                            Live Demo
                                          </a>
                                        </Button>
                                      </div>
                                    </div>
                                  </div>
                                </DialogDescription>
                              </DialogHeader>
                            </DialogContent>
                          </Dialog>
                        </div>
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold mb-3 text-slate-800 dark:text-slate-200">{project.title}</h3>
                      <p className="text-slate-600 dark:text-slate-400 mb-4 line-clamp-3">{project.description}</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.techStack.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="text-xs bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300 px-3 py-1 rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </CardContent>
                    <CardFooter className="px-6 pb-6 pt-0 flex justify-between">
                      <Button
                        variant="outline"
                        size="sm"
                        className="border-teal-500 text-teal-500 hover:bg-teal-50 dark:border-teal-400 dark:text-teal-400 dark:hover:bg-slate-800"
                        asChild
                      >
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          <Github className="h-4 w-4 mr-2" />
                          Code
                        </a>
                      </Button>
                      <Button
                        size="sm"
                        className="bg-teal-500 hover:bg-teal-600 dark:bg-teal-500 dark:hover:bg-teal-600"
                        asChild
                      >
                        <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Demo
                        </a>
                      </Button>
                    </CardFooter>
                  </Card>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Desktop navigation arrows */}
          <div className="hidden lg:block">
            <Button
              variant="outline"
              size="icon"
              onClick={prevProject}
              className="absolute -left-12 top-1/2 transform -translate-y-1/2 border-teal-500 text-teal-500 hover:bg-teal-50 dark:border-teal-400 dark:text-teal-400 dark:hover:bg-slate-800 rounded-full"
              disabled={isAnimating}
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={nextProject}
              className="absolute -right-12 top-1/2 transform -translate-y-1/2 border-teal-500 text-teal-500 hover:bg-teal-50 dark:border-teal-400 dark:text-teal-400 dark:hover:bg-slate-800 rounded-full"
              disabled={isAnimating}
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
