import { motion } from "framer-motion";
import { Factory, Sprout, Globe, Award, BarChart3, Users, ShieldCheck, CheckCircle2 } from "lucide-react";

const reasons = [
  { icon: Factory, title: "State-of-the-Art Facility", desc: "Modern manufacturing with latest canning technology ensuring top-tier quality and food safety." },
  { icon: Sprout, title: "Farm to Can", desc: "Sourcing the finest raw materials directly from Egyptian farms for freshness and traceability." },
  { icon: Globe, title: "Global Export Network", desc: "Exporting to markets across Europe, the Middle East, Africa, Asia, and the Americas." },
  { icon: Award, title: "Internationally Certified", desc: "FDA · ISO 9001 · ISO 22000 · Kosher · HALAL certifications." },
  { icon: BarChart3, title: "High Production Capacity", desc: "Significant annual production capacity for large-scale orders with consistency." },
  { icon: Users, title: "Customer-Centric", desc: "Close collaboration for customized solutions that exceed expectations." },
];

const certifications = [
  { name: "U.S. FDA", reg: "Reg: 19951687376", desc: "US Food & Drug Administration" },
  { name: "ISO 9001:2015", reg: "EG02390246", desc: "Quality Management System" },
  { name: "ISO 22000:2018", reg: "EG02390248", desc: "Food Safety Management" },
  { name: "Kosher Parve", reg: "World of Kashrut", desc: "Certified WK Israel" },
  { name: "HALAL", reg: "IFNAS-EG-HALAL-AF-907", desc: "Islamic Food & Nutrition" },
];

const WhyChooseSection = () => {
  return (
    <section className="py-24 bg-leaves-pattern">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-sm uppercase tracking-[0.2em] text-primary mb-3">Why Choose Us</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
            Why Choose ALGHAITH
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
          {reasons.map((r, i) => (
            <motion.div
              key={r.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="bg-background border border-border rounded-[32px] p-8 hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 group"
            >
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-primary transition-all duration-300">
                <r.icon className="w-8 h-8 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
              </div>
              <h3 className="font-display text-xl font-bold text-foreground mb-3">{r.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{r.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-6">
            Our Quality Is Verified
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Every product leaving ALGHAITH Factory carries the weight of trust — earned through rigorous third-party audits and internationally recognized certifications.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-5 gap-6">
          {certifications.map((cert, i) => (
            <motion.div
              key={cert.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white border border-border rounded-[32px] p-6 text-center flex flex-col items-center justify-center hover:border-primary/50 hover:shadow-xl transition-all duration-300 relative overflow-hidden group"
            >
              <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-primary to-secondary transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
              <div className="w-14 h-14 rounded-full bg-primary/5 flex items-center justify-center mb-5 group-hover:bg-primary/10 transition-colors duration-300">
                <ShieldCheck className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-display font-bold text-lg text-foreground mb-2">{cert.name}</h3>
              <p className="text-sm text-muted-foreground mb-4 leading-snug">{cert.desc}</p>
              <div className="mt-auto bg-section-alt w-full py-2.5 px-3 rounded-xl border border-border/50">
                <p className="text-[11px] font-mono text-primary font-bold break-all">
                  {cert.reg}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
