"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { MapPin, Clock, Phone, Instagram } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export function Footer() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  return (
    <footer id="contact" className="relative overflow-hidden" ref={ref}>
      {/* Background with brand image */}
      <div className="absolute inset-0">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1778119904877-xkq8LVI0RqWn9oNkcbkZy7zE4knssu.png"
          alt="Elegant fabric texture"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-charcoal/90" />
      </div>

      <div className="container mx-auto px-6 lg:px-12 py-16 md:py-24 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-8 mb-16">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="lg:col-span-1"
          >
            <Link href="/" className="inline-block mb-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="relative w-12 h-12">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1778154199293.jpg-az16IyZ1PwSFwntEDEqgsp3f5NITCL.jpg"
                    alt="She Is Bridal"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
              <span className="font-serif text-xl text-ivory">
                she is <span className="italic">bridal</span>
              </span>
            </Link>
            <p className="text-ivory/50 text-sm leading-relaxed mt-4">
              Luxury wedding dress rentals in Nasr City. Experience couture bridal fashion by Sara & Bosy.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="font-serif text-base text-ivory mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { label: "Collections", href: "#collection" },
                { label: "How It Works", href: "#how-it-works" },
                { label: "About", href: "#about" },
                { label: "Contact", href: "#contact" },
              ].map((link) => (
                <li key={link.label}>
                  <a 
                    href={link.href}
                    className="text-ivory/50 text-sm hover:text-ivory transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Location */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="font-serif text-base text-ivory mb-6">Visit Us</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="text-ivory/40 mt-0.5 shrink-0" size={16} />
                <a 
                  href="https://maps.app.goo.gl/omozWHyhkYYPetWU9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-ivory/50 text-sm hover:text-ivory transition-colors duration-300 leading-relaxed"
                >
                  Zaki Rustum, Hassanein Heikal<br />
                  Abbas al-Aqqad, Nasr City<br />
                  Cairo 11762, Egypt
                </a>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="text-ivory/40 mt-0.5 shrink-0" size={16} />
                <a 
                  href="tel:+201034617924" 
                  className="text-ivory/50 text-sm hover:text-ivory transition-colors duration-300"
                >
                  010 3461 7924
                </a>
              </div>
            </div>
          </motion.div>

          {/* Hours & Social */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4 className="font-serif text-base text-ivory mb-6">Hours</h4>
            <div className="flex items-start gap-3 mb-6">
              <Clock className="text-ivory/40 mt-0.5 shrink-0" size={16} />
              <div className="text-ivory/50 text-sm space-y-1">
                <p>Open Daily</p>
                <p className="text-ivory">Until 11:30 PM</p>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-3 mt-6">
              <a
                href="https://instagram.com/she.is.bridal"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 border border-ivory/20 flex items-center justify-center text-ivory/50 hover:border-ivory/40 hover:text-ivory transition-all duration-300"
                aria-label="Follow us on Instagram"
              >
                <Instagram size={18} />
              </a>
              <a
                href="https://www.tiktok.com/@she.is.bridal"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 border border-ivory/20 flex items-center justify-center text-ivory/50 hover:border-ivory/40 hover:text-ivory transition-all duration-300"
                aria-label="Follow us on TikTok"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                  <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z" />
                </svg>
              </a>
              <a
                href="https://wa.me/201034617924"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 border border-ivory/20 flex items-center justify-center text-ivory/50 hover:border-ivory/40 hover:text-ivory transition-all duration-300"
                aria-label="Contact us on WhatsApp"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </a>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="pt-8 border-t border-ivory/10 flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <p className="text-ivory/30 text-xs text-center md:text-left tracking-wide">
            © {new Date().getFullYear()} She Is Bridal. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-ivory/30 text-xs hover:text-ivory/60 transition-colors duration-300">
              Privacy Policy
            </a>
            <a href="#" className="text-ivory/30 text-xs hover:text-ivory/60 transition-colors duration-300">
              Terms of Service
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
