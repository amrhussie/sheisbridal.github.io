"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"

const dresses = [
  {
    id: 1,
    name: "The Celestine",
    style: "A-Line Elegance",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1778198431785.jpg-CoAqrKhz1836kV5jo65cb7ItcPHN9U.jpg",
  },
  {
    id: 2,
    name: "The Arabella",
    style: "Classic Ball Gown",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1778154024531.jpg-yy3qUKlRgVWDIAcjR14cW738FDTzUP.jpg",
  },
  {
    id: 3,
    name: "The Seraphina",
    style: "Mermaid Silhouette",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1778198111498.jpg-CFWZ09eyu7iNcvibpE8G5ie7npdIjW.jpg",
  },
  {
    id: 4,
    name: "The Valentina",
    style: "Vintage Lace",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1778195926385-fMBkHs5dPdVaiZYQDaCjaGrW4j9do7.png",
  },
  {
    id: 5,
    name: "The Anastasia",
    style: "Modern Minimalist",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1778116124401.jpg-Jnf6RLILrcIB9bcQU335pH1qqngXhi.jpg",
  },
  {
    id: 6,
    name: "The Isadora",
    style: "Bohemian Dream",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1778119904877-xkq8LVI0RqWn9oNkcbkZy7zE4knssu.png",
  },
]

export function FeaturedDresses() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="collection" className="py-24 md:py-32 bg-cream" ref={ref}>
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 md:mb-20"
        >
          <p className="text-charcoal/50 uppercase tracking-[0.3em] text-xs mb-4">
            The Collection
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-charcoal mb-6 text-balance">
            Featured <span className="italic">Gowns</span>
          </h2>
          <p className="text-charcoal/60 text-sm md:text-base max-w-xl mx-auto leading-relaxed">
            Each piece has been carefully selected to ensure you feel extraordinary on your special day.
          </p>
        </motion.div>

        {/* Dress Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {dresses.map((dress, index) => (
            <motion.div
              key={dress.id}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1 * index }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[3/4] overflow-hidden mb-5 bg-silk">
                <Image
                  src={dress.image}
                  alt={dress.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/20 transition-all duration-500" />
                
                {/* CTA Button */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <a
                    href="https://wa.me/201034617924"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-ivory/95 text-charcoal px-6 py-3 text-xs uppercase tracking-[0.15em] hover:bg-ivory transition-colors"
                  >
                    Check Availability
                  </a>
                </div>
              </div>

              {/* Dress Info */}
              <div className="text-center">
                <h3 className="font-serif text-xl text-charcoal group-hover:text-charcoal/70 transition-colors duration-300">
                  {dress.name}
                </h3>
                <p className="text-xs text-charcoal/50 uppercase tracking-[0.2em] mt-2">
                  {dress.style}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <a
            href="https://wa.me/201034617924"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 border border-charcoal/30 text-charcoal px-8 py-4 text-xs uppercase tracking-[0.2em] hover:border-charcoal hover:bg-charcoal hover:text-ivory transition-all duration-300"
          >
            View Full Collection
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-current">
              <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  )
}
