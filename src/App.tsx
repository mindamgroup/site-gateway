import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import MindamSeoulLogo from "./logos/MindamSeoulLogo";
import MindamEduAiLogo from "./logos/MindamEduAiLogo";

/* ─────────────────────────────────────────
   브랜드 데이터
   ───────────────────────────────────────── */
const brands = [
  {
    id: "seoul",
    href: "https://mindam.seoul.kr",
    Logo: MindamSeoulLogo,
    label: "MINDAM SEOUL",
    sub: "Premium Fashion & Lifestyle",
  },
  {
    id: "edu",
    href: "https://mindam.ai.kr",
    Logo: MindamEduAiLogo,
    label: "MINDAM EDU AI LAB",
    sub: "AI-Powered Education Platform",
  },
] as const;

/* ─────────────────────────────────────────
   공통 easing (cubic-bezier 문자열)
   ───────────────────────────────────────── */
const ease = "easeOut" as const;

/* ─────────────────────────────────────────
   애니메이션 variants
   ───────────────────────────────────────── */
const containerVariants: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.18,
      delayChildren: 0.3,
    },
  },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.85, ease },
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

/* ─────────────────────────────────────────
   BrandCard
   ───────────────────────────────────────── */
function BrandCard({
  href,
  Logo,
  label,
  sub,
}: {
  href: string;
  Logo: (typeof brands)[number]["Logo"];
  label: string;
  sub: string;
}) {
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
      {/* 로고 래퍼 */}
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
          className="pointer-events-none absolute inset-0 -z-10 rounded-2xl bg-[#c8b99a]/10 blur-2xl"
        />

        {/* ── 로고 SVG ──
            실제 SVG 교체는 src/logos/MindamSeoulLogo.tsx 또는
            src/logos/MindamEduAiLogo.tsx 파일을 수정하세요. */}
        <Logo className="h-16 w-[220px] text-[#2C2C2C] transition-colors duration-500 group-hover:text-[#7A6048] sm:h-20 sm:w-[280px]" />
      </motion.div>

      {/* 서브 텍스트 */}
      <motion.p
        variants={{
          rest: { opacity: 0.42 },
          hovered: { opacity: 0.8, transition: { duration: 0.3 } },
        }}
        className="font-['Georgia',_serif] text-[10px] uppercase tracking-[0.38em] text-[#7A6E62]"
      >
        {sub}
      </motion.p>

      {/* 언더라인 슬라이드 */}
      <motion.span
        variants={{
          rest: { scaleX: 0, opacity: 0 },
          hovered: {
            scaleX: 1,
            opacity: 1,
            transition: { duration: 0.35, ease },
          },
        }}
        className="absolute bottom-0 left-1/2 h-px w-10 -translate-x-1/2 origin-center bg-[#8B7355]"
      />
    </motion.a>
  );
}

/* ─────────────────────────────────────────
   Gateway Page
   ───────────────────────────────────────── */
export default function App() {
  return (
    <div
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 py-20"
      style={{ backgroundColor: "#F9F8F6" }}
    >
      {/* ── 배경 장식 ── */}
      <BackgroundDecor />

      {/* ── 상단 워드마크 ── */}
      <motion.p
        initial={{ opacity: 0, y: -14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease }}
        className="mb-16 font-['Georgia',_serif] text-[10px] uppercase tracking-[0.6em] text-[#9E9289] sm:mb-20"
      >
        MINDAM GROUP
      </motion.p>

      {/* ── 로고 그리드 ── */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="flex w-full max-w-2xl flex-col items-center gap-14 sm:flex-row sm:items-center sm:justify-center sm:gap-0"
      >
        {/* 첫 번째 브랜드 */}
        <BrandCard {...brands[0]} />

        {/* 데스크탑 세로 구분선 */}
        <motion.div
          variants={dividerVariants}
          style={{ originY: "50%" }}
          className="hidden sm:block"
        >
          <div className="mx-12 h-20 w-px bg-gradient-to-b from-transparent via-[#C8B99A]/55 to-transparent" />
        </motion.div>

        {/* 모바일 가로 구분선 */}
        <motion.div
          variants={dividerVariants}
          style={{ originX: "50%" }}
          className="block sm:hidden"
        >
          <div className="h-px w-16 bg-gradient-to-r from-transparent via-[#C8B99A]/55 to-transparent" />
        </motion.div>

        {/* 두 번째 브랜드 */}
        <BrandCard {...brands[1]} />
      </motion.div>

      {/* ── 하단 태그라인 ── */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.4, delay: 1.1 }}
        className="mt-20 font-['Georgia',_serif] text-[9px] uppercase tracking-[0.52em] text-[#B5ADA5] sm:mt-24"
      >
        Excellence &nbsp;·&nbsp; Innovation &nbsp;·&nbsp; Seoul
      </motion.p>
    </div>
  );
}

/* ─────────────────────────────────────────
   배경 장식
   ───────────────────────────────────────── */
function BackgroundDecor() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2, ease }}
        className="pointer-events-none absolute -left-40 -top-40 h-[520px] w-[520px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(200,185,154,0.13) 0%, transparent 70%)",
        }}
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2, ease, delay: 0.2 }}
        className="pointer-events-none absolute -bottom-40 -right-40 h-[520px] w-[520px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(200,185,154,0.10) 0%, transparent 70%)",
        }}
      />
    </>
  );
}
