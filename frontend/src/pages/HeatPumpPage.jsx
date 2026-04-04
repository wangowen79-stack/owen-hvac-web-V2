import { Snowflake } from 'lucide-react';
import { useOnScreen } from '../hooks';
import { PageHero, SectionTitle, CTA } from '../components/ui';
import IMG from '../images';

export default function HeatPumpPage() {
  const [ref1, v1] = useOnScreen();

  return (
    <div>
      <PageHero overline="Heating & Cooling" title="Heat Pump Services" subtitle="Installation, repair, and seasonal maintenance for all heat pump systems. Energy-efficient comfort for your home year-round." />

      <section className="section">
        <div className="container">
          <div ref={ref1} className="grid-2">
            <div style={{ opacity: v1 ? 1 : 0, transform: v1 ? 'translateX(0)' : 'translateX(-28px)', transition: 'all 0.7s ease' }}>
              <SectionTitle overline="About Heat Pumps" title="Efficient Heating & Cooling in One System" center={false} />
              <p style={{ fontSize: 16, lineHeight: 1.8, color: 'var(--gray-600)', marginBottom: 20 }}>
                A heat pump achieves both heating and cooling by circulating refrigerant. It absorbs heat from indoors or outdoors and transfers it to the desired location. Not only does a heat pump provide warmth during winter, but it also cools indoor spaces during summer.
              </p>
              <p style={{ fontSize: 16, lineHeight: 1.8, color: 'var(--gray-600)', marginBottom: 20 }}>
                Known for energy efficiency and environmental friendliness, heat pumps are widely used in residential settings across Nova Scotia. We install, repair, and maintain all major brands.
              </p>
              <h4 style={{ fontFamily: 'var(--font-display)', fontSize: 17, fontWeight: 700, color: 'var(--navy)', marginBottom: 12, marginTop: 28 }}>Our Heat Pump Services</h4>
              {['New heat pump installation & sizing', 'Heat pump repair & troubleshooting', 'Seasonal maintenance & tune-up', 'Refrigerant check & recharge', 'Ductless mini-split installation', 'Central heat pump systems'].map((s, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10 }}>
                  <div style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--blue)', flexShrink: 0 }} />
                  <span style={{ fontSize: 15, color: 'var(--gray-600)' }}>{s}</span>
                </div>
              ))}
              <div style={{ marginTop: 28 }}><CTA label="Get a Quote" to="/contact" /></div>
            </div>
            <div style={{ opacity: v1 ? 1 : 0, transform: v1 ? 'translateX(0)' : 'translateX(28px)', transition: 'all 0.7s ease 0.2s' }}>
              <img src={IMG.servicesHero} alt="Heat pump installation" style={{ width: '100%', height: 400, objectFit: 'cover', borderRadius: 'var(--radius-lg)', boxShadow: '0 20px 50px rgba(0,0,0,0.1)' }} />
            </div>
          </div>
        </div>
      </section>

      <section className="section-dark" style={{ padding: '72px 24px', textAlign: 'center' }}>
        <div style={{ maxWidth: 520, margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(22px, 3.5vw, 32px)', fontWeight: 700, color: 'white', marginBottom: 14 }}>Need a Heat Pump Service?</h2>
          <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.65)', marginBottom: 28, lineHeight: 1.7 }}>Whether it's a new installation or a repair, we've got you covered.</p>
          <CTA label="Contact Us" to="/contact" />
        </div>
      </section>
    </div>
  );
}
