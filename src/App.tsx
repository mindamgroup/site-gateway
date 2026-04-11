import { motion } from "framer-motion";
import MindamGroupLogo from "./logos/Logo_MINDAM";
import MindamSeoulLogo from "./logos/Logotype_Seoul";
import MindamEduAiLogo from "./logos/Logotype_Edu_AI_Lab";
import BackgroundDecor from "./components/BackgroundDecor";

// 배경 동영상 임포트
import bgMovSeoul from "./movs/bgmov_seoul.mp4";
import bgMovEaLab from "./movs/bgmov_ealab.mp4";

const ease = "easeOut" as const;

export default function App() {
  return (
    <div className="relative h-screen w-screen overflow-hidden bg-[#F9F8F6]">
      {/* 배경 장식 */}
      <BackgroundDecor />

      {/* 상단 영역: MINDAM SEOUL */}
      <div className="relative flex h-1/2 w-full items-center justify-center border-b border-[#C8B99A]/20 overflow-hidden">
        {/* 배경 동영상 */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 h-full w-full object-cover"
        >
          <source src={bgMovSeoul} type="video/mp4" />
        </video>
        {/* 어두운 오버레이 */}
        <div className="absolute inset-0 bg-black/40" />

        <motion.a
          href="https://mindam.seoul.kr"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease, delay: 0.2 }}
          className="relative z-10 flex w-[60%] sm:w-[20%] items-center justify-center transition-transform duration-500 hover:scale-105"
        >
          <MindamSeoulLogo className="text-white transition-colors duration-500 hover:text-[#cbb26a]" />
        </motion.a>
      </div>

      {/* 하단 영역: MINDAM EDU AI LAB */}
      <div className="relative flex h-1/2 w-full items-center justify-center overflow-hidden">
        {/* 배경 동영상 */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 h-full w-full object-cover"
        >
          <source src={bgMovEaLab} type="video/mp4" />
        </video>
        {/* 어두운 오버레이 */}
        <div className="absolute inset-0 bg-black/50" />

        <motion.a
          href="https://mindam.ai.kr"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease, delay: 0.4 }}
          className="relative z-10 flex w-[60%] sm:w-[20%] items-center justify-center transition-transform duration-500 hover:scale-105"
        >
          <MindamEduAiLogo className="text-white transition-colors duration-500 hover:text-[#cbb26a]" />
        </motion.a>
      </div>

      {/* 중앙 로고: MINDAM Symbol */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease, delay: 0.6 }}
        className="absolute left-1/2 top-1/2 z-10 w-[20%] sm:w-[6%] -translate-x-1/2 -translate-y-1/2"
      >
        {/* 은은한 배경 광채 효과 */}
        <motion.div
          animate={{
            opacity: [0.3, 0.6, 0.3],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute inset-0 -z-10 bg-[#cbb26a]/30 blur-2xl rounded-full"
        />
        
        <motion.div
          className="relative drop-shadow-[0_0_15px_rgba(203,178,106,0.3)]"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.5, ease }}
        >
          <MindamGroupLogo className="text-[#cbb26a]" />
        </motion.div>
      </motion.div>
    </div>
  );
}
