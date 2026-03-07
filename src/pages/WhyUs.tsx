import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import { motion } from "framer-motion";
import { Sprout, Cpu, Award, Package, Tag, CalendarCheck, MapPin } from "lucide-react";

const reasons = [
  { icon: Sprout, num: "1", title: "Farm-to-Factory Control", desc: "ALGHAITH works directly with a network of vetted, trusted farms in Al Gharbia Governorate and across the Nile Delta. This gives us full visibility and control over growing conditions, pesticide use, harvest timing, and produce quality." },
  { icon: Cpu, num: "2", title: "Advanced IQF & Canning Technology", desc: "State-of-the-art IQF tunnel freezers, automated blanching systems, modern canning lines, and glass jar filling equipment. IQF freezing means each piece freezes individually in under two minutes." },
  { icon: Award, num: "3", title: "Five International Certifications", desc: "U.S. FDA, ISO 9001:2015, ISO 22000:2018, Kosher (World of Kashrut), and HALAL (IFNAS). For our partners, this means peace of mind." },
  { icon: Package, num: "4", title: "Eight Product Categories Under One Roof", desc: "Frozen vegetables, canned & frozen fruits, olives, peppers, pickles, beans & legumes, canned vegetables, and ready-to-eat mahshi products — reducing procurement complexity." },
  { icon: Tag, num: "5", title: "Complete Private Label Capability", desc: "End-to-end private label manufacturing: from recipe customization and packaging design to multi-language labeling and full export compliance for EU, Gulf, and US markets." },
  { icon: CalendarCheck, num: "6", title: "Consistent, Year-Round Supply", desc: "Production capacity and cold storage inventory to fulfill large orders consistently throughout the year. Flexible packaging formats for varying market requirements." },
  { icon: MapPin, num: "7", title: "Deep Egyptian Agricultural Expertise", desc: "Our team brings deep expertise in Egyptian produce varieties, regional farming cycles, and the specific quality characteristics that international buyers expect." },
];

const WhyUs = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div>
        <PageHero
          title="Why Choose ALGHAITH"
          subtitle="The Difference Is in the Details — And the Details Are in Every Product"
        />

        <section className="py-20 bg-background">
          <div className="container mx-auto px-6 max-w-4xl">
            <p className="text-muted-foreground text-center mb-16">
              In a market crowded with food processors and exporters, what truly separates a good supplier from a great one? At ALGHAITH, we believe the answer is three things: the quality of your raw materials, the integrity of your process, and the reliability of your commitment to partners.
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
