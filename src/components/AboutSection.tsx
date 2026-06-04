import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import productsImg from "@/assets/alghaith-products.jpg";
import { useTranslation } from "react-i18next";

const AboutSection = () => {
  const { t } = useTranslation();

  return (
    <section className="py-24 bg-leaves-pattern">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-sm uppercase tracking-[0.2em] text-primary mb-3">{t('about_section.subtitle')}</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
              {t('about_section.title')}
            </h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              {t('about_section.description')}
            </p>
            <Link
              to="/about"
              className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-3.5 rounded-full font-bold hover:bg-primary/90 transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5"
            >
              {t('about_section.btn')}
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
