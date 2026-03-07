import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

import imgVeg from "@/assets/category-frozen.png";
import imgFruits from "@/assets/category-fruits.png";
import imgOlives from "@/assets/category-olives.png";
import imgPeppers from "@/assets/category-peppers.png";
import imgPickles from "@/assets/category-pickles.png";
import imgBeans from "@/assets/category-beans.png";
import imgCanned from "@/assets/category-canned.jpg";
import imgReady from "@/assets/category-ready.jpg";

const categories = [
  { img: imgVeg, name: "Frozen Vegetables", items: "10 Products", slug: "frozen-vegetables" },
  { img: imgFruits, name: "Fruits", items: "9 Products", slug: "fruits" },
  { img: imgOlives, name: "Olives", items: "7 Products", slug: "olives" },
  { img: imgPeppers, name: "Peppers", items: "9 Products", slug: "peppers" },
  { img: imgPickles, name: "Pickles", items: "7 Products", slug: "pickles" },
  { img: imgBeans, name: "Beans & Legumes", items: "8 Products", slug: "beans" },
  { img: imgCanned, name: "Canned Vegetables", items: "10 Products", slug: "canned-vegetables" },
  { img: imgReady, name: "Ready to Eat", items: "6 Products", slug: "ready-to-eat" },
];

const ProductCategoriesSection = () => {
  return (
    <section className="py-24 bg-section-alt">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-sm uppercase tracking-[0.2em] text-primary mb-3">Our Products</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-6">
            Eight Categories, One Standard of Excellence
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore our comprehensive range of premium Egyptian agricultural products, processed and preserved to perfection for the global market.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="bg-background border border-border rounded-[32px] overflow-hidden hover:shadow-2xl hover:border-primary/40 transition-all duration-500 group flex flex-col"
            >
              <div className="relative h-48 overflow-hidden bg-primary/5">
                <img
                  src={cat.img}
                  alt={cat.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <p className="text-xs text-primary font-bold tracking-wider mb-2 uppercase">{cat.items}</p>
                <h3 className="font-display text-xl font-bold text-foreground mb-4">{cat.name}</h3>

                <div className="mt-auto pt-4 border-t border-border">
                  <Link
                    to={`/products`} // In a real app we'd scroll to the id or handle route state
                    className="inline-flex items-center gap-2 text-sm font-bold text-primary group-hover:text-secondary transition-colors"
                  >
                    View Range <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-16 pb-8">
          <Link
            to="/products"
            className="bg-gradient-to-r from-primary to-secondary text-primary-foreground px-10 py-4 rounded-full font-bold text-lg hover:from-secondary hover:to-primary transition-all duration-300 shadow-xl hover:shadow-2xl inline-flex items-center gap-2 relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-white/10 -translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
            <span className="relative z-10">Explore Complete Catalog</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProductCategoriesSection;
