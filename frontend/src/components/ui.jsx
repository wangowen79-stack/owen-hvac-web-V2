import { ArrowRight, ChevronRight } from 'lucide-react';
import { useOnScreen } from '../hooks';
import { Link } from 'react-router-dom';

export function SectionTitle({ overline, title, subtitle, light, center = true }) {
  const [ref, vis] = useOnScreen();
  return (
    <div ref={ref} style={{
      textAlign: center ? 'center' : 'left', marginBottom: 48,
      opacity: vis ? 1 : 0, transform: vis ? 'translateY(0)' : 'translateY(24px)',
      transition: 'all 0.6s ease',
    }}>
      {overline && (
        <span style={{
          fontSize: 13, fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase',
          color: light ? 'var(--orange-light)' : 'var(--orange)',
          marginBottom: 10, display: 'inline-block',
        }}>{overline}</span>
      )}
      <h2 style={{
        fontFamily: 'var(--font-display)', fontWeight: 700,
        fontSize: 'clamp(28px, 4vw, 42px)', lineHeight: 1.2,
        color: light ? 'white' : 'var(--navy)',
        marginBottom: subtitle ? 14 : 0,
      }}>{title}</h2>
      {subtitle && (
        <p style={{
          fontSize: 17, lineHeight: 1.7, maxWidth: 600,
          margin: center ? '0 auto' : 0,
          color: light ? 'rgba(255,255,255,0.7)' : 'var(--gray-500)',
        }}>{subtitle}</p>
      )}
    </div>
  );
}

export function CTA({ label, to, onClick, variant = 'primary', icon }) {
  const style = {
    display: 'inline-flex', alignItems: 'center', gap: 8,
    background: variant === 'primary'
      ? 'linear-gradient(135deg, var(--orange), var(--orange-dark))'
      : variant === 'outline'
      ? 'transparent'
      : 'linear-gradient(135deg, var(--blue), #1A5CA0)',
    border: variant === 'outline' ? '2px solid var(--orange)' : 'none',
    color: variant === 'outline' ? 'var(--orange)' : 'white',
    padding: '14px 28px', borderRadius: 'var(--radius)', cursor: 'pointer',
    fontSize: 15, fontWeight: 600, fontFamily: 'var(--font-body)',
    transition: 'all 0.25s ease',
    boxShadow: variant === 'outline' ? 'none' : '0 4px 16px rgba(0,0,0,0.12)',
  };

  if (to) {
    return <Link to={to} style={style}>{label}{icon || <ArrowRight size={18} />}</Link>;
  }
  return <button onClick={onClick} style={style}>{label}{icon || <ArrowRight size={18} />}</button>;
}

export function ServiceCard({ icon, title, desc, to, tag, color = 'var(--orange)', bgColor = 'var(--warm-100)' }) {
  const [ref, vis] = useOnScreen();
  return (
    <Link ref={ref} to={to || '/contact'} style={{
      background: 'white', borderRadius: 'var(--radius-lg)', padding: 32,
      border: '1px solid var(--gray-200)', transition: 'all 0.35s ease',
      cursor: 'pointer', textDecoration: 'none', display: 'block', position: 'relative',
      opacity: vis ? 1 : 0, transform: vis ? 'translateY(0)' : 'translateY(28px)',
    }}
      onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-6px)'; e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.07)'; }}
      onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; }}
    >
      {tag && (
        <span style={{
          position: 'absolute', top: 16, right: 16,
          background: 'var(--orange)', color: 'white',
          fontSize: 11, fontWeight: 600, padding: '4px 10px',
          borderRadius: 20, letterSpacing: '0.03em',
        }}>{tag}</span>
      )}
      <div style={{
        width: 52, height: 52, borderRadius: 14, background: bgColor,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        color: color, marginBottom: 18,
      }}>{icon}</div>
      <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 19, fontWeight: 700, color: 'var(--navy)', marginBottom: 10, lineHeight: 1.3 }}>{title}</h3>
      <p style={{ fontSize: 15, lineHeight: 1.7, color: 'var(--gray-500)', marginBottom: 14 }}>{desc}</p>
      <span style={{ fontSize: 14, fontWeight: 500, color: color, display: 'flex', alignItems: 'center', gap: 6 }}>
        Learn More <ChevronRight size={16} />
      </span>
    </Link>
  );
}

export function PageHero({ overline, title, subtitle }) {
  return (
    <section style={{
      paddingTop: 140, paddingBottom: 80,
      background: 'linear-gradient(135deg, var(--navy), var(--navy-light))',
      position: 'relative',
    }}>
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: 'radial-gradient(circle at 70% 30%, rgba(232,122,46,0.08) 0%, transparent 60%)',
      }} />
      <div className="container" style={{ position: 'relative' }}>
        <SectionTitle overline={overline} title={title} subtitle={subtitle} light />
      </div>
    </section>
  );
}
