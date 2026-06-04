import { motion } from "framer-motion";
import { Factory, Sprout, Globe, Award, BarChart3, Users, ShieldCheck, CheckCircle2 } from "lucide-react";
import { useTranslation } from "react-i18next";

const WhyChooseSection = () => {
  const { t } = useTranslation();

  const reasons = [
    { icon: Factory, title: t('why_choose_section.reasons.r1_title'), desc: t('why_choose_section.reasons.r1_desc') },
    { icon: Sprout, title: t('why_choose_section.reasons.r2_title'), desc: t('why_choose_section.reasons.r2_desc') },
    { icon: Globe, title: t('why_choose_section.reasons.r3_title'), desc: t('why_choose_section.reasons.r3_desc') },
    { icon: Award, title: t('why_choose_section.reasons.r4_title'), desc: t('why_choose_section.reasons.r4_desc') },
    { icon: BarChart3, title: t('why_choose_section.reasons.r5_title'), desc: t('why_choose_section.reasons.r5_desc') },
    { icon: Users, title: t('why_choose_section.reasons.r6_title'), desc: t('why_choose_section.reasons.r6_desc') },
  ];

  const certifications = [
    { name: "U.S. FDA", reg: "Reg: 19951687376", desc: t('why_choose_section.certifications.c1_desc') },
    { name: "ISO 9001:2015", reg: "EG02390246", desc: t('why_choose_section.certifications.c2_desc') },
    { name: "ISO 22000:2018", reg: "EG02390248", desc: t('why_choose_section.certifications.c3_desc') },
    { name: "Kosher Parve", reg: "World of Kashrut", desc: t('why_choose_section.certifications.c4_desc') },
    { name: "HALAL", reg: "IFNAS-EG-HALAL-AF-907", desc: t('why_choose_section.certifications.c5_desc') },
  ];

  return (
    <section className="py-24 bg-leaves-pattern">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-sm uppercase tracking-[0.2em] text-primary mb-3">{t('why_choose_section.subtitle')}</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
            {t('why_choose_section.title')}
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
          {reasons.map((r, i) => (
            <motion.div
              key={r.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="bg-background border border-border rounded-[32px] p-8 hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 group"
            >
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-primary transition-all duration-300">
                <r.icon className="w-8 h-8 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
              </div>
              <h3 className="font-display text-xl font-bold text-foreground mb-3">{r.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{r.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-6">
            {t('why_choose_section.quality_title')}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            {t('why_choose_section.quality_desc')}
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-5 gap-6">
          {certifications.map((cert, i) => (
            <motion.div
              key={cert.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white border border-border rounded-[32px] p-6 text-center flex flex-col items-center justify-center hover:border-primary/50 hover:shadow-xl transition-all duration-300 relative overflow-hidden group"
            >
              <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-primary to-secondary transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
              <div className="w-14 h-14 rounded-full bg-primary/5 flex items-center justify-center mb-5 group-hover:bg-primary/10 transition-colors duration-300">
                <ShieldCheck className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-display font-bold text-lg text-foreground mb-2">{cert.name}</h3>
              <p className="text-sm text-muted-foreground mb-4 leading-snug">{cert.desc}</p>
              <div className="mt-auto bg-section-alt w-full py-2.5 px-3 rounded-xl border border-border/50">
                <p className="text-[11px] font-mono text-primary font-bold break-all">
                  {cert.reg}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
