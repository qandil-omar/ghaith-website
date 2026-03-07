import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import { motion } from "framer-motion";
import factoryImg from "@/assets/alghaith-factory.jpg";
import productsImg from "@/assets/alghaith-products.jpg";
import farmImg from "@/assets/egyptian-farm.jpg";

const tabs = [
  { id: "factory", label: "Our Factory" },
  { id: "products", label: "Our Products" },
  { id: "farms", label: "Our Farms" },
  { id: "certs", label: "Certifications" },
  { id: "export", label: "Export & Logistics" },
];

const galleryItems: Record<string, { img: string; caption: string }[]> = {
  factory: [
    { img: factoryImg, caption: "Modern processing lines and IQF freezing tunnels" },
    { img: factoryImg, caption: "Canning operations and cold storage halls" },
    { img: factoryImg, caption: "Quality control laboratory" },
  ],
  products: [
    { img: productsImg, caption: "Premium canned food product range" },
    { img: productsImg, caption: "Retail and bulk packaging" },
    { img: productsImg, caption: "Private label samples" },
  ],
  farms: [
    { img: farmImg, caption: "Partner farms in Al Gharbia Governorate" },
    { img: farmImg, caption: "Harvest activities across the Nile Delta" },
    { img: farmImg, caption: "Fresh produce sorting and grading" },
  ],
  certs: [
    { img: factoryImg, caption: "FDA and ISO certifications" },
    { img: factoryImg, caption: "In-house lab testing" },
    { img: factoryImg, caption: "Quality control team at work" },
  ],
  export: [
    { img: factoryImg, caption: "Finished goods palletized for shipment" },
    { img: factoryImg, caption: "Container loading operations" },
    { img: factoryImg, caption: "Cold-chain refrigerated transport" },
  ],
};

const Gallery = () => {
  const [activeTab, setActiveTab] = useState("factory");

  return (
    <div className="min-h-screen">
      <Navbar />
      <div>
        <PageHero
          title="Gallery"
          subtitle="A Glimpse Inside ALGHAITH — Where Quality Begins"
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
              Interested in visiting our facility? We welcome partner factory visits by appointment.
            </p>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Gallery;
