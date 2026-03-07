import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import productsImg from "@/assets/alghaith-products.jpg";

const AboutSection = () => {
  return (
    <section className="py-24 bg-leaves-pattern">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-sm uppercase tracking-[0.2em] text-primary mb-3">About Us</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
              Egypt's Agricultural Heritage — In Every Can and Every Pack
            </h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Since 2014, ALGHAITH Factory has been turning Egypt's finest harvests into world-class products that reach homes, restaurants, and supermarkets across continents. Located in Alatwa Alqeblia, Qutour — the heartland of Al Gharbia's rich agricultural belt — we combine decades of local farming knowledge with advanced IQF and canning technology.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-3.5 rounded-full font-bold hover:bg-primary/90 transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5"
            >
              Discover Our Story →
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl overflow-hidden shadow-xl"
          >
            <img src={productsImg} alt="ALGHAITH Products" className="w-full h-auto" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
