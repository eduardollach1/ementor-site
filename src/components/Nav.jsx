import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useMarket, MARKETS } from '../context/MarketContext';

function RegionPicker() {
  const [open, setOpen] = useState(false);
  const { market, setMarket } = useMarket();
  const ref = useRef(null);

  useEffect(() => {
    function handleClick(e) { if (ref.current && !ref.current.contains(e.target)) setOpen(false); }
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  function pick(m) {
    if (m.soon) return;
    setMarket(m);
    setOpen(false);
  }

  return (
    <div ref={ref} style={{ position: 'relative' }}>
      <button onClick={() => setOpen(o => !o)} style={{
        display: 'flex', alignItems: 'center', gap: 6,
        padding: '7px 12px', borderRadius: 8, cursor: 'pointer',
        background: 'transparent', border: '1px solid #e2ddd6',
        fontSize: 13, fontWeight: 500, color: '#3d3d3d',
        transition: 'all 0.15s',
      }}>
        <span>{market.flag}</span>
        <span>{market.label}</span>
        <span style={{ fontSize: 10, color: '#6b6b6b' }}>▾</span>
      </button>
      {open && (
        <div style={{
          position: 'absolute', top: 'calc(100% + 6px)', right: 0,
          background: '#fff', border: '1px solid #e2ddd6', borderRadius: 10,
          boxShadow: '0 8px 24px rgba(0,0,0,0.1)', minWidth: 180, zIndex: 200,
          overflow: 'hidden',
        }}>
          {MARKETS.map(m => (
            <button key={m.key} onClick={() => pick(m)} style={{
              width: '100%', textAlign: 'left',
              display: 'flex', alignItems: 'center', gap: 10,
              padding: '10px 14px', border: 'none', cursor: m.soon ? 'default' : 'pointer',
              background: market.key === m.key ? '#e8f5ef' : '#fff',
              fontSize: 13, fontWeight: 500,
              color: m.soon ? '#b0b0b0' : '#1a1a1a',
              transition: 'background 0.1s',
            }}
              onMouseEnter={e => { if (!m.soon) e.currentTarget.style.background = '#f7f5f0'; }}
              onMouseLeave={e => { e.currentTarget.style.background = market.key === m.key ? '#e8f5ef' : '#fff'; }}
            >
              <span style={{ fontSize: 18 }}>{m.flag}</span>
              <span style={{ flex: 1 }}>{m.label}</span>
              {m.soon && <span style={{ fontSize: 10, color: '#b0b0b0', fontWeight: 600 }}>Soon</span>}
              {market.key === m.key && !m.soon && <span style={{ fontSize: 11, color: '#1a8a5a' }}>✓</span>}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  const { market, appUrl } = useMarket();
  const isSV = market.key === 'sv';

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => { setOpen(false); window.scrollTo(0, 0); }, [pathname]);

  const links = isSV
    ? [
        { to: '/', label: 'Inicio' },
        { to: '/about', label: 'Nosotros' },
        { to: '/how-it-works', label: 'Cómo funciona' },
        { to: '/contact', label: 'Contacto' },
      ]
    : [
        { to: '/', label: 'Home' },
        { to: '/about', label: 'About' },
        { to: '/how-it-works', label: 'How it works' },
        { to: '/contact', label: 'Contact' },
      ];

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      background: scrolled ? 'rgba(255,255,255,0.97)' : 'transparent',
      backdropFilter: scrolled ? 'blur(10px)' : 'none',
      borderBottom: scrolled ? '1px solid #e2ddd6' : 'none',
      transition: 'all 0.25s',
      padding: '0 24px',
    }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 64 }}>
        {/* Logo */}
        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <img src="/ementor-logo.png" alt="eMentor" style={{ height: 32, width: 'auto' }} />
        </Link>

        {/* Desktop links */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }} className="nav-desktop">
          {links.map(l => (
            <Link key={l.to} to={l.to} style={{
              padding: '8px 14px', borderRadius: 8, fontSize: 14, fontWeight: 500,
              color: pathname === l.to ? '#1a8a5a' : '#3d3d3d',
              background: pathname === l.to ? '#e8f5ef' : 'transparent',
              transition: 'all 0.15s',
            }}>{l.label}</Link>
          ))}
          <RegionPicker />
          <a href={appUrl()} className="btn-primary" style={{ marginLeft: 4, padding: '9px 20px', fontSize: 14 }}>
            {isSV ? 'Usar la app →' : 'Try the app →'}
          </a>
        </div>

        {/* Mobile hamburger */}
        <button onClick={() => setOpen(o => !o)} className="nav-hamburger" style={{
          display: 'none', flexDirection: 'column', gap: 5, background: 'none', border: 'none', cursor: 'pointer', padding: 4,
        }}>
          <span style={{ width: 22, height: 2, background: '#1a1a1a', borderRadius: 2, transition: 'all 0.2s', transform: open ? 'rotate(45deg) translateY(7px)' : 'none' }} />
          <span style={{ width: 22, height: 2, background: '#1a1a1a', borderRadius: 2, opacity: open ? 0 : 1 }} />
          <span style={{ width: 22, height: 2, background: '#1a1a1a', borderRadius: 2, transition: 'all 0.2s', transform: open ? 'rotate(-45deg) translateY(-7px)' : 'none' }} />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div style={{
          background: '#fff', borderTop: '1px solid #e2ddd6',
          padding: '16px 24px 24px',
        }}>
          {links.map(l => (
            <Link key={l.to} to={l.to} style={{
              display: 'block', padding: '12px 0', fontSize: 16, fontWeight: 500,
              color: pathname === l.to ? '#1a8a5a' : '#1a1a1a',
              borderBottom: '1px solid #f0ece6',
            }}>{l.label}</Link>
          ))}
          <a href={appUrl()} className="btn-primary" style={{ marginTop: 16, width: '100%', justifyContent: 'center' }}>
            {isSV ? 'Usar la app →' : 'Try the app →'}
          </a>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .nav-desktop { display: none !important; }
          .nav-hamburger { display: flex !important; }
        }
      `}</style>
    </nav>
  );
}
