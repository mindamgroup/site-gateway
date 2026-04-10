/**
 * MINDAM SEOUL — 로고 컴포넌트
 *
 * ✅ SVG 교체 방법:
 *   이 파일의 <svg> … </svg> 블록 전체를 실제 로고 SVG 코드로 교체하세요.
 *   className prop은 크기·색상 제어를 위해 <svg> 태그에 그대로 유지해 주세요.
 */

interface Props {
  className?: string;
}

export default function MindamSeoulLogo({ className = "" }: Props) {
  return (
    // ─── 여기에 실제 MINDAM SEOUL SVG를 붙여넣으세요 ───
    <svg
      className={className}
      viewBox="0 0 320 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="MINDAM SEOUL"
    >
      {/* ── 데모 플레이스홀더 ── */}
      <text
        x="160"
        y="32"
        textAnchor="middle"
        fontFamily="'Georgia', serif"
        fontSize="22"
        letterSpacing="8"
        fill="currentColor"
        fontWeight="400"
      >
        MINDAM
      </text>
      <line x1="40" y1="45" x2="280" y2="45" stroke="currentColor" strokeWidth="0.8" opacity="0.4" />
      <text
        x="160"
        y="66"
        textAnchor="middle"
        fontFamily="'Georgia', serif"
        fontSize="13"
        letterSpacing="6"
        fill="currentColor"
        fontWeight="300"
        opacity="0.75"
      >
        SEOUL
      </text>
    </svg>
    // ─── 교체 영역 끝 ───
  );
}
