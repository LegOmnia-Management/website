const IconRing = ({ src }) => {
    return (
        <div className="icon__ring">
            <div className="point1"></div>
            <div className="point2"></div>
            <div className="point3"></div>
            <div className="point4"></div>
            <div className="point5"></div>
            <img src={src} alt="" aria-hidden="true"/>
        </div>
    );
};

export default IconRing;