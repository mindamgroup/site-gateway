import MindamSeoulLogo from "../logos/Logotype_Seoul";
import MindamEduAiLogo from "../logos/Logotype_Edu_AI_Lab";

export const BRANDS = [
  {
    id: "seoul",
    href: "https://mindam.seoul.kr",
    Logo: MindamSeoulLogo,
    label: "MINDAM SEOUL",
    sub: "Premium Lifestyle Management",
  },
  {
    id: "edu",
    href: "https://mindam.ai.kr",
    Logo: MindamEduAiLogo,
    label: "MINDAM EDU AI LAB",
    sub: "AI-Powered Education",
  },
] as const;

export type Brand = (typeof BRANDS)[number];
