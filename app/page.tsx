import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { DarkShowcase } from "@/components/dark-showcase"
import { FeaturedDresses } from "@/components/featured-dresses"
import { RentalProcess } from "@/components/rental-process"
import { SocialContact, WhatsAppButton } from "@/components/social-contact"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <DarkShowcase />
      <FeaturedDresses />
      <RentalProcess />
      <SocialContact />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
