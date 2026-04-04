import { Flame, CheckCircle, Droplets, Wrench, Zap, ThermometerSun } from 'lucide-react';
import { useOnScreen } from '../hooks';
import { PageHero, SectionTitle, CTA } from '../components/ui';

const services = [
  { icon: <Flame size={22} />, title: 'Electric Boiler Installation', desc: 'Professional installation of electric boilers for hydronic heating systems. We size and install the right unit for your home.' },
  { icon: <Wrench size={22} />, title: 'Electric Boiler Repair', desc: 'Diagnosis and repair of all electric boiler issues — heating elements, thermostats, pressure valves, and control boards.' },
  { icon: <ThermometerSun size={22} />, title: 'Electric Boiler Maintenance', desc: 'Annual inspection, pressure check, element testing, and system flush to keep your boiler running efficiently.' },
  { icon: <Droplets size={22} />, title: 'Electric Water Heater Install', desc: 'Installation and replacement of electric water heaters — tank and tankless models for reliable hot water.' },
  { icon: <Wrench size={22} />, title: 'Electric Water Heater Repair', desc: 'Troubleshooting and repair for all electric water heater problems — leaks, no hot water, inconsistent temperature.' },
  { icon: <Zap size={22} />, title: 'Efficiency Consultation', desc: 'We assess your current heating system and recommend the most efficient electric heating solution for your home.' },
];

const advantages = [
  { title: 'Near 100% Efficiency', desc: 'Electric boilers convert virtually all energy into heat — no combustion waste.' },
  { title: 'Zero Emissions', desc: 'No gas lines, no exhaust vents, no carbon monoxide risk. Clean and safe.' },
  { title: 'Quiet Operation', desc: 'Significantly quieter than gas or oil boilers — no burner noise.' },
  { title: 'Low Maintenance', desc: 'Fewer moving parts mean fewer breakdowns and lower maintenance costs.' },
  { title: 'Compact Size', desc: 'Electric boilers are smaller than gas equivalents — ideal for tight spaces.' },
  { title: 'Long Lifespan', desc: 'With proper maintenance, electric boilers last 15–20+ years.' },
];

export default function ElectricBoilerPage() {
  const [refSvc, visSvc] = useOnScreen();
  const [refAdv, visAdv] = useOnScreen();

  return (
    <div>
      <PageHero overline="New Service" title="Electric Boiler Services" subtitle="Installation, repair, and maintenance for electric boilers and water heaters. Efficient, clean, and reliable heating for your home." />

      <section className="section">
        <div className="container">
          <SectionTitle overline="What We Offer" title="Electric Boiler & Water Heater Services" />
          <div ref={refSvc} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 20 }}>
            {services.map((s, i) => (
              <div key={i} style={{
                background: 'white', borderRadius: 'var(--radius-lg)', padding: 28,
                border: '1px solid var(--gray-200)',
                opacity: visSvc ? 1 : 0, transform: visSvc ? 'translateY(0)' : 'translateY(24px)',
                transition: `all 0.5s ease ${i * 0.08}s`,
              }}>
                <div style={{ width: 44, height: 44, borderRadius: 11, background: '#FEF0E3', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#C4641E', marginBottom: 14 }}>{s.icon}</div>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 17, fontWeight: 700, color: 'var(--navy)', marginBottom: 8 }}>{s.title}</h3>
                <p style={{ fontSize: 14, lineHeight: 1.7, color: 'var(--gray-500)' }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-warm">
        <div className="container">
          <SectionTitle overline="Why Electric" title="Advantages of Electric Boilers" subtitle="Electric boilers are an excellent choice for Nova Scotia homes — efficient, safe, and environmentally friendly." />
          <div ref={refAdv} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 20 }}>
            {advantages.map((a, i) => (
              <div key={i} style={{
                display: 'flex', gap: 14, padding: '20px 24px',
                background: 'white', borderRadius: 'var(--radius)', border: '1px solid var(--warm-200)',
                opacity: visAdv ? 1 : 0, transform: visAdv ? 'translateY(0)' : 'translateY(16px)',
                transition: `all 0.4s ease ${i * 0.07}s`,
              }}>
                <CheckCircle size={20} color="var(--green)" style={{ flexShrink: 0, marginTop: 2 }} />
                <div>
                  <h4 style={{ fontSize: 15, fontWeight: 600, color: 'var(--navy)', marginBottom: 4 }}>{a.title}</h4>
                  <p style={{ fontSize: 13, lineHeight: 1.6, color: 'var(--gray-500)' }}>{a.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-dark" style={{ padding: '72px 24px', textAlign: 'center' }}>
        <div style={{ maxWidth: 520, margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(22px, 3.5vw, 32px)', fontWeight: 700, color: 'white', marginBottom: 14 }}>Interested in an Electric Boiler?</h2>
          <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.65)', marginBottom: 28, lineHeight: 1.7 }}>Get a free consultation to find the right electric heating solution for your home.</p>
          <CTA label="Get Free Consultation" to="/contact" />
        </div>
      </section>
    </div>
  );
}
