export default function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-3 ${className}`}>
      <svg width="34" height="34" viewBox="0 0 36 36" fill="none" aria-hidden="true">
        <path d="M5 20c0-7 6-13 13-13s13 6 13 13" stroke="#C5A46D" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M18 29c-4 0-7-3-7-7 5 0 7 3 7 7Zm0 0c4 0 7-3 7-7-5 0-7 3-7 7Z" fill="#238636" />
        <path d="M18 29V17" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
      <span className="font-serif text-[1.75rem] font-medium tracking-wide">DreamNest</span>
    </span>
  );
}
