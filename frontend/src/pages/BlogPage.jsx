import { PageHero } from '../components/ui';
import { useI18n } from '../i18n';

const titles = { en: 'News & Guides', zh: '资讯与指南', fr: 'Nouvelles et guides' };
const subtitles = { en: 'HVAC maintenance tips, industry news, and energy efficiency guides.', zh: '暖通维护技巧、行业资讯和能效指南。', fr: "Conseils d'entretien CVC, nouvelles de l'industrie et guides d'efficacité énergétique." };
const coming = { en: 'Coming Soon', zh: '精彩内容即将发布', fr: 'Bientôt disponible' };
const comingDesc = { en: "We're preparing helpful content including HVAC maintenance tips, energy efficiency guides, and industry updates. Stay tuned!", zh: '我们正在准备暖通维护技巧、行业资讯和能效指南等实用内容，敬请关注！', fr: "Nous préparons du contenu utile, y compris des conseils d'entretien CVC, des guides d'efficacité énergétique et des nouvelles de l'industrie. Restez à l'écoute!" };

export default function BlogPage() {
  const { lang } = useI18n();

  return (
    <div>
      <PageHero overline="Blog" title={titles[lang] || titles.en} subtitle={subtitles[lang] || subtitles.en} />
      <section className="section">
        <div className="container" style={{ maxWidth: 700, textAlign: 'center' }}>
          <div style={{ padding: '64px 32px', borderRadius: 'var(--radius-lg)', background: 'var(--warm-50)', border: '1px solid var(--warm-200)' }}>
            <div style={{ fontSize: 48, marginBottom: 16 }}>📝</div>
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 22, fontWeight: 700, color: 'var(--navy)', marginBottom: 12 }}>
              {coming[lang] || coming.en}
            </h3>
            <p style={{ fontSize: 16, color: 'var(--gray-500)', lineHeight: 1.7 }}>
              {comingDesc[lang] || comingDesc.en}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
