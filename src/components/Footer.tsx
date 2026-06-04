import { Link } from "react-router-dom";
import logoImg from "@/assets/logo.png";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { label: t('nav.about'), to: "/about" },
    { label: t('nav.why_us'), to: "/why-us" },
    { label: t('nav.private_label'), to: "/private-label" },
    { label: t('nav.services'), to: "/services" },
    { label: t('nav.certifications'), to: "/certifications" },
    { label: t('nav.gallery'), to: "/gallery" },
  ];

  return (
    <footer className="relative bg-foreground overflow-hidden py-16">
      {/* Decorative gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent pointer-events-none" />
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-secondary/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-1">
            <div className="inline-block bg-white rounded-xl p-2 mb-6">
              <img src={logoImg} alt="ALGHAITH" className="h-12 w-auto object-contain" />
            </div>
            <p className="text-white/70 leading-relaxed mb-6 font-medium">
              {t('footer.desc')}
            </p>
          </div>

          <div>
            <h4 className="font-display font-bold text-white mb-6 text-sm uppercase tracking-[0.2em]">{t('footer.products_title')}</h4>
            <ul className="space-y-3 text-sm font-medium text-white/60">
              {[
                t('product_categories.cats.frozen-vegetables'),
                t('product_categories.cats.fruits'),
                t('product_categories.cats.olives'),
                t('product_categories.cats.peppers'),
                t('product_categories.cats.pickles'),
                t('product_categories.cats.beans-legumes'),
                t('product_categories.cats.canned-vegetables')
              ].map((p) => (
                <li key={p}>
                  <Link to="/products" className="hover:text-primary transition-colors flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary/50" />
                    {p}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-white mb-6 text-sm uppercase tracking-[0.2em]">{t('footer.company_title')}</h4>
            <ul className="space-y-3 text-sm font-medium text-white/60">
              {footerLinks.map((item) => (
                <li key={item.label}>
                  <Link to={item.to} className="hover:text-primary transition-colors flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary/50" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-white mb-6 text-sm uppercase tracking-[0.2em]">{t('footer.contact_title')}</h4>
            <ul className="space-y-4 text-sm font-medium text-white/60">
              <li className="flex items-start gap-3">
                <span className="text-primary mt-0.5">✉</span>
                <a href="mailto:abdullahelshazly32@gmail.com" className="hover:text-white transition-colors">abdullahelshazly32@gmail.com</a>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-0.5">📞</span>
                <a href="tel:+201091091537" className="hover:text-white transition-colors" dir="ltr">+2 01091091537</a>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-0.5">📍</span>
                <span>{t('footer.address')}<br />{t('footer.address2')}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-white/50 font-medium text-center md:text-left">
            {t('footer.copyright', { year: currentYear })} <br className="md:hidden" /> {t('footer.rights')}
          </p>
          <p className="text-sm font-bold text-white/30 text-center md:text-right">
            {t('footer.tagline')}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
