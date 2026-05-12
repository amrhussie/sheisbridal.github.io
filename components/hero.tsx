"use client"

import { motion } from "framer-motion"
import { ChevronDown } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export function Hero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      {/* Background - Silk Fabric Texture */}
      <div className="absolute inset-0">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1778199079080-QvlIEJH0xzrGnibuEA7C95hhCQBBS6.png"
          alt="Luxury silk fabric"
          fill
          className="object-cover"
          priority
        />
        {/* Subtle gradient overlay for text legibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-ivory/30 via-transparent to-ivory/50" />
      </div>

      {/* Content */}
      <div className="relative min-h-screen container mx-auto px-6 lg:px-12 flex flex-col justify-center items-center text-center pt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="max-w-3xl"
        >
          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, letterSpacing: "0.2em" }}
            animate={{ opacity: 1, letterSpacing: "0.3em" }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-charcoal/60 uppercase text-xs md:text-sm mb-8"
          >
            Luxury Bridal Rentals
          </motion.p>
          
          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="font-serif text-4xl md:text-6xl lg:text-7xl text-charcoal leading-[1.1] mb-6"
          >
            <span className="block">Elegance</span>
            <span className="italic text-charcoal/80">Redefined</span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1, duration: 0.8 }}
            className="text-charcoal/50 text-base md:text-lg max-w-xl mx-auto mb-4 leading-relaxed"
          >
            By Sara & Bosy
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="text-charcoal/60 text-sm md:text-base max-w-lg mx-auto mb-12 leading-relaxed"
          >
            Experience couture bridal fashion. Rent your dream gown from our exclusive collection in Nasr City, Cairo.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4, duration: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              href="#collection"
              className="group inline-flex items-center gap-3 bg-charcoal text-ivory px-8 py-4 text-xs uppercase tracking-[0.2em] hover:bg-charcoal/90 transition-all duration-300"
            >
              View Collection
              <span className="group-hover:translate-x-1 transition-transform duration-300">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-ivory">
                  <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
            </Link>
            <a
              href="https://wa.me/201034617924"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 border border-charcoal/40 text-charcoal px-8 py-4 text-xs uppercase tracking-[0.2em] hover:border-charcoal hover:bg-charcoal hover:text-ivory transition-all duration-300"
            >
              Book Appointment
            </a>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center gap-2"
          >
            <span className="text-charcoal/40 text-[10px] uppercase tracking-[0.3em]">Scroll</span>
            <ChevronDown className="text-charcoal/40" size={20} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
