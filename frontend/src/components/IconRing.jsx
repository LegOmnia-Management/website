const IconRing = ({ src }) => {
    return (
        <div className="icon__ring">
            <img src={src} alt="" aria-hidden="true" loading="lazy"/>
        </div>
    );
};

export default IconRing;