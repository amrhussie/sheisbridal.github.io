"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"

const steps = [
  {
    number: "01",
    title: "Browse & Select",
    description: "Explore our curated collection online or visit our Nasr City atelier to discover your perfect gown.",
  },
  {
    number: "02",
    title: "Fitting Session",
    description: "Schedule a personalized fitting with our expert stylists who will ensure the perfect fit for you.",
  },
  {
    number: "03",
    title: "Your Special Day",
    description: "Wear your dream dress with confidence. We handle all alterations and provide seamless pickup and return.",
  },
]

export function RentalProcess() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="how-it-works" className="relative py-24 md:py-32 overflow-hidden" ref={ref}>
      {/* Background Texture */}
      <div className="absolute inset-0">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1778154024531.jpg-yy3qUKlRgVWDIAcjR14cW738FDTzUP.jpg"
          alt="Silk texture"
          fill
          className="object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-ivory/90" />
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 md:mb-20"
        >
          <p className="text-charcoal/50 uppercase tracking-[0.3em] text-xs mb-4">
            How It Works
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-charcoal text-balance">
            Your Journey to <span className="italic">Elegance</span>
          </h2>
        </motion.div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8 md:gap-6 lg:gap-12">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 * index }}
              className="relative"
            >
              {/* Connector Line (desktop only) */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-8 left-[60%] w-[80%] h-px bg-border" />
              )}

              <div className="relative bg-card p-8 lg:p-10 border border-border hover:border-charcoal/20 transition-all duration-500 group">
                {/* Large Number Background */}
                <span className="absolute top-4 right-4 font-serif text-6xl lg:text-7xl text-charcoal/[0.03] group-hover:text-charcoal/[0.06] transition-colors duration-500 select-none">
                  {step.number}
                </span>

                {/* Number Badge */}
                <div className="w-12 h-12 mb-6 flex items-center justify-center border border-charcoal/20 group-hover:border-charcoal/40 transition-colors duration-300">
                  <span className="font-serif text-lg text-charcoal/70">{step.number}</span>
                </div>

                <h3 className="font-serif text-xl lg:text-2xl text-charcoal mb-4">
                  {step.title}
                </h3>
                <p className="text-charcoal/60 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <a
            href="https://wa.me/201034617924"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-charcoal text-ivory px-8 py-4 text-xs uppercase tracking-[0.2em] hover:bg-charcoal/90 transition-all duration-300"
          >
            Start Your Journey
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-ivory">
              <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  )
}
