import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => { setOpen(false); window.scrollTo(0, 0); }, [pathname]);

  const links = [
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
          <a href="https://app.ementor.ai" className="btn-primary" style={{ marginLeft: 8, padding: '9px 20px', fontSize: 14 }}>
            Try the app →
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
          <a href="https://app.ementor.ai" className="btn-primary" style={{ marginTop: 16, width: '100%', justifyContent: 'center' }}>
            Try the app →
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
