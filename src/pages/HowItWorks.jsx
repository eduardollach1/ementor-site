const STEPS_DETAIL = [
  {
    num: 1,
    color: '#1a8a5a',
    bg: '#e8f5ef',
    title: 'Answer 5 questions',
    subtitle: 'Takes under 2 minutes',
    desc: 'Tell us your venture type (taqueria, café, hardware store, etc.), your target city, how much capital you have, and how many people you plan to launch with. No account needed.',
    details: ['9 venture types supported', 'Bay Area cities pre-loaded with market data', 'Capital range from $20K to $500K+', 'Team size from solo to 5+ people'],
  },
  {
    num: 2,
    color: '#185FA5',
    bg: '#e6f1fb',
    title: 'Get your Venture Score',
    subtitle: 'A 0–100 score backed by real data',
    desc: 'eMentor analyzes your inputs against local market data, competition density, demographics, startup costs, and your capital position to produce a score and a set of specific recommendations.',
    details: ['Score 70+ = recommended to proceed', 'Score 50–69 = review risks first', 'Below 50 = high risk, reconsider or adjust', 'See which city gives you the best score'],
  },
  {
    num: 3,
    color: '#7c3aed',
    bg: '#f3f0ff',
    title: 'See your Break-Even Plan',
    subtitle: 'Know exactly when you turn profitable',
    desc: 'A week-by-week financial model built for your venture. See your starting cash, weekly fixed costs, ramp revenue, and the exact week you break even. Understand your cash runway.',
    details: ['Real wage + payroll tax calculations', 'CA-specific costs (EDD, FUTA, workers comp)', 'Week-by-week revenue ramp', 'Cash remaining tracker'],
  },
  {
    num: 4,
    color: '#b45309',
    bg: '#fef3c7',
    title: 'Follow your 90-Day Action Plan',
    subtitle: 'Built for your venture, your city',
    desc: 'A phase-by-phase roadmap from pre-launch to optimize. Each week has specific tasks, a success metric, and a yourMentor tip. Check off weeks as you complete them.',
    details: ['Pre-launch: permits, location, suppliers', 'Launch: first customers, Google Business', 'Stabilize: systems, reviews, loyalty', 'Optimize: revenue improvements, expansion'],
  },
  {
    num: 5,
    color: '#0891b2',
    bg: '#e0f7fa',
    title: 'Improve & Grow',
    subtitle: 'Ranked improvements ordered by profit impact',
    desc: 'Six ranked improvement recommendations for your venture — from beverage programs to delivery channels to loyalty memberships. Each includes a yourMentor consultation and eM Marketplace ordering.',
    details: ['Ranked by monthly profit impact', 'Ask yourMentor for step-by-step help', 'Order supplies on eM Marketplace', 'Drive Traffic tips with eM scores'],
  },
];

const MENTOR_FEATURES = [
  { icon: '💬', title: 'Ask anything', desc: 'Vendor contracts, permit questions, menu pricing, staff training scripts — yourMentor answers in seconds.' },
  { icon: '📋', title: 'Pre-loaded context', desc: 'Every question you click opens yourMentor with your specific business details already filled in.' },
  { icon: '🏪', title: 'Knows your venture', desc: 'Trained on the specific requirements for your venture type — taqueria advice is different from salon advice.' },
  { icon: '🌐', title: 'Bilingual', desc: 'Responds in Spanish or English. Ask in either language.' },
];

export default function HowItWorks() {
  return (
    <div style={{ paddingTop: 64 }}>

      {/* Hero */}
      <section style={{ background: 'linear-gradient(160deg, #f7f5f0 0%, #e8f5ef 100%)', padding: '80px 24px 56px', textAlign: 'center' }}>
        <div style={{ maxWidth: 700, margin: '0 auto' }}>
          <p style={{ fontSize: 12, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: '#1a8a5a', marginBottom: 14 }}>The product</p>
          <h1 className="serif" style={{ fontSize: 'clamp(30px, 5vw, 50px)', fontWeight: 700, color: '#1a1a1a', lineHeight: 1.2, marginBottom: 20 }}>
            How eMentor works
          </h1>
          <p style={{ fontSize: 17, color: '#3d3d3d', lineHeight: 1.7, maxWidth: 580, margin: '0 auto 32px' }}>
            A complete business planning tool — score, plan, tracker, and AI advisor — built for first-time founders with no MBA required.
          </p>
          <a href="https://app.ementor.ai" className="btn-primary" style={{ fontSize: 15 }}>
            Try it free →
          </a>
        </div>
      </section>

      {/* Steps */}
      <section style={{ padding: '80px 24px', background: '#fff' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          {STEPS_DETAIL.map((step, i) => (
            <div key={i} style={{
              display: 'grid', gridTemplateColumns: '80px 1fr',
              gap: 32, marginBottom: 56, alignItems: 'flex-start',
            }}>
              {/* Number */}
              <div style={{ textAlign: 'center' }}>
                <div style={{
                  width: 56, height: 56, borderRadius: '50%',
                  background: step.color, color: '#fff',
                  fontSize: 22, fontWeight: 700,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  margin: '0 auto 12px',
                }}>{step.num}</div>
                {i < STEPS_DETAIL.length - 1 && (
                  <div style={{ width: 2, height: 40, background: '#e2ddd6', margin: '0 auto' }} />
                )}
              </div>

              {/* Content */}
              <div style={{ paddingTop: 8 }}>
                <p style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: step.color, marginBottom: 6 }}>{step.subtitle}</p>
                <h2 className="serif" style={{ fontSize: 'clamp(20px, 3vw, 28px)', fontWeight: 700, color: '#1a1a1a', marginBottom: 12 }}>{step.title}</h2>
                <p style={{ fontSize: 15, color: '#3d3d3d', lineHeight: 1.7, marginBottom: 16, maxWidth: 600 }}>{step.desc}</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                  {step.details.map((d, j) => (
                    <span key={j} style={{
                      fontSize: 12, fontWeight: 500, padding: '5px 12px',
                      borderRadius: 20, background: step.bg, color: step.color,
                    }}>✓ {d}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* yourMentor spotlight */}
      <section style={{ padding: '80px 24px', background: '#f7f5f0' }}>
        <div style={{ maxWidth: 1000, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <p style={{ fontSize: 12, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: '#1a8a5a', marginBottom: 12 }}>Built in</p>
            <h2 className="serif" style={{ fontSize: 'clamp(24px, 3.5vw, 36px)', fontWeight: 700, color: '#1a1a1a', marginBottom: 16 }}>
              yourMentor — your AI business advisor
            </h2>
            <p style={{ fontSize: 15, color: '#6b6b6b', maxWidth: 540, margin: '0 auto' }}>
              Not a generic chatbot. An advisor that knows your venture, your city, your capital, and your plan.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 20 }}>
            {MENTOR_FEATURES.map((f, i) => (
              <div key={i} style={{ background: '#fff', borderRadius: 14, padding: '24px 20px', border: '1px solid #e2ddd6', textAlign: 'center' }}>
                <div style={{ fontSize: 28, marginBottom: 12 }}>{f.icon}</div>
                <h3 style={{ fontSize: 15, fontWeight: 700, color: '#1a1a1a', marginBottom: 8 }}>{f.title}</h3>
                <p style={{ fontSize: 13, color: '#6b6b6b', lineHeight: 1.6 }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section style={{ padding: '80px 24px', background: '#fff', textAlign: 'center' }}>
        <div style={{ maxWidth: 700, margin: '0 auto' }}>
          <p style={{ fontSize: 12, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: '#1a8a5a', marginBottom: 14 }}>Pricing</p>
          <h2 className="serif" style={{ fontSize: 'clamp(24px, 3.5vw, 36px)', fontWeight: 700, color: '#1a1a1a', marginBottom: 16 }}>
            Free to start. Always.
          </h2>
          <p style={{ fontSize: 15, color: '#6b6b6b', lineHeight: 1.7, marginBottom: 40, maxWidth: 480, margin: '0 auto 40px' }}>
            Your venture score, break-even plan, and 90-day roadmap are free. Premium features — yourMentor AI, eM Marketplace, and advanced analytics — coming in Q3 2026.
          </p>
          <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
            <div style={{ padding: '28px 32px', borderRadius: 16, border: '2px solid #1a8a5a', background: '#e8f5ef', minWidth: 200 }}>
              <p style={{ fontSize: 28, fontWeight: 800, color: '#1a8a5a', marginBottom: 4 }}>$0</p>
              <p style={{ fontSize: 14, fontWeight: 600, color: '#1a1a1a', marginBottom: 12 }}>Free forever</p>
              <p style={{ fontSize: 12, color: '#6b6b6b' }}>Score · Break-even · 90-day plan</p>
            </div>
            <div style={{ padding: '28px 32px', borderRadius: 16, border: '1px solid #e2ddd6', background: '#f7f5f0', minWidth: 200 }}>
              <p style={{ fontSize: 28, fontWeight: 800, color: '#3d3d3d', marginBottom: 4 }}>Pro</p>
              <p style={{ fontSize: 14, fontWeight: 600, color: '#1a1a1a', marginBottom: 12 }}>Coming Q3 2026</p>
              <p style={{ fontSize: 12, color: '#6b6b6b' }}>yourMentor AI · Marketplace · Analytics</p>
            </div>
          </div>
          <div style={{ marginTop: 40 }}>
            <a href="https://app.ementor.ai" className="btn-primary" style={{ fontSize: 15 }}>
              Get started free →
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
