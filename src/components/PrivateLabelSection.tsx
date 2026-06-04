import { motion } from "framer-motion";
import { Factory, Sprout, Handshake, Globe } from "lucide-react";
import factoryImg from "@/assets/factory.jpg";
import { useTranslation } from "react-i18next";

const PrivateLabelSection = () => {
    const { t } = useTranslation();

    const capabilities = [
        t('private_label_section.capabilities.0'),
        t('private_label_section.capabilities.1'),
        t('private_label_section.capabilities.2'),
        t('private_label_section.capabilities.3'),
        t('private_label_section.capabilities.4'),
        t('private_label_section.capabilities.5'),
    ];

    const features = [
        {
            icon: Factory,
            title: t('private_label_section.f1_title'),
            desc: t('private_label_section.f1_desc'),
        },
        {
            icon: Sprout,
            title: t('private_label_section.f2_title'),
            desc: t('private_label_section.f2_desc'),
        },
        {
            icon: Handshake,
            title: t('private_label_section.f3_title'),
            desc: t('private_label_section.f3_desc'),
        },
        {
            icon: Globe,
            title: t('private_label_section.f4_title'),
            desc: t('private_label_section.f4_desc'),
        },
    ];

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
                                {t('private_label_section.badge')}
                            </div>

                            <h2 className="font-display text-4xl md:text-5xl lg:text-5xl font-extrabold text-foreground mb-4 leading-tight">
                                {t('private_label_section.title1')}
                                <br />
                                {t('private_label_section.title2')}
                            </h2>

                            <p className="font-display text-xl md:text-2xl italic text-primary mb-6 font-semibold">
                                {t('private_label_section.subtitle')}
                            </p>

                            <div className="text-muted-foreground leading-relaxed space-y-6 mb-10 text-lg">
                                <p>
                                    {t('private_label_section.desc1')}
                                </p>
                                <p>
                                    {t('private_label_section.desc2')}
                                </p>
                            </div>
                        </motion.div>

                        {/* Grid Features */}
                        <div className="grid sm:grid-cols-2 gap-4 mb-8">
                            {features.map((feature, idx) => (
                                <motion.div
                                    key={idx}
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
                                {t('private_label_section.quote')}
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
                                {t('private_label_section.capabilities_title')}
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
                                    {t('private_label_section.img_title')}
                                </h3>
                                <p className="text-white/80 text-sm font-medium">
                                    {t('private_label_section.img_subtitle')}
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
