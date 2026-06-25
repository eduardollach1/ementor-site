const TEAM = [
  {
    name: 'Eduardo Llach',
    role: 'Founder & CEO',
    bio: 'Serial entrepreneur and business strategist. Built eMentor after watching too many promising small business owners fail not from lack of effort, but from lack of information.',
  },
];

const MISSION_STATS = [
  { number: '50%', label: 'of small businesses fail in year 1', color: '#c0392b' },
  { number: '82%', label: 'cite cash flow as the primary cause', color: '#b45309' },
  { number: '0', label: 'affordable AI advisors existed for them', color: '#1a8a5a' },
];

export default function About() {
  return (
    <div style={{ paddingTop: 64 }}>

      {/* Hero */}
      <section style={{ background: 'linear-gradient(160deg, #f7f5f0 0%, #e8f5ef 100%)', padding: '80px 24px 64px' }}>
        <div style={{ maxWidth: 760, margin: '0 auto', textAlign: 'center' }}>
          <p style={{ fontSize: 12, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: '#1a8a5a', marginBottom: 14 }}>Our mission</p>
          <h1 className="serif" style={{ fontSize: 'clamp(32px, 5vw, 52px)', fontWeight: 700, color: '#1a1a1a', lineHeight: 1.2, marginBottom: 24 }}>
            Level the playing field for small business.
          </h1>
          <p style={{ fontSize: 18, color: '#3d3d3d', lineHeight: 1.7, maxWidth: 600, margin: '0 auto' }}>
            Every year, hundreds of thousands of people invest their life savings into a small business — without the information they need to succeed. eMentor changes that.
          </p>
        </div>
      </section>

      {/* The problem */}
      <section style={{ padding: '80px 24px', background: '#fff' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'center' }}>
            <div>
              <p style={{ fontSize: 12, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: '#c0392b', marginBottom: 14 }}>The problem</p>
              <h2 className="serif" style={{ fontSize: 'clamp(26px, 3.5vw, 38px)', fontWeight: 700, color: '#1a1a1a', marginBottom: 20, lineHeight: 1.25 }}>
                Most small business owners are flying blind.
              </h2>
              <p style={{ fontSize: 15, color: '#3d3d3d', lineHeight: 1.75, marginBottom: 16 }}>
                A large consulting firm charges $5,000+ for the kind of market analysis eMentor delivers in 5 minutes. A business attorney charges $400/hour. A CPA charges $300/hour.
              </p>
              <p style={{ fontSize: 15, color: '#3d3d3d', lineHeight: 1.75, marginBottom: 16 }}>
                Most first-time founders — especially in underserved communities — have none of these. They rely on gut instinct and hope. And 50% of them fail within the first year.
              </p>
              <p style={{ fontSize: 15, color: '#3d3d3d', lineHeight: 1.75 }}>
                The data to make better decisions exists. We built eMentor to put it in their hands.
              </p>
            </div>
            <div>
              {MISSION_STATS.map((s, i) => (
                <div key={i} style={{
                  padding: '28px 24px', borderRadius: 14, marginBottom: 16,
                  background: '#f7f5f0', border: '1px solid #e2ddd6',
                }}>
                  <p className="serif" style={{ fontSize: 40, fontWeight: 700, color: s.color, marginBottom: 6 }}>{s.number}</p>
                  <p style={{ fontSize: 14, color: '#6b6b6b' }}>{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* EPA proof of concept */}
      <section style={{ padding: '80px 24px', background: '#f7f5f0' }}>
        <div style={{ maxWidth: 800, margin: '0 auto', textAlign: 'center' }}>
          <p style={{ fontSize: 12, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: '#1a8a5a', marginBottom: 14 }}>Proof of concept</p>
          <h2 className="serif" style={{ fontSize: 'clamp(24px, 3.5vw, 36px)', fontWeight: 700, color: '#1a1a1a', marginBottom: 20, lineHeight: 1.3 }}>
            Built in East Palo Alto. Ready for everywhere.
          </h2>
          <p style={{ fontSize: 15, color: '#3d3d3d', lineHeight: 1.75, marginBottom: 16 }}>
            eMentor launched with East Palo Alto as its proof-of-concept market — a city of 29,000 residents with zero chain grocery stores, zero hardware stores, and only ~10 taquerias. A community full of entrepreneurial energy but starved of the support systems available in wealthier neighboring cities.
          </p>
          <p style={{ fontSize: 15, color: '#3d3d3d', lineHeight: 1.75, marginBottom: 16 }}>
            The eMentor model works here because the need is acute and the competitive gaps are visible. But the same gaps exist in thousands of zip codes across the US.
          </p>
          <div style={{ display: 'flex', gap: 24, justifyContent: 'center', flexWrap: 'wrap', marginTop: 32 }}>
            {[['29,000', 'EPA residents'], ['0', 'chain grocery stores in EPA'], ['$150K', 'avg. startup capital needed'], ['9', 'venture types supported']].map(([n, l]) => (
              <div key={l} style={{ textAlign: 'center' }}>
                <p className="serif" style={{ fontSize: 32, fontWeight: 700, color: '#1a8a5a' }}>{n}</p>
                <p style={{ fontSize: 12, color: '#6b6b6b', maxWidth: 100 }}>{l}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why now */}
      <section style={{ padding: '80px 24px', background: '#fff' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <p style={{ fontSize: 12, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: '#1a8a5a', marginBottom: 14 }}>Why now</p>
            <h2 className="serif" style={{ fontSize: 'clamp(24px, 3.5vw, 36px)', fontWeight: 700, color: '#1a1a1a', lineHeight: 1.25 }}>
              Three things aligned to make this possible.
            </h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 24 }}>
            {[
              { icon: '🤖', title: 'AI cost curve', desc: 'The cost of delivering institutional-quality analysis has dropped 99% in 3 years. What used to require a $400/hr consultant now takes 2 seconds.' },
              { icon: '📍', title: 'Local data availability', desc: 'Google Business, census data, permit records, and foot traffic data are now accessible in ways that enable hyper-local market analysis.' },
              { icon: '📱', title: 'Mobile-first entrepreneurs', desc: 'The demographic that needs eMentor most is also the most mobile-first. A PWA on a phone is their primary computer.' },
            ].map((item, i) => (
              <div key={i} style={{ padding: '28px 24px', borderRadius: 14, background: '#f7f5f0', border: '1px solid #e2ddd6' }}>
                <div style={{ fontSize: 28, marginBottom: 14 }}>{item.icon}</div>
                <h3 style={{ fontSize: 16, fontWeight: 700, color: '#1a1a1a', marginBottom: 10 }}>{item.title}</h3>
                <p style={{ fontSize: 13, color: '#6b6b6b', lineHeight: 1.65 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section style={{ padding: '80px 24px', background: '#f7f5f0' }}>
        <div style={{ maxWidth: 700, margin: '0 auto', textAlign: 'center' }}>
          <p style={{ fontSize: 12, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: '#1a8a5a', marginBottom: 14 }}>The team</p>
          <h2 className="serif" style={{ fontSize: 'clamp(24px, 3.5vw, 36px)', fontWeight: 700, color: '#1a1a1a', marginBottom: 40 }}>Built by operators, for operators.</h2>
          {TEAM.map((member, i) => (
            <div key={i} style={{ background: '#fff', borderRadius: 16, padding: '32px 28px', border: '1px solid #e2ddd6', textAlign: 'left' }}>
              <div style={{ width: 52, height: 52, borderRadius: '50%', background: '#e8f5ef', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 22, marginBottom: 16 }}>👤</div>
              <h3 style={{ fontSize: 18, fontWeight: 700, color: '#1a1a1a', marginBottom: 4 }}>{member.name}</h3>
              <p style={{ fontSize: 13, fontWeight: 600, color: '#1a8a5a', marginBottom: 12 }}>{member.role}</p>
              <p style={{ fontSize: 14, color: '#6b6b6b', lineHeight: 1.65 }}>{member.bio}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '64px 24px', background: '#1a8a5a', textAlign: 'center' }}>
        <div style={{ maxWidth: 560, margin: '0 auto' }}>
          <h2 className="serif" style={{ fontSize: 'clamp(24px, 3.5vw, 36px)', fontWeight: 700, color: '#fff', marginBottom: 16 }}>
            Interested in the mission?
          </h2>
          <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.85)', marginBottom: 32 }}>
            We're looking for early partners, advisors, and investors who believe small business is the backbone of underserved communities.
          </p>
          <a href="/contact" className="btn-primary" style={{ background: '#fff', color: '#1a8a5a', fontSize: 15, padding: '14px 28px' }}>
            Get in touch →
          </a>
        </div>
      </section>
    </div>
  );
}
