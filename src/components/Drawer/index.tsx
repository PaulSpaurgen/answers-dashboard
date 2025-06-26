import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { assets } from "@/utills/assets";

interface DrawerProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  width?: "sm" | "md" | "lg" | "xl";
}

export default function Drawer({
  isOpen,
  onClose,
  title,
  children,
  width = "xl",
}: DrawerProps) {
  const widthClasses = {
    sm: "w-80",
    md: "w-96",
    lg: "w-[32rem]",
    xl: "w-[40rem]",
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const handleBackdropClick = () => {
    onClose();
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") {
      onClose();
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed inset-0 z-40 bg-black/50 backdrop-blur-[2px]"
            onClick={handleBackdropClick}
            onKeyDown={handleKeyDown}
            tabIndex={-1}
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{
              type: "spring",
              damping: 30,
              stiffness: 300,
              duration: 0.4,
            }}
            className="fixed top-0 px-[32px] py-[42px] right-0 z-50 h-full w-[90vw] md:w-[50vw] lg:w-[46vw] xl:w-[40vw] bg-black-500 border-l border-black-200 shadow-2xl flex flex-col"
          >
            {/* Header */}
            {title && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.3 }}
                className="flex items-center justify-between"
              >
                <h2 className="text-[24px] font-semibold text-white-100">
                  {title}
                </h2>
                <motion.button
                  onClick={onClose}
                  className="p-2 rounded-lg hover:bg-black-300 transition-colors duration-200"
                  aria-label="Close drawer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <img
                    src={assets.close}
                    alt="close"
                    className="w-[14px] h-[14px]"
                  />
                </motion.button>
              </motion.div>
            )}

            {/* Content */}
            <div
              className="flex-1 overflow-y-auto "
            >
              {children}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
