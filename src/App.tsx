/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Play } from "lucide-react";

export default function App() {
  return (
    <div className="min-h-screen relative overflow-hidden flex flex-col items-center justify-center p-6">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=2000&auto=format&fit=crop")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-stone-900/40 backdrop-blur-[2px]" />
      </div>

      {/* Content Container */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-4xl w-full bg-stone-50/90 backdrop-blur-md rounded-3xl shadow-2xl overflow-hidden border border-stone-200/50"
      >
        <div className="p-8 md:p-12 flex flex-col items-center text-center">
          
          {/* Logo AnBau */}
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, type: "spring" }}
            className="mb-8 flex flex-col items-center"
          >
            <div className="flex items-center space-x-3 mb-1">
              <div className="relative">
                <div className="absolute -inset-1 bg-stone-900/20 blur-sm rounded-full" />
                <div className="relative bg-stone-900 p-3 rounded-full">
                  <svg 
                    viewBox="0 0 24 24" 
                    className="w-8 h-8 text-stone-50 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M12 2L14.5 9H22L16 14L18.5 21L12 17L5.5 21L8 14L2 9H9.5L12 2Z" />
                    <path d="M12 22C12 22 19 18 19 12C19 6 12 2 12 2C12 2 5 6 5 12C5 18 12 22 12 22Z" opacity="0.5" />
                  </svg>
                </div>
              </div>
              <span className="text-5xl font-bold tracking-tighter text-stone-900 serif">AnBau</span>
            </div>
            <span className="text-[10px] uppercase tracking-[0.3em] font-semibold text-stone-500 ml-12">Cultivando Innovación</span>
          </motion.div>

          {/* Maintenance Message */}
          <h1 className="serif text-4xl md:text-6xl font-medium text-stone-900 mb-4 tracking-tight">
            Cultivando Innovación
          </h1>
          <p className="text-stone-600 text-lg md:text-xl max-w-2xl mb-10 font-light leading-relaxed">
            Nuestra plataforma se encuentra en mantenimiento. Estamos preparando nuevas herramientas para potenciar tu producción.
          </p>

          {/* Institutional Video Space */}
          <div className="w-full aspect-video bg-stone-200 rounded-2xl overflow-hidden shadow-inner relative group cursor-pointer border border-stone-300">
            <img 
              src="https://images.unsplash.com/photo-1464226184884-fa280b87c399?q=80&w=1200&auto=format&fit=crop" 
              alt="Campo institucional"
              className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 bg-stone-900/80 rounded-full flex items-center justify-center backdrop-blur-sm group-hover:scale-110 transition-transform">
                <Play className="text-stone-50 fill-stone-50 w-6 h-6 ml-1" />
              </div>
            </div>
            <div className="absolute bottom-4 left-4 bg-stone-900/60 backdrop-blur-md px-4 py-2 rounded-full border border-white/10">
              <span className="text-stone-50 text-xs uppercase tracking-widest font-medium">Video Institucional</span>
            </div>
          </div>

        </div>
      </motion.div>

      {/* Footer Decoration */}
      <div className="mt-8 relative z-10">
        <p className="text-stone-200/60 text-sm tracking-widest uppercase font-light">
          &copy; 2026 AnBau &bull; Cultivando Innovación
        </p>
      </div>
    </div>
  );
}
