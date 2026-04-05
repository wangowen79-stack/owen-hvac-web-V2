import { Wrench, Snowflake, Zap, Wind, Flame, Shield, Star, Award, MapPin, Users, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useOnScreen } from '../hooks';
import { SectionTitle, CTA, ServiceCard } from '../components/ui';
import { useI18n } from '../i18n';
import IMG from '../images';

export default function HomePage() {
  const { t } = useI18n();
  const [refCards, visCards] = useOnScreen();
  const [refWhy, visWhy] = useOnScreen();

  return (
    <div>
      {/* ── HERO ── */}
      <section style={{
        minHeight: '100vh', display: 'flex', alignItems: 'center',
        background: 'linear-gradient(145deg, var(--navy) 0%, var(--navy-light) 40%, var(--navy-mid) 100%)',
        position: 'relative', overflow: 'hidden', paddingTop: 80,
      }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(circle at 75% 25%, rgba(232,122,46,0.1) 0%, transparent 55%), radial-gradient(circle at 20% 80%, rgba(38,112,184,0.08) 0%, transparent 50%)' }} />
        <div style={{ position: 'absolute', top: '12%', right: '6%', width: 280, height: 280, borderRadius: '50%', border: '1px solid rgba(255,255,255,0.03)', animation: 'float 7s ease-in-out infinite' }} />

        <div className="container" style={{ position: 'relative', width: '100%', padding: '60px 24px' }}>
          <div className="grid-2">
            <div>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'rgba(232,122,46,0.1)', padding: '8px 16px', borderRadius: 30, marginBottom: 24, border: '1px solid rgba(232,122,46,0.18)', animation: 'fadeUp 0.6s ease both' }}>
                <Shield size={15} color="var(--orange)" />
                <span style={{ fontSize: 13, fontWeight: 500, color: 'var(--orange-light)', letterSpacing: '0.03em' }}>{t('hero.badge')}</span>
              </div>

              <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'clamp(34px, 5vw, 56px)', lineHeight: 1.12, color: 'white', marginBottom: 6, animation: 'fadeUp 0.7s ease both 0.1s' }}>
                {t('hero.title')}
              </h1>
              <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 400, fontStyle: 'italic', fontSize: 'clamp(20px, 3vw, 32px)', lineHeight: 1.3, color: 'var(--orange-light)', marginBottom: 24, animation: 'fadeUp 0.7s ease both 0.15s' }}>
                {t('hero.titleHighlight')}
              </h2>

              <p style={{ fontSize: 17, lineHeight: 1.8, color: 'rgba(255,255,255,0.72)', maxWidth: 480, marginBottom: 36, animation: 'fadeUp 0.7s ease both 0.25s' }}>
                {t('hero.subtitle')}
              </p>

              <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap', animation: 'fadeUp 0.7s ease both 0.35s' }}>
                <CTA label={t('hero.cta1')} to="/contact" />
                <CTA label={t('hero.cta2')} to="/services" variant="outline" />
              </div>

              <div className="hero-stats" style={{ display: 'flex', gap: 36, marginTop: 48, alignItems: 'center', animation: 'fadeUp 0.7s ease both 0.45s' }}>
                {[
                  { n: t('hero.stat1num'), l: t('hero.stat1label') },
                  { n: t('hero.stat2num'), l: t('hero.stat2label') },
                  { n: t('hero.stat3num'), l: t('hero.stat3label') },
                ].map((s, i) => (
                  <div key={i}>
                    <div style={{ fontFamily: 'var(--font-display)', fontSize: 28, fontWeight: 700, color: 'var(--orange)' }}>{s.n}</div>
                    <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.45)', marginTop: 2 }}>{s.l}</div>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ position: 'relative', animation: 'fadeIn 1s ease both 0.3s' }}>
              <div style={{ borderRadius: 'var(--radius-lg)', overflow: 'hidden', boxShadow: '0 30px 60px rgba(0,0,0,0.25)', border: '1px solid rgba(255,255,255,0.06)' }}>
                <img src={IMG.heroMaintenance} alt="HVAC maintenance" style={{ width: '100%', height: 440, objectFit: 'cover' }} />
              </div>
              <div style={{ position: 'absolute', bottom: -16, left: -16, background: 'rgba(255,255,255,0.95)', backdropFilter: 'blur(10px)', borderRadius: 16, padding: '16px 20px', boxShadow: '0 10px 36px rgba(0,0,0,0.12)', animation: 'float 5s ease-in-out infinite', maxWidth: 200 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4 }}>
                  <div style={{ width: 32, height: 32, borderRadius: 8, background: 'var(--green-light)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Wrench size={16} color="var(--green)" /></div>
                  <span style={{ fontSize: 12, fontWeight: 600, color: 'var(--navy)' }}>Annual Savings</span>
                </div>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: 28, fontWeight: 700, color: 'var(--green)' }}>30%</div>
                <div style={{ fontSize: 11, color: 'var(--gray-400)' }}>on energy with regular maintenance</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section className="section section-alt">
        <div className="container">
          <SectionTitle overline={t('services.overline')} title={t('services.title')} subtitle={t('services.subtitle')} />
          <div ref={refCards} className="grid-3" style={{ marginBottom: 16 }}>
            <ServiceCard icon={<Wrench size={26} />} title={t('services.maintenance.title')} desc={t('services.maintenance.desc')} to="/services/maintenance" tag={t('services.maintenance.tag')} color="var(--orange)" bgColor="var(--warm-100)" />
            <ServiceCard icon={<Snowflake size={26} />} title={t('services.heatpump.title')} desc={t('services.heatpump.desc')} to="/services/heat-pump" color="var(--blue)" bgColor="var(--sky)" />
            <ServiceCard icon={<Flame size={26} />} title={t('services.boiler.title')} desc={t('services.boiler.desc')} to="/services/electric-boiler" color="#C4641E" bgColor="#FEF0E3" />
          </div>
          <div className="grid-2" style={{ gap: 24, maxWidth: 660, margin: '0 auto' }}>
            <ServiceCard icon={<Wind size={26} />} title={t('services.hrv.title')} desc={t('services.hrv.desc')} to="/services/hrv" color="var(--green)" bgColor="var(--green-light)" />
            <ServiceCard icon={<Zap size={26} />} title={t('services.electrical.title')} desc={t('services.electrical.desc')} to="/services/electrical" color="var(--amber)" bgColor="#FEF7E0" />
          </div>
        </div>
      </section>

      {/* ── WHY US ── */}
      <section className="section">
        <div className="container">
          <SectionTitle overline={t('whyUs.overline')} title={t('whyUs.title')} />
          <div ref={refWhy} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 20 }}>
            {[Shield, Wrench, Users, MapPin].map((Icon, i) => {
              const items = t('whyUs.items');
              const item = items[i];
              return (
                <div key={i} style={{
                  textAlign: 'center', padding: '36px 24px', borderRadius: 'var(--radius-lg)',
                  background: 'var(--warm-50)', border: '1px solid var(--warm-200)',
                  opacity: visWhy ? 1 : 0, transform: visWhy ? 'translateY(0)' : 'translateY(20px)',
                  transition: `all 0.5s ease ${i * 0.1}s`,
                }}>
                  <div style={{ color: 'var(--orange)', marginBottom: 12, display: 'flex', justifyContent: 'center' }}><Icon size={24} /></div>
                  <h4 style={{ fontFamily: 'var(--font-display)', fontSize: 17, fontWeight: 700, color: 'var(--navy)', marginBottom: 8 }}>{item.title}</h4>
                  <p style={{ fontSize: 14, color: 'var(--gray-500)', lineHeight: 1.6 }}>{item.desc}</p>
                </div>
              );
            })}
          </div>
          {/* BBB Accreditation Banner */}
          <a href="https://www.bbb.org/ca/ns/bedford/profile/heating-and-air-conditioning/owen-hvac-corp-0087-90330" target="_blank" rel="noopener noreferrer" style={{
            display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 24,
            marginTop: 28, padding: '24px 32px', borderRadius: 'var(--radius-lg)',
            background: 'linear-gradient(135deg, #F0F7FF, #E6F0FA)',
            border: '1px solid #C8DFF5', textDecoration: 'none',
            transition: 'all 0.3s',
          }}
            onMouseEnter={e => e.currentTarget.style.boxShadow = '0 8px 24px rgba(1,90,117,0.1)'}
            onMouseLeave={e => e.currentTarget.style.boxShadow = 'none'}
          >
            <img src="https://m.bbb.org/terminuscontent/dist/img/dynamic-seal/ab-seal-horizontal-can-blue.svg?tx=w_192" alt="BBB Accredited Business" style={{ width: 140 }} />
            <div>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: 18, fontWeight: 700, color: '#015A75' }}>BBB Accredited Business — A+ Rating</div>
              <div style={{ fontSize: 14, color: 'var(--gray-500)', marginTop: 4 }}>Owen HVAC Corp is proud to be recognized by the Better Business Bureau for our commitment to trust and quality service.</div>
            </div>
          </a>
        </div>
      </section>
      <section style={{ padding: '44px 24px', background: 'var(--gray-50)', borderTop: '1px solid var(--gray-200)', borderBottom: '1px solid var(--gray-200)' }}>
        <div style={{ maxWidth: 800, margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 44, flexWrap: 'wrap' }}>
          <span style={{ fontSize: 13, fontWeight: 500, color: 'var(--gray-400)' }}>Trusted Partners</span>
          {[IMG.partner1, IMG.partner2, IMG.partner3].map((p, i) => (
            <img key={i} src={p} alt="Partner" style={{ height: 44, opacity: 0.45, filter: 'grayscale(100%)', transition: 'all 0.3s' }}
              onMouseEnter={e => { e.target.style.opacity = 1; e.target.style.filter = 'grayscale(0)'; }}
              onMouseLeave={e => { e.target.style.opacity = 0.45; e.target.style.filter = 'grayscale(100%)'; }}
            />
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="section-dark" style={{ padding: '80px 24px', textAlign: 'center' }}>
        <div style={{ maxWidth: 560, margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(24px, 4vw, 36px)', fontWeight: 700, color: 'white', marginBottom: 16 }}>{t('cta.title')}</h2>
          <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.65)', marginBottom: 32, lineHeight: 1.7 }}>{t('cta.subtitle')}</p>
          <CTA label={t('cta.button')} to="/contact" />
        </div>
      </section>
    </div>
  );
}
