import { Wind } from 'lucide-react';
import { useOnScreen } from '../hooks';
import { PageHero, SectionTitle, CTA } from '../components/ui';
import IMG from '../images';

export default function HRVPage() {
  const [ref1, v1] = useOnScreen();

  return (
    <div>
      <PageHero overline="Indoor Air Quality" title="HRV Ventilation" subtitle="Heat Recovery Ventilation systems for superior indoor air quality. Fresh air without wasting energy." />

      <section className="section">
        <div className="container">
          <div ref={ref1} className="grid-2" style={{ direction: 'rtl' }}>
            <div style={{ direction: 'ltr', opacity: v1 ? 1 : 0, transform: v1 ? 'translateX(0)' : 'translateX(28px)', transition: 'all 0.7s ease' }}>
              <SectionTitle overline="About HRV" title="Breathe Cleaner Air at Home" center={false} />
              <p style={{ fontSize: 16, lineHeight: 1.8, color: 'var(--gray-600)', marginBottom: 20 }}>
                Ventilation systems play a crucial role in indoor air quality and health. They circulate fresh air, expel stagnant air, humidity, and harmful substances, ensuring your home stays fresh, clean, and comfortable.
              </p>
              <p style={{ fontSize: 16, lineHeight: 1.8, color: 'var(--gray-600)', marginBottom: 20 }}>
                Adequate ventilation helps prevent mold growth, reduces allergens, and minimizes the accumulation of harmful gases. Whether in your home or workplace, an effective HRV system enhances quality of life.
              </p>
              <h4 style={{ fontFamily: 'var(--font-display)', fontSize: 17, fontWeight: 700, color: 'var(--navy)', marginBottom: 12, marginTop: 28 }}>Our HRV Services</h4>
              {['HRV system installation', 'HRV maintenance & filter cleaning', 'HRV repair & troubleshooting', 'Indoor air quality assessment', 'Ventilation system upgrades'].map((s, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10 }}>
                  <div style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--green)', flexShrink: 0 }} />
                  <span style={{ fontSize: 15, color: 'var(--gray-600)' }}>{s}</span>
                </div>
              ))}
              <div style={{ marginTop: 28 }}><CTA label="Get a Quote" to="/contact" /></div>
            </div>
            <div style={{ direction: 'ltr', opacity: v1 ? 1 : 0, transform: v1 ? 'translateX(0)' : 'translateX(-28px)', transition: 'all 0.7s ease 0.2s' }}>
              <img src={IMG.hrv} alt="HRV system" style={{ width: '100%', height: 400, objectFit: 'cover', borderRadius: 'var(--radius-lg)', boxShadow: '0 20px 50px rgba(0,0,0,0.1)' }} />
            </div>
          </div>
        </div>
      </section>

      <section className="section-dark" style={{ padding: '72px 24px', textAlign: 'center' }}>
        <div style={{ maxWidth: 520, margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(22px, 3.5vw, 32px)', fontWeight: 700, color: 'white', marginBottom: 14 }}>Improve Your Indoor Air Quality</h2>
          <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.65)', marginBottom: 28, lineHeight: 1.7 }}>Contact us to discuss the right HRV solution for your home.</p>
          <CTA label="Contact Us" to="/contact" />
        </div>
      </section>
    </div>
  );
}
