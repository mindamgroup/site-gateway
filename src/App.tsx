import { motion, Variants } from "framer-motion";
import MindamGroupLogo from "./logos/Logo_MINDAM";
import BrandCard from "./components/BrandCard";
import BackgroundDecor from "./components/BackgroundDecor";
import { BRANDS } from "./constants/brands";

const ease = "easeOut" as const;

const containerVariants: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.18,
      delayChildren: 0.3,
    },
  },
};

const dividerVariants: Variants = {
  hidden: { scaleY: 0, opacity: 0 },
  show: {
    scaleY: 1,
    opacity: 1,
    transition: { duration: 0.7, ease, delay: 0.55 },
  },
};

export default function App() {
  return (
    <div
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 py-20"
      style={{ backgroundColor: "#F9F8F6" }}
    >
      {/* 배경 장식 */}
      <BackgroundDecor />

      {/* 메인 그룹 로고 */}
      <motion.div
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.1, ease }}
        className="mb-14 sm:mb-18"
      >
        <MindamGroupLogo className="h-16 w-auto text-[#cbb26a] sm:h-20 drop-shadow-sm" />
      </motion.div>

      {/* 브랜드 카드 그리드 */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="flex w-full max-w-4xl flex-col items-center gap-14 sm:flex-row sm:items-center sm:justify-center sm:gap-0"
      >
        {/* MINDAM SEOUL */}
        <BrandCard {...BRANDS[0]} />

        {/* 데스크탑 구분선 */}
        <motion.div
          variants={dividerVariants}
          style={{ originY: "50%" }}
          className="hidden sm:block"
        >
          <div className="mx-12 h-20 w-px bg-gradient-to-b from-transparent via-[#C8B99A]/55 to-transparent" />
        </motion.div>

        {/* 모바일 구분선 */}
        <motion.div
          variants={dividerVariants}
          style={{ originX: "50%" }}
          className="block sm:hidden"
        >
          <div className="h-px w-16 bg-gradient-to-r from-transparent via-[#C8B99A]/55 to-transparent" />
        </motion.div>

        {/* MINDAM EDU AI LAB */}
        <BrandCard {...BRANDS[1]} />
      </motion.div>

      {/* 하단 태그라인 */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.4, delay: 1.1 }}
        className="mt-20 font-['Playfair_Display',_serif] text-[18px] uppercase tracking-[0.52em] text-[#333333] sm:mt-24"
      >
        The living lab of <span className="font-bold">hospitality</span>
      </motion.p>
    </div>
  );
}
