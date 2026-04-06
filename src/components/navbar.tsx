"use client";

import { useTheme } from "next-themes";
import { useLanguage } from "./language-provider";
import { Moon, Sun, Languages } from "lucide-react";
import { useEffect, useState } from "react";

export function Navbar() {
  const { theme, setTheme } = useTheme();
  const { language, setLanguage, t } = useLanguage();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/90 dark:bg-[#001f3f]/90 backdrop-blur-md border-b border-gold/10 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 flex items-center">
            <h1 className="text-3xl font-black text-gold tracking-tighter">RIGHI</h1>
          </div>

          <div className="hidden md:flex space-x-10 rtl:space-x-reverse items-center">
            <a href="#" className="text-sm font-bold text-gray-900 dark:text-white hover:text-gold transition-colors">{t("home") as string}</a>
            <a href="#services" className="text-sm font-bold text-gray-900 dark:text-white hover:text-gold transition-colors">{t("services") as string}</a>
            <a href="#about" className="text-sm font-bold text-gray-900 dark:text-white hover:text-gold transition-colors">{t("about") as string}</a>
          </div>

          <div className="flex items-center space-x-6 rtl:space-x-reverse">
            <button
              onClick={() => setLanguage(language === "ar" ? "en" : "ar")}
              className="flex items-center space-x-2 rtl:space-x-reverse px-4 py-2 rounded-full border border-gold/20 hover:bg-gold/5 transition-all"
            >
              <Languages className="w-4 h-4 text-gold" />
              <span className="text-xs font-bold uppercase text-gray-900 dark:text-white">{language === "ar" ? "English" : "العربية"}</span>
            </button>

            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-3 rounded-full bg-gray-50 dark:bg-[#003366] border border-gold/10 hover:border-gold/30 transition-all group"
              aria-label="Toggle Theme"
            >
              {theme === "dark" ? (
                <Sun className="w-5 h-5 text-gold group-hover:scale-110 transition-transform" />
              ) : (
                <Moon className="w-5 h-5 text-navy group-hover:scale-110 transition-transform" />
              )}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
