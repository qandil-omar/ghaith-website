import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import { motion } from "framer-motion";
import { Sprout, Factory, Eye, Target, Heart, Lightbulb, Leaf, Users } from "lucide-react";
import factoryImg from "@/assets/alghaith-factory.jpg";
import farmImg from "@/assets/egyptian-farm.jpg";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();

  const farmToForkSteps = [
    { step: "01", title: t('about_page.steps.s1_title'), desc: t('about_page.steps.s1_desc') },
    { step: "02", title: t('about_page.steps.s2_title'), desc: t('about_page.steps.s2_desc') },
    { step: "03", title: t('about_page.steps.s3_title'), desc: t('about_page.steps.s3_desc') },
    { step: "04", title: t('about_page.steps.s4_title'), desc: t('about_page.steps.s4_desc') },
  ];

  const values = [
    { icon: Heart, title: t('about_page.values.v1_title'), desc: t('about_page.values.v1_desc') },
    { icon: Eye, title: t('about_page.values.v2_title'), desc: t('about_page.values.v2_desc') },
    { icon: Lightbulb, title: t('about_page.values.v3_title'), desc: t('about_page.values.v3_desc') },
    { icon: Leaf, title: t('about_page.values.v4_title'), desc: t('about_page.values.v4_desc') },
    { icon: Users, title: t('about_page.values.v5_title'), desc: t('about_page.values.v5_desc') },
  ];

  const factoryFeatures = [
    t('about_page.factory_features.0'),
    t('about_page.factory_features.1'),
    t('about_page.factory_features.2'),
    t('about_page.factory_features.3'),
    t('about_page.factory_features.4'),
    t('about_page.factory_features.5'),
    t('about_page.factory_features.6'),
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      <div>
        <PageHero
          title={t('about_page.hero_title')}
          subtitle={t('about_page.hero_subtitle')}
          bgImage={farmImg}
        />

        {/* Story */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-6 max-w-4xl">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="font-display text-3xl font-bold text-foreground mb-6">{t('about_page.story_title')}</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                {t('about_page.story_p1')}
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                {t('about_page.story_p2')}
              </p>
              <p className="text-muted-foreground leading-relaxed">
                {t('about_page.story_p3')}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Farm to Fork Timeline */}
        <section className="py-24 bg-section-alt relative overflow-hidden">
          <div className="container mx-auto px-6 max-w-5xl">
            <h2 className="font-display text-4xl font-bold text-foreground text-center mb-16">
              {t('about_page.farm_to_fork_title')} <span className="text-primary">{t('about_page.farm_to_fork_highlight')}</span> {t('about_page.farm_to_fork_suffix')}
            </h2>

            <div className="relative">
              {/* Vertical line connecting the dots */}
              <div className="hidden md:block absolute left-1/2 top-4 bottom-4 w-px bg-border -translate-x-1/2" />

              <div className="space-y-12 md:space-y-0 relative">
                {farmToForkSteps.map((s, i) => (
                  <motion.div
                    key={s.step}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ delay: 0.1, duration: 0.5 }}
                    className={`flex flex-col md:flex-row items-center group ${i % 2 === 0 ? "md:flex-row-reverse" : ""
                      }`}
                  >
                    {/* Content Box */}
                    <div className={`flex-1 md:w-1/2 w-full ${i % 2 === 0 ? "md:pl-12 lg:pl-16 rtl:md:pr-12 rtl:lg:pr-16 rtl:md:pl-0 rtl:lg:pl-0" : "md:pr-12 lg:pr-16 rtl:md:pl-12 rtl:lg:pl-16 rtl:md:pr-0 rtl:lg:pr-0"
                      } mb-8 md:mb-0`}>
                      <div className="bg-background border border-border p-8 rounded-3xl shadow-sm hover:shadow-xl hover:border-primary/30 transition-all duration-300 relative overflow-hidden">
                        <div className="font-display text-6xl font-extrabold text-primary/5 absolute -bottom-4 right-4 rtl:left-4 rtl:right-auto pointer-events-none group-hover:scale-110 group-hover:text-primary/10 transition-transform duration-500">
                          {s.step}
                        </div>
                        <h3 className="font-display text-2xl font-bold text-foreground mb-3 relative z-10">{s.title}</h3>
                        <p className="text-muted-foreground leading-relaxed relative z-10">{s.desc}</p>
                      </div>
                    </div>

                    {/* Timeline Node */}
                    <div className="hidden md:flex flex-shrink-0 w-16 h-16 rounded-full border-[6px] border-section-alt bg-primary items-center justify-center z-10 shadow-md group-hover:scale-110 transition-transform duration-300">
                      <span className="text-sm font-bold text-primary-foreground">{s.step}</span>
                    </div>

                    {/* Spacer for the other side */}
                    <div className="hidden md:block flex-1" />
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Vision & Mission */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-6 max-w-4xl">
            <div className="grid md:grid-cols-2 gap-12">
              <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                <Target className="w-8 h-8 text-primary mb-4" />
                <h2 className="font-display text-2xl font-bold text-foreground mb-4">{t('about_page.vision_title')}</h2>
                <p className="text-muted-foreground leading-relaxed">
                  {t('about_page.vision_desc')}
                </p>
              </motion.div>
              <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                <Sprout className="w-8 h-8 text-primary mb-4" />
                <h2 className="font-display text-2xl font-bold text-foreground mb-4">{t('about_page.mission_title')}</h2>
                <p className="text-muted-foreground leading-relaxed">
                  {t('about_page.mission_desc')}
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-24 bg-section-alt">
          <div className="container mx-auto px-6">
            <h2 className="font-display text-4xl font-bold text-foreground text-center mb-16">{t('about_page.values_title')}</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {values.map((v, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="bg-background border border-border rounded-[32px] p-8 hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 group"
                >
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-primary transition-all duration-300">
                    <v.icon className="w-8 h-8 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                  </div>
                  <h3 className="font-display text-2xl font-bold text-foreground mb-3">{v.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{v.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Factory */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                <Factory className="w-8 h-8 text-primary mb-4" />
                <h2 className="font-display text-3xl font-bold text-foreground mb-6">{t('about_page.factory_title')}</h2>
                <p className="text-muted-foreground mb-6">
                  {t('about_page.factory_desc')}
                </p>
                <ul className="space-y-3">
                  {factoryFeatures.map((f, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm text-muted-foreground">
                      <div className="w-2 h-2 rounded-full bg-primary shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
              </motion.div>
              <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="rounded-2xl overflow-hidden shadow-xl">
                <img src={factoryImg} alt="ALGHAITH Factory" className="w-full h-auto" />
              </motion.div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default About;
