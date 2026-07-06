'use client';

import { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';

export default function ScrollToTop() {
  const pathname = usePathname();
  const prevPathname = useRef(pathname);

  useEffect(() => {
    if (prevPathname.current !== pathname) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      prevPathname.current = pathname;
    }
  }, [pathname]);

  return null;
}
