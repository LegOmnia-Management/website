import { useState, useEffect, useRef, useCallback } from "react";
import { Link } from "react-router-dom";

import '../assets/styles/africaMap.css';

// ─── COUNTRY DATA ───────────────────────────────────────────────────────────
const COUNTRY_DATA = {
  // OHADA (17 membres)
  BEN: { name: "Bénin", orgs: ["OHADA", "CEDEAO", "UEMOA", "UA"] },
  BFA: { name: "Burkina Faso", orgs: ["OHADA", "CEDEAO", "UEMOA", "UA"] },
  CMR: { name: "Cameroun", orgs: ["OHADA", "CEMAC", "UA"] },
  COM: { name: "Comores", orgs: ["OHADA", "COMESA", "UA"] },
  COG: { name: "Congo", orgs: ["OHADA", "CEMAC", "COMESA", "UA"] },
  CIV: { name: "Côte d'Ivoire", orgs: ["OHADA", "CEDEAO", "UEMOA", "UA"] },
  GAB: { name: "Gabon", orgs: ["OHADA", "CEMAC", "UA"] },
  GIN: { name: "Guinée", orgs: ["OHADA", "CEDEAO", "UA"] },
  GNB: { name: "Guinée-Bissau", orgs: ["OHADA", "CEDEAO", "UEMOA", "UA"] },
  GNQ: { name: "Guinée équatoriale", orgs: ["OHADA", "CEMAC", "UA"] },
  MLI: { name: "Mali", orgs: ["OHADA", "CEDEAO", "UEMOA", "UA"] },
  NER: { name: "Niger", orgs: ["OHADA", "CEDEAO", "UEMOA", "UA"] },
  CAF: { name: "République centrafricaine", orgs: ["OHADA", "CEMAC", "UA"] },
  COD: { name: "République démocratique du Congo", orgs: ["OHADA", "CEMAC", "COMESA", "UA"] },
  SEN: { name: "Sénégal", orgs: ["OHADA", "CEDEAO", "UEMOA", "UA"] },
  TCD: { name: "Tchad", orgs: ["OHADA", "CEMAC", "UA"] },
  TGO: { name: "Togo", orgs: ["OHADA", "CEDEAO", "UEMOA", "UA"] },
  // CEDEAO seulement
  CPV: { name: "Cabo Verde", orgs: ["CEDEAO", "UA"] },
  GMB: { name: "Gambie", orgs: ["CEDEAO", "UA"] },
  GHA: { name: "Ghana", orgs: ["CEDEAO", "UA"] },
  LBR: { name: "Liberia", orgs: ["CEDEAO", "UA"] },
  NGA: { name: "Nigeria", orgs: ["CEDEAO", "UA"] },
  SLE: { name: "Sierra Leone", orgs: ["CEDEAO", "UA"] },
  // COMESA
  BDI: { name: "Burundi", orgs: ["COMESA", "UA"] },
  DJI: { name: "Djibouti", orgs: ["COMESA", "UA"] },
  EGY: { name: "Égypte", orgs: ["COMESA", "UA"] },
  ERI: { name: "Érythrée", orgs: ["COMESA", "UA"] },
  SWZ: { name: "Eswatini", orgs: ["COMESA", "UA"] },
  ETH: { name: "Éthiopie", orgs: ["COMESA", "UA"] },
  KEN: { name: "Kenya", orgs: ["COMESA", "UA"] },
  LBY: { name: "Libye", orgs: ["COMESA", "UA"] },
  MDG: { name: "Madagascar", orgs: ["COMESA", "UA"] },
  MWI: { name: "Malawi", orgs: ["COMESA", "UA"] },
  MUS: { name: "Maurice", orgs: ["COMESA", "UA"] },
  UGA: { name: "Ouganda", orgs: ["COMESA", "UA"] },
  RWA: { name: "Rwanda", orgs: ["COMESA", "UA"] },
  SYC: { name: "Seychelles", orgs: ["COMESA", "UA"] },
  SOM: { name: "Somalie", orgs: ["COMESA", "UA"] },
  SDN: { name: "Soudan", orgs: ["COMESA", "UA"] },
  TUN: { name: "Tunisie", orgs: ["COMESA", "UA"] },
  ZMB: { name: "Zambie", orgs: ["COMESA", "UA"] },
  ZWE: { name: "Zimbabwe", orgs: ["COMESA", "UA"] },
  // UA uniquement
  DZA: { name: "Algérie", orgs: ["UA"] },
  AGO: { name: "Angola", orgs: ["UA"] },
  ZAF: { name: "Afrique du Sud", orgs: ["UA"] },
  ESH: { name: "Sahara occidental", orgs: ["UA"] },
  BWA: { name: "Botswana", orgs: ["UA"] },
  MAR: { name: "Maroc", orgs: ["UA"] },
  MOZ: { name: "Mozambique", orgs: ["UA"] },
  NAM: { name: "Namibie", orgs: ["UA"] },
  TZA: { name: "Tanzanie", orgs: ["UA"] },
  SSD: { name: "Soudan du Sud", orgs: ["UA"] },
  STP: { name: "São Tomé-et-Príncipe", orgs: ["UA"] },
  LSO: { name: "Lesotho", orgs: ["UA"] },
  MRT: { name: "Mauritanie", orgs: ["UA"] },
};

const COUNTRY_OMNISCAN = [
   "Bénin", "Côte d'Ivoire", "Cameroun", "République démocratique du Congo", "Congo", "Gabon", "Madagascar", "Sénégal", "Togo"
]

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
          const name = COUNTRY_DATA[iso]?.name || feature.properties.NAME || iso;

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
              if (tt) { tt.textContent = name; tt.style.display = "block"; }
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
              Chargement de la carte…
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
            <p className="africa-map-filters-label">Filtrer par zone</p>
            <div className="africa-map-filters-row">
              {FILTERS.map((org) => (
                <button
                  key={org}
                  className={`africa-map-filter-btn${currentFilter === org ? " active" : ""}`}
                  onClick={() => handleSetFilter(org)}
                >
                  {org}
                </button>
              ))}
            </div>
          </div>

          {/* ── Infos pays ── */}
          <div className="africa-map-country-info">
            {selected ? (
              <div className="africa-map-country-detail">
                <h3 className="africa-map-country-name">{selected.name}</h3>
                <p className="africa-map-country-orgs-label">Organisations</p>
                <div className="africa-map-country-orgs">
                  {selected.orgs && selected.orgs.length > 0 ? (
                    selected.orgs.map((org) => (
                      <span
                        key={org}
                        className="africa-map-org-badge"
                        style={{ backgroundColor: ORG_COLORS[org] || "#888" }} /* dynamique */
                      >
                        {org}
                      </span>
                    ))
                  ) : (
                    <span className="africa-map-org-empty">Aucune donnée</span>
                  )}
                </div>
                <a href="https://app.beta.legomnia.com/signup" className="ui__btn--black" target="_blank">
                  Voir plus
                </a>
              </div>
            ) : (
              <p className="africa-map-placeholder">Cliquez sur un pays</p>
            )}
          </div>

          {/* ── Omniscan dispo ── */}
          <div className="africa-map-country-omniscan">
            {selected && COUNTRY_OMNISCAN.includes(selected.name) && (
              <div className="africa-map-country-detail">
                <h3 className="africa-map-country-name">Installation d'<span className="highlight">OmniScan</span> possible</h3>
                <p className="africa-map-country-orgs-label">
                  Transformez tous vos documents juridiques en données exploitables et prêtes à l'indexation.
                </p>
                <Link to="/produits/transformation-digitale/omniscan" className="ui__btn--gradient">
                  Découvrir OmniScan
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
