import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const CTASection = () => {
  return (
    <section className="py-20 bg-primary">
      <div className="container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Ready to Partner with Egypt's Leading Food Processor?
          </h2>
          <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto">
            From your first enquiry to your first shipment, the ALGHAITH team is with you at every step.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-primary-foreground text-primary px-8 py-3 rounded-lg font-medium hover:opacity-90 transition-opacity"
            >
              Contact Us →
            </Link>
            <Link
              to="/products"
              className="border border-primary-foreground/30 text-primary-foreground px-8 py-3 rounded-lg font-medium hover:bg-primary-foreground/10 transition-colors"
            >
              Download Catalogue
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
