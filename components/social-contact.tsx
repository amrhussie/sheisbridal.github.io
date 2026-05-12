"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Instagram, MessageCircle } from "lucide-react"
import Image from "next/image"

const socialImages = [
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1778198431785.jpg-CoAqrKhz1836kV5jo65cb7ItcPHN9U.jpg",
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1778195926385-fMBkHs5dPdVaiZYQDaCjaGrW4j9do7.png",
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1778116124401.jpg-Jnf6RLILrcIB9bcQU335pH1qqngXhi.jpg",
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1778119904877-xkq8LVI0RqWn9oNkcbkZy7zE4knssu.png",
]

export function SocialContact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="about" className="py-24 md:py-32 bg-cream" ref={ref}>
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-charcoal/50 uppercase tracking-[0.3em] text-xs mb-4">
            Connect With Us
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-charcoal mb-6 text-balance">
            Follow Our <span className="italic">Journey</span>
          </h2>
          <p className="text-charcoal/60 text-sm md:text-base max-w-lg mx-auto leading-relaxed">
            Stay inspired with our latest collections, real brides, and behind-the-scenes moments.
          </p>
        </motion.div>

        {/* Social Grid */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mb-14"
        >
          {socialImages.map((image, index) => (
            <motion.a
              key={index}
              href="https://instagram.com/she.is.bridal"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * index + 0.3 }}
              className="relative aspect-square overflow-hidden group bg-silk"
            >
              <Image
                src={image}
                alt="She Is Bridal on Instagram"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/30 transition-colors duration-500 flex items-center justify-center">
                <Instagram 
                  className="text-ivory opacity-0 group-hover:opacity-100 transition-opacity duration-300" 
                  size={28} 
                />
              </div>
            </motion.a>
          ))}
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="https://instagram.com/she.is.bridal"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 border border-charcoal/30 text-charcoal px-7 py-3.5 text-xs uppercase tracking-[0.15em] hover:border-charcoal hover:bg-charcoal hover:text-ivory transition-all duration-300"
          >
            <Instagram size={18} />
            @she.is.bridal
          </a>
          <a
            href="https://www.tiktok.com/@she.is.bridal"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 border border-charcoal/30 text-charcoal px-7 py-3.5 text-xs uppercase tracking-[0.15em] hover:border-charcoal hover:bg-charcoal hover:text-ivory transition-all duration-300"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
              <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z" />
            </svg>
            @she.is.bridal
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export function WhatsAppButton() {
  return (
    <motion.a
      href="https://wa.me/201034617924"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 2, type: "spring" }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow"
      aria-label="Contact us on WhatsApp"
    >
      <MessageCircle className="text-white" size={26} />
    </motion.a>
  )
}
