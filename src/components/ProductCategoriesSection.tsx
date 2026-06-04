import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useTranslation } from "react-i18next";

import imgVeg from "@/assets/category-frozen.png";
import imgFruits from "@/assets/category-fruits.png";
import imgOlives from "@/assets/category-olives.png";
import imgPeppers from "@/assets/category-peppers.png";
import imgPickles from "@/assets/category-pickles.png";
import imgBeans from "@/assets/category-beans.png";
import imgCanned from "@/assets/category-canned.jpg";
import imgReady from "@/assets/category-ready.jpg";

const ProductCategoriesSection = () => {
  const { t } = useTranslation();

  const categories = [
    { img: imgVeg, name: t('product_categories.cats.frozen-vegetables'), items: `10 ${t('product_categories.products_word')}`, slug: "frozen-vegetables" },
    { img: imgFruits, name: t('product_categories.cats.fruits'), items: `9 ${t('product_categories.products_word')}`, slug: "fruits" },
    { img: imgOlives, name: t('product_categories.cats.olives'), items: `7 ${t('product_categories.products_word')}`, slug: "olives" },
    { img: imgPeppers, name: t('product_categories.cats.peppers'), items: `9 ${t('product_categories.products_word')}`, slug: "peppers" },
    { img: imgPickles, name: t('product_categories.cats.pickles'), items: `7 ${t('product_categories.products_word')}`, slug: "pickles" },
    { img: imgBeans, name: t('product_categories.cats.beans-legumes'), items: `8 ${t('product_categories.products_word')}`, slug: "beans-legumes" },
    { img: imgCanned, name: t('product_categories.cats.canned-vegetables'), items: `16 ${t('product_categories.products_word')}`, slug: "canned-vegetables" },
  ];

  return (
    <section className="py-24 bg-section-alt">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-sm uppercase tracking-[0.2em] text-primary mb-3">{t('product_categories.subtitle')}</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-6">
            {t('product_categories.title')}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t('product_categories.description')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.slug}
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
                    to={`/products`} 
                    className="inline-flex items-center gap-2 text-sm font-bold text-primary group-hover:text-secondary transition-colors"
                  >
                    {t('product_categories.view_range')} <ArrowRight className="w-4 h-4 group-hover:translate-x-1 rtl:rotate-180 transition-transform" />
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
            <span className="relative z-10">{t('product_categories.explore_catalog')}</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProductCategoriesSection;
