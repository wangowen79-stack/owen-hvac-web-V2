import { Link } from 'react-router-dom';
import { Phone, Mail, Clock, MapPin, Facebook, Youtube } from 'lucide-react';
import { useI18n } from '../i18n';
import IMG from '../images';

export default function Footer() {
  const { t } = useI18n();
  const pages = [
    { path: '/', label: t('nav.home') },
    { path: '/about', label: t('nav.about') },
    { path: '/services', label: t('nav.services') },
    { path: '/services/maintenance', label: t('services.maintenance.title') },
    { path: '/services/electric-boiler', label: t('services.boiler.title') },
    { path: '/blog', label: t('nav.blog') },
    { path: '/contact', label: t('nav.contact') },
    { path: '/faq', label: t('nav.faq') },
  ];

  return (
    <footer style={{ background: 'var(--navy)', color: 'rgba(255,255,255,0.7)', padding: '64px 24px 28px' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 36, marginBottom: 40 }}>
          <div>
            <img src={IMG.logo} alt="Owen HVAC" style={{ height: 90, marginBottom: 18 }} />
            <p style={{ fontSize: 14, lineHeight: 1.7, maxWidth: 260 }}>{t('footer.desc')}</p>
            <div style={{ display: 'flex', gap: 10, marginTop: 16 }}>
              <a href="https://facebook.com/owenhvac" target="_blank" rel="noopener noreferrer" style={{
                width: 36, height: 36, borderRadius: 8, background: 'rgba(255,255,255,0.08)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: 'rgba(255,255,255,0.6)', transition: 'all 0.2s',
              }}><Facebook size={16} /></a>
              <a href="https://youtube.com/@owenhvac" target="_blank" rel="noopener noreferrer" style={{
                width: 36, height: 36, borderRadius: 8, background: 'rgba(255,255,255,0.08)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: 'rgba(255,255,255,0.6)', transition: 'all 0.2s',
              }}><Youtube size={16} /></a>
            </div>
          </div>

          <div>
            <h4 style={{ color: 'white', fontSize: 14, fontWeight: 600, marginBottom: 14, fontFamily: 'var(--font-display)' }}>{t('footer.links')}</h4>
            {pages.map(p => (
              <div key={p.path} style={{ marginBottom: 7 }}>
                <Link to={p.path} style={{ fontSize: 13, color: 'rgba(255,255,255,0.55)', transition: 'color 0.2s' }}>{p.label}</Link>
              </div>
            ))}
          </div>

          <div>
            <h4 style={{ color: 'white', fontSize: 14, fontWeight: 600, marginBottom: 14, fontFamily: 'var(--font-display)' }}>{t('footer.contactTitle')}</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {[
                { icon: <Phone size={14} />, text: t('contact.phone1') },
                { icon: <Mail size={14} />, text: t('contact.emailAddr') },
                { icon: <Clock size={14} />, text: t('contact.hours') },
                { icon: <MapPin size={14} />, text: t('contact.area') },
              ].map((c, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 9 }}>
                  <span style={{ color: 'var(--orange)' }}>{c.icon}</span>
                  <span style={{ fontSize: 13 }}>{c.text}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h4 style={{ color: 'white', fontSize: 14, fontWeight: 600, marginBottom: 14, fontFamily: 'var(--font-display)' }}>Daikin Comfort Pro</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12, alignItems: 'flex-start' }}>
              <div style={{ background: 'white', borderRadius: 10, padding: '10px 14px' }}>
                <img src={IMG.daikinLogo} alt="Daikin" style={{ height: 34, width: 150, objectFit: 'contain' }} />
              </div>
              <p style={{ fontSize: 13, lineHeight: 1.6, maxWidth: 220 }}>
                Local Daikin heat pump installation and support for Nova Scotia homes.
              </p>
            </div>

          </div>
        </div>

        <div style={{
          borderTop: '1px solid rgba(255,255,255,0.07)', paddingTop: 18,
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          flexWrap: 'wrap', gap: 10,
        }}>
          <span style={{ fontSize: 12 }}>© {new Date().getFullYear()} {t('footer.copyright')}</span>
          <span style={{ fontSize: 12 }}>Halifax · Dartmouth · Nova Scotia</span>
        </div>
      </div>
    </footer>
  );
}
