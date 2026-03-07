import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import { motion } from "framer-motion";
import { Settings, Handshake, Globe, ClipboardCheck } from "lucide-react";
import { Link } from "react-router-dom";

const steps = [
  { num: "01", title: "Tell Us Your Vision", desc: "Share your target market, product requirements, preferred packaging format, and label language. Our team reviews within 48 hours." },
  { num: "02", title: "Product & Packaging Development", desc: "We develop your product specifications, propose packaging options, and prepare label design mockups for your approval." },
  { num: "03", title: "Sample Production", desc: "We produce a sample batch for your quality review and taste approval before committing to full production." },
  { num: "04", title: "Production & Export", desc: "Your order enters our production queue. We handle all export documentation, certifications, and logistics coordination." },
];

const offerings = [
  "Full product range available — all 8 categories",
  "Cans: 400g retail · A9 catering · A10 bulk industrial",
  "Glass jars: 180ml · 370ml · 720ml · 1L · 2L",
  "Frozen: 400g · 800g · 1kg retail · 5kg · 10kg bulk",
  "Label in any language — Arabic, English, French, German, Spanish, Dutch",
  "Compliant with EU, GCC, UK, and US labeling regulations",
  "Nutritional analysis and allergen declarations included",
  "Recipe and flavor customization available",
  "Halal, Kosher, and other certification documentation",
];

const PrivateLabel = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div>
        <PageHero
          title="Private Label"
          subtitle="Your Brand — Our Expertise — Our Quality"
        />

        <section className="py-20 bg-background">
          <div className="container mx-auto px-6 max-w-4xl">
            <p className="text-muted-foreground text-center mb-16">
              Build your brand on Egypt's finest produce. ALGHAITH manufactures and packages the full range of our eight product categories under your own brand name — with everything handled in-house, from product development to export documentation.
            </p>

            <h2 className="font-display text-2xl font-bold text-foreground text-center mb-10">How It Works</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
              {steps.map((s, i) => (
                <motion.div
                  key={s.num}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="text-center"
                >
                  <div className="w-14 h-14 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <span className="font-display text-xl font-bold text-primary">{s.num}</span>
                  </div>
                  <h3 className="font-semibold text-foreground mb-2 text-sm">{s.title}</h3>
                  <p className="text-xs text-muted-foreground">{s.desc}</p>
                </motion.div>
              ))}
            </div>

            <h2 className="font-display text-2xl font-bold text-foreground mb-6">What We Offer</h2>
            <div className="grid sm:grid-cols-2 gap-3 mb-12">
              {offerings.map((o) => (
                <div key={o} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <div className="w-2 h-2 rounded-full bg-primary shrink-0 mt-1.5" />
                  {o}
                </div>
              ))}
            </div>

            <div className="bg-primary rounded-2xl p-8 text-center">
              <h3 className="font-display text-xl font-bold text-primary-foreground mb-3">
                Unlike brokers, ALGHAITH is the manufacturer
              </h3>
              <p className="text-primary-foreground/80 text-sm mb-6">
                No middleman, no quality uncertainty, no communication gap between what you specify and what we produce.
              </p>
              <Link to="/contact" className="bg-primary-foreground text-primary px-8 py-3 rounded-lg font-medium hover:opacity-90 transition-opacity inline-block">
                Request a Private Label Consultation
              </Link>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default PrivateLabel;
