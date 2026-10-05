import { useState, useEffect, useRef, useCallback } from "react";
import { Link } from "react-router-dom";

import useLang from "../i18n/useLang";

import '../assets/styles/africaMap.css';

// ─── COUNTRY DATA ───────────────────────────────────────────────────────────
const COUNTRY_DATA = {
  // OHADA (17 membres)
  BEN: { name: "Bénin", nameEn: "Benin", orgs: ["OHADA", "CEDEAO", "UEMOA", "UA"] },
  BFA: { name: "Burkina Faso", nameEn: "Burkina Faso", orgs: ["OHADA", "CEDEAO", "UEMOA", "UA"] },
  CMR: { name: "Cameroun", nameEn: "Cameroon", orgs: ["OHADA", "CEMAC", "UA"] },
  COM: { name: "Comores", nameEn: "Comoros", orgs: ["OHADA", "COMESA", "UA"] },
  COG: { name: "Congo", nameEn: "Congo", orgs: ["OHADA", "CEMAC", "COMESA", "UA"] },
  CIV: { name: "Côte d'Ivoire", nameEn: "Côte d'Ivoire", orgs: ["OHADA", "CEDEAO", "UEMOA", "UA"] },
  GAB: { name: "Gabon", nameEn: "Gabon", orgs: ["OHADA", "CEMAC", "UA"] },
  GIN: { name: "Guinée", nameEn: "Guinea", orgs: ["OHADA", "CEDEAO", "UA"] },
  GNB: { name: "Guinée-Bissau", nameEn: "Guinea-Bissau", orgs: ["OHADA", "CEDEAO", "UEMOA", "UA"] },
  GNQ: { name: "Guinée équatoriale", nameEn: "Equatorial Guinea", orgs: ["OHADA", "CEMAC", "UA"] },
  MLI: { name: "Mali", nameEn: "Mali", orgs: ["OHADA", "CEDEAO", "UEMOA", "UA"] },
  NER: { name: "Niger", nameEn: "Niger", orgs: ["OHADA", "CEDEAO", "UEMOA", "UA"] },
  CAF: { name: "République centrafricaine", nameEn: "Central African Republic", orgs: ["OHADA", "CEMAC", "UA"] },
  COD: { name: "République démocratique du Congo", nameEn: "Democratic Republic of the Congo", orgs: ["OHADA", "CEMAC", "COMESA", "UA"] },
  SEN: { name: "Sénégal", nameEn: "Senegal", orgs: ["OHADA", "CEDEAO", "UEMOA", "UA"] },
  TCD: { name: "Tchad", nameEn: "Chad", orgs: ["OHADA", "CEMAC", "UA"] },
  TGO: { name: "Togo", nameEn: "Togo", orgs: ["OHADA", "CEDEAO", "UEMOA", "UA"] },
  // CEDEAO seulement
  CPV: { name: "Cabo Verde", nameEn: "Cabo Verde", orgs: ["CEDEAO", "UA"] },
  GMB: { name: "Gambie", nameEn: "Gambia", orgs: ["CEDEAO", "UA"] },
  GHA: { name: "Ghana", nameEn: "Ghana", orgs: ["CEDEAO", "UA"] },
  LBR: { name: "Liberia", nameEn: "Liberia", orgs: ["CEDEAO", "UA"] },
  NGA: { name: "Nigeria", nameEn: "Nigeria", orgs: ["CEDEAO", "UA"] },
  SLE: { name: "Sierra Leone", nameEn: "Sierra Leone", orgs: ["CEDEAO", "UA"] },
  // COMESA
  BDI: { name: "Burundi", nameEn: "Burundi", orgs: ["COMESA", "UA"] },
  DJI: { name: "Djibouti", nameEn: "Djibouti", orgs: ["COMESA", "UA"] },
  EGY: { name: "Égypte", nameEn: "Egypt", orgs: ["COMESA", "UA"] },
  ERI: { name: "Érythrée", nameEn: "Eritrea", orgs: ["COMESA", "UA"] },
  SWZ: { name: "Eswatini", nameEn: "Eswatini", orgs: ["COMESA", "UA"] },
  ETH: { name: "Éthiopie", nameEn: "Ethiopia", orgs: ["COMESA", "UA"] },
  KEN: { name: "Kenya", nameEn: "Kenya", orgs: ["COMESA", "UA"] },
  LBY: { name: "Libye", nameEn: "Libya", orgs: ["COMESA", "UA"] },
  MDG: { name: "Madagascar", nameEn: "Madagascar", orgs: ["COMESA", "UA"] },
  MWI: { name: "Malawi", nameEn: "Malawi", orgs: ["COMESA", "UA"] },
  MUS: { name: "Maurice", nameEn: "Mauritius", orgs: ["COMESA", "UA"] },
  UGA: { name: "Ouganda", nameEn: "Uganda", orgs: ["COMESA", "UA"] },
  RWA: { name: "Rwanda", nameEn: "Rwanda", orgs: ["COMESA", "UA"] },
  SYC: { name: "Seychelles", nameEn: "Seychelles", orgs: ["COMESA", "UA"] },
  SOM: { name: "Somalie", nameEn: "Somalia", orgs: ["COMESA", "UA"] },
  SDN: { name: "Soudan", nameEn: "Sudan", orgs: ["COMESA", "UA"] },
  TUN: { name: "Tunisie", nameEn: "Tunisia", orgs: ["COMESA", "UA"] },
  ZMB: { name: "Zambie", nameEn: "Zambia", orgs: ["COMESA", "UA"] },
  ZWE: { name: "Zimbabwe", nameEn: "Zimbabwe", orgs: ["COMESA", "UA"] },
  // UA uniquement
  DZA: { name: "Algérie", nameEn: "Algeria", orgs: ["UA"] },
  AGO: { name: "Angola", nameEn: "Angola", orgs: ["UA"] },
  ZAF: { name: "Afrique du Sud", nameEn: "South Africa", orgs: ["UA"] },
  ESH: { name: "Sahara occidental", nameEn: "Western Sahara", orgs: ["UA"] },
  BWA: { name: "Botswana", nameEn: "Botswana", orgs: ["UA"] },
  MAR: { name: "Maroc", nameEn: "Morocco", orgs: ["UA"] },
  MOZ: { name: "Mozambique", nameEn: "Mozambique", orgs: ["UA"] },
  NAM: { name: "Namibie", nameEn: "Namibia", orgs: ["UA"] },
  TZA: { name: "Tanzanie", nameEn: "Tanzania", orgs: ["UA"] },
  SSD: { name: "Soudan du Sud", nameEn: "South Sudan", orgs: ["UA"] },
  STP: { name: "São Tomé-et-Príncipe", nameEn: "São Tomé and Príncipe", orgs: ["UA"] },
  LSO: { name: "Lesotho", nameEn: "Lesotho", orgs: ["UA"] },
  MRT: { name: "Mauritanie", nameEn: "Mauritania", orgs: ["UA"] },
};

// Pays où OmniScan peut être installé (codes ISO)
const COUNTRY_OMNISCAN = [
   "BEN", "CIV", "CMR", "COD", "COG", "GAB", "MDG", "SEN", "TGO"
]

// Libellés affichés des organisations (les clés restent les sigles français)
const ORG_LABELS = {
  fr: {},
  en: { CEDEAO: "ECOWAS", UEMOA: "WAEMU", UA: "AU" },
};

const TEXTS = {
  fr: {
    loading: "Chargement de la carte…",
    filterBy: "Filtrer par zone",
    organisations: "Organisations",
    noData: "Aucune donnée",
    seeMore: "Voir plus",
    clickCountry: "Cliquez sur un pays",
    omniscanTitle: <>Installation d'<span className="highlight">OmniScan</span> possible</>,
    omniscanText: "Transformez tous vos documents juridiques en données exploitables et prêtes à l'indexation.",
    omniscanCta: "Découvrir OmniScan",
  },
  en: {
    loading: "Loading map…",
    filterBy: "Filter by zone",
    organisations: "Organizations",
    noData: "No data",
    seeMore: "See more",
    clickCountry: "Click on a country",
    omniscanTitle: <><span className="highlight">OmniScan</span> can be deployed here</>,
    omniscanText: "Turn all your legal documents into usable data, ready for indexing.",
    omniscanCta: "Discover OmniScan",
  },
};

const countryName = (data, lang) => (lang === "en" ? data.nameEn : data.name);

const ORG_COLORS = {
  OHADA:  "#22c55e",
  CEDEAO: "#eab308",
  CEMAC:  "#3b82f6",
  UEMOA:  "#ec4899",
  COMESA: "#06b6d4",
  UA:     "#6366f1",
};

const FILTERS = ["OHADA", "CEDEAO", "CEMAC", "UEMOA", "COMESA", "UA"];

// ─── HELPERS ────────────────────────────────────────────────────────────────
function getFillColor(iso, currentFilter) {
  const data = COUNTRY_DATA[iso];
  if (!data) return "#BEBEBE";
  if (currentFilter) {
    return data.orgs.includes(currentFilter) ? ORG_COLORS[currentFilter] : "#D9D9D9";
  }
  return "#CCCCCC";
}

// ─── MAIN COMPONENT ─────────────────────────────────────────────────────────
export default function AfricaMap() {
  const { lang, lp } = useLang();
  const txt = TEXTS[lang];
  const orgLabel = (org) => ORG_LABELS[lang][org] || org;

  // langue lue par les listeners DOM (créés une seule fois)
  const langRef = useRef(lang);
  useEffect(() => { langRef.current = lang; }, [lang]);

  const svgRef     = useRef(null);
  const tooltipRef = useRef(null);

  const [selectedCountry, setSelectedCountry] = useState(null);
  const [currentFilter,   setCurrentFilter]   = useState(null);
  const [mapReady,        setMapReady]         = useState(false);

  // Paths stored imperatively so hover/colour updates skip React re-renders
  const pathsRef = useRef(new Map()); // iso -> SVGPathElement

  // ── Refs miroirs pour les closures des event listeners DOM ───────────────
  const selectedCountryRef = useRef(selectedCountry);
  const currentFilterRef   = useRef(currentFilter);
  useEffect(() => { selectedCountryRef.current = selectedCountry; }, [selectedCountry]);
  useEffect(() => { currentFilterRef.current   = currentFilter;   }, [currentFilter]);

  // ── Repeindre tous les paths selon l'état courant ─────────────────────────
  const repaintPaths = useCallback((selIso, filter) => {
    pathsRef.current.forEach((el, iso) => {
      if (iso === selIso) {
        el.setAttribute("fill", "#4338ca");
        el.style.opacity = "1";
      } else if (filter) {
        const data = COUNTRY_DATA[iso];
        if (data && data.orgs.includes(filter)) {
          el.setAttribute("fill", ORG_COLORS[filter]);
          el.style.opacity = "1";
        } else {
          el.setAttribute("fill", "#E5E7EB");
          el.style.opacity = "0.4";
        }
      } else {
        el.setAttribute("fill", getFillColor(iso, null));
        el.style.opacity = "1";
      }
    });
  }, []);

  useEffect(() => {
    if (mapReady) repaintPaths(selectedCountry, currentFilter);
  }, [selectedCountry, currentFilter, mapReady, repaintPaths]);

  // ── Chargement GeoJSON + rendu D3 (une seule fois) ────────────────────────
  useEffect(() => {
    let cancelled = false;

    async function load() {
      try {
        const d3 = await import("https://esm.sh/d3@7");

        const res = await fetch(
          "https://raw.githubusercontent.com/nvkelso/natural-earth-vector/master/geojson/ne_10m_admin_0_countries.geojson"
        );
        if (!res.ok) throw new Error("GeoJSON fetch failed");
        const geo = await res.json();
        if (cancelled) return;

        const svg = svgRef.current;
        if (!svg) return;

        const W = 750, H = 720;
        const projection = d3.geoMercator().center([25, -3]).scale(480).translate([W / 2, H / 2]);
        const pathGen    = d3.geoPath().projection(projection);

        svg.innerHTML = "";
        const g = document.createElementNS("http://www.w3.org/2000/svg", "g");

        geo.features.forEach((feature) => {
          if (!feature.geometry || !feature.properties) return;
          const iso  = feature.properties.ISO_A3 || feature.properties.ADM0_A3 || "";
          const getName = () =>
            COUNTRY_DATA[iso] ? countryName(COUNTRY_DATA[iso], langRef.current) : feature.properties.NAME || iso;

          try {
            const d = pathGen(feature);
            if (!d) return;

            const p = document.createElementNS("http://www.w3.org/2000/svg", "path");
            p.setAttribute("d", d);
            p.setAttribute("data-iso", iso);
            p.setAttribute("fill", getFillColor(iso, null));
            p.setAttribute("stroke", "#FFF");
            p.setAttribute("stroke-width", "1");
            p.style.cursor     = "pointer";
            p.style.transition = "fill 0.18s, opacity 0.18s";

            p.addEventListener("mouseenter", () => {
              const tt = tooltipRef.current;
              if (tt) { tt.textContent = getName(); tt.style.display = "block"; }
              if (iso !== selectedCountryRef.current) {
                const f = currentFilterRef.current;
                if (f) {
                  if (COUNTRY_DATA[iso]?.orgs.includes(f)) p.setAttribute("fill", "#4F46E5");
                } else {
                  p.setAttribute("fill", "#6366f1");
                }
              }
            });
            p.addEventListener("mousemove", (e) => {
              const tt = tooltipRef.current;
              if (tt) { tt.style.left = e.clientX + 12 + "px"; tt.style.top = e.clientY + 12 + "px"; }
            });
            p.addEventListener("mouseleave", () => {
              const tt = tooltipRef.current;
              if (tt) tt.style.display = "none";
              if (iso !== selectedCountryRef.current) {
                const f = currentFilterRef.current;
                if (f) {
                  p.setAttribute("fill", COUNTRY_DATA[iso]?.orgs.includes(f) ? ORG_COLORS[f] : "#E5E7EB");
                  p.style.opacity = COUNTRY_DATA[iso]?.orgs.includes(f) ? "1" : "0.4";
                } else {
                  p.setAttribute("fill", getFillColor(iso, null));
                  p.style.opacity = "1";
                }
              }
            });
            p.addEventListener("click", () => setSelectedCountry(iso));

            pathsRef.current.set(iso, p);
            g.appendChild(p);
          } catch (_e) { /* path invalide, on ignore */ }
        });

        svg.appendChild(g);
        if (!cancelled) setMapReady(true);
      } catch (err) {
        console.error("Map load error:", err);
      }
    }

    load();
    return () => { cancelled = true; };
  }, []);

  // ── Handlers ──────────────────────────────────────────────────────────────
  const handleSetFilter = useCallback((org) => {
    setCurrentFilter(prev => prev === org ? null : org);
    setSelectedCountry(null);
  }, []);

  const selected = selectedCountry ? COUNTRY_DATA[selectedCountry] : null;

  // ── Render ────────────────────────────────────────────────────────────────
  return (
    <>
      {/* Tooltip flottant (positionné via JS dans les listeners) */}
      <div ref={tooltipRef} className="africa-map-tooltip" />

      <div className="africa-map-container">

        {/* ── Panneau carte ── */}
        <div className="africa-map-panel">
          {!mapReady && (
            <div className="africa-map-loader">
              <svg width="40" height="40" viewBox="0 0 40 40">
                <circle cx="20" cy="20" r="16" fill="none" stroke="#e5e7eb" strokeWidth="3" />
                <path d="M20 4 A16 16 0 0 1 36 20" fill="none" stroke="#7c5cfc" strokeWidth="3" strokeLinecap="round" />
              </svg>
              {txt.loading}
            </div>
          )}
          <svg
            ref={svgRef}
            className="africa-map-svg"
            viewBox="0 0 750 720"
            preserveAspectRatio="xMidYMid meet"
          />
        </div>

        {/* ── Panneau latéral ── */}
        <div className="africa-map-sidebar">

          {/* ── Filtres ── */}
          <div className="africa-map-filters">
            <p className="africa-map-filters-label">{txt.filterBy}</p>
            <div className="africa-map-filters-row">
              {FILTERS.map((org) => (
                <button
                  key={org}
                  className={`africa-map-filter-btn${currentFilter === org ? " active" : ""}`}
                  onClick={() => handleSetFilter(org)}
                >
                  {orgLabel(org)}
                </button>
              ))}
            </div>
          </div>

          {/* ── Infos pays ── */}
          <div className="africa-map-country-info">
            {selected ? (
              <div className="africa-map-country-detail">
                <h3 className="africa-map-country-name">{countryName(selected, lang)}</h3>
                <p className="africa-map-country-orgs-label">{txt.organisations}</p>
                <div className="africa-map-country-orgs">
                  {selected.orgs && selected.orgs.length > 0 ? (
                    selected.orgs.map((org) => (
                      <span
                        key={org}
                        className="africa-map-org-badge"
                        style={{ backgroundColor: ORG_COLORS[org] || "#888" }} /* dynamique */
                      >
                        {orgLabel(org)}
                      </span>
                    ))
                  ) : (
                    <span className="africa-map-org-empty">{txt.noData}</span>
                  )}
                </div>
                <Link to={lp("/liste-attente")} className="ui__btn--black">
                  {txt.seeMore}
                </Link>
              </div>
            ) : (
              <p className="africa-map-placeholder">{txt.clickCountry}</p>
            )}
          </div>

          {/* ── Omniscan dispo ── */}
          <div className="africa-map-country-omniscan">
            {selected && COUNTRY_OMNISCAN.includes(selectedCountry) && (
              <div className="africa-map-country-detail">
                <h3 className="africa-map-country-name">{txt.omniscanTitle}</h3>
                <p className="africa-map-country-orgs-label">
                  {txt.omniscanText}
                </p>
                <Link to={lp("/produits/transformation-digitale/omniscan")} className="ui__btn--gradient">
                  {txt.omniscanCta}
                </Link>
              </div>
            )}
          </div>

        </div>
      </div>
    </>
  );
}

export { AfricaMap };
