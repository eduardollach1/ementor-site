import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMarket } from '../context/MarketContext';

const CONTENT = {
  en: {
    badge: 'Now in early access · Bay Area & El Salvador',
    hero: 'Every great business\nhas a mentor.',
    heroSub: 'eMentor gives every small business owner the guidance that used to cost $400/hour — whether you\'re planning your launch or already open and looking to grow.',
    heroTagline: 'Your venture score. Your break-even plan. Your roadmap. In 5 minutes.',
    heroCta: 'Get my venture score →',
    heroSub2: 'See how it works',
    heroFine: 'No sign-up required · Takes 2 minutes · 9 venture types',
    stats: [
      { number: '50%',  label: 'of small businesses fail in year 1' },
      { number: '82%',  label: 'fail due to cash flow problems' },
      { number: '550M', label: 'small businesses globally' },
      { number: '$0',   label: 'personalized advisors for most of them' },
    ],
    whoTitle1: 'Starting out', whoTitle2: 'Already open',
    who1: [
      ['Should I do this?', 'Know your odds before you invest your savings.'],
      ['Do I have enough capital?', 'See your break-even week and cash runway.'],
      ['Is this the right city or idea?', 'Compare scores and find your best path.'],
    ],
    who2: [
      ['Why am I not breaking even yet?', "See the exact week you turn profitable and what\u2019s holding you back."],
      ['How do I grow from here?', 'Get 6 ranked improvements ordered by monthly profit impact.'],
      ['Should I pivot or stay the course?', 'Score your current venture and compare alternatives.'],
    ],
    who1Cta: 'Get my score before I launch →',
    who2Cta: 'Help me grow my existing business →',
    howLabel: 'Simple by design',
    howTitle: 'From idea to action plan in 5 minutes',
    howSub: 'No spreadsheets. No MBA required. Just answer a few questions and get a plan built for your specific business.',
    steps: [
      { title: 'Answer 5 questions', desc: 'Your venture type, city, capital, and team size. Takes under 2 minutes.' },
      { title: 'Get your venture score', desc: 'A 0–100 score backed by local market data, competition analysis, and financial modeling.' },
      { title: 'Build your plan', desc: 'A 90-day action plan, break-even tracker, and improvement roadmap built for your business.' },
    ],
    howLink: 'See the full product walkthrough →',
    featLabel: 'Built for you',
    featTitle: 'Everything a small business owner needs',
    features: [
      { icon: '📊', title: 'Venture Score', desc: 'Know your odds before you invest. A data-driven score that accounts for local competition, demographics, capital, and your experience.' },
      { icon: '📈', title: 'Break-Even Tracker', desc: 'See exactly when your business turns profitable — week by week. Know your cash runway and what it takes to survive the first 90 days.' },
      { icon: '🗓️', title: '90-Day Action Plan', desc: 'A step-by-step launch plan tailored to your venture type — from permits and location to staffing and your first marketing push.' },
      { icon: '🤖', title: 'yourMentor AI', desc: 'An AI advisor available 24/7 that knows your business, your market, and your plan. Ask anything — it answers like a seasoned business mentor.' },
    ],
    venturesLabel: 'Built for 9 venture types — more coming soon',
    ventures: [
      { emoji: '🌮', label: 'Taqueria' }, { emoji: '☕', label: 'Café' }, { emoji: '🍕', label: 'Pizzeria' },
      { emoji: '🛒', label: 'Grocery' }, { emoji: '🔨', label: 'Hardware' }, { emoji: '🎨', label: 'Craft Store' },
      { emoji: '✂️', label: 'Hair Salon' }, { emoji: '💼', label: 'Financial' }, { emoji: '⚖️', label: 'Legal' },
    ],
    quotesLabel: 'Early feedback',
    quotesTitle: 'What early testers are saying',
    quotes: [
      { text: "I had no idea my break-even was week 9, not week 4. eMentor saved me from a cash crisis.", author: "Early tester, East Palo Alto" },
      { text: "The 90-day plan alone is worth it. It's like having a business consultant in your pocket.", author: "Early tester, Redwood City" },
      { text: "I changed my city choice after seeing the score difference. That decision probably saved my business.", author: "Early tester, San Jose" },
    ],
    invLabel: 'For investors & partners',
    invTitle: 'The AI advisor that levels the playing field for small business.',
    invP1: '550 million small businesses globally. Most have never had access to a real business advisor — someone who could tell them their odds, their break-even, and their next move.',
    invP2: 'eMentor is that mentor — for the founder who hasn\'t launched yet, and for the owner who\'s already open and fighting to break even. Institutional-quality guidance, at $0 to start.',
    invCta: 'Request investor deck →',
    invLink: 'Learn about the mission',
    ctaTitle: 'Your mentor is waiting.',
    ctaSub: 'Launching or already open — get your venture score, your break-even plan, and your roadmap for free. No credit card, no commitment.',
    ctaPlaceholder: 'your@email.com',
    ctaBtn: 'Get early access',
    ctaSuccess: "You're on the list!",
    ctaSuccessSub: "We'll be in touch soon. Try the app now →",
    ctaFine: 'Or try the app right now — no sign-up needed.',
  },
  es: {
    badge: 'En acceso anticipado · Bay Area y El Salvador',
    hero: 'Todo gran negocio\ntiene un mentor.',
    heroSub: 'eMentor da a cada dueño de negocio la orientación que antes costaba $400/hora — ya sea que estés planeando tu lanzamiento o ya estés abierto y quieras crecer.',
    heroTagline: 'Tu puntaje de negocio. Tu plan de equilibrio. Tu hoja de ruta. En 5 minutos.',
    heroCta: 'Obtener mi puntaje →',
    heroSub2: 'Ver cómo funciona',
    heroFine: 'Sin registro · Toma 2 minutos · 8 tipos de negocio',
    stats: [
      { number: '50%',  label: 'de los negocios fracasan en el primer año' },
      { number: '82%',  label: 'fracasan por problemas de flujo de caja' },
      { number: '550M', label: 'pequeños negocios en el mundo' },
      { number: '$0',   label: 'asesores personalizados para la mayoría' },
    ],
    whoTitle1: 'Empezando', whoTitle2: 'Ya abierto',
    who1: [
      ['¿Debo hacerlo?', 'Conoce tus probabilidades antes de invertir tus ahorros.'],
      ['¿Tengo suficiente capital?', 'Ve tu semana de equilibrio y tu margen de efectivo.'],
      ['¿Es la zona o idea correcta?', 'Compara puntajes y encuentra tu mejor camino.'],
    ],
    who2: [
      ['¿Por qué aún no llego al equilibrio?', 'Ve exactamente cuándo tu negocio será rentable y qué te lo impide.'],
      ['¿Cómo puedo crecer desde aquí?', 'Obtén 6 mejoras ordenadas por impacto en ganancias mensuales.'],
      ['¿Debo pivotar o seguir el rumbo?', 'Puntúa tu negocio actual y compara alternativas.'],
    ],
    who1Cta: 'Obtener mi puntaje antes de abrir →',
    who2Cta: 'Ayúdame a hacer crecer mi negocio →',
    howLabel: 'Simple por diseño',
    howTitle: 'De idea a plan de acción en 5 minutos',
    howSub: 'Sin hojas de cálculo. Sin título universitario. Solo responde unas preguntas y obtén un plan hecho para tu negocio específico.',
    steps: [
      { title: 'Responde 5 preguntas', desc: 'Tu tipo de negocio, zona, capital y tamaño de equipo. Toma menos de 2 minutos.' },
      { title: 'Obtén tu puntaje', desc: 'Un puntaje de 0–100 respaldado por datos de mercado local, análisis de competencia y modelo financiero.' },
      { title: 'Construye tu plan', desc: 'Un plan de acción de 90 días, rastreador de punto de equilibrio y hoja de ruta de mejoras para tu negocio.' },
    ],
    howLink: 'Ver el recorrido completo del producto →',
    featLabel: 'Hecho para ti',
    featTitle: 'Todo lo que un dueño de negocio necesita',
    features: [
      { icon: '📊', title: 'Puntaje de Negocio', desc: 'Conoce tus probabilidades antes de invertir. Un puntaje basado en datos que considera la competencia local, demografía, capital y tu experiencia.' },
      { icon: '📈', title: 'Rastreador de Equilibrio', desc: 'Ve exactamente cuándo tu negocio será rentable — semana a semana. Conoce tu margen de efectivo y qué se necesita para sobrevivir los primeros 90 días.' },
      { icon: '🗓️', title: 'Plan de Acción 90 Días', desc: 'Un plan de lanzamiento paso a paso adaptado a tu tipo de negocio — desde permisos y ubicación hasta personal y tu primer impulso de marketing.' },
      { icon: '🤖', title: 'yourMentor IA', desc: 'Un asesor de IA disponible 24/7 que conoce tu negocio, tu mercado y tu plan. Pregunta cualquier cosa — responde como un mentor empresarial experimentado.' },
    ],
    venturesLabel: '8 tipos de negocio — más próximamente',
    ventures: [
      { emoji: '🫓', label: 'Pupusería' }, { emoji: '🍲', label: 'Comedor' }, { emoji: '🏪', label: 'Tienda de Abarrotes' },
      { emoji: '💊', label: 'Farmacia' }, { emoji: '🔧', label: 'Ferretería' }, { emoji: '📚', label: 'Librería' },
      { emoji: '✂️', label: 'Salón de Belleza' }, { emoji: '💰', label: 'Servicios Financieros' },
    ],
    quotesLabel: 'Comentarios tempranos',
    quotesTitle: 'Lo que dicen nuestros primeros usuarios',
    quotes: [
      { text: "No sabía que mi punto de equilibrio era la semana 9, no la 4. eMentor me salvó de una crisis de efectivo.", author: "Probador temprano, East Palo Alto" },
      { text: "El plan de 90 días solo ya vale la pena. Es como tener un consultor de negocios en el bolsillo.", author: "Probador temprano, Redwood City" },
      { text: "Cambié mi elección de zona después de ver la diferencia de puntaje. Esa decisión probablemente salvó mi negocio.", author: "Probador temprano, San José" },
    ],
    invLabel: 'Para inversores y socios',
    invTitle: 'El asesor de IA que nivela el campo de juego para los pequeños negocios.',
    invP1: '550 millones de pequeños negocios en el mundo. La mayoría nunca ha tenido acceso a un asesor empresarial real — alguien que pueda decirles sus probabilidades, su punto de equilibrio y su próximo paso.',
    invP2: 'eMentor es ese mentor — para el emprendedor que aún no ha lanzado, y para el dueño que ya está abierto y luchando por llegar al equilibrio. Orientación de calidad institucional, a $0 para comenzar.',
    invCta: 'Solicitar deck para inversores →',
    invLink: 'Conocer la misión',
    ctaTitle: 'Tu mentor te espera.',
    ctaSub: 'Lanzando o ya abierto — obtén tu puntaje de negocio, tu plan de equilibrio y tu hoja de ruta gratis. Sin tarjeta de crédito, sin compromiso.',
    ctaPlaceholder: 'tu@email.com',
    ctaBtn: 'Acceso anticipado',
    ctaSuccess: '¡Estás en la lista!',
    ctaSuccessSub: 'Estaremos en contacto pronto. Prueba la app ahora →',
    ctaFine: 'O prueba la app ahora mismo — sin registro.',
  },
};

const STEP_COLORS = [
  { color: '#1a8a5a', bg: '#e8f5ef' },
  { color: '#185FA5', bg: '#e6f1fb' },
  { color: '#b45309', bg: '#fef3c7' },
];
const FEAT_COLORS = [
  { color: '#1a8a5a', bg: '#e8f5ef' },
  { color: '#185FA5', bg: '#e6f1fb' },
  { color: '#7c3aed', bg: '#f3f0ff' },
  { color: '#b45309', bg: '#fef3c7' },
];

export default function Home() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const { market, appUrl } = useMarket();
  const t = CONTENT[market.lang] || CONTENT.en;

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
        <div style={{ position: 'absolute', top: -60, right: -60, width: 400, height: 400, borderRadius: '50%', background: 'rgba(26,138,90,0.06)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', bottom: -80, left: -40, width: 300, height: 300, borderRadius: '50%', background: 'rgba(26,138,90,0.04)', pointerEvents: 'none' }} />

        <div style={{ maxWidth: 780, margin: '0 auto', position: 'relative' }}>
          <div className="fade-up" style={{ display: 'inline-flex', alignItems: 'center', gap: 6, background: '#fff', border: '1px solid #b8dece', padding: '6px 14px', borderRadius: 20, marginBottom: 28 }}>
            <img src="/em-icon.png" alt="eM" style={{ height: 16, width: 'auto' }} />
            <span style={{ fontSize: 12, fontWeight: 600, color: '#1a8a5a' }}>{t.badge}</span>
          </div>

          <h1 className="serif fade-up-2" style={{ fontSize: 'clamp(36px, 6vw, 64px)', fontWeight: 700, color: '#1a1a1a', lineHeight: 1.15, marginBottom: 24 }}>
            {t.hero.split('\n').map((line, i) => <span key={i}>{line}{i === 0 && <br />}</span>)}
          </h1>

          <p className="fade-up-3" style={{ fontSize: 'clamp(16px, 2.5vw, 20px)', color: '#3d3d3d', lineHeight: 1.7, maxWidth: 620, margin: '0 auto 16px' }}>
            {t.heroSub}
          </p>

          <p className="fade-up-3" style={{ fontSize: 'clamp(14px, 2vw, 17px)', color: '#6b6b6b', lineHeight: 1.6, maxWidth: 520, margin: '0 auto 40px', fontStyle: 'italic' }}>
            {t.heroTagline}
          </p>

          <div className="fade-up-4" style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href={appUrl()} className="btn-primary" style={{ fontSize: 16, padding: '16px 32px' }}>
              {t.heroCta}
            </a>
            <Link to="/how-it-works" className="btn-outline" style={{ fontSize: 16, padding: '15px 28px' }}>
              {t.heroSub2}
            </Link>
          </div>

          <p style={{ marginTop: 20, fontSize: 13, color: '#6b6b6b' }}>{t.heroFine}</p>
        </div>
      </section>

      {/* ── WHO IT'S FOR ─────────────────────────────────────── */}
      <section style={{ background: '#fff', padding: '0 24px' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', borderBottom: '1px solid #e2ddd6' }}>
          <div style={{ padding: '40px 36px 40px 0', borderRight: '1px solid #e2ddd6' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 20 }}>
              <span style={{ fontSize: 24 }}>🚀</span>
              <p style={{ fontSize: 15, fontWeight: 700, color: '#1a1a1a' }}>{t.whoTitle1}</p>
            </div>
            {t.who1.map(([q, a], i) => (
              <div key={i} style={{ marginBottom: 16 }}>
                <p style={{ fontSize: 13, fontWeight: 600, color: '#1a1a1a', marginBottom: 3 }}>"{q}"</p>
                <p style={{ fontSize: 12, color: '#6b6b6b', lineHeight: 1.5 }}>{a}</p>
              </div>
            ))}
            <a href={appUrl()} style={{ display: 'inline-flex', alignItems: 'center', gap: 6, marginTop: 8, fontSize: 13, fontWeight: 600, color: '#1a8a5a' }}>{t.who1Cta}</a>
          </div>

          <div style={{ padding: '40px 0 40px 36px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 20 }}>
              <span style={{ fontSize: 24 }}>🏪</span>
              <p style={{ fontSize: 15, fontWeight: 700, color: '#1a1a1a' }}>{t.whoTitle2}</p>
            </div>
            {t.who2.map(([q, a], i) => (
              <div key={i} style={{ marginBottom: 16 }}>
                <p style={{ fontSize: 13, fontWeight: 600, color: '#1a1a1a', marginBottom: 3 }}>"{q}"</p>
                <p style={{ fontSize: 12, color: '#6b6b6b', lineHeight: 1.5 }}>{a}</p>
              </div>
            ))}
            <a href={appUrl()} style={{ display: 'inline-flex', alignItems: 'center', gap: 6, marginTop: 8, fontSize: 13, fontWeight: 600, color: '#1a8a5a' }}>{t.who2Cta}</a>
          </div>
        </div>
      </section>

      {/* ── STATS BAR ─────────────────────────────────────────── */}
      <section style={{ background: '#1a1a1a', padding: '40px 24px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 32, textAlign: 'center' }}>
          {t.stats.map(s => (
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
            <p style={{ fontSize: 12, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: '#1a8a5a', marginBottom: 12 }}>{t.howLabel}</p>
            <h2 className="serif" style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontWeight: 700, color: '#1a1a1a', marginBottom: 16 }}>{t.howTitle}</h2>
            <p style={{ fontSize: 16, color: '#6b6b6b', maxWidth: 520, margin: '0 auto' }}>{t.howSub}</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 24 }}>
            {t.steps.map((step, i) => (
              <div key={i} style={{ padding: 32, borderRadius: 16, background: STEP_COLORS[i].bg, border: `1px solid ${STEP_COLORS[i].color}22`, position: 'relative' }}>
                <div style={{ width: 40, height: 40, borderRadius: '50%', background: STEP_COLORS[i].color, color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18, fontWeight: 700, marginBottom: 20 }}>{i + 1}</div>
                <h3 className="serif" style={{ fontSize: 20, fontWeight: 700, color: '#1a1a1a', marginBottom: 10 }}>{step.title}</h3>
                <p style={{ fontSize: 14, color: '#3d3d3d', lineHeight: 1.6 }}>{step.desc}</p>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: 40 }}>
            <Link to="/how-it-works" style={{ fontSize: 14, fontWeight: 600, color: '#1a8a5a', textDecoration: 'underline' }}>{t.howLink}</Link>
          </div>
        </div>
      </section>

      {/* ── FEATURES ─────────────────────────────────────────── */}
      <section style={{ padding: '80px 24px', background: '#f7f5f0' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <p style={{ fontSize: 12, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: '#1a8a5a', marginBottom: 12 }}>{t.featLabel}</p>
            <h2 className="serif" style={{ fontSize: 'clamp(26px, 4vw, 38px)', fontWeight: 700, color: '#1a1a1a' }}>{t.featTitle}</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 20 }}>
            {t.features.map((f, i) => (
              <div key={i} style={{ background: '#fff', borderRadius: 14, padding: '28px 24px', border: '1px solid #e2ddd6', transition: 'transform 0.15s, box-shadow 0.15s' }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.08)'; }}
                onMouseLeave={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = 'none'; }}
              >
                <div style={{ width: 44, height: 44, borderRadius: 12, background: FEAT_COLORS[i].bg, fontSize: 22, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 16 }}>{f.icon}</div>
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
          <p style={{ fontSize: 13, fontWeight: 600, color: '#6b6b6b', marginBottom: 28 }}>{t.venturesLabel}</p>
          <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: 12 }}>
            {t.ventures.map(v => (
              <div key={v.label} style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '10px 18px', borderRadius: 30, background: '#f7f5f0', border: '1px solid #e2ddd6', fontSize: 14, fontWeight: 500, color: '#3d3d3d' }}>
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
            <p style={{ fontSize: 12, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: '#1a8a5a', marginBottom: 12 }}>{t.quotesLabel}</p>
            <h2 className="serif" style={{ fontSize: 'clamp(24px, 3.5vw, 36px)', fontWeight: 700, color: '#1a1a1a' }}>{t.quotesTitle}</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 20 }}>
            {t.quotes.map((q, i) => (
              <div key={i} style={{ background: '#fff', borderRadius: 14, padding: 28, border: '1px solid #e2ddd6' }}>
                <p style={{ fontSize: 13, color: '#6b6b6b', marginBottom: 8 }}>★★★★★</p>
                <p className="serif" style={{ fontSize: 15, color: '#1a1a1a', lineHeight: 1.65, marginBottom: 16, fontStyle: 'italic' }}>"{q.text}"</p>
                <p style={{ fontSize: 12, fontWeight: 600, color: '#6b6b6b' }}>— {q.author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── INVESTOR SECTION ─────────────────────────────────── */}
      <section style={{ padding: '80px 24px', background: '#1a1a1a' }}>
        <div style={{ maxWidth: 800, margin: '0 auto', textAlign: 'center' }}>
          <p style={{ fontSize: 12, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: '#1a8a5a', marginBottom: 16 }}>{t.invLabel}</p>
          <h2 className="serif" style={{ fontSize: 'clamp(26px, 4vw, 42px)', fontWeight: 700, color: '#fff', lineHeight: 1.25, marginBottom: 20 }}>{t.invTitle}</h2>
          <p style={{ fontSize: 16, color: '#a0a0a0', lineHeight: 1.7, marginBottom: 16 }}>{t.invP1}</p>
          <p style={{ fontSize: 16, color: '#a0a0a0', lineHeight: 1.7, marginBottom: 40 }}>{t.invP2}</p>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/contact" className="btn-primary" style={{ fontSize: 15, padding: '14px 28px' }}>{t.invCta}</Link>
            <Link to="/about" className="btn-ghost" style={{ fontSize: 15, padding: '13px 24px', color: '#a0a0a0', borderColor: '#333' }}>{t.invLink}</Link>
          </div>
        </div>
      </section>

      {/* ── EMAIL CTA ─────────────────────────────────────────── */}
      <section style={{ padding: '80px 24px', background: 'linear-gradient(135deg, #1a8a5a 0%, #146b46 100%)', textAlign: 'center' }}>
        <div style={{ maxWidth: 560, margin: '0 auto' }}>
          <h2 className="serif" style={{ fontSize: 'clamp(26px, 4vw, 38px)', fontWeight: 700, color: '#fff', marginBottom: 16 }}>{t.ctaTitle}</h2>
          <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.85)', marginBottom: 32, lineHeight: 1.6 }}>{t.ctaSub}</p>
          {submitted ? (
            <div style={{ background: 'rgba(255,255,255,0.15)', borderRadius: 12, padding: '20px 24px', color: '#fff' }}>
              <p style={{ fontSize: 18, fontWeight: 700, marginBottom: 4 }}>✓ {t.ctaSuccess}</p>
              <p style={{ fontSize: 14, opacity: 0.85 }}>{t.ctaSuccessSub}</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'flex', gap: 10, maxWidth: 440, margin: '0 auto', flexWrap: 'wrap' }}>
              <input
                type="email"
                placeholder={t.ctaPlaceholder}
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
                style={{ flex: 1, minWidth: 200, padding: '14px 16px', borderRadius: 10, border: 'none', fontSize: 15, outline: 'none' }}
              />
              <button type="submit" style={{ padding: '14px 24px', borderRadius: 10, border: 'none', background: '#fff', color: '#1a8a5a', fontSize: 15, fontWeight: 700, cursor: 'pointer', whiteSpace: 'nowrap' }}>
                {t.ctaBtn}
              </button>
            </form>
          )}
          <p style={{ marginTop: 16, fontSize: 12, color: 'rgba(255,255,255,0.6)' }}>
            {t.ctaFine.split('—')[0]}—{' '}
            <a href={appUrl()} style={{ color: 'rgba(255,255,255,0.85)', textDecoration: 'underline' }}>
              {t.ctaFine.split('—')[1]?.trim()}
            </a>
          </p>
        </div>
      </section>

    </div>
  );
}
