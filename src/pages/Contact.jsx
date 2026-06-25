import { useState } from 'react';

export default function Contact() {
  const [tab, setTab] = useState('user');
  const [form, setForm] = useState({ name: '', email: '', venture: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  const VENTURES = ['Taqueria', 'Café', 'Pizzeria / Fast food', 'Grocery / Food store', 'Hardware store', 'Craft store', 'Hair salon / Beauty', 'Financial services', 'Legal services', 'Other'];

  return (
    <div style={{ paddingTop: 64 }}>

      {/* Hero */}
      <section style={{ background: 'linear-gradient(160deg, #f7f5f0 0%, #e8f5ef 100%)', padding: '72px 24px 56px', textAlign: 'center' }}>
        <div style={{ maxWidth: 600, margin: '0 auto' }}>
          <h1 className="serif" style={{ fontSize: 'clamp(30px, 5vw, 48px)', fontWeight: 700, color: '#1a1a1a', marginBottom: 16 }}>
            Let's talk.
          </h1>
          <p style={{ fontSize: 17, color: '#3d3d3d', lineHeight: 1.65 }}>
            Whether you're a future business owner, an investor, or a community partner — we'd love to hear from you.
          </p>
        </div>
      </section>

      {/* Contact form */}
      <section style={{ padding: '64px 24px 96px', background: '#fff' }}>
        <div style={{ maxWidth: 600, margin: '0 auto' }}>

          {/* Tabs */}
          <div style={{ display: 'flex', background: '#f7f5f0', borderRadius: 12, padding: 4, marginBottom: 36 }}>
            {[['user', '🚀 I want to try eMentor'], ['investor', '💼 I\'m an investor / partner']].map(([key, label]) => (
              <button
                key={key}
                onClick={() => { setTab(key); setSubmitted(false); setForm({ name: '', email: '', venture: '', message: '' }); }}
                style={{
                  flex: 1, padding: '11px 12px', borderRadius: 9, border: 'none', cursor: 'pointer',
                  fontSize: 13, fontWeight: 600,
                  background: tab === key ? '#fff' : 'transparent',
                  color: tab === key ? '#1a1a1a' : '#6b6b6b',
                  boxShadow: tab === key ? '0 1px 4px rgba(0,0,0,0.1)' : 'none',
                  transition: 'all 0.15s',
                }}
              >{label}</button>
            ))}
          </div>

          {submitted ? (
            <div style={{ textAlign: 'center', padding: '48px 24px', background: '#e8f5ef', borderRadius: 16, border: '1px solid #b8dece' }}>
              <div style={{ fontSize: 40, marginBottom: 16 }}>✅</div>
              <h2 className="serif" style={{ fontSize: 24, fontWeight: 700, color: '#1a1a1a', marginBottom: 8 }}>Got it — thank you!</h2>
              <p style={{ fontSize: 15, color: '#3d3d3d', lineHeight: 1.6 }}>
                {tab === 'user'
                  ? "We'll be in touch within 24 hours. In the meantime, try the app — no sign-up needed."
                  : "We'll send you the investor deck within 24 hours and suggest a time to connect."}
              </p>
              {tab === 'user' && (
                <a href="https://app.ementor.ai" className="btn-primary" style={{ marginTop: 20 }}>
                  Try the app now →
                </a>
              )}
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              {tab === 'user' ? (
                <>
                  <div style={{ marginBottom: 20 }}>
                    <label style={{ display: 'block', fontSize: 13, fontWeight: 600, color: '#3d3d3d', marginBottom: 6 }}>Your name</label>
                    <input type="text" required placeholder="Maria Hernandez" value={form.name} onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                      style={{ width: '100%', padding: '12px 14px', borderRadius: 10, border: '1px solid #e2ddd6', fontSize: 15, outline: 'none', fontFamily: 'inherit', boxSizing: 'border-box' }} />
                  </div>
                  <div style={{ marginBottom: 20 }}>
                    <label style={{ display: 'block', fontSize: 13, fontWeight: 600, color: '#3d3d3d', marginBottom: 6 }}>Email</label>
                    <input type="email" required placeholder="maria@example.com" value={form.email} onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                      style={{ width: '100%', padding: '12px 14px', borderRadius: 10, border: '1px solid #e2ddd6', fontSize: 15, outline: 'none', fontFamily: 'inherit', boxSizing: 'border-box' }} />
                  </div>
                  <div style={{ marginBottom: 28 }}>
                    <label style={{ display: 'block', fontSize: 13, fontWeight: 600, color: '#3d3d3d', marginBottom: 6 }}>What type of venture are you thinking about?</label>
                    <select value={form.venture} onChange={e => setForm(f => ({ ...f, venture: e.target.value }))}
                      style={{ width: '100%', padding: '12px 14px', borderRadius: 10, border: '1px solid #e2ddd6', fontSize: 15, outline: 'none', fontFamily: 'inherit', background: '#fff', color: form.venture ? '#1a1a1a' : '#6b6b6b', boxSizing: 'border-box' }}>
                      <option value="">Select a venture type...</option>
                      {VENTURES.map(v => <option key={v} value={v}>{v}</option>)}
                    </select>
                  </div>
                  <button type="submit" className="btn-primary" style={{ width: '100%', justifyContent: 'center', padding: '14px', fontSize: 15 }}>
                    Get early access →
                  </button>
                  <p style={{ textAlign: 'center', marginTop: 12, fontSize: 13, color: '#6b6b6b' }}>
                    Or <a href="https://app.ementor.ai" style={{ color: '#1a8a5a', textDecoration: 'underline' }}>try the app now</a> — no sign-up needed.
                  </p>
                </>
              ) : (
                <>
                  <div style={{ marginBottom: 20 }}>
                    <label style={{ display: 'block', fontSize: 13, fontWeight: 600, color: '#3d3d3d', marginBottom: 6 }}>Your name</label>
                    <input type="text" required placeholder="John Smith" value={form.name} onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                      style={{ width: '100%', padding: '12px 14px', borderRadius: 10, border: '1px solid #e2ddd6', fontSize: 15, outline: 'none', fontFamily: 'inherit', boxSizing: 'border-box' }} />
                  </div>
                  <div style={{ marginBottom: 20 }}>
                    <label style={{ display: 'block', fontSize: 13, fontWeight: 600, color: '#3d3d3d', marginBottom: 6 }}>Email</label>
                    <input type="email" required placeholder="john@fund.com" value={form.email} onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                      style={{ width: '100%', padding: '12px 14px', borderRadius: 10, border: '1px solid #e2ddd6', fontSize: 15, outline: 'none', fontFamily: 'inherit', boxSizing: 'border-box' }} />
                  </div>
                  <div style={{ marginBottom: 28 }}>
                    <label style={{ display: 'block', fontSize: 13, fontWeight: 600, color: '#3d3d3d', marginBottom: 6 }}>Tell us about your interest</label>
                    <textarea required rows={5} placeholder="I'm a partner at [fund/org] and I'm interested in..." value={form.message} onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                      style={{ width: '100%', padding: '12px 14px', borderRadius: 10, border: '1px solid #e2ddd6', fontSize: 15, outline: 'none', fontFamily: 'inherit', resize: 'vertical', boxSizing: 'border-box' }} />
                  </div>
                  <button type="submit" className="btn-primary" style={{ width: '100%', justifyContent: 'center', padding: '14px', fontSize: 15 }}>
                    Request investor deck →
                  </button>
                </>
              )}
            </form>
          )}
        </div>
      </section>

      {/* Info cards */}
      <section style={{ padding: '0 24px 80px', background: '#fff' }}>
        <div style={{ maxWidth: 600, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
          {[
            { icon: '📧', title: 'Email us', desc: 'hello@ementor.ai', sub: 'We respond within 24 hours' },
            { icon: '📍', title: 'Based in', desc: 'Bay Area, CA', sub: 'Serving underserved communities' },
          ].map((item, i) => (
            <div key={i} style={{ padding: '20px', background: '#f7f5f0', borderRadius: 12, border: '1px solid #e2ddd6' }}>
              <div style={{ fontSize: 24, marginBottom: 8 }}>{item.icon}</div>
              <p style={{ fontSize: 13, fontWeight: 700, color: '#1a1a1a', marginBottom: 2 }}>{item.title}</p>
              <p style={{ fontSize: 14, color: '#1a8a5a', fontWeight: 600, marginBottom: 2 }}>{item.desc}</p>
              <p style={{ fontSize: 12, color: '#6b6b6b' }}>{item.sub}</p>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
