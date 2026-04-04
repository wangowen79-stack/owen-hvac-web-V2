import { Wrench, CheckCircle, Clock, ThermometerSun, Fan, Flame } from 'lucide-react';
import { useOnScreen } from '../hooks';
import { PageHero, SectionTitle, CTA } from '../components/ui';
import IMG from '../images';

const services = [
  { icon: <ThermometerSun size={22} />, title: 'Heat Pump Maintenance', desc: 'Annual tune-up, refrigerant check, coil cleaning, filter replacement, and full performance test for all heat pump brands.' },
  { icon: <Fan size={22} />, title: 'Central AC Cleaning', desc: 'Comprehensive cleaning of evaporator and condenser coils, drain line flush, and system efficiency test.' },
  { icon: <Fan size={22} />, title: 'Mini-Split Deep Cleaning', desc: 'Professional dismantling and deep wash of indoor unit — heat exchanger, blower fan, drain pan, and filters.' },
  { icon: <Flame size={22} />, title: 'Furnace / Boiler Tune-Up', desc: 'Burner inspection, heat exchanger check, safety controls test, and filter replacement for oil and electric furnaces.' },
];

const benefits = [
  'Extend equipment lifespan by 10+ years',
  'Reduce energy bills by up to 30%',
  'Prevent costly emergency breakdowns',
  'Improve indoor air quality',
  'Maintain manufacturer warranty',
  'Ensure safe operation',
];

export default function MaintenancePage() {
  const [refSvc, visSvc] = useOnScreen();
  const [refBen, visBen] = useOnScreen();

  return (
    <div>
      <PageHero overline="Our #1 Service" title="HVAC Maintenance & Cleaning" subtitle="Keep your heating and cooling systems running at peak efficiency with our professional maintenance and deep cleaning services." />

      <section className="section">
        <div className="container">
          <SectionTitle overline="What We Offer" title="Maintenance Services" subtitle="We service all major brands — Daikin, Mitsubishi, LG, Fujitsu, Carrier, and more." />
          <div ref={refSvc} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 20 }}>
            {services.map((s, i) => (
              <div key={i} style={{
                background: 'white', borderRadius: 'var(--radius-lg)', padding: 30,
                border: '1px solid var(--gray-200)',
                opacity: visSvc ? 1 : 0, transform: visSvc ? 'translateY(0)' : 'translateY(24px)',
                transition: `all 0.5s ease ${i * 0.1}s`,
              }}>
                <div style={{ width: 46, height: 46, borderRadius: 12, background: 'var(--warm-100)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--orange)', marginBottom: 16 }}>{s.icon}</div>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 18, fontWeight: 700, color: 'var(--navy)', marginBottom: 10 }}>{s.title}</h3>
                <p style={{ fontSize: 14, lineHeight: 1.7, color: 'var(--gray-500)' }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-warm">
        <div className="container">
          <div className="grid-2">
            <div>
              <SectionTitle overline="Why Maintenance Matters" title="Benefits of Regular HVAC Maintenance" center={false} />
              <div ref={refBen} style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                {benefits.map((b, i) => (
                  <div key={i} style={{
                    display: 'flex', alignItems: 'center', gap: 12,
                    opacity: visBen ? 1 : 0, transform: visBen ? 'translateX(0)' : 'translateX(-20px)',
                    transition: `all 0.4s ease ${i * 0.08}s`,
                  }}>
                    <CheckCircle size={20} color="var(--green)" style={{ flexShrink: 0 }} />
                    <span style={{ fontSize: 15, color: 'var(--gray-700)' }}>{b}</span>
                  </div>
                ))}
              </div>
              <div style={{ marginTop: 32 }}><CTA label="Book Maintenance" to="/contact" /></div>
            </div>
            <div style={{ background: 'white', borderRadius: 'var(--radius-lg)', padding: 32, border: '1px solid var(--warm-200)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 20 }}>
                <Clock size={20} color="var(--orange)" />
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 20, fontWeight: 700, color: 'var(--navy)' }}>Recommended Schedule</h3>
              </div>
              {[
                { season: 'Spring (Mar–May)', action: 'AC / heat pump cooling tune-up' },
                { season: 'Fall (Sep–Nov)', action: 'Heating system inspection' },
                { season: 'Annually', action: 'Mini-split deep cleaning' },
                { season: 'Every 1–3 months', action: 'Filter replacement' },
              ].map((s, i) => (
                <div key={i} style={{ padding: '14px 0', borderBottom: i < 3 ? '1px solid var(--gray-100)' : 'none', display: 'flex', justifyContent: 'space-between', gap: 12 }}>
                  <span style={{ fontSize: 14, fontWeight: 600, color: 'var(--navy)', whiteSpace: 'nowrap' }}>{s.season}</span>
                  <span style={{ fontSize: 14, color: 'var(--gray-500)', textAlign: 'right' }}>{s.action}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-dark" style={{ padding: '72px 24px', textAlign: 'center' }}>
        <div style={{ maxWidth: 520, margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(22px, 3.5vw, 32px)', fontWeight: 700, color: 'white', marginBottom: 14 }}>Don't Wait for a Breakdown</h2>
          <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.65)', marginBottom: 28, lineHeight: 1.7 }}>Schedule your seasonal maintenance today and keep your home comfortable all year.</p>
          <CTA label="Schedule Now" to="/contact" />
        </div>
      </section>
    </div>
  );
}
