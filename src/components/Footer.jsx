import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer style={{ background: '#1a1a1a', color: '#a0a0a0', padding: '48px 24px 32px' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 32, marginBottom: 40 }}>
          <div>
            <img src="/ementor-logo.png" alt="eMentor" style={{ height: 28, width: 'auto', marginBottom: 12, filter: 'brightness(0) invert(1)' }} />
            <p style={{ fontSize: 13, lineHeight: 1.6, maxWidth: 260 }}>
              AI-powered venture advisor for small business owners. Know before you launch.
            </p>
          </div>
          <div style={{ display: 'flex', gap: 48, flexWrap: 'wrap' }}>
            <div>
              <p style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: '#666', marginBottom: 12 }}>Company</p>
              {[['/', 'Home'], ['/about', 'About'], ['/how-it-works', 'How it works'], ['/contact', 'Contact']].map(([to, label]) => (
                <Link key={to} to={to} style={{ display: 'block', fontSize: 14, marginBottom: 8, color: '#a0a0a0', transition: 'color 0.15s' }}
                  onMouseEnter={e => e.target.style.color = '#fff'}
                  onMouseLeave={e => e.target.style.color = '#a0a0a0'}
                >{label}</Link>
              ))}
            </div>
            <div>
              <p style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: '#666', marginBottom: 12 }}>Product</p>
              {[['https://app.ementor.ai', 'Try the app'], ['https://app.ementor.ai', 'Get your score'], ['/contact', 'Book a demo']].map(([href, label]) => (
                <a key={label} href={href} style={{ display: 'block', fontSize: 14, marginBottom: 8, color: '#a0a0a0', transition: 'color 0.15s' }}
                  onMouseEnter={e => e.target.style.color = '#fff'}
                  onMouseLeave={e => e.target.style.color = '#a0a0a0'}
                >{label}</a>
              ))}
            </div>
          </div>
        </div>
        <div style={{ borderTop: '1px solid #2a2a2a', paddingTop: 24, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12 }}>
          <p style={{ fontSize: 12 }}>© 2026 eMentor. All rights reserved.</p>
          <p style={{ fontSize: 12 }}>Built for small business owners in underserved communities.</p>
        </div>
      </div>
    </footer>
  );
}
