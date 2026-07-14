import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowRight, ArrowLeft, Phone, CheckCircle, DollarSign, Home, Thermometer, Zap, HelpCircle } from 'lucide-react';
import { PageHero, CTA } from '../components/ui';
import { useI18n } from '../i18n';
import { useOnScreen } from '../hooks';

const articles = [
  {
    slug: 'heat-pump-installation-cost-halifax-2026',
    title: 'Heat Pump Installation Cost in Halifax (2026 Guide)',
    date: 'April 2026',
    readTime: '5 min read',
    tag: 'Cost Guide',
    tagColor: '#E88B30',
  },
  {
    slug: 'mini-split-vs-central-air-halifax',
    title: 'Mini Split vs Central Air: Which is Better in Halifax?',
    date: 'April 2026',
    readTime: '4 min read',
    tag: 'Comparison',
    tagColor: '#4A90D9',
  },
];

function ArticleCard({ article, index }) {
  const [ref, vis] = useOnScreen();
  return (
    <Link ref={ref} to={`/blog/${article.slug}`} style={{
      display: 'block', background: 'white', borderRadius: 'var(--radius-lg)',
      overflow: 'hidden', border: '1px solid var(--gray-200)',
      transition: 'all 0.4s ease', textDecoration: 'none',
      opacity: vis ? 1 : 0, transform: vis ? 'translateY(0)' : 'translateY(24px)',
      transitionDelay: `${index * 0.1}s`,
    }}
      onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 16px 40px rgba(0,0,0,0.08)'; }}
      onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; }}
    >
      <div style={{ padding: '32px 28px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 14 }}>
          <span style={{ fontSize: 11, fontWeight: 600, padding: '4px 10px', borderRadius: 20, background: article.tagColor + '18', color: article.tagColor }}>{article.tag}</span>
          <span style={{ fontSize: 12, color: 'var(--gray-400)' }}>{article.date}</span>
          <span style={{ fontSize: 12, color: 'var(--gray-400)' }}>{article.readTime}</span>
        </div>
        <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 22, fontWeight: 700, color: 'var(--navy)', lineHeight: 1.35, marginBottom: 12 }}>{article.title}</h3>
        <span style={{ fontSize: 14, fontWeight: 500, color: 'var(--orange)', display: 'flex', alignItems: 'center', gap: 6 }}>
          Read Article <ArrowRight size={16} />
        </span>
      </div>
    </Link>
  );
}

function Article1() {
  return (
    <div>
      <PageHero overline="Cost Guide · April 2026" title="Heat Pump Installation Cost in Halifax" subtitle="A complete guide to heat pump costs, factors, and rebates in 2026." />
      <section className="section" style={{ paddingTop: 60 }}>
        <div className="container" style={{ maxWidth: 780 }}>
          <Link to="/blog" style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 14, color: 'var(--orange)', marginBottom: 32, fontWeight: 500 }}>
            <ArrowLeft size={16} /> Back to Blog
          </Link>

          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 28, fontWeight: 700, color: 'var(--navy)', marginBottom: 20 }}>How Much Does a Heat Pump Cost in Halifax?</h2>
          <p style={{ fontSize: 16, lineHeight: 1.8, color: 'var(--gray-600)', marginBottom: 28 }}>
            Many homeowners in Halifax are asking the same question: <strong>How much does it cost to install a heat pump in 2026?</strong>
          </p>

          {/* Price Cards */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 40 }}>
            <div style={{ background: 'var(--sky)', borderRadius: 'var(--radius-lg)', padding: 28, border: '1px solid var(--sky-deep)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
                <Thermometer size={22} color="var(--blue)" />
                <h4 style={{ fontSize: 16, fontWeight: 700, color: 'var(--navy)' }}>Mini Split Heat Pump</h4>
              </div>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: 28, fontWeight: 700, color: 'var(--blue)', marginBottom: 6 }}>$3,500 – $8,000</div>
              <div style={{ fontSize: 13, color: 'var(--gray-500)' }}>Ductless, single or multi-zone</div>
            </div>
            <div style={{ background: 'var(--warm-50)', borderRadius: 'var(--radius-lg)', padding: 28, border: '1px solid var(--warm-200)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
                <Home size={22} color="var(--orange)" />
                <h4 style={{ fontSize: 16, fontWeight: 700, color: 'var(--navy)' }}>Central Heat Pump</h4>
              </div>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: 28, fontWeight: 700, color: 'var(--orange)', marginBottom: 6 }}>$8,000 – $15,000+</div>
              <div style={{ fontSize: 13, color: 'var(--gray-500)' }}>Ducted, whole-home system</div>
            </div>
          </div>

          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 24, fontWeight: 700, color: 'var(--navy)', marginBottom: 18 }}>What Affects the Price?</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16, marginBottom: 40 }}>
            {[
              { num: '1', title: 'Home Size & Layout', desc: 'Larger homes require more capacity and indoor units.' },
              { num: '2', title: 'System Type', desc: 'Mini split (ductless) vs. central ducted system — ductless is generally less expensive.' },
              { num: '3', title: 'Daikin System Selection', desc: 'Daikin systems may cost more upfront, but they are known for strong efficiency, reliability, and long-term comfort.' },
              { num: '4', title: 'Installation Complexity', desc: 'Older homes or electrical upgrades may increase the total cost.' },
            ].map((item, i) => (
              <div key={i} style={{ display: 'flex', gap: 16, padding: '20px 24px', background: 'var(--gray-50)', borderRadius: 'var(--radius)', border: '1px solid var(--gray-200)' }}>
                <div style={{ width: 36, height: 36, borderRadius: '50%', background: 'var(--orange)', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 15, fontWeight: 700, flexShrink: 0 }}>{item.num}</div>
                <div>
                  <h4 style={{ fontSize: 16, fontWeight: 600, color: 'var(--navy)', marginBottom: 4 }}>{item.title}</h4>
                  <p style={{ fontSize: 15, color: 'var(--gray-500)', lineHeight: 1.6 }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div style={{ background: 'linear-gradient(135deg, var(--green-light), #D5F5E3)', borderRadius: 'var(--radius-lg)', padding: 32, marginBottom: 40, border: '1px solid #A9DFBF' }}>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 22, fontWeight: 700, color: '#1E8449', marginBottom: 12, display: 'flex', alignItems: 'center', gap: 10 }}>
              <DollarSign size={24} /> Rebates & Incentives in Nova Scotia
            </h2>
            <p style={{ fontSize: 16, lineHeight: 1.8, color: '#2D6A4F', marginBottom: 16 }}>
              Homeowners in Nova Scotia may qualify for rebates, which can significantly reduce upfront costs.
            </p>
            <p style={{ fontSize: 15, fontWeight: 600, color: '#1E8449' }}>
              We help you apply for all available rebates.
            </p>
          </div>

          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 24, fontWeight: 700, color: 'var(--navy)', marginBottom: 18 }}>Is It Worth It?</h2>
          <p style={{ fontSize: 16, lineHeight: 1.8, color: 'var(--gray-600)', marginBottom: 16 }}>Heat pumps can:</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 40 }}>
            {['Lower your energy bills', 'Provide both heating & cooling', 'Increase home value'].map((item, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <CheckCircle size={20} color="var(--green)" />
                <span style={{ fontSize: 16, color: 'var(--gray-700)' }}>{item}</span>
              </div>
            ))}
          </div>

          {/* CTA Box */}
          <div style={{ background: 'var(--navy)', borderRadius: 'var(--radius-lg)', padding: '40px 36px', textAlign: 'center' }}>
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 24, fontWeight: 700, color: 'white', marginBottom: 10 }}>Get a FREE Estimate Today</h3>
            <div style={{ display: 'flex', justifyContent: 'center', gap: 24, marginBottom: 20, flexWrap: 'wrap' }}>
              {['Local Halifax experts', 'Fast installation', 'Competitive pricing'].map((item, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                  <CheckCircle size={16} color="var(--green)" />
                  <span style={{ fontSize: 14, color: 'rgba(255,255,255,0.8)' }}>{item}</span>
                </div>
              ))}
            </div>
            <CTA label="Get Free Estimate" to="/contact" />
          </div>
        </div>
      </section>
    </div>
  );
}

function Article2() {
  return (
    <div>
      <PageHero overline="Comparison · April 2026" title="Mini Split vs Central Air" subtitle="Which system is better for your Halifax home? A side-by-side comparison." />
      <section className="section" style={{ paddingTop: 60 }}>
        <div className="container" style={{ maxWidth: 780 }}>
          <Link to="/blog" style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 14, color: 'var(--orange)', marginBottom: 32, fontWeight: 500 }}>
            <ArrowLeft size={16} /> Back to Blog
          </Link>

          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 28, fontWeight: 700, color: 'var(--navy)', marginBottom: 28 }}>Key Differences</h2>

          {/* Comparison Cards */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20, marginBottom: 40 }}>
            <div style={{ background: 'var(--sky)', borderRadius: 'var(--radius-lg)', padding: 28, border: '2px solid var(--blue)' }}>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 20, fontWeight: 700, color: 'var(--blue)', marginBottom: 16 }}>Mini Split System</h3>
              {['No ductwork required', 'Lower installation cost', 'Ideal for smaller homes or additions', 'Zone-by-zone temperature control', 'Quick installation (1-2 days)'].map((item, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}>
                  <CheckCircle size={16} color="var(--blue)" />
                  <span style={{ fontSize: 14, color: 'var(--gray-700)' }}>{item}</span>
                </div>
              ))}
              <div style={{ marginTop: 16, padding: '14px 18px', background: 'white', borderRadius: 'var(--radius)', textAlign: 'center' }}>
                <div style={{ fontSize: 12, color: 'var(--gray-500)', marginBottom: 4 }}>Typical Cost</div>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: 22, fontWeight: 700, color: 'var(--blue)' }}>$3,500 – $8,000</div>
              </div>
            </div>

            <div style={{ background: 'var(--warm-50)', borderRadius: 'var(--radius-lg)', padding: 28, border: '2px solid var(--orange)' }}>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 20, fontWeight: 700, color: 'var(--orange)', marginBottom: 16 }}>Central Air System</h3>
              {['Uses existing ductwork', 'Even cooling throughout the house', 'Better for large homes', 'Single thermostat control', 'Higher capacity available'].map((item, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}>
                  <CheckCircle size={16} color="var(--orange)" />
                  <span style={{ fontSize: 14, color: 'var(--gray-700)' }}>{item}</span>
                </div>
              ))}
              <div style={{ marginTop: 16, padding: '14px 18px', background: 'white', borderRadius: 'var(--radius)', textAlign: 'center' }}>
                <div style={{ fontSize: 12, color: 'var(--gray-500)', marginBottom: 4 }}>Typical Cost</div>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: 22, fontWeight: 700, color: 'var(--orange)' }}>$8,000 – $15,000+</div>
              </div>
            </div>
          </div>

          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 24, fontWeight: 700, color: 'var(--navy)', marginBottom: 20 }}>Which One Should You Choose?</h2>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 40 }}>
            <div style={{ padding: '24px', background: 'var(--sky)', borderRadius: 'var(--radius)', border: '1px solid var(--sky-deep)' }}>
              <h4 style={{ fontSize: 16, fontWeight: 700, color: 'var(--blue)', marginBottom: 12 }}>Choose Mini Split if:</h4>
              {['No existing ducts in your home', 'Want lower upfront cost', 'Heating/cooling specific rooms', 'Renovating or building an addition'].map((item, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'start', gap: 8, marginBottom: 8 }}>
                  <span style={{ color: 'var(--blue)', fontWeight: 700, fontSize: 14 }}>→</span>
                  <span style={{ fontSize: 14, color: 'var(--gray-700)', lineHeight: 1.5 }}>{item}</span>
                </div>
              ))}
            </div>
            <div style={{ padding: '24px', background: 'var(--warm-50)', borderRadius: 'var(--radius)', border: '1px solid var(--warm-200)' }}>
              <h4 style={{ fontSize: 16, fontWeight: 700, color: 'var(--orange)', marginBottom: 12 }}>Choose Central Air if:</h4>
              {['Large home with existing ductwork', 'Want consistent temperature everywhere', 'Prefer a single-thermostat system', 'Planning a new construction'].map((item, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'start', gap: 8, marginBottom: 8 }}>
                  <span style={{ color: 'var(--orange)', fontWeight: 700, fontSize: 14 }}>→</span>
                  <span style={{ fontSize: 14, color: 'var(--gray-700)', lineHeight: 1.5 }}>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Box */}
          <div style={{ background: 'var(--navy)', borderRadius: 'var(--radius-lg)', padding: '40px 36px', textAlign: 'center' }}>
            <HelpCircle size={36} color="var(--gold)" style={{ margin: '0 auto 12px' }} />
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 24, fontWeight: 700, color: 'white', marginBottom: 10 }}>Not Sure Which System Is Right for You?</h3>
            <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.7)', marginBottom: 24, maxWidth: 460, margin: '0 auto 24px' }}>
              Contact Owen HVAC Corp. for a free consultation. We'll assess your home and recommend the best solution.
            </p>
            <CTA label="Get Free Consultation" to="/contact" />
          </div>
        </div>
      </section>
    </div>
  );
}

export default function BlogPage() {
  const { lang } = useI18n();
  const titles = { en: 'News & Guides', zh: '资讯与指南', fr: 'Nouvelles et guides' };
  const subtitles = { en: 'HVAC guides, cost comparisons, and expert tips for Halifax homeowners.', zh: '暖通指南、价格对比和专家建议。', fr: "Guides CVC, comparaisons de coûts et conseils d'experts." };

  return (
    <div>
      <PageHero overline="Blog" title={titles[lang] || titles.en} subtitle={subtitles[lang] || subtitles.en} />
      <section className="section">
        <div className="container" style={{ maxWidth: 800 }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            {articles.map((a, i) => <ArticleCard key={a.slug} article={a} index={i} />)}
          </div>
        </div>
      </section>
    </div>
  );
}

export { Article1, Article2 };
