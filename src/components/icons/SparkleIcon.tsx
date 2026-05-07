/**
 * 4-point sparkle / star with concave curved sides — matches the AnBau brand
 * sparkle from Figma. Inherits color via `currentColor`, so set the color on
 * the wrapping element (e.g. `text-brand-500`) and pass `className` for size.
 */
interface SparkleIconProps {
  className?: string;
  /** When true, paints a soft inner glow stop. Defaults to false. */
  glow?: boolean;
}

export default function SparkleIcon({ className, glow = false }: SparkleIconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden
    >
      {glow && (
        <defs>
          <radialGradient id="sparkleGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="currentColor" stopOpacity="0.85" />
            <stop offset="100%" stopColor="currentColor" stopOpacity="1" />
          </radialGradient>
        </defs>
      )}
      <path
        d="M12 0
           C 12 7.5, 16.5 12, 24 12
           C 16.5 12, 12 16.5, 12 24
           C 12 16.5, 7.5 12, 0 12
           C 7.5 12, 12 7.5, 12 0 Z"
        fill={glow ? "url(#sparkleGlow)" : "currentColor"}
      />
    </svg>
  );
}
