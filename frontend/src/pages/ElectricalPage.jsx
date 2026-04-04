import { Zap } from 'lucide-react';
import { useOnScreen } from '../hooks';
import { PageHero, SectionTitle, CTA } from '../components/ui';
import IMG from '../images';

export default function ElectricalPage() {
  const [ref1, v1] = useOnScreen();

  return (
    <div>
      <PageHero overline="Home Electrical" title="Electrical Services" subtitle="Professional electrical installation, maintenance, and upgrades for your home. Safety first, always." />

      <section className="section">
        <div className="container">
          <div ref={ref1} className="grid-2">
            <div style={{ opacity: v1 ? 1 : 0, transform: v1 ? 'translateX(0)' : 'translateX(-28px)', transition: 'all 0.7s ease' }}>
              <SectionTitle overline="Residential Electrical" title="Safe & Reliable Electrical Work" center={false} />
              <p style={{ fontSize: 16, lineHeight: 1.8, color: 'var(--gray-600)', marginBottom: 20 }}>
                From turning on lights to running HVAC systems, electricity is the backbone of modern home comfort. To ensure safety and proper functioning, your electrical systems require correct installation, usage, and maintenance.
              </p>
              <p style={{ fontSize: 16, lineHeight: 1.8, color: 'var(--gray-600)', marginBottom: 20 }}>
                Our licensed electricians handle everything from panel upgrades for heat pump installations to general wiring and safety inspections.
              </p>
              <h4 style={{ fontFamily: 'var(--font-display)', fontSize: 17, fontWeight: 700, color: 'var(--navy)', marginBottom: 12, marginTop: 28 }}>Our Electrical Services</h4>
              {['Electrical panel upgrades (100A/200A)', 'Circuit installation for HVAC systems', 'Dedicated circuits for electric boilers', 'Safety inspections & code compliance', 'Lighting installation & upgrades', 'General electrical troubleshooting'].map((s, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10 }}>
                  <div style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--amber)', flexShrink: 0 }} />
                  <span style={{ fontSize: 15, color: 'var(--gray-600)' }}>{s}</span>
                </div>
              ))}
              <div style={{ marginTop: 28 }}><CTA label="Get a Quote" to="/contact" /></div>
            </div>
            <div style={{ opacity: v1 ? 1 : 0, transform: v1 ? 'translateX(0)' : 'translateX(28px)', transition: 'all 0.7s ease 0.2s' }}>
              <img src={IMG.electrical} alt="Electrical work" style={{ width: '100%', height: 400, objectFit: 'cover', borderRadius: 'var(--radius-lg)', boxShadow: '0 20px 50px rgba(0,0,0,0.1)' }} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
