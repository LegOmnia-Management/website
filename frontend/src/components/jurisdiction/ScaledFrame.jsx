import { useEffect, useRef, useState } from 'react';

// En dessous de cette échelle, le support devient illisible : on propose
// seulement le lien plein écran.
const MIN_SCALE = 0.5;

/**
 * Iframe d'un support conçu pour une largeur fixe (ex. 1600 px),
 * réduite pour tenir dans la largeur disponible.
 */
const ScaledFrame = ({ src, title, width, height, openLabel }) => {
    const boxRef = useRef(null);
    const [scale, setScale] = useState(null);

    useEffect(() => {
        const box = boxRef.current;
        if (!box) return;
        const update = () => setScale(Math.min(1, box.clientWidth / width));
        update();
        const observer = new ResizeObserver(update);
        observer.observe(box);
        return () => observer.disconnect();
    }, [width]);

    const visible = scale !== null && scale >= MIN_SCALE;

    return (
        <div className="scaled-frame" ref={boxRef}>
            {visible && (
                <div className="scaled-frame__viewport" style={{ height: height * scale }}>
                    <iframe
                        src={src}
                        title={title}
                        width={width}
                        height={height}
                        loading="lazy"
                        style={{ transform: `scale(${scale})` }}
                    />
                </div>
            )}
            <a className="ui__btn--inline scaled-frame__open" href={src} target="_blank" rel="noopener">
                {openLabel}
            </a>
        </div>
    );
};

export default ScaledFrame;
