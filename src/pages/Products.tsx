import { useState, useRef } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import { motion, AnimatePresence } from "framer-motion";
import { Package } from "lucide-react";
import { useTranslation } from "react-i18next";

import frozenImg from "@/assets/category-frozen.png";
import fruitsImg from "@/assets/category-fruits.png";
import olivesImg from "@/assets/category-olives.png";
import peppersImg from "@/assets/category-peppers.png";
import picklesImg from "@/assets/category-pickles.png";
import beansImg from "@/assets/category-beans.png";
import cannedImg from "@/assets/category-canned.jpg";
import readyImg from "@/assets/category-ready.jpg";

const catIds = [
  "frozen-vegetables",
  "fruits",
  "olives",
  "peppers",
  "pickles",
  "beans-legumes",
  "canned-vegetables"
];

const catImages: Record<string, string> = {
  "frozen-vegetables": frozenImg,
  "fruits": fruitsImg,
  "olives": olivesImg,
  "peppers": peppersImg,
  "pickles": picklesImg,
  "beans-legumes": beansImg,
  "canned-vegetables": cannedImg
};

const Products = () => {
  const { t } = useTranslation();
  const [active, setActive] = useState("frozen-vegetables");
  const contentRef = useRef<HTMLDivElement>(null);

  const categories = catIds.map(id => ({
    id,
    name: t(`product_categories.cats.${id}`),
    image: catImages[id],
    headline: t(`products_page.cats_data.${id}.headline`),
    intro: t(`products_page.cats_data.${id}.intro`),
    packaging: t(`products_page.cats_data.${id}.packaging`),
    products: t(`products_page.cats_data.${id}.products`, { returnObjects: true }) as Array<{name: string, desc: string}>
  }));

  const activeCat = categories.find((c) => c.id === active)!;

  const handleCategoryChange = (id: string) => {
    setActive(id);
    // On mobile, scroll content into view smoothly
    if (window.innerWidth < 1024 && contentRef.current) {
      contentRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <div>
        <PageHero
          title={t('products_page.hero_title')}
          subtitle={t('products_page.hero_subtitle')}
        />

        <section className="py-16 bg-background">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto mb-16 px-4 py-8 bg-section-alt rounded-2xl border border-border shadow-sm text-center">
              <p className="text-foreground leading-relaxed text-sm md:text-base">
                {t('products_page.intro_p1')}
              </p>
              <div className="h-px w-24 bg-primary/20 mx-auto my-6" />
              <p className="text-muted-foreground text-sm">
                {t('products_page.intro_p2')}
              </p>
            </div>

            {/* ─── Mobile sticky tab bar ─── */}
            <div className="lg:hidden sticky top-20 z-30 -mx-6 px-4 py-3 bg-background/95 backdrop-blur border-b border-border mb-8 overflow-x-auto">
              <div className="flex gap-2 w-max">
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => handleCategoryChange(cat.id)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold whitespace-nowrap transition-all duration-200 ${active === cat.id
                        ? "bg-gradient-to-r from-primary to-secondary text-primary-foreground shadow-md"
                        : "bg-section-alt text-foreground border border-border"
                      }`}
                  >
                    <img src={cat.image} alt={cat.name} className="w-5 h-5 rounded-full object-cover" />
                    {cat.name}
                  </button>
                ))}
              </div>
            </div>

            {/* ─── Desktop: sidebar + content ─── */}
            <div className="flex gap-8 items-start">
              {/* Sticky Sidebar — desktop only */}
              <aside className="hidden lg:block w-64 shrink-0 sticky top-28 self-start">
                <div className="bg-white border border-border rounded-2xl p-3 shadow-sm">
                  <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground px-3 pt-2 pb-3">{t('products_page.categories_label')}</p>
                  <div className="flex flex-col gap-1">
                    {categories.map((cat) => (
                      <button
                        key={cat.id}
                        onClick={() => setActive(cat.id)}
                        className={`flex items-center gap-3 px-3 py-3 rounded-xl text-sm font-semibold text-left transition-all duration-200 ${active === cat.id
                            ? "bg-gradient-to-r from-primary to-secondary text-primary-foreground shadow-sm"
                            : "text-foreground hover:bg-section-alt"
                          }`}
                      >
                        <img src={cat.image} alt={cat.name} className="w-8 h-8 rounded-lg object-cover shrink-0" />
                        <span className="leading-tight">{cat.name}</span>
                      </button>
                    ))}
                  </div>
                </div>
              </aside>

              {/* Content */}
              <div ref={contentRef} className="flex-1 min-w-0">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={active}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.25 }}
                  >
                    <div className="bg-white rounded-[32px] border border-border shadow-sm overflow-hidden">
                      {/* Banner Image */}
                      <div className="w-full h-44 md:h-56 lg:h-64 relative overflow-hidden">
                        <img src={activeCat.image} alt={activeCat.name} className="w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent flex items-end px-6 md:px-10 pb-5 md:pb-7">
                          <h2 className="font-display text-3xl md:text-4xl font-black text-foreground drop-shadow-sm">
                            {activeCat.name}
                          </h2>
                        </div>
                      </div>

                      <div className="px-6 md:px-10 pb-8 md:pb-10 pt-4">
                        <h3 className="font-display text-lg md:text-xl font-bold text-primary mb-4 mt-2">
                          {activeCat.headline}
                        </h3>

                        <p className="text-muted-foreground text-sm md:text-base leading-relaxed mb-10 font-medium">
                          {activeCat.intro}
                        </p>

                        {/* Product list */}
                        <div className="space-y-6">
                          <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-border pb-3 gap-3">
                            <h4 className="font-display text-xl font-bold text-foreground">{t('products_page.product_range')}</h4>
                            <span className="bg-gradient-to-r from-primary/10 to-secondary/10 text-primary px-4 py-1.5 rounded-full text-sm font-bold border border-primary/20 self-start sm:self-auto">
                              {activeCat.products.length} {t('products_page.items_available')}
                            </span>
                          </div>

                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {activeCat.products.map((p, idx) => (
                              <div
                                key={idx}
                                className="group bg-background border border-border rounded-2xl p-5 hover:border-primary/40 hover:shadow-md transition-all duration-300"
                              >
                                <h5 className="font-bold text-foreground text-base mb-2 group-hover:text-primary transition-colors flex items-start gap-3">
                                  <span className="w-2 h-2 rounded-full bg-primary shrink-0 mt-1.5" />
                                  {p.name}
                                </h5>
                                <p className="text-muted-foreground text-sm leading-relaxed ml-5 font-medium border-l-2 border-border group-hover:border-primary/30 transition-colors pl-4 py-0.5">
                                  {p.desc}
                                </p>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Packaging */}
                        <div className="mt-10 bg-gradient-to-r from-primary/5 to-secondary/5 border border-primary/10 rounded-2xl p-5 md:p-7 flex flex-col sm:flex-row items-start gap-5 relative overflow-hidden group">
                          <div className="absolute inset-0 bg-primary/5 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-700 pointer-events-none" />
                          <div className="bg-white p-3 rounded-xl shrink-0 shadow-sm border border-border relative z-10">
                            <Package className="w-6 h-6 text-primary" />
                          </div>
                          <div className="relative z-10">
                            <h4 className="font-bold text-foreground text-base mb-1.5">{t('products_page.packaging_options')}</h4>
                            <p className="text-muted-foreground text-sm leading-relaxed font-medium">
                              {activeCat.packaging}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Products;
