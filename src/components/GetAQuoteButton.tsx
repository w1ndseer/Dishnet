import { useState, useId, CSSProperties, ReactNode } from 'react';

function hexToRgb(hex?: string) {
  if (!hex) return '239,68,68';
  const clean = hex.replace('#', '');
  if (clean.length < 6) return '239,68,68';
  const r = parseInt(clean.slice(0, 2), 16);
  const g = parseInt(clean.slice(2, 4), 16);
  const b = parseInt(clean.slice(4, 6), 16);
  return `${r},${g},${b}`;
}

function lightenRgb(rgbStr: string, amount: number) {
  const parts = rgbStr.split(',').map((s) => parseInt(s.trim(), 10));
  return parts
    .map((c) => Math.min(255, Math.round(c + (255 - c) * amount)))
    .join(',');
}

type ThemeColors = {
  primary?: string;
  accent?: string;
  secondary?: string;
  text?: string;
};

type Props = {
  children?: ReactNode;
  style?: CSSProperties;
  colors?: ThemeColors;
  buttonStyle?: 'rounded-fill' | 'pill' | 'sharp';
  href?: string;
  target?: string;
  rel?: string;
};

export default function TraceButton({
  children = 'Get a Quote',
  style = {},
  colors,
  buttonStyle = 'rounded-fill',
  href,
  target,
  rel,
}: Props) {
  const [hovered, setHovered] = useState(false);
  const uid = useId();
  const scope = `trace-${uid.replace(/:/g, '')}`;

  const primaryRgb = hexToRgb(colors?.primary ?? '#ef4444');
  const brightRgb = lightenRgb(primaryRgb, 0.3);
  const traceColor = `rgb(${brightRgb})`;
  const glowColor = `rgba(${primaryRgb},0.35)`;
  const borderIdle = `rgba(${primaryRgb},0.35)`;
  const borderHover = `rgba(${brightRgb},0.8)`;

  const textColor = colors?.text || '#ffffff';

  let borderRadius = '8px';
  if (buttonStyle === 'pill') borderRadius = '9999px';
  else if (buttonStyle === 'sharp') borderRadius = '0px';
  else if (buttonStyle === 'rounded-fill') borderRadius = '8px';

  const content = (
    <div
      style={{ position: 'relative', display: 'inline-block' }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <button
        className={scope}
        style={{
          position: 'relative',
          padding: '14px 32px',
          background: hovered
            ? `rgba(${primaryRgb},0.12)`
            : `rgba(${primaryRgb},0.06)`,
          border: `1px solid ${hovered ? borderHover : borderIdle}`,
          borderRadius,
          color: hovered ? traceColor : textColor,
          fontWeight: 600,
          fontSize: '15px',
          fontFamily: 'inherit',
          letterSpacing: '0.5px',
          cursor: 'pointer',
          overflow: 'visible',
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '8px',
          boxShadow: hovered
            ? `0 0 24px ${glowColor}, inset 0 0 12px rgba(${primaryRgb},0.15)`
            : 'none',
          transition:
            'color 0.3s ease, background 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease',
          ...style,
        }}
      >
        <svg
          aria-hidden
          className={`${scope}-svg`}
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            pointerEvents: 'none',
            overflow: 'visible',
          }}
          preserveAspectRatio="none"
          viewBox="0 0 100 100"
        >
          {[
            { w: 0.6, op: 0.08 },
            { w: 0.9, op: 0.16 },
            { w: 1.2, op: 0.28 },
            { w: 1.5, op: 0.42 },
            { w: 1.8, op: 0.58 },
            { w: 2.1, op: 0.75 },
            { w: 2.4, op: 0.9 },
            { w: 2.7, op: 1 },
            { w: 2.4, op: 0.9 },
            { w: 2.1, op: 0.75 },
            { w: 1.8, op: 0.58 },
            { w: 1.5, op: 0.42 },
            { w: 1.2, op: 0.28 },
            { w: 0.9, op: 0.16 },
            { w: 0.6, op: 0.08 },
            { w: 0.4, op: 0.04 },
          ].map((seg, i, arr) => {
            const mid = (arr.length - 1) / 2;
            const delay = (i - mid) * 0.05;
            return (
              <rect
                key={i}
                x="0.5"
                y="0.5"
                width="99"
                height="99"
                rx="6"
                ry="6"
                fill="none"
                stroke={traceColor}
                strokeWidth={seg.w}
                strokeLinecap="round"
                opacity={seg.op}
                pathLength={100}
                strokeDasharray="1 99"
                vectorEffect="non-scaling-stroke"
                className={`${scope}-trace`}
                style={{ animationDelay: `${delay}s` }}
              />
            );
          })}
        </svg>

        <span style={{ position: 'relative', zIndex: 2, whiteSpace: 'nowrap' }}>
          {children}
        </span>
      </button>

      <style>{`
        @keyframes ${scope}-trace-run {
          0% { stroke-dashoffset: 0; }
          100% { stroke-dashoffset: -100; }
        }
        .${scope}-trace {
          animation: ${scope}-trace-run 3.6s linear infinite;
          filter: drop-shadow(0 0 8px ${glowColor}) drop-shadow(0 0 16px ${glowColor}) drop-shadow(0 0 24px ${glowColor});
        }
        .${scope}:focus { outline: none; }
        .${scope}:focus-visible { outline: 2px solid ${traceColor}; outline-offset: 3px; }
      `}</style>
    </div>
  );

  if (href) {
    return (
      <a href={href} target={target} rel={rel} style={{ textDecoration: 'none' }}>
        {content}
      </a>
    );
  }

  return content;
}
