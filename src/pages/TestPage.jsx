import React, { useRef, useState, useEffect } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useMotionTemplate,
} from "framer-motion";

import YenBayRetreat from "./Estate/YenBayRetreat";

export default function ResortIntro() {
  const containerRef = useRef(null);
  const [enterSite, setEnterSite] = useState(false);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // 🎯 SMOOTH SCROLL
  const smooth = useSpring(scrollYProgress, {
    stiffness: 60,
    damping: 20,
  });

  // =========================
  // 🌍 ZOOM IN (MAIN EFFECT)
  // =========================
  const scale = useTransform(smooth, [0, 0.7], [1, 4]);
  const opacity = useTransform(smooth, [0.6, 0.8], [1, 0]);

  // Blur nhẹ cho cinematic
  const blur = useTransform(smooth, [0.6, 0.8], [0, 10]);

  const blurFilter = useMotionTemplate`blur(${blur}px)`;

  // =========================
  // 🎬 TRIGGER VÀO PAGE
  // =========================

  const triggeredRef = useRef(false);

  useEffect(() => {
    const unsub = smooth.on("change", (v) => {
      if (v > 0.85 && !triggeredRef.current) {
        triggeredRef.current = true;

        window.scrollTo(0, 0);
        setEnterSite(true);
      }
    });

    return () => unsub();
  }, [smooth]);

  // =========================
  // 🏝️ UI
  // =========================
  return (
    <div ref={containerRef} className="h-[200vh]">
      {/* ========================= */}
      {/* 🎥 INTRO ZOOM */}
      {/* ========================= */}
      {!enterSite && (
        <div className="sticky top-0 h-screen overflow-hidden">
          <motion.img
            src="/images/hero.png" // 👈 ảnh bạn gửi
            style={{
              scale,
              opacity,
              filter: blurFilter,
            }}
            className="h-full w-full object-cover"
          />

          {/* Overlay text */}
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div style={{ opacity }} className="text-center">
              <h1 className="text-5xl font-bold text-white">Yen Bay Resort</h1>
              <p className="mt-4 text-gray-300">A hidden paradise awaits</p>
            </motion.div>
          </div>
        </div>
      )}

      {enterSite && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <YenBayRetreat />
        </motion.div>
      )}
    </div>
  );
}
