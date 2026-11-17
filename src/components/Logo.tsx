type LogoProps = {
  className?: string;
  mark?: boolean;
  wordmark?: boolean;
};

export function Logo({ className = "", mark = true, wordmark = true }: LogoProps) {
  return (
    <span className={`inline-flex items-center gap-2 ${className}`}>
      {mark && (
        <svg
          viewBox="0 0 48 24"
          className="h-5 w-auto shrink-0"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          aria-hidden="true"
        >
          <circle cx="12" cy="12" r="9.5" />
          <circle cx="36" cy="12" r="9.5" />
          <line x1="21.5" y1="12" x2="26.5" y2="12" />
          <line x1="2.5" y1="10" x2="0" y2="8.5" />
        </svg>
      )}
      {wordmark && (
        <span className="font-display tracking-wide text-sm uppercase">
          Altera Company
        </span>
      )}
    </span>
  );
}
