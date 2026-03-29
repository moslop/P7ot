"use client";

import { motion } from "framer-motion";
import { useLanguage } from "./language-provider";
import { Send, Sparkles, GraduationCap } from "lucide-react";

export function Hero() {
  const { t } = useLanguage();

  return (
    <div className="relative pt-40 pb-32 overflow-hidden min-h-screen flex items-center bg-white dark:bg-[#001f3f]">
      {/* Dynamic Background */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-40">
        <div className="absolute top-[10%] left-[5%] w-[400px] h-[400px] bg-gold/10 rounded-full blur-[100px] animate-pulse" />
        <div className="absolute bottom-[10%] right-[5%] w-[500px] h-[500px] bg-navy/5 dark:bg-gold/5 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center lg:text-right"
          >
            <div className="inline-flex items-center space-x-2 rtl:space-x-reverse px-4 py-2 rounded-full bg-gold/5 border border-gold/10 mb-8">
              <Sparkles className="w-4 h-4 text-gold" />
              <span className="text-xs font-black uppercase text-gold tracking-widest">{t("title") as string}</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-black text-navy-900 dark:text-white leading-[1.1] mb-8">
              <span className="text-gold block mb-2">RIGHI</span>
              {t("description") as string}
            </h1>

            <p className="text-xl text-navy-800/70 dark:text-gray-300 mb-12 max-w-2xl mx-auto lg:mr-0 leading-relaxed font-medium">
              {t("hero_paragraph") as string}
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start lg:flex-row-reverse">
              <a
                href="https://wa.me/213655295217"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-10 py-5 text-lg font-black text-white bg-gold hover:bg-[#B8860B] rounded-2xl transition-all transform hover:-translate-y-1 shadow-[0_20px_40px_-15px_rgba(212,175,55,0.4)] group"
              >
                {t("order_now") as string}
                <Send className="w-5 h-5 mr-3 rtl:mr-0 rtl:ml-3 transition-transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1" />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative"
          >
            <div className="relative z-10 bg-white dark:bg-[#003366] p-4 rounded-[40px] shadow-2xl border border-gold/10 overflow-hidden aspect-[4/5] md:aspect-square flex items-center justify-center">
               <div className="absolute inset-0 bg-gradient-to-tr from-gold/5 to-transparent pointer-events-none" />
               <div className="relative w-full h-full flex items-center justify-center">
                  <GraduationCap className="w-48 h-48 text-gold opacity-10 absolute animate-bounce" />
                  <div className="text-[12rem] font-black text-gold/5 select-none pointer-events-none rotate-12">R</div>
                  <div className="absolute w-64 h-64 border-[1px] border-gold/20 rounded-full animate-[spin_20s_linear_infinite]" />
                  <div className="absolute w-80 h-80 border-[1px] border-gold/10 rounded-full animate-[spin_30s_linear_infinite_reverse]" />
               </div>
            </div>
            <div className="absolute -top-10 -right-10 w-40 h-40 border-t-2 border-r-2 border-gold/20 rounded-tr-[100px]" />
            <div className="absolute -bottom-10 -left-10 w-40 h-40 border-b-2 border-l-2 border-gold/20 rounded-bl-[100px]" />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
