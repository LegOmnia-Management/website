import Link from 'next/link';

import HeroBg from '@/components/HeroBg';

const Faq = () => {
    return (
        <main className="main">

            {/* Hero */}
            <section className="hero"
                style={{
                    height: "calc(100vh - 400px)",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    gap: "3rem"
                }}>
                <HeroBg />
                <div className="container hero__container">
                    <div className="hero__title">
                        <h1 className='main-title'>
                            Page <em className='highlight'>bientôt disponible</em>
                        </h1>
                    </div>
                    <div className="hero__actions">
                        <Link className='ui__btn' href="/">Retour à l'accueil</Link>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Faq;