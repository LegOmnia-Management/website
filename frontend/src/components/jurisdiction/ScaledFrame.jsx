import { useEffect, useRef, useState } from 'react';

// En dessous de cette échelle, le support entier devient illisible : on cadre
// alors sur sa partie gauche (focusWidth, la carte) et le reste se consulte
// en faisant défiler horizontalement.
const MIN_SCALE = 0.5;

/**
 * Iframe d'un support conçu pour une largeur fixe (ex. 1600 px),
 * réduite pour tenir dans la largeur disponible.
 */
const ScaledFrame = ({ src, title, width, height, focusWidth = width, openLabel, caption }) => {
    const boxRef = useRef(null);
    const [scale, setScale] = useState(null);

    useEffect(() => {
        const box = boxRef.current;
        if (!box) return;
        const update = () => {
            const fit = box.clientWidth / width;
            setScale(Math.min(1, fit >= MIN_SCALE ? fit : box.clientWidth / focusWidth));
        };
        update();
        const observer = new ResizeObserver(update);
        observer.observe(box);
        return () => observer.disconnect();
    }, [width, focusWidth]);

    return (
        <div className="scaled-frame" ref={boxRef}>
            {scale !== null && (
                <div className="scaled-frame__viewport">
                    <div className="scaled-frame__sizer" style={{ width: width * scale, height: height * scale }}>
                        <iframe
                            src={src}
                            title={title}
                            width={width}
                            height={height}
                            style={{ transform: `scale(${scale})` }}
                        />
                    </div>
                </div>
            )}
            {caption && <p className="scaled-frame__caption">{caption}</p>}
            <a className="ui__btn--inline scaled-frame__open" href={src} target="_blank" rel="noopener">
                {openLabel}
            </a>
        </div>
    );
};

export default ScaledFrame;
