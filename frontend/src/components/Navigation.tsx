'use client';

import Link from 'next/link';
import { useState, useRef, useEffect } from 'react';

interface DropdownItem {
  label: string;
  href: string;
}

interface NavDropdown {
  label: string;
  items: DropdownItem[];
}

interface NavLink {
  label: string;
  href: string;
}

export default function Navigation() {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const desktopDropdownRef = useRef<HTMLDivElement>(null);
  const mobileDropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        desktopDropdownRef.current && 
        !desktopDropdownRef.current.contains(event.target as Node) &&
        mobileDropdownRef.current && 
        !mobileDropdownRef.current.contains(event.target as Node)
      ) {
        setOpenDropdown(null);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 20);
    }

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems: (NavLink | NavDropdown)[] = [
    {
      label: 'OMNIA',
      href: '/omnia',
    },
    {
      label: 'Transformation digitale',
      items: [
        { label: 'Présentation générale', href: '/transformation-digitale' },
        { label: 'Géode : GED', href: '/transformation-digitale/geode' },
        { label: 'OmniScan', href: '/transformation-digitale' },
      ],
    },
    {
      label: 'Use Cases',
      href: '/use-cases',
    },
    {
      label: 'Blog',
      items: [
        { label: 'Articles', href: '/blog' },
        { label: 'Ressources', href: '/blog' },
      ],
    },
  ];

  const isDropdown = (item: NavLink | NavDropdown): item is NavDropdown => {
    return 'items' in item;
  };

  return (
    <nav className={`fixed top-0 w-full h-[var(--nav-h)] bg-[var(--nav-bg)] border-b border-[var(--border)] z-50 backdrop-blur-sm transition-all duration-300 ${
      scrolled ? 'shadow-lg' : ''
    }`}>
      <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-vi hover:opacity-80 transition">
          legOmnia
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-8" ref={desktopDropdownRef}>
          {navItems.map((item) => {
            if (isDropdown(item)) {
              return (
                <div key={item.label} className="relative">
                  <button
                    onClick={() => setOpenDropdown(openDropdown === item.label ? null : item.label)}
                    className="hover:text-vi transition flex items-center gap-1"
                  >
                    {item.label}
                    <svg
                      className={`w-4 h-4 transition-transform ${
                        openDropdown === item.label ? 'rotate-180' : ''
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 14l-7 7m0 0l-7-7m7 7V3"
                      />
                    </svg>
                  </button>

                  {openDropdown === item.label && (
                    <div className="absolute top-full left-0 mt-2 bg-[var(--nav-bg)] border border-[var(--border)] rounded-lg shadow-lg min-w-48">
                      {item.items.map((subitem) => (
                        <Link
                          key={subitem.href}
                          href={subitem.href}
                          className="block px-4 py-2 hover:bg-[var(--bg-card)] text-sm first:rounded-t-lg last:rounded-b-lg hover:text-vi transition"
                          onClick={() => setOpenDropdown(null)}
                        >
                          {subitem.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            }

            return (
              <Link
                key={item.label}
                href={item.href}
                className="hover:text-vi transition"
              >
                {item.label}
              </Link>
            );
          })}
        </div>

        {/* Desktop Admin Link */}
        <Link href="/admin" className="hidden md:block hover:text-vi transition">
          Admin
        </Link>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 hover:text-vi transition"
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-[var(--border)] bg-[var(--nav-bg)]">
          <div className="px-6 py-4 space-y-4" ref={mobileDropdownRef}>
            {navItems.map((item) => {
              if (isDropdown(item)) {
                return (
                  <div key={item.label} className="space-y-2">
                    <button
                      onClick={() => setOpenDropdown(openDropdown === item.label ? null : item.label)}
                      className="w-full text-left hover:text-vi transition flex items-center justify-between"
                    >
                      {item.label}
                      <svg
                        className={`w-4 h-4 transition-transform ${
                          openDropdown === item.label ? 'rotate-180' : ''
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 14l-7 7m0 0l-7-7m7 7V3"
                        />
                      </svg>
                    </button>

                    {openDropdown === item.label && (
                      <div className="pl-4 space-y-2">
                        {item.items.map((subitem) => (
                          <Link
                            key={subitem.href}
                            href={subitem.href}
                            className="block py-2 text-sm text-[var(--text-2)] hover:text-vi transition"
                            onClick={() => {
                              setOpenDropdown(null);
                              setMobileMenuOpen(false);
                            }}
                          >
                            {subitem.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className="block py-2 hover:text-vi transition"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              );
            })}
            <Link
              href="/admin"
              className="block py-2 hover:text-vi transition"
              onClick={() => setMobileMenuOpen(false)}
            >
              Admin
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
