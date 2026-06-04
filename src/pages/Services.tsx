import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import { motion } from "framer-motion";
import { Factory, Tag, Lightbulb, Truck, ShieldCheck } from "lucide-react";
import { useTranslation } from "react-i18next";

const Services = () => {
  const { t } = useTranslation();

  const services = [
    {
      icon: Factory,
      title: t('services_page.services.0.title'),
      desc: t('services_page.services.0.desc'),
    },
    {
      icon: Tag,
      title: t('services_page.services.1.title'),
      desc: t('services_page.services.1.desc'),
    },
    {
      icon: Lightbulb,
      title: t('services_page.services.2.title'),
      desc: t('services_page.services.2.desc'),
    },
    {
      icon: Truck,
      title: t('services_page.services.3.title'),
      desc: t('services_page.services.3.desc'),
    },
    {
      icon: ShieldCheck,
      title: t('services_page.services.4.title'),
      desc: t('services_page.services.4.desc'),
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      <div>
        <PageHero
          title={t('services_page.hero_title')}
          subtitle={t('services_page.hero_subtitle')}
        />

        <section className="py-20 bg-background">
          <div className="container mx-auto px-6 max-w-4xl">
            <p className="text-muted-foreground text-center mb-16">
              {t('services_page.description')}
            </p>

            <div className="space-y-6">
              {services.map((s, i) => (
                <motion.div
                  key={s.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="bg-card border border-border rounded-xl p-6 flex gap-6 items-start"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <s.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-semibold text-foreground mb-2">{s.title}</h3>
                    <p className="text-sm text-muted-foreground">{s.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Services;
