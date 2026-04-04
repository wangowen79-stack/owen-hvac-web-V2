import { Shield, Star, Award, MapPin } from 'lucide-react';
import { useOnScreen } from '../hooks';
import { PageHero, SectionTitle, CTA } from '../components/ui';
import { useI18n } from '../i18n';
import IMG from '../images';

export default function AboutPage() {
  const { t } = useI18n();
  const [ref1, v1] = useOnScreen();

  return (
    <div>
      <PageHero overline={t('nav.about')} title="Owen HVAC Corp." subtitle="Professional HVAC company with certifications in both refrigeration and building electrical work." />
      <section className="section">
        <div className="container">
          <div ref={ref1} className="grid-2">
            <div style={{ opacity: v1 ? 1 : 0, transform: v1 ? 'translateX(0)' : 'translateX(-28px)', transition: 'all 0.7s ease' }}>
              <div style={{ fontSize: 16, lineHeight: 1.9, color: 'var(--gray-600)' }}>
                <p style={{ marginBottom: 18 }}>OWEN HVAC CORP. is a professional HVAC company with certifications in both refrigeration and building electrical work. We specialize in providing high quality heating, ventilation, and air conditioning solutions for residential clients across Nova Scotia.</p>
                <p style={{ marginBottom: 18 }}>Our services include HVAC maintenance and cleaning, heat pump installation and repair, electric boiler services, HRV ventilation, and electrical work. We are dedicated to enhancing energy efficiency and helping our clients reduce consumption and costs.</p>
                <p style={{ marginBottom: 18 }}>Our team consists of experienced professionals passionate about their work. We approach each project with professionalism and attention to detail, delivering tailored solutions. Our commitment to quality, reliability, and customer care has earned us a strong reputation.</p>
                <p>Whether you need routine maintenance, a new system installation, or emergency repairs, OWEN HVAC CORP. is your trusted partner for home comfort.</p>
              </div>
              <div style={{ marginTop: 32 }}><CTA label={t('nav.bookService')} to="/contact" /></div>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14, opacity: v1 ? 1 : 0, transform: v1 ? 'translateX(0)' : 'translateX(28px)', transition: 'all 0.7s ease 0.2s' }}>
              <img src={IMG.about1} alt="Owen HVAC" style={{ width: '100%', borderRadius: 'var(--radius)', objectFit: 'cover', height: 220, gridColumn: '1 / -1' }} />
              <img src={IMG.about2} alt="Owen HVAC" style={{ width: '100%', borderRadius: 'var(--radius)', objectFit: 'cover', height: 180 }} />
              <img src={IMG.about3} alt="Owen HVAC" style={{ width: '100%', borderRadius: 'var(--radius)', objectFit: 'cover', height: 180 }} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
