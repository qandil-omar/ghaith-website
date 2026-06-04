import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import { motion } from "framer-motion";
import { Shield } from "lucide-react";
import { useTranslation } from "react-i18next";

const Certifications = () => {
  const { t } = useTranslation();

  const certs = [
    {
      name: t('certifications_page.certs.0.name'),
      full: t('certifications_page.certs.0.full'),
      desc: t('certifications_page.certs.0.desc'),
    },
    {
      name: t('certifications_page.certs.1.name'),
      full: t('certifications_page.certs.1.full'),
      desc: t('certifications_page.certs.1.desc'),
    },
    {
      name: t('certifications_page.certs.2.name'),
      full: t('certifications_page.certs.2.full'),
      desc: t('certifications_page.certs.2.desc'),
    },
    {
      name: t('certifications_page.certs.3.name'),
      full: t('certifications_page.certs.3.full'),
      desc: t('certifications_page.certs.3.desc'),
    },
    {
      name: t('certifications_page.certs.4.name'),
      full: t('certifications_page.certs.4.full'),
      desc: t('certifications_page.certs.4.desc'),
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      <div>
        <PageHero
          title={t('certifications_page.hero_title')}
          subtitle={t('certifications_page.hero_subtitle')}
        />

        <section className="py-20 bg-background">
          <div className="container mx-auto px-6 max-w-4xl">
            <p className="text-muted-foreground text-center mb-16">
              {t('certifications_page.description')}
            </p>

            <div className="space-y-6">
              {certs.map((c, i) => (
                <motion.div
                  key={c.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="bg-card border border-border rounded-xl p-6"
                >
                  <div className="flex items-center gap-4 mb-3">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                      <Shield className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-display text-lg font-bold text-foreground">{c.name}</h3>
                      <p className="text-sm text-primary">{c.full}</p>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">{c.desc}</p>
                </motion.div>
              ))}
            </div>

            <div className="mt-12 text-center text-sm text-muted-foreground">
              {t('certifications_page.download_note')}
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Certifications;
