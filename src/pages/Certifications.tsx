import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import { motion } from "framer-motion";
import { Shield } from "lucide-react";

const certs = [
  {
    name: "U.S. FDA",
    full: "U.S. Food and Drug Administration",
    desc: "Facility Registration No. 19951687376. Agent: QA Technic International. FDA registration is required for any food facility exporting to the United States — the strictest food safety regulatory framework in the world.",
  },
  {
    name: "ISO 9001:2015",
    full: "Quality Management System",
    desc: "Certificate No.: EG02390246. Certified by SINFINITY for Processing, Freezing, Packing, Preservation and Exporting of Vegetables and Fruits. The global benchmark for quality management.",
  },
  {
    name: "ISO 22000:2018",
    full: "Food Safety Management System",
    desc: "Certificate No.: EG02390248. Certified by SINFINITY. Integrates HACCP principles with quality management practices. Hazard analysis and critical control points embedded at every production stage.",
  },
  {
    name: "Kosher",
    full: "World of Kashrut (WK)",
    desc: "Products certified Kosher Parve. Certifying Body: World of Kashrut (WK) — Israel. Opens product range to Jewish consumers globally, increasingly required by US and European retailers.",
  },
  {
    name: "HALAL",
    full: "IFNAS Certification",
    desc: "Certificate Number: IFNAS-EG-HALAL-AF-907. Certifying Body: Islamic Food & Nutrition Awareness Society. A prerequisite for market entry in GCC countries, Indonesia, Malaysia.",
  },
];

const Certifications = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div>
        <PageHero
          title="Certifications"
          subtitle="Our Quality Is Not Self-Declared — It Is Verified, Audited, and Certified"
        />

        <section className="py-20 bg-background">
          <div className="container mx-auto px-6 max-w-4xl">
            <p className="text-muted-foreground text-center mb-16">
              Every product leaving ALGHAITH Factory carries the weight of trust — earned through rigorous third-party audits, continuous internal quality management, and an unwavering commitment to food safety.
            </p>

            <div className="space-y-6">
              {certs.map((c, i) => (
                <motion.div
                  key={c.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="bg-card border border-border rounded-xl p-6"
                >
                  <div className="flex items-center gap-4 mb-3">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                      <Shield className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-display text-lg font-bold text-foreground">{c.name}</h3>
                      <p className="text-sm text-primary">{c.full}</p>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">{c.desc}</p>
                </motion.div>
              ))}
            </div>

            <div className="mt-12 text-center text-sm text-muted-foreground">
              All certificates are available to download or can be provided in full upon request.
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Certifications;
