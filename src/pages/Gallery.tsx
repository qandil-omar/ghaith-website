import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import { motion } from "framer-motion";
import factoryImg from "@/assets/alghaith-factory.jpg";
import productsImg from "@/assets/alghaith-products.jpg";
import farmImg from "@/assets/egyptian-farm.jpg";
import { useTranslation } from "react-i18next";

const Gallery = () => {
  const [activeTab, setActiveTab] = useState("factory");
  const { t } = useTranslation();

  const tabs = [
    { id: "factory", label: t('gallery_page.tabs.factory') },
    { id: "products", label: t('gallery_page.tabs.products') },
    { id: "farms", label: t('gallery_page.tabs.farms') },
    { id: "certs", label: t('gallery_page.tabs.certs') },
    { id: "export", label: t('gallery_page.tabs.export') },
  ];

  const galleryItems: Record<string, { img: string; caption: string }[]> = {
    factory: [
      { img: factoryImg, caption: t('gallery_page.captions.fac1') },
      { img: factoryImg, caption: t('gallery_page.captions.fac2') },
      { img: factoryImg, caption: t('gallery_page.captions.fac3') },
    ],
    products: [
      { img: productsImg, caption: t('gallery_page.captions.prod1') },
      { img: productsImg, caption: t('gallery_page.captions.prod2') },
      { img: productsImg, caption: t('gallery_page.captions.prod3') },
    ],
    farms: [
      { img: farmImg, caption: t('gallery_page.captions.farm1') },
      { img: farmImg, caption: t('gallery_page.captions.farm2') },
      { img: farmImg, caption: t('gallery_page.captions.farm3') },
    ],
    certs: [
      { img: factoryImg, caption: t('gallery_page.captions.cert1') },
      { img: factoryImg, caption: t('gallery_page.captions.cert2') },
      { img: factoryImg, caption: t('gallery_page.captions.cert3') },
    ],
    export: [
      { img: factoryImg, caption: t('gallery_page.captions.exp1') },
      { img: factoryImg, caption: t('gallery_page.captions.exp2') },
      { img: factoryImg, caption: t('gallery_page.captions.exp3') },
    ],
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <div>
        <PageHero
          title={t('gallery_page.hero_title')}
          subtitle={t('gallery_page.hero_subtitle')}
        />

        <section className="py-12 bg-background">
          <div className="container mx-auto px-6">
            <div className="flex flex-wrap justify-center gap-3 mb-10">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${activeTab === tab.id
                      ? "bg-primary text-primary-foreground"
                      : "bg-card text-muted-foreground border border-border hover:border-primary/30"
                    }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            <motion.div
              key={activeTab}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="grid md:grid-cols-3 gap-6"
            >
              {galleryItems[activeTab]?.map((item, i) => (
                <div key={i} className="rounded-xl overflow-hidden border border-border group">
                  <div className="aspect-video overflow-hidden">
                    <img src={item.img} alt={item.caption} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                  </div>
                  <p className="p-4 text-sm text-muted-foreground">{item.caption}</p>
                </div>
              ))}
            </motion.div>

            <p className="text-center text-sm text-muted-foreground mt-12">
              {t('gallery_page.visit_note')}
            </p>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Gallery;
