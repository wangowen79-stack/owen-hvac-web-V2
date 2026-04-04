import { useState } from 'react';
import { Phone, Mail, Clock, MapPin, ChevronDown } from 'lucide-react';
import { PageHero, SectionTitle } from '../components/ui';
import { useI18n } from '../i18n';

const inputStyle = {
  width: '100%', padding: '13px 16px', borderRadius: 'var(--radius)',
  border: '1.5px solid var(--gray-200)', fontSize: 15,
  fontFamily: 'var(--font-body)', outline: 'none',
  transition: 'border-color 0.2s', background: 'white',
};

export default function ContactPage() {
  const { t } = useI18n();
  const [form, setForm] = useState({ name: '', email: '', phone: '', address: '', service: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const update = (f) => (e) => setForm({ ...form, [f]: e.target.value });
  const handleSubmit = async () => {
    if (!form.name || !form.email) return;
    try {
      const API_URL = import.meta.env.VITE_API_URL || '';
      await fetch(`${API_URL}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
    } catch {}
    setSubmitted(true);
  };

  const serviceOptions = t('contact.serviceOptions');

  return (
    <div>
      <PageHero overline={t('nav.contact')} title={t('contact.title')} subtitle={t('contact.subtitle')} />

      <section className="section">
        <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 360px', gap: 56 }} >
          <div style={{ background: 'white', borderRadius: 'var(--radius-lg)', padding: 36, border: '1px solid var(--gray-200)', boxShadow: '0 4px 20px rgba(0,0,0,0.03)' }}>
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 24, fontWeight: 700, color: 'var(--navy)', marginBottom: 6 }}>{t('contact.formTitle')}</h3>
            <p style={{ fontSize: 14, color: 'var(--gray-500)', marginBottom: 28 }}>{t('contact.subtitle')}</p>

            {submitted ? (
              <div style={{ textAlign: 'center', padding: '44px 20px' }}>
                <div style={{ width: 60, height: 60, borderRadius: '50%', background: 'var(--green-light)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 18px', fontSize: 26, color: 'var(--green)' }}>✓</div>
                <h4 style={{ fontFamily: 'var(--font-display)', fontSize: 20, color: 'var(--navy)', marginBottom: 8 }}>{t('contact.thanks')}</h4>
                <p style={{ color: 'var(--gray-500)', fontSize: 15 }}>{t('contact.thanksMsg')}</p>
              </div>
            ) : (
              <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }} className="grid-2" >
                  <div>
                    <label style={{ fontSize: 13, fontWeight: 500, color: 'var(--gray-700)', marginBottom: 5, display: 'block' }}>{t('contact.name')} *</label>
                    <input style={inputStyle} value={form.name} onChange={update('name')} onFocus={e => e.target.style.borderColor = 'var(--orange)'} onBlur={e => e.target.style.borderColor = 'var(--gray-200)'} />
                  </div>
                  <div>
                    <label style={{ fontSize: 13, fontWeight: 500, color: 'var(--gray-700)', marginBottom: 5, display: 'block' }}>{t('contact.email')} *</label>
                    <input style={inputStyle} type="email" value={form.email} onChange={update('email')} onFocus={e => e.target.style.borderColor = 'var(--orange)'} onBlur={e => e.target.style.borderColor = 'var(--gray-200)'} />
                  </div>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }} className="grid-2">
                  <div>
                    <label style={{ fontSize: 13, fontWeight: 500, color: 'var(--gray-700)', marginBottom: 5, display: 'block' }}>{t('contact.phone')}</label>
                    <input style={inputStyle} value={form.phone} onChange={update('phone')} onFocus={e => e.target.style.borderColor = 'var(--orange)'} onBlur={e => e.target.style.borderColor = 'var(--gray-200)'} />
                  </div>
                  <div>
                    <label style={{ fontSize: 13, fontWeight: 500, color: 'var(--gray-700)', marginBottom: 5, display: 'block' }}>{t('contact.service')}</label>
                    <select style={{ ...inputStyle, cursor: 'pointer' }} value={form.service} onChange={update('service')}>
                      <option value="">—</option>
                      {Array.isArray(serviceOptions) && serviceOptions.map((o, i) => <option key={i} value={o}>{o}</option>)}
                    </select>
                  </div>
                </div>
                <div>
                  <label style={{ fontSize: 13, fontWeight: 500, color: 'var(--gray-700)', marginBottom: 5, display: 'block' }}>{t('contact.address')}</label>
                  <input style={inputStyle} value={form.address} onChange={update('address')} onFocus={e => e.target.style.borderColor = 'var(--orange)'} onBlur={e => e.target.style.borderColor = 'var(--gray-200)'} />
                </div>
                <div>
                  <label style={{ fontSize: 13, fontWeight: 500, color: 'var(--gray-700)', marginBottom: 5, display: 'block' }}>{t('contact.message')} *</label>
                  <textarea style={{ ...inputStyle, minHeight: 110, resize: 'vertical' }} value={form.message} onChange={update('message')} onFocus={e => e.target.style.borderColor = 'var(--orange)'} onBlur={e => e.target.style.borderColor = 'var(--gray-200)'} />
                </div>
                <button onClick={handleSubmit} style={{ background: 'linear-gradient(135deg, var(--orange), var(--orange-dark))', border: 'none', color: 'white', padding: '15px', borderRadius: 'var(--radius)', fontSize: 16, fontWeight: 600, boxShadow: '0 4px 16px rgba(232,122,46,0.25)', transition: 'all 0.2s' }}>{t('contact.submit')}</button>
              </div>
            )}
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
            {[
              { icon: <Phone size={18} />, title: t('footer.contactTitle'), lines: [t('contact.phone1'), t('contact.phone2')] },
              { icon: <Mail size={18} />, title: t('contact.email'), lines: [t('contact.emailAddr')] },
              { icon: <Clock size={18} />, title: 'Hours', lines: [t('contact.hours')] },
              { icon: <MapPin size={18} />, title: 'Area', lines: [t('contact.area')] },
            ].map((c, i) => (
              <div key={i} style={{ background: 'var(--gray-50)', borderRadius: 'var(--radius)', padding: 20, border: '1px solid var(--gray-200)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8 }}>
                  <div style={{ width: 36, height: 36, borderRadius: 9, background: 'var(--sky)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--blue)' }}>{c.icon}</div>
                  <span style={{ fontWeight: 600, color: 'var(--navy)', fontSize: 14 }}>{c.title}</span>
                </div>
                {c.lines.map((l, j) => <div key={j} style={{ fontSize: 13, color: 'var(--gray-600)', marginLeft: 46, lineHeight: 1.6 }}>{l}</div>)}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
