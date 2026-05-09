"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"
import Link from "next/link"

export function DarkShowcase() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="relative py-24 md:py-32 overflow-hidden" ref={ref}>
      {/* Dark Fabric Background */}
      <div className="absolute inset-0">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1778119904877-xkq8LVI0RqWn9oNkcbkZy7zE4knssu.png"
          alt="Luxury fabric texture"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-charcoal/80" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <motion.p
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.2 }}
              className="text-ivory/50 uppercase tracking-[0.3em] text-xs mb-6"
            >
              By Sara & Bosy
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="font-serif text-3xl md:text-4xl lg:text-5xl text-ivory mb-6 leading-tight text-balance"
            >
              Couture Bridal <span className="italic">Excellence</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.4 }}
              className="text-ivory/60 text-sm md:text-base mb-10 leading-relaxed max-w-lg"
            >
              With over 500 satisfied brides and a collection of 100+ exclusive gowns, 
              we specialize in bringing your bridal dreams to life. Each dress tells a story 
              of elegance, craftsmanship, and timeless beauty.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.5 }}
            >
              <Link
                href="#collection"
                className="group inline-flex items-center gap-3 bg-ivory text-charcoal px-8 py-4 text-xs uppercase tracking-[0.2em] hover:bg-ivory/90 transition-all duration-300"
              >
                Explore Collection
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="group-hover:translate-x-1 transition-transform duration-300">
                  <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
            </motion.div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="grid grid-cols-3 gap-6 md:gap-8"
          >
            {[
              { number: "500+", label: "Happy Brides" },
              { number: "100+", label: "Exclusive Gowns" },
              { number: "10+", label: "Years Experience" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.5 + index * 0.1 }}
                className="text-center lg:text-left"
              >
                <div className="font-serif text-3xl md:text-4xl lg:text-5xl text-ivory mb-2">
                  {stat.number}
                </div>
                <p className="text-ivory/50 text-[10px] md:text-xs uppercase tracking-[0.2em]">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
