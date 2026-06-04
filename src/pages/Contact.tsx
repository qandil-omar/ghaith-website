import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t } = useTranslation();

  const faqs = [
    { q: t('contact_page.faqs.0.q'), a: t('contact_page.faqs.0.a') },
    { q: t('contact_page.faqs.1.q'), a: t('contact_page.faqs.1.a') },
    { q: t('contact_page.faqs.2.q'), a: t('contact_page.faqs.2.a') },
    { q: t('contact_page.faqs.3.q'), a: t('contact_page.faqs.3.a') },
    { q: t('contact_page.faqs.4.q'), a: t('contact_page.faqs.4.a') },
    { q: t('contact_page.faqs.5.q'), a: t('contact_page.faqs.5.a') },
    { q: t('contact_page.faqs.6.q'), a: t('contact_page.faqs.6.a') },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      <div>
        <PageHero
          title={t('contact_page.hero_title')}
          subtitle={t('contact_page.hero_subtitle')}
        />

        <section className="py-20 bg-background">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
              {/* Contact info */}
              <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                <div className="bg-primary rounded-2xl p-8 text-primary-foreground mb-8">
                  <h3 className="font-display text-xl font-bold mb-6">{t('contact_page.info_title')}</h3>
                  <div className="space-y-5">
                    <div className="flex items-center gap-4">
                      <Mail className="w-5 h-5 shrink-0" />
                      <span className="text-sm">abdullahelshazly32@gmail.com</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <Phone className="w-5 h-5 shrink-0" />
                      <span className="text-sm" dir="ltr">+2 01091091537</span>
                    </div>
                    <div className="flex items-start gap-4">
                      <MapPin className="w-5 h-5 shrink-0 mt-0.5" />
                      <span className="text-sm">
                        {t('contact_page.address_l1')}<br />
                        {t('contact_page.address_l2')}<br />
                        {t('contact_page.address_l3')}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="text-sm text-muted-foreground">
                  <p className="font-medium text-foreground mb-2">{t('contact_page.website_label')}</p>
                  <p>www.alghaith-industry.com</p>
                  <p className="mt-4 text-xs">{t('contact_page.reply_note')}</p>
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
                <h3 className="font-display text-lg font-semibold text-foreground mb-4">{t('contact_page.form_title')}</h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-foreground mb-1 block">{t('contact_page.f_name')}</label>
                    <input type="text" className="w-full bg-background border border-input rounded-lg px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring rtl:text-right" placeholder={t('contact_page.f_name_ph')} />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-1 block">{t('contact_page.f_company')}</label>
                    <input type="text" className="w-full bg-background border border-input rounded-lg px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring rtl:text-right" placeholder={t('contact_page.f_company_ph')} />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-foreground mb-1 block">{t('contact_page.f_email')}</label>
                    <input type="email" className="w-full bg-background border border-input rounded-lg px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring rtl:text-right" placeholder={t('contact_page.f_email_ph')} dir="ltr" />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-1 block">{t('contact_page.f_phone')}</label>
                    <input type="text" className="w-full bg-background border border-input rounded-lg px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring rtl:text-right" placeholder={t('contact_page.f_phone_ph')} dir="ltr" />
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-1 block">{t('contact_page.f_country')}</label>
                  <input type="text" className="w-full bg-background border border-input rounded-lg px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring rtl:text-right" placeholder={t('contact_page.f_country_ph')} />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-1 block">{t('contact_page.f_category')}</label>
                  <select className="w-full bg-background border border-input rounded-lg px-4 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring rtl:text-right rtl:bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20fill%3D%22none%22%20viewBox%3D%220%200%2020%2020%22%3E%3Cpath%20stroke%3D%22%236b7280%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%221.5%22%20d%3D%22m6%208%204%204%204-4%22%2F%3E%3C%2Fsvg%3E')] rtl:bg-no-repeat rtl:bg-[position:left_0.5rem_center] rtl:bg-[length:1.5em_1.5em] rtl:pr-4 rtl:pl-10">
                    <option value="">{t('contact_page.f_category_ph')}</option>
                    {[
                      t('product_categories.cats.frozen-vegetables'),
                      t('product_categories.cats.fruits'),
                      t('product_categories.cats.olives'),
                      t('product_categories.cats.peppers'),
                      t('product_categories.cats.pickles'),
                      t('product_categories.cats.beans-legumes'),
                      t('product_categories.cats.canned-vegetables'),
                      t('nav.private_label')
                    ].map((c) => (
                      <option key={c} value={c}>{c}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-1 block">{t('contact_page.f_volume')}</label>
                  <select className="w-full bg-background border border-input rounded-lg px-4 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring rtl:text-right rtl:bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20fill%3D%22none%22%20viewBox%3D%220%200%2020%2020%22%3E%3Cpath%20stroke%3D%22%236b7280%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%221.5%22%20d%3D%22m6%208%204%204%204-4%22%2F%3E%3C%2Fsvg%3E')] rtl:bg-no-repeat rtl:bg-[position:left_0.5rem_center] rtl:bg-[length:1.5em_1.5em] rtl:pr-4 rtl:pl-10">
                    <option value="">{t('contact_page.f_volume_ph')}</option>
                    {["< 1 ton", "1–5 tons", "5–20 tons", "20+ tons"].map((v) => (
                      <option key={v} value={v} dir="ltr">{v}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-1 block">{t('contact_page.f_message')}</label>
                  <textarea rows={4} className="w-full bg-background border border-input rounded-lg px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-none rtl:text-right" placeholder={t('contact_page.f_message_ph')} />
                </div>
                <button type="submit" className="w-full bg-primary text-primary-foreground py-3 rounded-lg font-medium flex items-center justify-center gap-2 hover:opacity-90 transition-opacity">
                  <Send className="w-4 h-4 rtl:-scale-x-100" /> {t('contact_page.f_submit')}
                </button>
              </motion.form>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 bg-section-alt">
          <div className="container mx-auto px-6 max-w-3xl">
            <h2 className="font-display text-3xl font-bold text-foreground text-center mb-12">{t('contact_page.faq_title')}</h2>
            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <div key={i} className="bg-background border border-border rounded-xl p-5">
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
