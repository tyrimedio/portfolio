"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function SectionDivider() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div ref={ref} className="flex justify-center py-2">
      <motion.div
        initial={{ scaleX: 0, opacity: 0 }}
        animate={isInView ? { scaleX: 1, opacity: 1 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="h-[1px] w-24 bg-gradient-to-r from-transparent via-indigo-500/30 to-transparent"
      />
    </div>
  );
}
