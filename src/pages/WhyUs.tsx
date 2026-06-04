import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import { motion } from "framer-motion";
import { Sprout, Cpu, Award, Package, Tag, CalendarCheck, MapPin } from "lucide-react";
import { useTranslation } from "react-i18next";

const WhyUs = () => {
  const { t } = useTranslation();

  const reasons = [
    { icon: Sprout, num: "1", title: t('why_us_page.reasons.0.title'), desc: t('why_us_page.reasons.0.desc') },
    { icon: Cpu, num: "2", title: t('why_us_page.reasons.1.title'), desc: t('why_us_page.reasons.1.desc') },
    { icon: Award, num: "3", title: t('why_us_page.reasons.2.title'), desc: t('why_us_page.reasons.2.desc') },
    { icon: Package, num: "4", title: t('why_us_page.reasons.3.title'), desc: t('why_us_page.reasons.3.desc') },
    { icon: Tag, num: "5", title: t('why_us_page.reasons.4.title'), desc: t('why_us_page.reasons.4.desc') },
    { icon: CalendarCheck, num: "6", title: t('why_us_page.reasons.5.title'), desc: t('why_us_page.reasons.5.desc') },
    { icon: MapPin, num: "7", title: t('why_us_page.reasons.6.title'), desc: t('why_us_page.reasons.6.desc') },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      <div>
        <PageHero
          title={t('why_us_page.hero_title')}
          subtitle={t('why_us_page.hero_subtitle')}
        />

        <section className="py-20 bg-background">
          <div className="container mx-auto px-6 max-w-4xl">
            <p className="text-muted-foreground text-center mb-16">
              {t('why_us_page.description')}
            </p>

            <div className="space-y-8">
              {reasons.map((r, i) => (
                <motion.div
                  key={r.num}
                  initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="flex gap-6 items-start bg-card border border-border rounded-xl p-6"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <r.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-semibold text-foreground mb-2">{r.num}. {r.title}</h3>
                    <p className="text-sm text-muted-foreground">{r.desc}</p>
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

export default WhyUs;
