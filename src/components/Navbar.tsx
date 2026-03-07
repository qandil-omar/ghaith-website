import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import logoImg from "@/assets/logo.png";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Products", href: "/products" },
  { label: "Why Us", href: "/why-us" },
  { label: "Private Label", href: "/private-label" },
  { label: "Services", href: "/services" },
  { label: "Certifications", href: "/certifications" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <>
      <motion.div
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className="fixed top-6 left-0 right-0 z-50 px-4 md:px-8"
      >
        <nav className="container mx-auto bg-background/80 backdrop-blur-xl border border-white/20 shadow-lg rounded-full px-6 py-3 flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <img src={logoImg} alt="ALGHAITH" className="h-10 w-auto object-contain" />
          </Link>

          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                className={`text-sm font-bold transition-all hover:-translate-y-0.5 ${location.pathname === link.href
                  ? "text-primary"
                  : "text-foreground/80 hover:text-primary"
                  }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/contact"
              className="bg-gradient-to-r from-primary to-secondary text-primary-foreground px-6 py-2.5 rounded-full text-sm font-bold hover:shadow-lg hover:shadow-primary/30 transition-all duration-300"
            >
              Get Quote
            </Link>
          </div>

          <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden text-foreground hover:text-primary transition-colors">
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </nav>
      </motion.div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="fixed top-24 left-4 right-4 z-40 lg:hidden bg-background/95 backdrop-blur-xl border border-border shadow-2xl rounded-3xl overflow-hidden"
          >
            <div className="px-6 py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-foreground font-bold text-lg hover:text-primary transition-colors"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="mt-4 text-center bg-gradient-to-r from-primary to-secondary text-primary-foreground px-6 py-3 rounded-full font-bold hover:opacity-90 transition-opacity"
              >
                Get Quote
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
