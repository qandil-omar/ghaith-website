import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import { motion } from "framer-motion";
import { Factory, Tag, Lightbulb, Truck, ShieldCheck } from "lucide-react";

const services = [
  {
    icon: Factory,
    title: "Food Processing & Manufacturing",
    desc: "Processing, freezing, canning, and preservation of premium Egyptian fruits and vegetables across eight product categories. Every production run is executed under ISO 9001 and ISO 22000 certified systems, with full batch traceability.",
  },
  {
    icon: Tag,
    title: "Private Label & OEM Manufacturing",
    desc: "Full private label service for all product categories. Minimum order quantities are discussed per product and format. We have successfully launched private label brands for clients in the GCC, Europe, and North America.",
  },
  {
    icon: Lightbulb,
    title: "Custom Product Development",
    desc: "New flavor profiles, vegetable and fruit combinations, organic product lines, convenience formats (microwaveable pouches, portion-controlled servings), and reduced-sodium or clean-label formulations.",
  },
  {
    icon: Truck,
    title: "Export & Logistics Support",
    desc: "Complete export documentation and logistics coordination: Certificate of Origin, Health and Food Safety Certificates, Phytosanitary Certificates, customs clearance, cold-chain logistics. Flexible Incoterms: FOB · CIF · CFR.",
  },
  {
    icon: ShieldCheck,
    title: "Quality Assurance & Compliance",
    desc: "Third-party pre-shipment inspection support, in-house lab testing certificates, shelf-life and nutritional analysis documentation, batch-level traceability reports, allergen declarations and labeling compliance review.",
  },
];

const Services = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div>
        <PageHero
          title="Our Services"
          subtitle="End-to-End Solutions — From Raw Ingredient to Your Market Shelf"
        />

        <section className="py-20 bg-background">
          <div className="container mx-auto px-6 max-w-4xl">
            <p className="text-muted-foreground text-center mb-16">
              ALGHAITH offers more than products. We offer a complete service ecosystem designed to make your sourcing experience seamless — from the first enquiry to the final delivery.
            </p>

            <div className="space-y-6">
              {services.map((s, i) => (
                <motion.div
                  key={s.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="bg-card border border-border rounded-xl p-6 flex gap-6 items-start"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <s.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-semibold text-foreground mb-2">{s.title}</h3>
                    <p className="text-sm text-muted-foreground">{s.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Services;
