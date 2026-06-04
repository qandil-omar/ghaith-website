import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const PrivateLabel = () => {
  const { t } = useTranslation();

  const steps = [
    { num: "01", title: t('private_label_page.steps.0.title'), desc: t('private_label_page.steps.0.desc') },
    { num: "02", title: t('private_label_page.steps.1.title'), desc: t('private_label_page.steps.1.desc') },
    { num: "03", title: t('private_label_page.steps.2.title'), desc: t('private_label_page.steps.2.desc') },
    { num: "04", title: t('private_label_page.steps.3.title'), desc: t('private_label_page.steps.3.desc') },
  ];

  const offerings = [
    t('private_label_page.offerings.0'),
    t('private_label_page.offerings.1'),
    t('private_label_page.offerings.2'),
    t('private_label_page.offerings.3'),
    t('private_label_page.offerings.4'),
    t('private_label_page.offerings.5'),
    t('private_label_page.offerings.6'),
    t('private_label_page.offerings.7'),
    t('private_label_page.offerings.8'),
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      <div>
        <PageHero
          title={t('private_label_page.hero_title')}
          subtitle={t('private_label_page.hero_subtitle')}
        />

        <section className="py-20 bg-background">
          <div className="container mx-auto px-6 max-w-4xl">
            <p className="text-muted-foreground text-center mb-16">
              {t('private_label_page.description')}
            </p>

            <h2 className="font-display text-2xl font-bold text-foreground text-center mb-10">{t('private_label_page.how_it_works_title')}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
              {steps.map((s, i) => (
                <motion.div
                  key={s.num}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="text-center"
                >
                  <div className="w-14 h-14 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <span className="font-display text-xl font-bold text-primary">{s.num}</span>
                  </div>
                  <h3 className="font-semibold text-foreground mb-2 text-sm">{s.title}</h3>
                  <p className="text-xs text-muted-foreground">{s.desc}</p>
                </motion.div>
              ))}
            </div>

            <h2 className="font-display text-2xl font-bold text-foreground mb-6">{t('private_label_page.offerings_title')}</h2>
            <div className="grid sm:grid-cols-2 gap-3 mb-12">
              {offerings.map((o, i) => (
                <div key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <div className="w-2 h-2 rounded-full bg-primary shrink-0 mt-1.5" />
                  {o}
                </div>
              ))}
            </div>

            <div className="bg-primary rounded-2xl p-8 text-center">
              <h3 className="font-display text-xl font-bold text-primary-foreground mb-3">
                {t('private_label_page.unlike_brokers_title')}
              </h3>
              <p className="text-primary-foreground/80 text-sm mb-6">
                {t('private_label_page.unlike_brokers_desc')}
              </p>
              <Link to="/contact" className="bg-primary-foreground text-primary px-8 py-3 rounded-lg font-medium hover:opacity-90 transition-opacity inline-block">
                {t('private_label_page.request_consultation')}
              </Link>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default PrivateLabel;
