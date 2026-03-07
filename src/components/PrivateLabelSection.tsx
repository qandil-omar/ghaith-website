import { motion } from "framer-motion";
import { Factory, Sprout, Handshake, Globe } from "lucide-react";
import factoryImg from "@/assets/factory.jpg";

const capabilities = [
    "Full product range available — all 8 categories",
    "Cans, Glass Jars, and Frozen bulk & retail formats",
    "Multi-language labeling & packaging design",
    "Compliant with EU, GCC, UK, and US regulations",
    "Nutritional analysis & allergen declarations included",
    "Recipe and flavor customization available",
];

const features = [
    {
        icon: Factory,
        title: "State-of-the-Art Manufacturing",
        desc: "Latest technology and automated production lines",
    },
    {
        icon: Sprout,
        title: "Premium Ingredients",
        desc: "Sourced directly from our trusted Egyptian farms",
    },
    {
        icon: Handshake,
        title: "Dedicated Partnership",
        desc: "Close collaboration for customized solutions",
    },
    {
        icon: Globe,
        title: "Global Scale",
        desc: "International reach to Europe, Gulf and Americas",
    },
];

const PrivateLabelSection = () => {
    return (
        <section className="py-24 bg-section-alt">
            <div className="container mx-auto px-6">
                <div className="grid lg:grid-cols-12 gap-12">
                    {/* Left Column */}
                    <div className="lg:col-span-7 flex flex-col justify-center">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <div className="inline-block bg-primary/10 text-primary border border-primary/20 text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider mb-6">
                                Private Label
                            </div>

                            <h2 className="font-display text-4xl md:text-5xl lg:text-5xl font-extrabold text-foreground mb-4 leading-tight">
                                Expert Private Label
                                <br />
                                Producers
                            </h2>

                            <p className="font-display text-xl md:text-2xl italic text-primary mb-6 font-semibold">
                                Your brand, our expertise.
                            </p>

                            <div className="text-muted-foreground leading-relaxed space-y-6 mb-10 text-lg">
                                <p>
                                    We produce tailor-made private label products for our international
                                    clients and partners all over the world. From sourcing premium
                                    ingredients from Egypt's richest agricultural belts to state-of-the-art
                                    manufacturing, we prioritize quality at every step.
                                </p>
                                <p>
                                    As a trusted partner for private label manufacturing, we
                                    understand the unique requirements and aspirations of our
                                    clients. Our dedicated team of professionals works closely
                                    with each client to develop and deliver customized private
                                    label solutions that align with their brand vision and market
                                    positioning.
                                </p>
                            </div>
                        </motion.div>

                        {/* Grid Features */}
                        <div className="grid sm:grid-cols-2 gap-4 mb-8">
                            {features.map((feature, idx) => (
                                <motion.div
                                    key={feature.title}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.1 * idx }}
                                    className="bg-white border border-border/80 rounded-2xl p-5 shadow-sm flex items-start gap-4 hover:shadow-md transition-shadow"
                                >
                                    <div className="text-primary shrink-0 mt-1">
                                        <feature.icon className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-foreground text-[15px] mb-1 leading-tight">{feature.title}</h4>
                                        <p className="text-xs text-muted-foreground leading-relaxed">{feature.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* Bottom Colored Box */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="bg-gradient-to-r from-primary to-secondary text-primary-foreground rounded-2xl p-6 md:p-8 shadow-lg"
                        >
                            <p className="text-lg md:text-xl font-medium leading-relaxed">
                                Choose ALGHAITH as your trusted partner, and let us bring your private label vision to life on a global scale.
                            </p>
                        </motion.div>
                    </div>

                    {/* Right Column */}
                    <div className="lg:col-span-5 flex flex-col gap-8">
                        {/* Capabilities Card */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="bg-white rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-black/5 p-8 md:p-10"
                        >
                            <h3 className="font-display text-2xl font-bold text-foreground mb-6">
                                Our Capabilities
                            </h3>
                            <ul className="space-y-4">
                                {capabilities.map((item, idx) => (
                                    <li key={idx} className="flex items-start gap-3">
                                        <div className="w-2 h-2 rounded-full bg-primary shrink-0 mt-2" />
                                        <span className="text-foreground/80 font-medium leading-relaxed text-sm">
                                            {item}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>

                        {/* Image Card */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="relative h-64 md:h-80 rounded-3xl overflow-hidden shadow-lg group"
                        >
                            <img
                                src={factoryImg}
                                alt="ALGHAITH Factory Manufacturing"
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                            <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                                <h3 className="font-display text-2xl font-bold mb-2">
                                    Private Label Manufacturing
                                </h3>
                                <p className="text-white/80 text-sm font-medium">
                                    Customized solutions for your brand
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PrivateLabelSection;
