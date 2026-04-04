import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { PageHero, SectionTitle } from '../components/ui';
import { useI18n } from '../i18n';

export default function FAQPage() {
  const { t } = useI18n();
  const [openIdx, setOpenIdx] = useState(null);
  const items = t('faq.items');

  return (
    <div>
      <PageHero overline={t('nav.faq')} title={t('faq.title')} subtitle="" />
      <section className="section">
        <div className="container" style={{ maxWidth: 800, margin: '0 auto' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            {Array.isArray(items) && items.map((f, i) => (
              <div key={i} style={{ background: 'white', borderRadius: 'var(--radius)', border: '1px solid var(--gray-200)', overflow: 'hidden' }}>
                <button onClick={() => setOpenIdx(openIdx === i ? null : i)} style={{
                  width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                  padding: '17px 20px', background: 'none', border: 'none',
                  fontSize: 15, fontWeight: 500, color: 'var(--navy)', textAlign: 'left',
                }}>
                  {f.q}
                  <ChevronDown size={18} style={{ transform: openIdx === i ? 'rotate(180deg)' : 'rotate(0)', transition: 'transform 0.2s', flexShrink: 0, marginLeft: 12 }} />
                </button>
                {openIdx === i && (
                  <div style={{ padding: '0 20px 17px', fontSize: 15, lineHeight: 1.7, color: 'var(--gray-600)', animation: 'fadeIn 0.2s ease' }}>{f.a}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
