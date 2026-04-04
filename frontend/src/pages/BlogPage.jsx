import { PageHero } from '../components/ui';
import { useI18n } from '../i18n';
import IMG from '../images';

const posts = [
  {
    slug: 'heat-pump-rebate-policy',
    title: 'THE NEW HEAT PUMP INSTALLATION REBATE POLICY',
    titleZh: '新斯科舍省热泵安装补贴政策解读',
    image: IMG.newsRebate,
    summary: 'The new heat pump installation rebate policy for Nova Scotia has been announced. Many households can achieve either free or very affordable installations.',
    summaryZh: '新斯科舍省最新热泵安装补贴政策已公布，许多家庭可以实现免费或非常优惠的安装。',
    date: '2024-11-15',
  },
  {
    slug: 'efficiency-preferred-partner',
    title: 'Owen HVAC Became an Efficiency Preferred Partner',
    titleZh: 'Owen HVAC 成为 Efficiency NS 优选合作伙伴',
    image: IMG.newsEfficiency,
    summary: 'Owen HVAC became a contractor for the Efficiency Nova Scotia HOMEWARMING program, demonstrating our commitment to energy-efficient solutions.',
    summaryZh: 'Owen HVAC 成为 Efficiency Nova Scotia HOMEWARMING 项目的合作承包商。',
    date: '2022-08-01',
  },
];

export default function BlogPage() {
  const { lang } = useI18n();

  return (
    <div>
      <PageHero overline="Blog" title={lang === 'zh' ? '资讯与指南' : 'News & Guides'} subtitle={lang === 'zh' ? '暖通维护技巧、行业资讯和能效指南。' : 'HVAC maintenance tips, industry news, and energy efficiency guides.'} />

      <section className="section">
        <div className="container" style={{ maxWidth: 900 }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
            {posts.map((p, i) => (
              <div key={i} style={{
                display: 'grid', gridTemplateColumns: '260px 1fr', gap: 28, alignItems: 'center',
                background: 'white', borderRadius: 'var(--radius-lg)', overflow: 'hidden',
                border: '1px solid var(--gray-200)', transition: 'all 0.3s',
              }} className="grid-2"
                onMouseEnter={e => e.currentTarget.style.boxShadow = '0 12px 32px rgba(0,0,0,0.06)'}
                onMouseLeave={e => e.currentTarget.style.boxShadow = 'none'}
              >
                <img src={p.image} alt={p.title} style={{ width: '100%', height: 180, objectFit: 'cover' }} />
                <div style={{ padding: '20px 24px 20px 0' }}>
                  <div style={{ fontSize: 12, color: 'var(--orange)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 6 }}>{p.date}</div>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 19, fontWeight: 700, color: 'var(--navy)', marginBottom: 10, lineHeight: 1.35 }}>
                    {lang === 'zh' ? p.titleZh : p.title}
                  </h3>
                  <p style={{ fontSize: 14, lineHeight: 1.7, color: 'var(--gray-500)' }}>
                    {lang === 'zh' ? p.summaryZh : p.summary}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: 48, padding: '36px 24px', background: 'var(--warm-50)', borderRadius: 'var(--radius-lg)', border: '1px solid var(--warm-200)' }}>
            <p style={{ fontSize: 15, color: 'var(--gray-500)' }}>
              {lang === 'zh' ? '更多维护技巧和行业资讯即将发布，敬请关注！' : 'More maintenance tips and guides coming soon. Stay tuned!'}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
