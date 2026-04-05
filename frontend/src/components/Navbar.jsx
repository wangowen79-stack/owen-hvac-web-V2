import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Globe } from 'lucide-react';
import { useScrolled } from '../hooks';
import { useI18n } from '../i18n';
import IMG from '../images';

const navLinks = [
  { path: '/', key: 'home' },
  { path: '/about', key: 'about' },
  { path: '/services', key: 'services' },
  { path: '/blog', key: 'blog' },
  { path: '/contact', key: 'contact' },
];

export default function Navbar() {
  const scrolled = useScrolled();
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const { t, lang, setLang } = useI18n();

  const isActive = (path) => path === '/' ? location.pathname === '/' : location.pathname.startsWith(path);

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
      background: scrolled ? 'rgba(30,58,95,0.97)' : 'rgba(30,58,95,0.88)',
      backdropFilter: 'blur(20px)',
      borderBottom: scrolled ? '1px solid rgba(255,255,255,0.06)' : 'none',
      transition: 'all 0.3s ease',
      boxShadow: scrolled ? '0 4px 30px rgba(0,0,0,0.12)' : 'none',
    }}>
      <div style={{
        maxWidth: 1200, margin: '0 auto', padding: '0 24px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        height: scrolled ? 90 : 108, transition: 'height 0.3s ease',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
          <Link to="/" style={{ display: 'flex', alignItems: 'center' }} onClick={() => setMobileOpen(false)}>
            <img src={IMG.logo} alt="Owen HVAC" style={{ height: 90, filter: 'brightness(1.1)' }} />
          </Link>
          <a href="https://www.bbb.org/ca/ns/bedford/profile/heating-and-air-conditioning/owen-hvac-corp-0087-90330?utm_campaign=bbb_seal&utm_content=Owen%20HVAC%20Corp&utm_medium=website&utm_source=seal_click_90330" target="_blank" rel="noopener noreferrer" style={{
            display: 'flex', alignItems: 'center', gap: 0,
            textDecoration: 'none', transition: 'all 0.2s',
          }}>
            <img src="https://m.bbb.org/terminuscontent/dist/img/dynamic-seal/ab-seal-horizontal-can-blue.svg?tx=w_360" alt="Owen HVAC Corp BBB accredited business profile" style={{ height: 70, filter: 'brightness(1.5)' }} />
            <div style={{ borderLeft: '2px solid rgba(255,255,255,0.15)', paddingLeft: 6, paddingRight: 0, marginRight: -4 }}>
              <div style={{ fontSize: 14, fontWeight: 700, color: 'var(--gold)', lineHeight: 1.15 }}>A+ Rating</div>
              <div style={{ fontSize: 10, color: 'rgba(255,255,255,0.6)', whiteSpace: 'nowrap' }}>BBB Accredited</div>
            </div>
            <img src={IMG.partner3} alt="Certified Partner" style={{ height: 90, objectFit: 'contain', marginLeft: -30 }} />
          </a>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: 2, marginLeft: -50 }} className="desktop-nav">
          {navLinks.map(l => (
            <Link key={l.key} to={l.path} style={{
              background: isActive(l.path) ? 'rgba(232,139,48,0.14)' : 'transparent',
              border: 'none', color: isActive(l.path) ? 'var(--orange)' : 'rgba(255,255,255,0.8)',
              padding: '7px 14px', borderRadius: 8, fontSize: 14, fontWeight: 500,
              transition: 'all 0.2s',
            }}>{t(`nav.${l.key}`)}</Link>
          ))}

          <div style={{ position: 'relative', marginLeft: 4 }}>
            <select value={lang} onChange={e => setLang(e.target.value)} style={{
              background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.12)',
              color: 'rgba(255,255,255,0.8)', padding: '7px 28px 7px 10px', borderRadius: 8,
              fontSize: 13, fontWeight: 500, cursor: 'pointer', appearance: 'none',
              WebkitAppearance: 'none', outline: 'none',
            }}>
              <option value="en" style={{ color: '#333', background: 'white' }}>English</option>
              <option value="zh" style={{ color: '#333', background: 'white' }}>中文</option>
              <option value="fr" style={{ color: '#333', background: 'white' }}>Français</option>
            </select>
            <Globe size={13} style={{ position: 'absolute', right: 8, top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none', color: 'rgba(255,255,255,0.5)' }} />
          </div>

          <Link to="/contact" style={{
            background: 'linear-gradient(135deg, var(--copper), var(--copper-dark))',
            border: 'none', color: 'white', padding: '9px 18px', borderRadius: 10,
            fontSize: 14, fontWeight: 600, marginLeft: 6,
            boxShadow: '0 2px 12px rgba(199,123,63,0.25)',
          }}>{t('nav.bookService')}</Link>
        </div>

        <button onClick={() => setMobileOpen(!mobileOpen)} className="mobile-toggle" style={{
          background: 'none', border: 'none', color: 'white', display: 'none', padding: 4,
        }}>
          {mobileOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {mobileOpen && (
        <div style={{
          background: 'var(--navy)', padding: '12px 24px 24px',
          display: 'flex', flexDirection: 'column', gap: 4,
          animation: 'fadeIn 0.2s ease',
        }}>
          {navLinks.map(l => (
            <Link key={l.key} to={l.path} onClick={() => setMobileOpen(false)} style={{
              background: isActive(l.path) ? 'rgba(232,139,48,0.1)' : 'transparent',
              color: isActive(l.path) ? 'var(--orange)' : 'rgba(255,255,255,0.85)',
              padding: '12px 16px', borderRadius: 8, fontSize: 15, fontWeight: 500, display: 'block',
            }}>{t(`nav.${l.key}`)}</Link>
          ))}
          <div style={{ display: 'flex', gap: 8, marginTop: 8 }}>
            <select value={lang} onChange={e => { setLang(e.target.value); setMobileOpen(false); }} style={{
              flex: 1, background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)',
              color: 'rgba(255,255,255,0.8)', padding: '12px', borderRadius: 10,
              fontSize: 14, fontWeight: 500, cursor: 'pointer',
            }}>
              <option value="en" style={{ color: '#333' }}>English</option>
              <option value="zh" style={{ color: '#333' }}>中文</option>
              <option value="fr" style={{ color: '#333' }}>Français</option>
            </select>
            <Link to="/contact" onClick={() => setMobileOpen(false)} style={{
              flex: 1, background: 'var(--orange)', color: 'white', padding: '12px',
              borderRadius: 10, fontSize: 14, fontWeight: 600, textAlign: 'center',
            }}>{t('nav.bookService')}</Link>
          </div>
        </div>
      )}
    </nav>
  );
}
