import { useEffect, useState } from 'react';
import { Wordmark } from '../components/Logo';
import { NAV_ITEMS, SITE } from '../site';

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const close = () => setOpen(false);
    window.addEventListener('resize', close);
    return () => window.removeEventListener('resize', close);
  }, [open]);

  return (
    <header className={`nav${scrolled ? ' nav--scrolled' : ''}`}>
      <div className="container nav__inner">
        <a href="#top" aria-label={`${SITE.name} home`}>
          <Wordmark size={22} />
        </a>
        <nav className="nav__links" aria-label="Main">
          {NAV_ITEMS.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
        <div className="nav__right">
          <a className="btn btn--primary btn--sm" href={SITE.bookingHref}>
            Request a walkthrough
          </a>
          <button
            type="button"
            className="nav__toggle"
            aria-expanded={open}
            aria-controls="nav-panel"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? 'Close' : 'Menu'}
          </button>
        </div>
      </div>
      {open && (
        <div id="nav-panel" className="nav__panel">
          {NAV_ITEMS.map((item) => (
            <a key={item.href} href={item.href} onClick={() => setOpen(false)}>
              {item.label}
            </a>
          ))}
          <a className="btn btn--primary" href={SITE.bookingHref} onClick={() => setOpen(false)}>
            Request a walkthrough
          </a>
        </div>
      )}
    </header>
  );
}
