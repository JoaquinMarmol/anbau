/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";

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
                  <img src="/anbau.png" alt="" className="h-10"/>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Maintenance Message */}
          <h1 className="serif text-4xl md:text-6xl font-medium text-stone-900 mb-4 tracking-tight">
            Cultivando Innovación
          </h1>
          <p className="text-stone-600 text-lg md:text-xl max-w-2xl mb-10 font-light leading-relaxed">
            Nuestra plataforma se encuentra en mantenimiento. Estamos preparando nuevas herramientas para potenciar tu producción.
          </p>

          {/* Institutional Video Space */}
          <div className="w-full aspect-video rounded-2xl overflow-hidden shadow-lg border border-stone-300">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/yjvyI6dAtjk?si=qES7nmFvbPPJyFt6"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>

        </div>
      </motion.div>

      {/* Footer Decoration */}
      <div className="mt-8 relative z-10">
        <p className="text-stone-200/60 text-sm tracking-widest uppercase font-light">
          &copy; 2026. AnBau &bull; Cultivando Innovación
        </p>
      </div>
    </div>
  );
}
