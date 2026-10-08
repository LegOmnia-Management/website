import { useMemo, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

import useLang from '../i18n/useLang';
import QuizCard from './jurisdiction/QuizCard';
import { countryPagePath } from '../data/countryPages';
import { VIEW_BOX, SHAPES, ISLANDS, CENTROIDS } from '../data/africaGeometry';
import { COUNTRY_NAMES, ISO2, ORGS, REGIONAL, OMNISCAN, MAP_CHALLENGE } from '../data/africaOrgs';
import { QUIZ_POOL } from '../data/juridictions/quizPool';
import { GAMES_UI, QUIZ_END } from '../data/juridictions/common';
import { shuffleOptions } from '../data/juridictions/diversify';

import '../assets/styles/coverageMap.css';

const BASE = '#2A2259';
const OVERLAP_SCALE = ['#2A2259', '#3E2F8A', '#5A40B8', '#7C5CE0', '#B39DFF'];
const CHALLENGE_LENGTH = 8;
const QUIZ_LENGTH = 10;

const ORG_BY_ID = Object.fromEntries(ORGS.map((o) => [o.id, o]));
const orgsOf = (iso) => ORGS.filter((o) => o.members.includes(iso));
const regionalOf = (iso) => REGIONAL.filter((id) => ORG_BY_ID[id].members.includes(iso));
const sharedWith = (a, b) => regionalOf(a).filter((id) => ORG_BY_ID[id].members.includes(b)).length;
const shuffle = (a) => [...a].sort(() => Math.random() - 0.5);

/**
 * Carte de couverture de la page d'accueil : organisations régionales,
 * chevauchements, fiche pays (« Voir plus »), défi carte et quiz général.
 */
const CoverageMap = () => {
    const { lang, lp, tr } = useLang();
    const L = (pair) => pair[lang];

    const [view, setView] = useState('org');
    const [orgId, setOrgId] = useState('OHADA');
    const [selected, setSelected] = useState(null);
    const [hovered, setHovered] = useState(null);
    const [challenge, setChallenge] = useState(null);
    const [quiz, setQuiz] = useState(null);
    const quizRef = useRef(null);

    const org = ORG_BY_ID[orgId];
    const names = useMemo(
        () => Object.entries(COUNTRY_NAMES).sort((a, b) => a[1][lang].localeCompare(b[1][lang], lang)),
        [lang]
    );

    // ── Couleurs ───────────────────────────────────────────────────────────
    const fillOf = (iso) => {
        if (challenge?.found === iso) return '#5EEAD4';
        if (view === 'overlap') {
            if (selected) return iso === selected ? '#5EEAD4' : OVERLAP_SCALE[Math.min(sharedWith(selected, iso), 4)];
            return OVERLAP_SCALE[Math.min(regionalOf(iso).length, 4)];
        }
        return org.members.includes(iso) ? org.color : BASE;
    };

    const legend = view === 'overlap'
        ? {
            title: selected
                ? tr(`Organisations en commun · ${COUNTRY_NAMES[selected].fr}`, `Organizations in common · ${COUNTRY_NAMES[selected].en}`)
                : tr('Organisations régionales par pays', 'Regional organizations per country'),
            items: [
                ...(selected ? [{ c: '#5EEAD4', t: L(COUNTRY_NAMES[selected]) }] : []),
                { c: OVERLAP_SCALE[1], t: '1' }, { c: OVERLAP_SCALE[2], t: '2' }, { c: OVERLAP_SCALE[3], t: '3' },
                { c: OVERLAP_SCALE[4], t: tr('4 et plus', '4 or more') },
            ],
        }
        : {
            title: L(org.sig),
            items: [{ c: org.color, t: tr(`États membres (${org.members.length})`, `Member states (${org.members.length})`) }, { c: BASE, t: tr('Non membres', 'Non-members') }],
        };

    // ── Défi carte ─────────────────────────────────────────────────────────
    const startChallenge = () => {
        setChallenge({ items: shuffle(MAP_CHALLENGE).slice(0, CHALLENGE_LENGTH), i: 0, score: 0, solved: false, fb: null, found: null, done: false });
        setSelected(null);
    };
    const nextChallenge = () => setChallenge((c) => (c.i + 1 >= c.items.length
        ? { ...c, done: true, found: null, fb: null }
        : { ...c, i: c.i + 1, solved: false, fb: null, found: null }));

    const clickCountry = (iso) => {
        if (challenge && !challenge.done && !challenge.solved) {
            const item = challenge.items[challenge.i];
            if (item.ok.includes(iso)) {
                setChallenge({ ...challenge, solved: true, score: challenge.score + 1, found: iso, fb: { ok: true, text: L(item).e } });
            } else {
                setChallenge({ ...challenge, fb: { ok: false, text: tr(`Ce n'est pas la bonne réponse (${COUNTRY_NAMES[iso].fr}). Réessayez.`, `That is not the right answer (${COUNTRY_NAMES[iso].en}). Try again.`) } });
            }
            return;
        }
        setSelected(iso);
    };

    // ── Quiz général ───────────────────────────────────────────────────────
    const openQuiz = () => {
        setQuiz({ round: Date.now(), items: shuffle(QUIZ_POOL).slice(0, QUIZ_LENGTH).map((item) => shuffleOptions(item)) });
        requestAnimationFrame(() => quizRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' }));
    };

    const countryLink = selected && countryPagePath(selected, lang);
    const shapeProps = (iso) => ({
        fill: fillOf(iso),
        "data-iso": iso,
        className: `cmap__country${selected === iso ? ' is-selected' : ''}${hovered === iso ? ' is-hovered' : ''}`,
        onClick: () => clickCountry(iso),
        onMouseEnter: () => setHovered(iso),
        onMouseLeave: () => setHovered(null),
    });

    return (
        <div className="cmap">
            {/* Barre d'actions */}
            <div className="cmap__toolbar">
                <div className="cmap__tabs" role="group" aria-label={tr("Mode d'affichage", 'Display mode')}>
                    <button type="button" aria-pressed={view === 'org'} onClick={() => setView('org')}>{tr('Par organisation', 'By organization')}</button>
                    <button type="button" aria-pressed={view === 'overlap'} onClick={() => setView('overlap')}>{tr('Chevauchements', 'Overlaps')}</button>
                </div>
            </div>

            <div className="cmap__grid">
                {/* Carte, puis le quiz carte juste en dessous */}
                <div className="cmap__map-col">
                <div className="cmap__map">
                    <svg viewBox={VIEW_BOX} className="cmap__svg" role="img" aria-label={tr("Carte de l'Afrique colorée selon les organisations régionales", 'Map of Africa coloured by regional organization')}>
                        {SHAPES.map(({ iso, d }, i) => <path key={`${iso}-${i}`} d={d} {...shapeProps(iso)} />)}
                        {ISLANDS.map(({ iso, cx, cy, r }) => <circle key={iso} cx={cx} cy={cy} r={r + 1} {...shapeProps(iso)} />)}
                        {selected && CENTROIDS[selected] && (
                            <circle className="cmap__marker" cx={CENTROIDS[selected][0]} cy={CENTROIDS[selected][1]} r="9" />
                        )}
                    </svg>

                    {hovered && <div className="cmap__hover">{L(COUNTRY_NAMES[hovered])}</div>}

                    <div className="cmap__legend">
                        <span className="cmap__legend-title">{legend.title}</span>
                        {legend.items.map(({ c, t }) => (
                            <span key={t} className="cmap__legend-item"><i style={{ background: c }} />{t}</span>
                        ))}
                    </div>
                </div>

                {challenge && (
                    <div className="cmap__challenge" role="status">
                        <div className="cmap__challenge-head">
                            <span>{tr('Quiz carte', 'Map quiz')} · {challenge.done ? tr('terminé', 'finished') : `${challenge.i + 1}/${challenge.items.length}`}</span>
                            <strong>{tr('Score', 'Score')} : {challenge.score}</strong>
                        </div>
                        {challenge.done ? (
                            <>
                                <p className="cmap__challenge-q">
                                    {challenge.score === challenge.items.length
                                        ? tr('Sans-faute : vous maîtrisez la géographie juridique africaine !', 'Perfect score: you have mastered African legal geography!')
                                        : tr(`${challenge.score} bonne(s) réponse(s) sur ${challenge.items.length}. Relancez pour viser le sans-faute.`, `${challenge.score} correct answer(s) out of ${challenge.items.length}. Play again to aim for a perfect score.`)}
                                </p>
                                <button type="button" className="cmap__btn cmap__btn--gold" onClick={startChallenge}>{tr('Rejouer', 'Play again')}</button>
                            </>
                        ) : (
                            <>
                                <p className="cmap__challenge-q">{L(challenge.items[challenge.i]).q}</p>
                                {challenge.fb && <p className={`cmap__challenge-fb ${challenge.fb.ok ? 'is-ok' : 'is-ko'}`}>{challenge.fb.ok ? tr('Bravo ! ', 'Well done! ') : ''}{challenge.fb.text}</p>}
                                {challenge.solved && (
                                    <button type="button" className="cmap__btn cmap__btn--gold" onClick={nextChallenge}>
                                        {challenge.i + 1 >= challenge.items.length ? tr('Voir le résultat', 'See the result') : tr('Question suivante', 'Next question')}
                                    </button>
                                )}
                            </>
                        )}
                    </div>
                )}

                <div className="cmap__map-bar">
                    <button type="button" className="cmap__btn cmap__btn--gold" onClick={challenge ? () => setChallenge(null) : startChallenge}>
                        {challenge ? tr('Quitter le quiz carte', 'Leave the map quiz') : tr('Quiz carte', 'Map quiz')}
                    </button>
                    {!challenge && (
                        <p>{tr("Trouvez sur la carte les sièges des grandes institutions juridiques africaines.", "Find the seats of Africa's major legal institutions on the map.")}</p>
                    )}
                </div>
                </div>

                {/* Panneau latéral */}
                <aside className="cmap__side">
                    <div className="cmap__panel">
                        <p className="cmap__label">{tr('Organisations', 'Organizations')}</p>
                        <div className="cmap__chips">
                            {ORGS.map((o) => (
                                <button
                                    key={o.id}
                                    type="button"
                                    className="cmap__chip"
                                    aria-pressed={view === 'org' && orgId === o.id}
                                    style={{ '--chip': o.color }}
                                    onClick={() => { setOrgId(o.id); setView('org'); }}
                                >
                                    <i />
                                    <span>{L(o.sig)}</span>
                                    <small>{o.members.length}</small>
                                </button>
                            ))}
                        </div>

                        {view === 'org' ? (
                            <div className="cmap__org" style={{ '--chip': org.color }}>
                                <h3>{L(org.sig)}</h3>
                                <p className="cmap__org-name">{L(org.name)}</p>
                                <p className="cmap__muted">{tr('Siège', 'Seat')} : {L(org.seat)}</p>
                                <p>{L(org.about)}</p>
                            </div>
                        ) : (
                            <div className="cmap__org">
                                <h3>{tr('Le « bol de spaghettis » régional', 'The regional "spaghetti bowl"')}</h3>
                                <p>
                                    {selected
                                        ? tr(`La carte indique, pour chaque État, le nombre d'organisations sous-régionales qu'il a en commun avec le pays sélectionné (${COUNTRY_NAMES[selected].fr}).`, `The map shows, for each state, how many sub-regional organizations it has in common with the selected country (${COUNTRY_NAMES[selected].en}).`)
                                        : tr("La carte indique le nombre d'organisations sous-régionales (OHADA, UEMOA, CEMAC, CEDEAO, CEEAC, COMESA, SADC, EAC) auxquelles chaque État appartient. Sélectionnez un pays pour voir ce qu'il partage avec ses voisins.", 'The map shows how many sub-regional organizations (OHADA, WAEMU, CEMAC, ECOWAS, ECCAS, COMESA, SADC, EAC) each state belongs to. Select a country to see what it shares with its neighbours.')}
                                </p>
                            </div>
                        )}
                    </div>

                    <div className="cmap__panel">
                        <label className="cmap__label" htmlFor="cmap-country">{tr('Pays sélectionné', 'Selected country')}</label>
                        <select id="cmap-country" className="cmap__select" value={selected || ''} onChange={(e) => clickCountry(e.target.value)}>
                            <option value="" disabled>{tr('Cliquez sur la carte ou choisissez un pays', 'Click the map or choose a country')}</option>
                            {names.map(([iso, n]) => <option key={iso} value={iso}>{n[lang]}</option>)}
                        </select>

                        {selected && (
                            <div className="cmap__country-card">
                                <h3>
                                    {ISO2[selected] && <img src={`https://flagcdn.com/${ISO2[selected]}.svg`} alt="" width="28" height="20" />}
                                    {L(COUNTRY_NAMES[selected])}
                                </h3>
                                <div className="cmap__badges">
                                    {orgsOf(selected).map((o) => (
                                        <span key={o.id} style={{ '--chip': o.color }}>{L(o.sig)}</span>
                                    ))}
                                </div>
                                <div className="cmap__country-actions">
                                    <Link className="cmap__btn cmap__btn--light" to={countryLink || lp('/liste-attente')}>
                                        {tr('Voir plus', 'See more')}
                                    </Link>
                                    {countryLink && (
                                        <Link className="cmap__btn cmap__btn--outline" to={`${countryLink}#quiz`}>
                                            {tr('Quiz de ce pays', 'Quiz for this country')}
                                        </Link>
                                    )}
                                    {OMNISCAN.includes(selected) && (
                                        <Link className="cmap__btn cmap__btn--outline" to={lp('/produits/transformation-digitale/omniscan')}>
                                            {tr('OmniScan disponible', 'OmniScan available')}
                                        </Link>
                                    )}
                                </div>
                            </div>
                        )}
                    </div>

                    <div className="cmap__panel cmap__panel--cta">
                        <p>{tr("Arbitrez des cas concrets et testez ce que vous savez du droit OHADA et de l'intégration régionale.", 'Work through real cases and test what you know about OHADA law and regional integration.')}</p>
                        <button type="button" className="cmap__btn cmap__btn--teal" onClick={openQuiz}>
                            {tr('Testez vos connaissances', 'Test your knowledge')}
                        </button>
                    </div>
                </aside>
            </div>

            {/* Quiz général */}
            <div ref={quizRef} className="cmap__quiz">
                {quiz && (
                    <QuizCard
                        key={quiz.round}
                        title={tr('Testez vos connaissances', 'Test your knowledge')}
                        items={quiz.items.map((item) => item[lang])}
                        ui={GAMES_UI[lang]}
                        stepLabel={GAMES_UI[lang].question}
                        end={QUIZ_END[lang]}
                    />
                )}
                {quiz && (
                    <button type="button" className="cmap__btn cmap__btn--outline cmap__quiz-new" onClick={openQuiz}>
                        {tr('Nouvelle série de questions', 'New set of questions')}
                    </button>
                )}
            </div>

            <p className="cmap__source">{tr('Fonds de carte Natural Earth (domaine public), simplifié ; frontières indicatives. Appartenances à jour en octobre 2026.', 'Base map: Natural Earth (public domain), simplified; borders are indicative. Memberships as of October 2026.')}</p>
        </div>
    );
};

export default CoverageMap;
