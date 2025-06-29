"use client"

import { motion } from "framer-motion"

export function Loader() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-background z-50">
      <div className="relative">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold bg-gradient-to-r from-emerald-400 to-teal-600 bg-clip-text text-transparent mb-8"
        >
          Fahad Ishaq
        </motion.div>
        <div className="flex justify-center">
          <div className="relative w-16 h-16">
            {[0, 1, 2, 3].map((index) => (
              <motion.div
                key={index}
                className="absolute top-0 left-0 w-full h-full border-4 border-transparent border-t-emerald-500 rounded-full"
                initial={{ opacity: 0.25 }}
                animate={{ rotate: 360 }}
                transition={{
                  duration: 1.5,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "linear",
                  delay: index * 0.2,
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
