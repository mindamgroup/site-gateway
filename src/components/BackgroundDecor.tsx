import { motion } from "framer-motion";

export default function BackgroundDecor() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="pointer-events-none absolute -left-40 -top-40 h-[520px] w-[520px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(200,185,154,0.13) 0%, transparent 70%)",
        }}
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2, ease: "easeOut", delay: 0.2 }}
        className="pointer-events-none absolute -bottom-40 -right-40 h-[520px] w-[520px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(200,185,154,0.10) 0%, transparent 70%)",
        }}
      />
    </>
  );
}
