import { Link, Navigate, useParams } from 'react-router-dom';

import HeroBg from '../components/HeroBg';
import SEOHead from '../components/SEOHead';
import QuizCard from '../components/jurisdiction/QuizCard';
import ScaledFrame from '../components/jurisdiction/ScaledFrame';
import useLang from '../i18n/useLang';
import { countryPagePath, isoFromSlug } from '../data/countryPages';
import { JURISDICTIONS } from '../data/juridictions';

import '../assets/styles/jurisdiction.css';

const BASE_URL = 'https://legomnia.com';

// Dimensions du support interactif (conçu à largeur fixe)
const MAP_WIDTH = 1600;
const MAP_HEIGHT = 1040;

/**
 * Page juridiction d'un pays : /juridictions/:slug (FR) et /en/jurisdictions/:slug (EN).
 * Le contenu vient de data/juridictions/ ; un slug inconnu renvoie vers /juridictions.
 */
const CountryPage = () => {
    const { slug } = useParams();
    const { lang, lp, tr } = useLang();

    const iso = isoFromSlug(slug, lang);
    const country = iso && JURISDICTIONS[iso];
    if (!country) return <Navigate to={lp('/juridictions')} replace />;

    const c = country.content[lang];
    const path = countryPagePath(iso, lang);
    const url = `${BASE_URL}${path}`;

    const structuredData = {
        '@context': 'https://schema.org',
        '@graph': [
            {
                '@type': 'WebPage',
                '@id': url,
                url,
                name: c.seo.title,
                description: c.seo.description,
                inLanguage: lang,
                about: { '@type': 'Country', name: country.name[lang] },
                publisher: { '@type': 'Organization', name: 'LegOmnia', url: BASE_URL },
            },
            {
                '@type': 'BreadcrumbList',
                itemListElement: [
                    { '@type': 'ListItem', position: 1, name: c.breadcrumb.home, item: `${BASE_URL}${lp('/')}` },
                    { '@type': 'ListItem', position: 2, name: c.breadcrumb.jurisdictions, item: `${BASE_URL}${lp('/juridictions')}` },
                    { '@type': 'ListItem', position: 3, name: c.breadcrumb.current, item: url },
                ],
            },
            {
                '@type': 'FAQPage',
                mainEntity: c.faq.items.map(({ q, a }) => ({
                    '@type': 'Question',
                    name: q,
                    acceptedAnswer: { '@type': 'Answer', text: a },
                })),
            },
        ],
    };

    return (
        <main className="main jurisdiction">
            <SEOHead
                title={c.seo.title}
                description={c.seo.description}
                canonical={path}
                structuredData={structuredData}
            />

            {/* Hero */}
            <section className="hero jurisdiction__hero">
                <HeroBg />
                <div className="container">
                    <nav className="breadcrumb" aria-label={tr("Fil d'Ariane", 'Breadcrumb')}>
                        <Link to={lp('/')}>{c.breadcrumb.home}</Link> {'>'}{' '}
                        <Link to={lp('/juridictions')}>{c.breadcrumb.jurisdictions}</Link> {'>'}{' '}
                        <span aria-current="page">{c.breadcrumb.current}</span>
                    </nav>

                    <p className="jurisdiction__eyebrow">{c.hero.eyebrow}</p>
                    <h1 className="jurisdiction__title">
                        <img
                            className="jurisdiction__flag"
                            src={`https://flagcdn.com/${country.flag}.svg`}
                            alt=""
                            width="48"
                            height="34"
                        />
                        {c.hero.title}
                    </h1>
                    <p className="jurisdiction__intro">{c.hero.intro}</p>

                    <div className="jurisdiction__actions">
                        <a className="ui__btn" href="#organisations">{c.orgs.title}</a>
                        <a className="ui__btn--inline" href="#quiz">{c.games.title}</a>
                    </div>
                </div>
            </section>

            {/* Repères */}
            <section className="container jurisdiction__section" aria-labelledby="reperes">
                <h2 id="reperes" className="title__h2">{c.facts.title}</h2>
                <dl className="jurisdiction__facts">
                    {c.facts.items.map(({ label, value }) => (
                        <div key={label} className="jurisdiction__fact">
                            <dt>{label}</dt>
                            <dd>{value}</dd>
                        </div>
                    ))}
                </dl>
            </section>

            {/* Organisations régionales */}
            <section id="organisations" className="container jurisdiction__section" aria-labelledby="orgs-title">
                <h2 id="orgs-title" className="title__h2">{c.orgs.title}</h2>
                <p className="title__subtitle">{c.orgs.intro}</p>

                <div className="jurisdiction__orgs">
                    {c.orgs.items.map((org) => (
                        <article
                            key={org.id}
                            className="org-card"
                            style={{ '--org-color': country.orgColors[org.id] }}
                        >
                            <header className="org-card__header">
                                <h3 className="org-card__sig">{org.sig}</h3>
                                <span className="org-card__members">{org.members} {c.orgs.labels.members}</span>
                            </header>
                            <p className="org-card__name">{org.name}</p>
                            <p className="org-card__meta">
                                {c.orgs.labels.membership} : <strong>{org.membership}</strong> · {c.orgs.labels.seat} : {org.seat}
                            </p>
                            <dl className="org-card__details">
                                <dt>{c.orgs.labels.approach}</dt><dd>{org.approach}</dd>
                                <dt>{c.orgs.labels.effect}</dt><dd>{org.effect}</dd>
                                <dt>{c.orgs.labels.court}</dt><dd>{org.court}</dd>
                                <dt>{c.orgs.labels.data}</dt><dd>{org.data}</dd>
                            </dl>
                        </article>
                    ))}
                </div>

                <div className="jurisdiction__columns">
                    <div className="jurisdiction__traps">
                        <h3>{c.orgs.trapsTitle}</h3>
                        <ul>
                            {c.orgs.traps.map((trap) => (
                                <li key={trap.id}><strong>{trap.sig}</strong> : {trap.text}</li>
                            ))}
                        </ul>
                    </div>
                    <aside className="jurisdiction__note">
                        <h3>{c.orgs.overlapTitle}</h3>
                        <p>{c.orgs.overlap}</p>
                    </aside>
                </div>
            </section>

            {/* Carte interactive */}
            <section id="carte" className="container jurisdiction__section" aria-labelledby="map-title">
                <h2 id="map-title" className="title__h2">{c.map.title}</h2>
                <p className="title__subtitle">{c.map.text}</p>
                <ScaledFrame
                    src={country.mapUrl}
                    title={c.map.frameTitle}
                    width={MAP_WIDTH}
                    height={MAP_HEIGHT}
                    openLabel={c.map.open}
                />
            </section>

            {/* Hiérarchie des normes */}
            <section className="container jurisdiction__section" aria-labelledby="norms-title">
                <h2 id="norms-title" className="title__h2">{c.norms.title}</h2>
                <p className="title__subtitle">{c.norms.intro}</p>

                <ol className="norms">
                    {c.norms.levels.map((level, i) => (
                        <li key={level.t} className="norms__level" style={{ '--level': i }}>
                            <div className="norms__bar">
                                <span className="norms__rank">{level.k}</span>
                                <h3 className="norms__name">{level.t}</h3>
                            </div>
                            <div className="norms__text">
                                <p>{level.d}</p>
                                <p className="norms__meta">
                                    <span><strong>{c.norms.labels.basis} :</strong> {level.basis}</span>
                                    <span><strong>{c.norms.labels.guard} :</strong> {level.guard}</span>
                                </p>
                            </div>
                        </li>
                    ))}
                </ol>
                <p className="jurisdiction__note jurisdiction__note--inline">{c.norms.caseLaw}</p>
            </section>

            {/* Quiz */}
            <section id="quiz" className="container jurisdiction__section" aria-labelledby="games-title">
                <h2 id="games-title" className="title__h2">{c.games.title}</h2>
                <p className="title__subtitle">{c.games.intro}</p>
                <div className="jurisdiction__games">
                    <QuizCard
                        title={c.games.arbiter.title}
                        prompt={c.games.arbiter.prompt}
                        items={c.games.arbiter.items}
                        end={c.games.arbiter.end}
                        ui={c.games.ui}
                        stepLabel={c.games.ui.case}
                        variant="gold"
                    />
                    <QuizCard
                        title={c.games.quiz.title}
                        items={c.games.quiz.items}
                        end={c.games.quiz.end}
                        ui={c.games.ui}
                        stepLabel={c.games.ui.question}
                    />
                </div>
            </section>

            {/* FAQ */}
            <section className="container jurisdiction__section" aria-labelledby="faq-title">
                <h2 id="faq-title" className="title__h2">{c.faq.title}</h2>
                <div className="jurisdiction__faq">
                    {c.faq.items.map(({ q, a }) => (
                        <details key={q}>
                            <summary><h3>{q}</h3></summary>
                            <p>{a}</p>
                        </details>
                    ))}
                </div>
            </section>

            {/* Appel à l'action */}
            <section className="container jurisdiction__section">
                <div className="jurisdiction__cta">
                    <h2 className="title__h2">{c.cta.title}</h2>
                    <p>{c.cta.text}</p>
                    <div className="jurisdiction__actions">
                        <Link className="ui__btn" to={lp('/liste-attente')}>{c.cta.waitlist}</Link>
                        <Link className="ui__btn--inline" to={lp('/produits/transformation-digitale/omniscan')}>{c.cta.omniscan}</Link>
                    </div>
                </div>
                <p className="jurisdiction__disclaimer">{c.disclaimer}</p>
            </section>
        </main>
    );
};

export default CountryPage;
