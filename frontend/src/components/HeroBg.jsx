import '../assets/styles/heroBg.css';

const HeroBg = () => {
    return (
        <div className="component__hero--bg">
            <div className="component__hero--glow-1"></div>
            <div className="component__hero--glow-2"></div>
            <div className="component__hero--particles">
                <div className="particle particle-1"></div>
                <div className="particle particle-2"></div>
                <div className="particle particle-3"></div>
                <div className="particle particle-4"></div>
            </div>
        </div>
    );
};

export default HeroBg;