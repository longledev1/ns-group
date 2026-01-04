import React from "react";

export default function WindmillNS({
  width = 420,
  className = "",
  onBladeHover, // optional: (bladeIndex) => void
  onBladeLeave, // optional
  onBladeClick, // optional: (bladeIndex) => void
}) {
  // React 18+ (Next/CRA) đều có useId
  const id = React.useId();
  const gid = (s) => `${s}-${id}`;

  const bladeHandlers = (i) => ({
    onMouseEnter: () => onBladeHover?.(i),
    onMouseLeave: () => onBladeLeave?.(i),
    onClick: () => onBladeClick?.(i),
  });

  return (
    <svg
      className={className}
      width={width}
      viewBox="0 0 420 420"
      role="img"
      aria-label="Windmill logo (SVG) with hoverable blades"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        {/* Copper gradients */}
        <linearGradient id={gid("copper")} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#f5b07a" />
          <stop offset="0.35" stopColor="#c9773f" />
          <stop offset="0.65" stopColor="#a35a2d" />
          <stop offset="1" stopColor="#f0a46f" />
        </linearGradient>

        <linearGradient id={gid("copper2")} x1="1" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#ffbf8a" />
          <stop offset="0.45" stopColor="#b56834" />
          <stop offset="1" stopColor="#ffd1a6" />
        </linearGradient>

        <linearGradient id={gid("dark")} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#3a2417" stopOpacity="0.85" />
          <stop offset="1" stopColor="#2a1a11" stopOpacity="0.9" />
        </linearGradient>

        <filter
          id={gid("softShadow")}
          x="-20%"
          y="-20%"
          width="140%"
          height="140%"
        >
          <feDropShadow
            dx="0"
            dy="2"
            stdDeviation="3"
            floodColor="#000"
            floodOpacity="0.25"
          />
        </filter>

        <filter
          id={gid("hoverGlow")}
          x="-40%"
          y="-40%"
          width="180%"
          height="180%"
        >
          <feDropShadow
            dx="0"
            dy="0"
            stdDeviation="4"
            floodColor="#ffd3a6"
            floodOpacity="0.35"
          />
        </filter>
      </defs>

      {/* internal CSS for hover */}
      <style>{`
        .blade {
          cursor: pointer;
          transform-box: fill-box;
          transform-origin: 210px 170px; /* hub center */
          transition: transform 180ms ease, filter 180ms ease, opacity 180ms ease;
        }
        .blade:hover {
          transform: scale(1.03) rotate(6deg);
          filter: url(#${gid("hoverGlow")});
          opacity: 0.98;
        }
        .blade .band {
          opacity: 0.85;
        }
        .hub {
          filter: url(#${gid("softShadow")});
        }
      `}</style>

      {/* ===== BODY / TOWER ===== */}
      <g filter={`url(#${gid("softShadow")})`}>
        {/* tower main */}
        <path
          d="M170 395 L250 395 L275 205 Q210 152 145 205 Z"
          fill={`url(#${gid("copper")})`}
        />
        {/* inner highlight panel */}
        <path
          d="M182 388 L238 388 L260 215 Q210 172 160 215 Z"
          fill={`url(#${gid("copper2")})`}
          opacity="0.45"
        />

        {/* zigzag stripes like the image */}
        <g opacity="0.95">
          {/* 5 chevrons */}
          {[
            { y: 240, s: 1 },
            { y: 270, s: 1 },
            { y: 300, s: 1 },
            { y: 330, s: 1 },
            { y: 360, s: 1 },
          ].map((z, idx) => (
            <path
              key={idx}
              d={`M165 ${z.y} 
                  L210 ${z.y + 18} 
                  L255 ${z.y} 
                  L245 ${z.y - 8}
                  L210 ${z.y + 6}
                  L175 ${z.y - 8} Z`}
              fill={`url(#${gid("dark")})`}
              opacity={0.85}
            />
          ))}
        </g>

        {/* text NS 1955 (simple, close enough) */}
        <text
          x="210"
          y="385"
          textAnchor="middle"
          fontFamily="system-ui, -apple-system, Segoe UI, Roboto, Arial"
          fontWeight="800"
          fontSize="46"
          fill="#2c1a10"
          opacity="0.75"
        >
          NS
        </text>
        <text
          x="210"
          y="410"
          textAnchor="middle"
          fontFamily="system-ui, -apple-system, Segoe UI, Roboto, Arial"
          fontWeight="700"
          fontSize="18"
          letterSpacing="6"
          fill="#2c1a10"
          opacity="0.65"
        >
          1955
        </text>
      </g>

      {/* ===== NECK (top tower) ===== */}
      <g>
        <path
          d="M200 210 L220 210 L232 120 Q210 92 188 120 Z"
          fill={`url(#${gid("copper")})`}
        />
        <path
          d="M206 208 L214 208 L222 128 Q210 106 198 128 Z"
          fill={`url(#${gid("copper2")})`}
          opacity="0.4"
        />
      </g>

      {/* ===== BLADES ===== */}
      {/* Hub center at (210,170) */}
      <g className="hub">
        {/* blades are groups with their own geometry, rotated around hub */}
        {/* Blade shape points right by default, then rotated */}
        {[
          { i: 1, rot: 20 },
          { i: 2, rot: 110 },
          { i: 3, rot: 200 },
          { i: 4, rot: 290 },
        ].map(({ i, rot }) => (
          <g
            key={i}
            className="blade"
            transform={`rotate(${rot} 210 170)`}
            {...bladeHandlers(i)}
          >
            {/* blade body (tapered) */}
            <path
              d="M220 164 
                 C238 156, 278 140, 315 126
                 C335 118, 350 124, 356 140
                 C362 156, 350 170, 330 178
                 C292 193, 250 208, 226 214
                 C220 216, 216 212, 216 206
                 L216 172
                 C216 168, 217 166, 220 164 Z"
              fill={`url(#${gid("copper")})`}
            />
            {/* blade highlight */}
            <path
              d="M223 170
                 C250 160, 285 147, 315 136
                 C332 129, 342 133, 346 145
                 C350 157, 340 166, 324 173
                 C292 186, 260 198, 232 206
                 C226 208, 224 206, 224 202 Z"
              fill={`url(#${gid("copper2")})`}
              opacity="0.35"
            />
            {/* white bands (like the image) */}
            <g
              className="band"
              stroke="#f5f0ea"
              strokeWidth="4"
              strokeLinecap="round"
              opacity="0.85"
            >
              <path d="M260 156 L272 188" />
              <path d="M295 142 L307 174" />
              <path d="M328 130 L338 160" />
            </g>
          </g>
        ))}

        {/* hub circle */}
        <circle
          cx="210"
          cy="170"
          r="14"
          fill={`url(#${gid("copper2")})`}
          opacity="0.95"
        />
        <circle cx="210" cy="170" r="6" fill="#f5f0ea" opacity="0.9" />
      </g>
    </svg>
  );
}
