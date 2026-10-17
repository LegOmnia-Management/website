import { useEffect, useRef } from 'react';
import { mountAfricaMotion } from './africa-motion.js';

/**
 * Carte de l'Afrique en points (effet de composition 3D) pour React / Next / Vite.
 *
 * <div style={{ position: 'relative', height: '100vh' }}>
 *   <AfricaMotion onStart={() => setPlaying(true)} onAssembled={() => setReady(true)} />
 *   <h1>…</h1>   // votre texte, positionné par-dessus (z-index supérieur)
 * </div>
 *
 * Le composant remplit son parent (position: absolute; inset: 0).
 * Next.js (App Router) : ajoutez 'use client' en première ligne du fichier.
 */
export default function AfricaMotion({ options, onStart, onAssembled, onOhada, className, style }) {
  const ref = useRef(null);
  const cb = useRef({ onStart, onAssembled, onOhada });
  cb.current = { onStart, onAssembled, onOhada };

  useEffect(() => {
    const fx = mountAfricaMotion(ref.current, {
      ...options,
      onStart: () => cb.current.onStart?.(),
      onAssembled: () => cb.current.onAssembled?.(),
      onOhada: () => cb.current.onOhada?.(),
    });
    return () => fx.destroy(); // nettoie aussi en <StrictMode>
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      ref={ref}
      className={className}
      aria-hidden="true"
      style={{ position: 'absolute', inset: 0, pointerEvents: 'none', ...style }}
    />
  );
}
