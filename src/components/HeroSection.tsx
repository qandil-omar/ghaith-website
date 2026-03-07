import { motion } from "framer-motion";
import { ArrowDown, Calendar, Award, Package, Globe } from "lucide-react";
import heroBg from "@/assets/egyptian-farm.jpg";
import { Link } from "react-router-dom";

const stats = [
  { value: "Est. 2014", label: "A decade of food processing excellence", icon: Calendar },
  { value: "5+", label: "International Certifications", icon: Award },
  { value: "8", label: "Product Categories", icon: Package },
  { value: "Global", label: "Gulf · Europe · North America", icon: Globe },
];

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-36">
      <div className="absolute inset-0 z-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-foreground/60" />
      </div>

      <div className="relative z-10 container mx-auto px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-sm uppercase tracking-[0.3em] text-primary-foreground/70 mb-4"
        >
          ALGHAITH Factory
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6 max-w-4xl mx-auto"
        >
          Quality You Can Trust
          <br />
          <span className="text-gold">Freshness You Can Taste</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="max-w-4xl mx-auto text-lg text-primary-foreground/80 mb-10"
        >
          From the fertile heart of Egypt's Nile Delta to tables across the globe — ALGHAITH Factory delivers premium processed, frozen, and canned fruits and vegetables, crafted with precision and preserved with purpose.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
        >
          <Link
            to="/products"
            className="bg-gradient-to-r from-primary to-secondary text-primary-foreground px-10 py-4 rounded-full font-bold text-lg hover:from-secondary hover:to-primary transition-all duration-300 shadow-xl hover:shadow-2xl relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-white/10 -translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
            <span className="relative z-10">Explore Our Products</span>
          </Link>
          <Link
            to="/contact"
            className="bg-white/10 backdrop-blur-md border border-white/30 text-primary-foreground px-10 py-4 rounded-full font-bold text-lg hover:bg-white/20 transition-all duration-300 shadow-lg"
          >
            Request a Quote
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto"
        >
          {stats.map((stat) => (
            <div key={stat.label} className="bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 rounded-xl p-5">
              <stat.icon className="w-5 h-5 text-gold mx-auto mb-2" />
              <div className="font-display text-xl font-bold text-primary-foreground">{stat.value}</div>
              <div className="text-xs text-primary-foreground/60">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="mt-12"
        >
          <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>
            <ArrowDown size={20} className="mx-auto text-primary-foreground/50" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
