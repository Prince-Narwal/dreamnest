
import Image from "next/image";
type Props = {
  src?: string;
  alt: string;
  tone?: string; // Tailwind gradient classes for the placeholder
  className?: string;
  priority?: boolean;
  sizes?: string;
};

/** Renders a real optimized photo when `src` is set, otherwise a tasteful placeholder. */
export default function Photo({ src, alt, tone = "from-[#6f8a74] to-[#d4c39b]", className = "", priority, sizes = "100vw" }: Props) {
  if (!src) {
    return <div role="img" aria-label={alt} className={`bg-gradient-to-br ${tone} ${className}`} />;
  }
  return (
    <div className={`relative overflow-hidden ${className}`}>
      <Image src={src} alt={alt} fill priority={priority} sizes={sizes} className="object-cover" />
    </div>
  );
}
