import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import { motion } from "framer-motion";
import { Sprout, Factory, Eye, Target, Heart, Lightbulb, Leaf, Users } from "lucide-react";
import factoryImg from "@/assets/alghaith-factory.jpg";
import farmImg from "@/assets/egyptian-farm.jpg";

const farmToForkSteps = [
  { step: "01", title: "Farm Selection", desc: "We partner exclusively with vetted farms in Al Gharbia's fertile belt, where soil quality, water purity, and farming practices meet our strict standards." },
  { step: "02", title: "Harvest at Peak", desc: "Produce is harvested at the precise moment of peak ripeness — not before, not after. This single decision is where quality is either won or lost." },
  { step: "03", title: "Factory Processing", desc: "Within hours of harvest, produce enters our processing lines: washed, graded, blanched, and either IQF-frozen or sealed in airtight cans and jars." },
  { step: "04", title: "Quality Assurance & Export", desc: "Every batch passes in-house microbiological and chemical testing before being released. Certified documentation accompanies every shipment." },
];

const values = [
  { icon: Heart, title: "Quality Without Compromise", desc: "We never ship a product we would not proudly serve at our own table." },
  { icon: Eye, title: "Transparency & Trust", desc: "Our clients know exactly what they are getting — the same quality, every single time." },
  { icon: Lightbulb, title: "Innovation", desc: "We invest continuously in new processing technologies and product development." },
  { icon: Leaf, title: "Sustainability", desc: "Committed to responsible agricultural practices that protect Egypt's natural resources." },
  { icon: Users, title: "Customer Partnership", desc: "Our clients are not just buyers — they are partners. We accept custom orders and private label requests." },
];

const factoryFeatures = [
  "IQF Tunnel Freezing Lines",
  "Advanced Blanching & Washing Systems",
  "Automated Canning & Sealing Lines",
  "Glass Jar Filling Line",
  "Cold Storage Facilities",
  "In-House Quality Control Laboratory",
  "Private Label Packaging Line",
];

const About = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div>
        <PageHero
          title="More Than a Factory"
          subtitle="We Are Egypt's Agricultural Legacy"
          bgImage={farmImg}
        />

        {/* Story */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-6 max-w-4xl">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="font-display text-3xl font-bold text-foreground mb-6">Our Story</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                ALGHAITH Factory was born from a deep belief in two things: the unmatched richness of Egyptian soil, and the world's need for honest, high-quality food. Founded in 2014 in Alatwa Alqeblia, Qutour, Al Gharbia — a governorate historically known as the backbone of Egypt's agricultural output — our factory was built from the ground up with a single purpose: to process and preserve Egypt's finest fruits and vegetables while maintaining every gram of their natural value, flavor, and nutrition.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Over the years, we have grown from a regional processor into a globally recognized exporter, earning certifications from the world's most demanding food safety authorities: the U.S. FDA, ISO 9001:2015, ISO 22000:2018, Kosher (World of Kashrut), and HALAL (IFNAS).
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Today, ALGHAITH serves leading retailers, food manufacturers, and private-label brands in the Gulf, Europe, and the Americas. Our eight product categories span frozen vegetables and fruits, canned legumes, olives, stuffed vegetables, artichokes, pickles, and roasted peppers.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Farm to Fork Timeline */}
        <section className="py-24 bg-section-alt relative overflow-hidden">
          <div className="container mx-auto px-6 max-w-5xl">
            <h2 className="font-display text-4xl font-bold text-foreground text-center mb-16">
              Farm to Fork — <span className="text-primary">Complete Control</span> at Every Stage
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
                    <div className={`flex-1 md:w-1/2 w-full ${i % 2 === 0 ? "md:pl-12 lg:pl-16" : "md:pr-12 lg:pr-16"
                      } mb-8 md:mb-0`}>
                      <div className="bg-background border border-border p-8 rounded-3xl shadow-sm hover:shadow-xl hover:border-primary/30 transition-all duration-300 relative overflow-hidden">
                        <div className="font-display text-6xl font-extrabold text-primary/5 absolute -bottom-4 right-4 pointer-events-none group-hover:scale-110 group-hover:text-primary/10 transition-transform duration-500">
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
                <h2 className="font-display text-2xl font-bold text-foreground mb-4">Our Vision</h2>
                <p className="text-muted-foreground leading-relaxed">
                  To be the most trusted name in Egyptian food processing — a bridge between the world's finest farmland and the global consumer's table. We envision a world where every household, regardless of geography, has access to the natural goodness of fresh Egyptian produce.
                </p>
              </motion.div>
              <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                <Sprout className="w-8 h-8 text-primary mb-4" />
                <h2 className="font-display text-2xl font-bold text-foreground mb-4">Our Mission</h2>
                <p className="text-muted-foreground leading-relaxed">
                  To produce, package, and export the finest frozen and canned fruits and vegetables from Egypt's most fertile farms — meeting the highest international standards of quality, safety, and taste.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-24 bg-section-alt">
          <div className="container mx-auto px-6">
            <h2 className="font-display text-4xl font-bold text-foreground text-center mb-16">Our Values</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {values.map((v, i) => (
                <motion.div
                  key={v.title}
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
                <h2 className="font-display text-3xl font-bold text-foreground mb-6">Our Factory</h2>
                <p className="text-muted-foreground mb-6">
                  Located in the heart of Al Gharbia Governorate — one of Egypt's richest agricultural regions — our factory is equipped with modern processing, freezing, and canning lines designed for efficiency, hygiene, and precision.
                </p>
                <ul className="space-y-3">
                  {factoryFeatures.map((f) => (
                    <li key={f} className="flex items-center gap-3 text-sm text-muted-foreground">
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
