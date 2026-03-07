import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const faqs = [
  { q: "What is your minimum order quantity?", a: "For frozen products, minimum of 1 pallet (approx 500–1,000 kg). For canned goods, minimums start at 1 full pallet per SKU." },
  { q: "Do you offer private label services?", a: "Yes. Full private label manufacturing across all eight product categories — in cans, glass jars, and frozen bulk/retail formats." },
  { q: "What certifications do your products hold?", a: "U.S. FDA (Reg. No. 19951687376), ISO 9001:2015, ISO 22000:2018, Kosher (World of Kashrut), and HALAL (IFNAS)." },
  { q: "Which markets do you currently export to?", a: "Gulf Cooperation Council countries, Europe, and the United States. We welcome enquiries from all regions." },
  { q: "Can I visit your factory?", a: "Absolutely. We welcome factory visits from serious partners. Contact us in advance to schedule." },
  { q: "What packaging options are available?", a: "400g retail cans, A9 catering (2.65kg), A10 bulk (3kg), glass jars (180ml–2L), frozen retail bags (400g–1kg) and bulk cartons (5–10kg)." },
  { q: "How long for a price quotation?", a: "We respond to all pricing enquiries within 24 business hours. For private label, 3–5 business days for full proposal." },
];

const Contact = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div>
        <PageHero
          title="Contact Us"
          subtitle="Let's Build Something Great Together"
        />

        <section className="py-20 bg-background">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
              {/* Contact info */}
              <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                <div className="bg-primary rounded-2xl p-8 text-primary-foreground mb-8">
                  <h3 className="font-display text-xl font-bold mb-6">Contact Information</h3>
                  <div className="space-y-5">
                    <div className="flex items-center gap-4">
                      <Mail className="w-5 h-5 shrink-0" />
                      <span className="text-sm">abdullahelshazly32@gmail.com</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <Phone className="w-5 h-5 shrink-0" />
                      <span className="text-sm">+2 01091091537</span>
                    </div>
                    <div className="flex items-start gap-4">
                      <MapPin className="w-5 h-5 shrink-0 mt-0.5" />
                      <span className="text-sm">
                        ALGHAITH Factory<br />
                        Alatwa Alqeblia, Qutour<br />
                        Al Gharbia Governorate, Egypt
                      </span>
                    </div>
                  </div>
                </div>

                <div className="text-sm text-muted-foreground">
                  <p className="font-medium text-foreground mb-2">Website:</p>
                  <p>www.alghaith-industry.com</p>
                  <p className="mt-4 text-xs">We reply to every serious enquiry within 24 business hours.</p>
                </div>
              </motion.div>

              {/* Form */}
              <motion.form
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-card border border-border rounded-2xl p-8 space-y-4"
                onSubmit={(e) => e.preventDefault()}
              >
                <h3 className="font-display text-lg font-semibold text-foreground mb-4">Send Us an Enquiry</h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-foreground mb-1 block">Full Name *</label>
                    <input type="text" className="w-full bg-background border border-input rounded-lg px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring" placeholder="Your name" />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-1 block">Company Name *</label>
                    <input type="text" className="w-full bg-background border border-input rounded-lg px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring" placeholder="Company" />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-foreground mb-1 block">Email Address *</label>
                    <input type="email" className="w-full bg-background border border-input rounded-lg px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring" placeholder="your@email.com" />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-1 block">Phone / WhatsApp</label>
                    <input type="text" className="w-full bg-background border border-input rounded-lg px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring" placeholder="+20..." />
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-1 block">Country *</label>
                  <input type="text" className="w-full bg-background border border-input rounded-lg px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring" placeholder="Country" />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-1 block">Category of Interest *</label>
                  <select className="w-full bg-background border border-input rounded-lg px-4 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring">
                    <option value="">Select a category</option>
                    {["Frozen Vegetables", "Fruits", "Olives", "Peppers", "Pickles", "Beans & Legumes", "Canned Vegetables", "Ready to Eat", "Private Label", "Other"].map((c) => (
                      <option key={c} value={c}>{c}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-1 block">Estimated Monthly Volume</label>
                  <select className="w-full bg-background border border-input rounded-lg px-4 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring">
                    <option value="">Select volume</option>
                    {["< 1 ton", "1–5 tons", "5–20 tons", "20+ tons"].map((v) => (
                      <option key={v} value={v}>{v}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-1 block">Message *</label>
                  <textarea rows={4} className="w-full bg-background border border-input rounded-lg px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-none" placeholder="Tell us about your requirements..." />
                </div>
                <button type="submit" className="w-full bg-primary text-primary-foreground py-3 rounded-lg font-medium flex items-center justify-center gap-2 hover:opacity-90 transition-opacity">
                  <Send className="w-4 h-4" /> Send Enquiry
                </button>
              </motion.form>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 bg-section-alt">
          <div className="container mx-auto px-6 max-w-3xl">
            <h2 className="font-display text-3xl font-bold text-foreground text-center mb-12">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {faqs.map((faq) => (
                <div key={faq.q} className="bg-background border border-border rounded-xl p-5">
                  <h3 className="font-semibold text-foreground text-sm mb-2">{faq.q}</h3>
                  <p className="text-sm text-muted-foreground">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
