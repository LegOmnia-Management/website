import { useState } from 'react';

/**
 * Quiz à choix unique, une question à la fois, avec correction et score.
 * items : [{ q, o: [options], a: index de la bonne réponse, e: explication }]
 */
const QuizCard = ({ title, prompt, items, ui, stepLabel, end, variant = 'violet' }) => {
    const [index, setIndex] = useState(0);
    const [choice, setChoice] = useState(null);
    const [answers, setAnswers] = useState([]);

    const total = items.length;
    const done = index >= total;
    const score = answers.filter(Boolean).length;
    const item = done ? null : items[index];

    const pick = (j) => {
        if (choice !== null) return;
        setChoice(j);
        setAnswers((prev) => [...prev, j === item.a]);
    };
    const next = () => { setIndex((i) => i + 1); setChoice(null); };
    const reset = () => { setIndex(0); setChoice(null); setAnswers([]); };

    return (
        <section className={`quiz quiz--${variant}`} aria-label={title}>
            <header className="quiz__header">
                <h3 className="quiz__title">{title}</h3>
                <span className="quiz__score">{ui.score} : <strong>{score}</strong></span>
            </header>

            <div className="quiz__progress" aria-hidden="true">
                {items.map((_, i) => (
                    <span
                        key={i}
                        className={
                            i < answers.length ? (answers[i] ? 'is-right' : 'is-wrong') : i === index ? 'is-current' : ''
                        }
                    />
                ))}
            </div>

            {item ? (
                <div className="quiz__body" key={index}>
                    <p className="quiz__step">{stepLabel} {index + 1}/{total}</p>
                    <p className="quiz__question">{item.q}</p>
                    {prompt && <p className="quiz__prompt">{prompt}</p>}

                    <div className={`quiz__options${item.o.length > 2 ? ' quiz__options--grid' : ''}`}>
                        {item.o.map((opt, j) => {
                            let state = '';
                            if (choice !== null) {
                                if (j === item.a) state = ' is-right';
                                else if (j === choice) state = ' is-wrong';
                                else state = ' is-muted';
                            }
                            return (
                                <button
                                    key={j}
                                    type="button"
                                    className={`quiz__option${state}`}
                                    onClick={() => pick(j)}
                                    disabled={choice !== null}
                                >
                                    {opt}
                                </button>
                            );
                        })}
                    </div>

                    {choice !== null && (
                        <div className={`quiz__feedback ${choice === item.a ? 'is-right' : 'is-wrong'}`} role="status">
                            <p>
                                <strong>{choice === item.a ? ui.right : ui.wrong}</strong> {item.e}
                            </p>
                            <button type="button" className="ui__btn quiz__next" onClick={next}>
                                {index === total - 1 ? ui.result : ui.next}
                            </button>
                        </div>
                    )}
                </div>
            ) : (
                <div className="quiz__end" role="status">
                    <p className="quiz__end-title">{end(score, total)}</p>
                    <p>{ui.outOf(score, total)}</p>
                    <button type="button" className="ui__btn" onClick={reset}>{ui.replay}</button>
                </div>
            )}
        </section>
    );
};

export default QuizCard;
