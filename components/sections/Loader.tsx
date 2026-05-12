'use client';

import { useState, useEffect, useRef } from 'react';

interface LoaderProps {
  onDone: () => void;
}

export default function Loader({ onDone }: LoaderProps) {
  const [n, setN] = useState(0);
  const [gone, setGone] = useState(false);
  const onDoneRef = useRef(onDone);
  onDoneRef.current = onDone;

  useEffect(() => {
    let frame: number;
    let start: number | null = null;
    const dur = 1700;

    const tick = (t: number) => {
      if (!start) start = t;
      const p = Math.min((t - start) / dur, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setN(Math.floor(eased * 100));
      if (p < 1) {
        frame = requestAnimationFrame(tick);
      } else {
        setTimeout(() => setGone(true), 350);
        setTimeout(() => onDoneRef.current(), 1100);
      }
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <div className={`ac-loader${gone ? ' gone' : ''}`}>
      <div className="ldr-count">{String(n).padStart(3, '0')}</div>
      <div className="ldr-rule in" style={{ width: `${Math.min(n * 5.2, 520)}px` }} />
      <div className="ldr-meta in">
        <span>TORONTO, CANADA</span>
        <span>EST. 2023</span>
      </div>
    </div>
  );
}
