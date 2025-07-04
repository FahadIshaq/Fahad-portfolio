"use client"

import { motion, AnimatePresence } from "framer-motion"
import { CheckCircle, X } from "lucide-react"
import { Button } from "@/components/ui/button"

interface SuccessModalProps {
  isOpen: boolean
  onClose: () => void
  message: string
}

export function SuccessModal({ isOpen, onClose, message }: SuccessModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.8, opacity: 0, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative bg-background border border-border/50 rounded-2xl shadow-2xl w-[50%] max-w-sm mx-4 p-6"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-3 right-3 p-1.5 rounded-full hover:bg-muted transition-colors"
              aria-label="Close modal"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Success icon */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", damping: 15, stiffness: 300 }}
              className="mx-auto w-16 h-16 bg-emerald-500/10 rounded-full flex items-center justify-center mb-4"
            >
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ delay: 0.4, type: "spring", damping: 15, stiffness: 300 }}
              >
                <CheckCircle className="w-10 h-10 text-emerald-500" />
              </motion.div>
            </motion.div>

            {/* Success message */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-center"
            >
              <h3 className="text-xl font-bold mb-2 text-foreground">
                Message Sent!
              </h3>
              <p className="text-foreground/70 mb-6 text-sm leading-relaxed">
                {message}
              </p>
              
              {/* Confetti effect */}
              <motion.div className="flex justify-center gap-1 mb-6">
                {[...Array(6)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ scale: 0, y: 0 }}
                    animate={{ scale: 1, y: [-10, 0, -5, 0] }}
                    transition={{
                      delay: 0.8 + i * 0.1,
                      duration: 0.6,
                      repeat: 2,
                      repeatType: "reverse"
                    }}
                    className="w-2 h-2 bg-emerald-500 rounded-full"
                  />
                ))}
              </motion.div>

              {/* OK button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
                className="flex justify-center"
              >
                <Button
                  onClick={onClose}
                  className="bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white px-8"
                >
                  OK
                </Button>
              </motion.div>
            </motion.div>

            {/* Decorative elements */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
              className="absolute -top-2 -left-2 w-4 h-4 bg-emerald-500/20 rounded-full blur-sm"
            />
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.4 }}
              className="absolute -bottom-2 -right-2 w-6 h-6 bg-teal-500/20 rounded-full blur-sm"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
} 