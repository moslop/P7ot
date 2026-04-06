"use client";

import { motion } from "framer-motion";
import { useLanguage } from "./language-provider";
import { CheckCircle2, Send, GraduationCap, BarChart3, Languages, FileText } from "lucide-react";

export function Services() {
  const { t } = useLanguage();
  const services = t("service_list") as string[];

  const icons = [
    <GraduationCap key={0} className="w-8 h-8" />,
    <FileText key={1} className="w-8 h-8" />,
    <BarChart3 key={2} className="w-8 h-8" />,
    <Languages key={3} className="w-8 h-8" />
  ];

  return (
    <section id="services" className="py-32 bg-gray-50 dark:bg-[#001122] relative overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-gold/5 rounded-full blur-[100px] -translate-y-1/2 -translate-x-1/2 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 relative">
        <div className="text-center mb-24 max-w-2xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black text-navy-900 dark:text-white mb-6 tracking-tight">
            {t("services") as string}
          </h2>
          <p className="text-lg text-navy-800/70 dark:text-gray-400 font-medium">
            {t("services_subtitle") as string}
          </p>
          <div className="w-20 h-2 bg-gold mx-auto mt-8 rounded-full shadow-[0_5px_15px_rgba(212,175,55,0.4)]" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-[#001f3f] p-10 rounded-[30px] border border-gold/10 hover:border-gold/30 transition-all shadow-[0_10px_30px_-10px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_50px_-15px_rgba(0,0,0,0.1)] group relative overflow-hidden"
            >
              <div className="w-16 h-16 bg-gold/5 rounded-2xl flex items-center justify-center mb-10 group-hover:bg-gold transition-all duration-500 transform group-hover:-rotate-6">
                <div className="text-gold group-hover:text-white transition-colors">
                  {icons[index]}
                </div>
              </div>
              <h3 className="text-2xl font-black text-navy-900 dark:text-white mb-4">
                {service}
              </h3>
              <p className="text-navy-800/60 dark:text-gray-400 font-medium leading-relaxed">
                {t("service_card_description") as string}
              </p>

              {/* Subtle Decorative Crack/Line */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-gold/5 rounded-bl-[100px] -mr-12 -mt-12 group-hover:-mr-8 group-hover:-mt-8 transition-all" />
            </motion.div>
          ))}
        </div>

        <div className="mt-32 text-center">
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                className="bg-white dark:bg-[#001f3f] p-12 md:p-16 rounded-[50px] border-2 border-gold/10 shadow-2xl relative overflow-hidden max-w-4xl mx-auto"
            >
                <div className="absolute inset-0 bg-gold/5 pointer-events-none" />
                <h3 className="text-3xl md:text-4xl font-black text-navy-900 dark:text-white mb-8 relative z-10">
                    {t("cta_title") as string}
                </h3>
                <p className="text-xl text-navy-800/70 dark:text-gray-400 mb-10 relative z-10 font-medium">
                    {t("cta_subtitle") as string}
                </p>
                <a
                    href="https://wa.me/213655295217"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-12 py-5 text-xl font-black text-white bg-gold hover:bg-[#B8860B] rounded-2xl transition-all transform hover:scale-105 shadow-[0_20px_40px_-15px_rgba(212,175,55,0.4)] group relative z-10"
                >
                    {t("order_now") as string}
                    <Send className="w-6 h-6 mr-4 rtl:mr-0 rtl:ml-4 transition-transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1" />
                </a>
            </motion.div>
        </div>
      </div>
    </section>
  );
}
