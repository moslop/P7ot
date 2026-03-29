"use client";

import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { Services } from "@/components/services";

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-[#001f3f] transition-colors duration-300 overflow-x-hidden">
      <Navbar />
      <Hero />
      <Services />

      {/* Basic Footer */}
      <footer className="py-16 border-t border-gold/10 bg-white dark:bg-[#001122]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-black text-gold mb-6 tracking-tighter">RIGHI</h2>
          <p className="text-navy-800/50 dark:text-gray-400 font-medium">
            © 2024 RIGHI Research Services. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}
