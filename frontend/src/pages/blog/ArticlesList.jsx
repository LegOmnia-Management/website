import Art1 from '../../assets/img/blog/article1.webp';
import Art2 from '../../assets/img/blog/article2.webp';
import Art3 from '../../assets/img/blog/article3.webp';
import Art4 from '../../assets/img/blog/article4.webp';

export const articles = [
    {
        id: 1,
        img: Art1,
        alt: 'Intellectual Property and Data Protection',
        category: [{
            name: 'Legaltech',
            class: 'legaltech'
        }, {
            name: 'Domaine sectoriel',
            class: 'sectoriel'
        }],
        title: 'Intellectual Property and Data Protection: Strategic Foundations of Digital Innovation in Africa',
        recap: 'The African digital ecosystem is experiencing unprecedented growth, raising crucial issues regarding intellectual property.',
        author: 'LegOmnia',
        date: '14 janvier 2026',
        time: '2 min'
    },
    {
        id: 2,
        img: Art2,
        alt: 'Afrique francophone',
        category: [{
            name: 'Non classé',
            class: ''
        }],
        title: 'LegOmnia : quand l’intelligence artificielle met le droit au service du développement durable en Afrique francophone',
        recap: 'Il existe une injustice silencieuse qui traverse l’Afrique francophone depuis des décennies : l’accès au droit.',
        author: 'LegOmnia',
        date: '27 février 2026',
        time: '5 min'
    },
    {
        id: 3,
        img: Art3,
        alt: 'Documents archivés',
        category: [{
            name: 'IA & Souveraineté Numérique',
            class: 'ia'
        },
        {
            name: 'LegalTech',
            class: 'legaltech'
        },
        {
            name: 'Domaine sectoriel',
            class: 'sectoriel'
        }],
        title: 'Gestion Électronique des Documents',
        recap: 'Dans un monde où le volume de données ne cesse de croître, la Gestion Électronique des Documents (GED) s’est imposée comme un pilier stratégique pour les entreprises et les administrations.',
        author: 'LegOmnia',
        date: '24 février 2026',
        time: '5 min'
    },
    {
        id: 4,
        img: Art4,
        alt: 'LegOmnia application',
        category: [{
            name: 'LegalTech',
            class: 'legaltech'
        },
        {
            name: 'Domaine sectoriel',
            class: 'sectoriel'
        }],
        title: 'LegOmnia: The AI Platform Revolutionizing Access to Law in Francophone Africa',
        recap: 'Picture an entrepreneur in Abidjan trying to register a business but unable to locate the applicable regulations.',
        author: 'LegOmnia',
        date: '18 février 2026',
        time: '6 min'
    }
];