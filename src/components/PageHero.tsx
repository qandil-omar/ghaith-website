import { motion } from "framer-motion";
import farmImg from "@/assets/egyptian-farm.jpg";

interface PageHeroProps {
    title: string;
    subtitle: string;
    bgImage?: string;
}

const PageHero = ({ title, subtitle, bgImage = farmImg }: PageHeroProps) => {
    return (
        <section className="relative pt-40 pb-20 md:pt-48 md:pb-24 overflow-hidden">
            {/* Background Image Layer */}
            <div className="absolute inset-0">
                <img src={bgImage} alt="" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-foreground/70" />
            </div>

            {/* Content */}
            <div className="relative z-10 container mx-auto px-6 text-center">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="font-display text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-4"
                >
                    {title}
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="text-base md:text-lg text-white/90 max-w-2xl mx-auto font-medium"
                >
                    {subtitle}
                </motion.p>
            </div>
        </section>
    );
};

export default PageHero;
