import { createReader } from "@keystatic/core/reader";
import keystaticConfig from "../keystatic.config";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import WhatsAppButton from "@/components/WhatsAppButton";
import Hardware from "@/components/Hardware";

const reader = createReader(process.cwd(), keystaticConfig);

export default async function Home() {
  const [settings, rawTestimonials] = await Promise.all([
    reader.singletons.siteSettings.read(),
    reader.collections.testimonials.all(),
  ]);

  const testimonials = rawTestimonials.map((t) => ({
    slug: t.slug,
    author: t.entry.author,
    quote: t.entry.quote,
    business: t.entry.business,
    location: t.entry.location,
    initials: t.entry.initials,
    color: t.entry.color,
  }));

  const socialLinks = [
    settings?.facebookUrl  && { name: "Facebook",  href: settings.facebookUrl },
    settings?.instagramUrl && { name: "Instagram", href: settings.instagramUrl },
    settings?.linkedinUrl  && { name: "LinkedIn",  href: settings.linkedinUrl },
    settings?.xUrl         && { name: "X",         href: settings.xUrl },
  ].filter((x): x is { name: string; href: string } => Boolean(x));

  // const launchDate   = settings?.launchDate   ?? "2099-01-01T00:00:00-06:00";
  const whatsappNumber = settings?.whatsappNumber ?? "";

  return (
    <main>
      <Navbar />
      <Hero />
      <Features />
      <Hardware />
      <Pricing />
      <Testimonials testimonials={testimonials} />
      <FAQ phoneNumber={whatsappNumber} />
      <CTA />
      <Contact socialLinks={socialLinks} />
      <Footer />
      <ScrollToTop />
      <WhatsAppButton phoneNumber={whatsappNumber} />
    </main>
  );
}
