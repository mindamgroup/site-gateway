import { motion, Variants } from "framer-motion";
import { Brand } from "../constants/brands";

const ease = "easeOut" as const;

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.85, ease },
  },
};

type BrandCardProps = Brand;

export default function BrandCard({ href, Logo, label, sub }: BrandCardProps) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      variants={fadeUp}
      whileHover="hovered"
      initial="rest"
      animate="rest"
      className="group relative flex flex-col items-center gap-5 pb-4 outline-none"
    >
      {/* 로고 영역 */}
      <motion.div
        variants={{
          rest: { scale: 1 },
          hovered: { scale: 1.05, transition: { duration: 0.4, ease } },
        }}
        className="relative"
      >
        {/* 호버 글로우 */}
        <motion.div
          variants={{
            rest: { opacity: 0 },
            hovered: { opacity: 1, transition: { duration: 0.35 } },
          }}
          className="pointer-events-none absolute inset-0 -z-10 rounded-2xl bg-[#cbb26a]/10 blur-2xl"
        />

        <Logo className="h-10 w-auto text-[#333333] transition-colors duration-500 group-hover:text-[#cbb26a] sm:h-12" />
      </motion.div>

      {/* 서브 텍스트 */}
      <motion.p
        variants={{
          rest: { opacity: 0.6 },
          hovered: { opacity: 1, transition: { duration: 0.3 } },
        }}
        className="font-['Playfair_Display',_serif] text-[10px] uppercase tracking-[0.38em] text-[#333333] whitespace-nowrap"
      >
        {sub}
      </motion.p>

      {/* 하단 인디케이터 */}
      <motion.span
        variants={{
          rest: { scaleX: 0, opacity: 0 },
          hovered: {
            scaleX: 1,
            opacity: 1,
            transition: { duration: 0.35, ease },
          },
        }}
        className="absolute bottom-0 left-1/2 h-px w-10 -translate-x-1/2 origin-center bg-[#cbb26a]"
      />
    </motion.a>
  );
}
