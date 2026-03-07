import { Link } from "react-router-dom";
import logoImg from "@/assets/logo.png";

const Footer = () => {
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
              Processing and Preserving Fruits & Vegetables since 2014. Egypt's finest harvests, world-class quality.
            </p>
          </div>

          <div>
            <h4 className="font-display font-bold text-white mb-6 text-sm uppercase tracking-[0.2em]">Products</h4>
            <ul className="space-y-3 text-sm font-medium text-white/60">
              {["Frozen Vegetables", "Fruits", "Olives", "Peppers", "Pickles", "Beans & Legumes", "Canned Vegetables", "Ready to Eat"].map((p) => (
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
            <h4 className="font-display font-bold text-white mb-6 text-sm uppercase tracking-[0.2em]">Company</h4>
            <ul className="space-y-3 text-sm font-medium text-white/60">
              {[
                { label: "About Us", to: "/about" },
                { label: "Why Choose Us", to: "/why-us" },
                { label: "Private Label", to: "/private-label" },
                { label: "Services", to: "/services" },
                { label: "Certifications", to: "/certifications" },
                { label: "Gallery", to: "/gallery" },
              ].map((item) => (
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
            <h4 className="font-display font-bold text-white mb-6 text-sm uppercase tracking-[0.2em]">Contact</h4>
            <ul className="space-y-4 text-sm font-medium text-white/60">
              <li className="flex items-start gap-3">
                <span className="text-primary mt-0.5">✉</span>
                <a href="mailto:abdullahelshazly32@gmail.com" className="hover:text-white transition-colors">abdullahelshazly32@gmail.com</a>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-0.5">📞</span>
                <a href="tel:+201091091537" className="hover:text-white transition-colors">+2 01091091537</a>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-0.5">📍</span>
                <span>Alatwa Alqeblia, Qutour<br />Al Gharbia, Egypt</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-white/50 font-medium text-center md:text-left">
            © {new Date().getFullYear()} ALGHAITH Factory for Processing and Preserving Fruits & Vegetables.<br className="md:hidden" /> All rights reserved.
          </p>
          <p className="text-sm font-bold text-white/30 text-center md:text-right">
            Quality you can trust — Freshness you can taste.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
