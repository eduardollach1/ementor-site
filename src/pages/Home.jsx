import { useState } from 'react';
import { Link } from 'react-router-dom';

const STATS = [
  { number: '50%', label: 'of small businesses fail in year 1' },
  { number: '82%', label: 'fail due to cash flow problems' },
  { number: '33M', label: 'small businesses in the US' },
  { number: '$0', label: 'personalized advisors for most of them' },
];

const STEPS = [
  {
    num: '1',
    color: '#1a8a5a',
    bg: '#e8f5ef',
    title: 'Answer 5 questions',
    desc: 'Your venture type, city, capital, and team size. Takes under 2 minutes.',
  },
  {
    num: '2',
    color: '#185FA5',
    bg: '#e6f1fb',
    title: 'Get your venture score',
    desc: 'A 0–100 score backed by local market data, competition analysis, and financial modeling.',
  },
  {
    num: '3',
    color: '#b45309',
    bg: '#fef3c7',
    title: 'Build your plan',
    desc: 'A 90-day action plan, break-even tracker, and improvement roadmap built for your business.',
  },
];

const FEATURES = [
  {
    icon: '📊',
    title: 'Venture Score',
    desc: 'Know your odds before you invest. A data-driven score that accounts for local competition, demographics, capital, and your experience.',
    color: '#1a8a5a',
    bg: '#e8f5ef',
  },
  {
    icon: '📈',
    title: 'Break-Even Tracker',
    desc: 'See exactly when your business turns profitable — week by week. Know your cash runway and what it takes to survive the first 90 days.',
    color: '#185FA5',
    bg: '#e6f1fb',
  },
  {
    icon: '🗓️',
    title: '90-Day Action Plan',
    desc: 'A step-by-step launch plan tailored to your venture type — from permits and location to staffing and your first marketing push.',
    color: '#7c3aed',
    bg: '#f3f0ff',
  },
  {
    icon: '🤖',
    title: 'yourMentor AI',
    desc: 'An AI advisor available 24/7 that knows your business, your market, and your plan. Ask anything — it answers like a seasoned business mentor.',
    color: '#b45309',
    bg: '#fef3c7',
  },
];

const VENTURES = [
  { emoji: '🌮', label: 'Taqueria' },
  { emoji: '☕', label: 'Café' },
  { emoji: '🍕', label: 'Pizzeria' },
  { emoji: '🛒', label: 'Grocery' },
  { emoji: '🔨', label: 'Hardware' },
  { emoji: '🎨', label: 'Craft Store' },
  { emoji: '✂️', label: 'Hair Salon' },
  { emoji: '💼', label: 'Financial' },
  { emoji: '⚖️', label: 'Legal' },
];

const QUOTES = [
  { text: "I had no idea my break-even was week 9, not week 4. eMentor saved me from a cash crisis.", author: "Early tester, East Palo Alto" },
  { text: "The 90-day plan alone is worth it. It's like having a business consultant in your pocket.", author: "Early tester, Redwood City" },
  { text: "I changed my city choice after seeing the score difference. That decision probably saved my business.", author: "Early tester, San Jose" },
];

export default function Home() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    if (email) setSubmitted(true);
  }

  return (
    <div style={{ paddingTop: 64 }}>

      {/* ── HERO ─────────────────────────────────────────────── */}
      <section style={{
        background: 'linear-gradient(160deg, #f7f5f0 0%, #e8f5ef 100%)',
        padding: '96px 24px 80px',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}>
        {/* Background decoration */}
        <div style={{
          position: 'absolute', top: -60, right: -60, width: 400, height: 400,
          borderRadius: '50%', background: 'rgba(26,138,90,0.06)', pointerEvents: 'none',
        }} />
        <div style={{
          position: 'absolute', bottom: -80, left: -40, width: 300, height: 300,
          borderRadius: '50%', background: 'rgba(26,138,90,0.04)', pointerEvents: 'none',
        }} />

        <div style={{ maxWidth: 780, margin: '0 auto', position: 'relative' }}>
          <div className="fade-up" style={{
            display: 'inline-flex', alignItems: 'center', gap: 6,
            background: '#fff', border: '1px solid #b8dece',
            padding: '6px 14px', borderRadius: 20, marginBottom: 28,
          }}>
            <img src="/em-icon.png" alt="eM" style={{ height: 16, width: 'auto' }} />
            <span style={{ fontSize: 12, fontWeight: 600, color: '#1a8a5a' }}>Now in early access · Bay Area</span>
          </div>

          <h1 className="serif fade-up-2" style={{
            fontSize: 'clamp(36px, 6vw, 64px)',
            fontWeight: 700, color: '#1a1a1a',
            lineHeight: 1.15, marginBottom: 24,
          }}>
            Every great business<br />has a mentor.
          </h1>

          <p className="fade-up-3" style={{
            fontSize: 'clamp(16px, 2.5vw, 20px)',
            color: '#3d3d3d', lineHeight: 1.7,
            maxWidth: 620, margin: '0 auto 16px',
          }}>
            eMentor gives every small business owner the guidance that used to cost $400/hour — whether you're planning your launch or already open and looking to grow.
          </p>

          <p className="fade-up-3" style={{
            fontSize: 'clamp(14px, 2vw, 17px)',
            color: '#6b6b6b', lineHeight: 1.6,
            maxWidth: 520, margin: '0 auto 40px',
            fontStyle: 'italic',
          }}>
            Your venture score. Your break-even plan. Your roadmap. In 5 minutes.
          </p>

          <div className="fade-up-4" style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="https://app.ementor.ai" className="btn-primary" style={{ fontSize: 16, padding: '16px 32px' }}>
              Get my venture score →
            </a>
            <Link to="/how-it-works" className="btn-outline" style={{ fontSize: 16, padding: '15px 28px' }}>
              See how it works
            </Link>
          </div>

          <p style={{ marginTop: 20, fontSize: 13, color: '#6b6b6b' }}>
            No sign-up required · Takes 2 minutes · 9 venture types
          </p>
        </div>
      </section>

      {/* ── WHO IT'S FOR ─────────────────────────────────────── */}
      <section style={{ background: '#fff', padding: '0 24px' }}>
        <div style={{
          maxWidth: 900, margin: '0 auto',
          display: 'grid', gridTemplateColumns: '1fr 1fr',
          borderBottom: '1px solid #e2ddd6',
        }}>
          {/* Starting out */}
          <div style={{
            padding: '40px 36px 40px 0',
            borderRight: '1px solid #e2ddd6',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 20 }}>
              <span style={{ fontSize: 24 }}>🚀</span>
              <p style={{ fontSize: 15, fontWeight: 700, color: '#1a1a1a' }}>Starting out</p>
            </div>
            {[
              ['Should I do this?', 'Know your odds before you invest your savings.'],
              ['Do I have enough capital?', 'See your break-even week and cash runway.'],
              ['Is this the right city or idea?', 'Compare scores and find your best path.'],
            ].map(([q, a], i) => (
              <div key={i} style={{ marginBottom: 16 }}>
                <p style={{ fontSize: 13, fontWeight: 600, color: '#1a1a1a', marginBottom: 3 }}>"{q}"</p>
                <p style={{ fontSize: 12, color: '#6b6b6b', lineHeight: 1.5 }}>{a}</p>
              </div>
            ))}
            <a href="https://app.ementor.ai" style={{
              display: 'inline-flex', alignItems: 'center', gap: 6,
              marginTop: 8, fontSize: 13, fontWeight: 600, color: '#1a8a5a',
            }}>Get my score before I launch →</a>
          </div>

          {/* Already open */}
          <div style={{ padding: '40px 0 40px 36px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 20 }}>
              <span style={{ fontSize: 24 }}>🏪</span>
              <p style={{ fontSize: 15, fontWeight: 700, color: '#1a1a1a' }}>Already open</p>
            </div>
            {[
              ['Why am I not breaking even yet?', "See the exact week you turn profitable and what\u2019s holding you back."],
              ['How do I grow from here?', 'Get 6 ranked improvements ordered by monthly profit impact.'],
              ['Should I pivot or stay the course?', 'Score your current venture and compare alternatives.'],
            ].map(([q, a], i) => (
              <div key={i} style={{ marginBottom: 16 }}>
                <p style={{ fontSize: 13, fontWeight: 600, color: '#1a1a1a', marginBottom: 3 }}>"{q}"</p>
                <p style={{ fontSize: 12, color: '#6b6b6b', lineHeight: 1.5 }}>{a}</p>
              </div>
            ))}
            <a href="https://app.ementor.ai" style={{
              display: 'inline-flex', alignItems: 'center', gap: 6,
              marginTop: 8, fontSize: 13, fontWeight: 600, color: '#1a8a5a',
            }}>Help me grow my existing business →</a>
          </div>
        </div>
      </section>

      {/* ── STATS BAR ─────────────────────────────────────────── */}
      <section style={{ background: '#1a1a1a', padding: '40px 24px' }}>
        <div style={{
          maxWidth: 1100, margin: '0 auto',
          display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: 32, textAlign: 'center',
        }}>
          {STATS.map(s => (
            <div key={s.number}>
              <p className="serif" style={{ fontSize: 36, fontWeight: 700, color: '#1a8a5a', marginBottom: 4 }}>{s.number}</p>
              <p style={{ fontSize: 13, color: '#a0a0a0', lineHeight: 1.4 }}>{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── HOW IT WORKS ─────────────────────────────────────── */}
      <section style={{ padding: '96px 24px', background: '#fff' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 56 }}>
            <p style={{ fontSize: 12, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: '#1a8a5a', marginBottom: 12 }}>Simple by design</p>
            <h2 className="serif" style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontWeight: 700, color: '#1a1a1a', marginBottom: 16 }}>
              From idea to action plan in 5 minutes
            </h2>
            <p style={{ fontSize: 16, color: '#6b6b6b', maxWidth: 520, margin: '0 auto' }}>
              No spreadsheets. No MBA required. Just answer a few questions and get a plan built for your specific business.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 24 }}>
            {STEPS.map((step, i) => (
              <div key={i} style={{
                padding: 32, borderRadius: 16,
                background: step.bg,
                border: `1px solid ${step.color}22`,
                position: 'relative',
              }}>
                <div style={{
                  width: 40, height: 40, borderRadius: '50%',
                  background: step.color, color: '#fff',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: 18, fontWeight: 700, marginBottom: 20,
                }}>{step.num}</div>
                <h3 className="serif" style={{ fontSize: 20, fontWeight: 700, color: '#1a1a1a', marginBottom: 10 }}>{step.title}</h3>
                <p style={{ fontSize: 14, color: '#3d3d3d', lineHeight: 1.6 }}>{step.desc}</p>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: 40 }}>
            <Link to="/how-it-works" style={{ fontSize: 14, fontWeight: 600, color: '#1a8a5a', textDecoration: 'underline' }}>
              See the full product walkthrough →
            </Link>
          </div>
        </div>
      </section>

      {/* ── FEATURES ─────────────────────────────────────────── */}
      <section style={{ padding: '80px 24px', background: '#f7f5f0' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <p style={{ fontSize: 12, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: '#1a8a5a', marginBottom: 12 }}>Built for you</p>
            <h2 className="serif" style={{ fontSize: 'clamp(26px, 4vw, 38px)', fontWeight: 700, color: '#1a1a1a' }}>
              Everything a small business owner needs
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 20 }}>
            {FEATURES.map((f, i) => (
              <div key={i} style={{
                background: '#fff', borderRadius: 14, padding: '28px 24px',
                border: '1px solid #e2ddd6',
                transition: 'transform 0.15s, box-shadow 0.15s',
              }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.08)'; }}
                onMouseLeave={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = 'none'; }}
              >
                <div style={{
                  width: 44, height: 44, borderRadius: 12,
                  background: f.bg, fontSize: 22,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  marginBottom: 16,
                }}>{f.icon}</div>
                <h3 style={{ fontSize: 16, fontWeight: 700, color: '#1a1a1a', marginBottom: 8 }}>{f.title}</h3>
                <p style={{ fontSize: 13, color: '#6b6b6b', lineHeight: 1.6 }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── VENTURES STRIP ───────────────────────────────────── */}
      <section style={{ padding: '64px 24px', background: '#fff', textAlign: 'center' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <p style={{ fontSize: 13, fontWeight: 600, color: '#6b6b6b', marginBottom: 28 }}>
            Built for 9 venture types — more coming soon
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: 12 }}>
            {VENTURES.map(v => (
              <div key={v.label} style={{
                display: 'flex', alignItems: 'center', gap: 8,
                padding: '10px 18px', borderRadius: 30,
                background: '#f7f5f0', border: '1px solid #e2ddd6',
                fontSize: 14, fontWeight: 500, color: '#3d3d3d',
              }}>
                <span style={{ fontSize: 18 }}>{v.emoji}</span> {v.label}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SOCIAL PROOF ─────────────────────────────────────── */}
      <section style={{ padding: '80px 24px', background: '#f7f5f0' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <p style={{ fontSize: 12, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: '#1a8a5a', marginBottom: 12 }}>Early feedback</p>
            <h2 className="serif" style={{ fontSize: 'clamp(24px, 3.5vw, 36px)', fontWeight: 700, color: '#1a1a1a' }}>
              What early testers are saying
            </h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 20 }}>
            {QUOTES.map((q, i) => (
              <div key={i} style={{
                background: '#fff', borderRadius: 14, padding: 28,
                border: '1px solid #e2ddd6',
              }}>
                <p style={{ fontSize: 13, color: '#6b6b6b', marginBottom: 8 }}>★★★★★</p>
                <p className="serif" style={{ fontSize: 15, color: '#1a1a1a', lineHeight: 1.65, marginBottom: 16, fontStyle: 'italic' }}>
                  "{q.text}"
                </p>
                <p style={{ fontSize: 12, fontWeight: 600, color: '#6b6b6b' }}>— {q.author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── INVESTOR SECTION ─────────────────────────────────── */}
      <section style={{ padding: '80px 24px', background: '#1a1a1a' }}>
        <div style={{ maxWidth: 800, margin: '0 auto', textAlign: 'center' }}>
          <p style={{ fontSize: 12, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: '#1a8a5a', marginBottom: 16 }}>For investors & partners</p>
          <h2 className="serif" style={{ fontSize: 'clamp(26px, 4vw, 42px)', fontWeight: 700, color: '#fff', lineHeight: 1.25, marginBottom: 20 }}>
            The AI advisor that levels the playing field for small business.
          </h2>
          <p style={{ fontSize: 16, color: '#a0a0a0', lineHeight: 1.7, marginBottom: 16 }}>
            33 million small businesses in the US. Most have never had access to a real business advisor — someone who could tell them their odds, their break-even, and their next move.
          </p>
          <p style={{ fontSize: 16, color: '#a0a0a0', lineHeight: 1.7, marginBottom: 40 }}>
            eMentor is that mentor — for the founder who hasn't launched yet, and for the owner who's already open and fighting to break even. Institutional-quality guidance, at $0 to start.
          </p>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/contact" className="btn-primary" style={{ fontSize: 15, padding: '14px 28px' }}>
              Request investor deck →
            </Link>
            <Link to="/about" className="btn-ghost" style={{ fontSize: 15, padding: '13px 24px', color: '#a0a0a0', borderColor: '#333' }}>
              Learn about the mission
            </Link>
          </div>
        </div>
      </section>

      {/* ── EMAIL CTA ─────────────────────────────────────────── */}
      <section style={{ padding: '80px 24px', background: 'linear-gradient(135deg, #1a8a5a 0%, #146b46 100%)', textAlign: 'center' }}>
        <div style={{ maxWidth: 560, margin: '0 auto' }}>
          <h2 className="serif" style={{ fontSize: 'clamp(26px, 4vw, 38px)', fontWeight: 700, color: '#fff', marginBottom: 16 }}>
            Your mentor is waiting.
          </h2>
          <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.85)', marginBottom: 32, lineHeight: 1.6 }}>
            Launching or already open — get your venture score, your break-even plan, and your roadmap for free. No credit card, no commitment.
          </p>
          {submitted ? (
            <div style={{ background: 'rgba(255,255,255,0.15)', borderRadius: 12, padding: '20px 24px', color: '#fff' }}>
              <p style={{ fontSize: 18, fontWeight: 700, marginBottom: 4 }}>✓ You're on the list!</p>
              <p style={{ fontSize: 14, opacity: 0.85 }}>We'll be in touch soon. Try the app now →</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'flex', gap: 10, maxWidth: 440, margin: '0 auto', flexWrap: 'wrap' }}>
              <input
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
                style={{
                  flex: 1, minWidth: 200,
                  padding: '14px 16px', borderRadius: 10, border: 'none',
                  fontSize: 15, outline: 'none',
                }}
              />
              <button type="submit" style={{
                padding: '14px 24px', borderRadius: 10, border: 'none',
                background: '#fff', color: '#1a8a5a', fontSize: 15, fontWeight: 700,
                cursor: 'pointer', whiteSpace: 'nowrap',
              }}>
                Get early access
              </button>
            </form>
          )}
          <p style={{ marginTop: 16, fontSize: 12, color: 'rgba(255,255,255,0.6)' }}>
            Or <a href="https://app.ementor.ai" style={{ color: 'rgba(255,255,255,0.85)', textDecoration: 'underline' }}>try the app right now</a> — no sign-up needed.
          </p>
        </div>
      </section>

    </div>
  );
}
