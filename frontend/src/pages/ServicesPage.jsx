import { Wrench, Snowflake, Flame, Wind, Zap } from 'lucide-react';
import { PageHero, ServiceCard } from '../components/ui';
import { useI18n } from '../i18n';

export default function ServicesPage() {
  const { t } = useI18n();

  return (
    <div>
      <PageHero overline={t('services.overline')} title={t('services.title')} subtitle={t('services.subtitle')} />
      <section className="section">
        <div className="container">
          <div className="grid-3">
            <ServiceCard icon={<Wrench size={26} />} title={t('services.maintenance.title')} desc={t('services.maintenance.desc')} to="/services/maintenance" tag={t('services.maintenance.tag')} color="var(--orange)" bgColor="var(--warm-100)" />
            <ServiceCard icon={<Snowflake size={26} />} title={t('services.heatpump.title')} desc={t('services.heatpump.desc')} to="/services/heat-pump" color="var(--blue)" bgColor="var(--sky)" />
            <ServiceCard icon={<Flame size={26} />} title={t('services.boiler.title')} desc={t('services.boiler.desc')} to="/services/electric-boiler" color="#C4641E" bgColor="#FEF0E3" />
            <ServiceCard icon={<Wind size={26} />} title={t('services.hrv.title')} desc={t('services.hrv.desc')} to="/services/hrv" color="var(--green)" bgColor="var(--green-light)" />
            <ServiceCard icon={<Zap size={26} />} title={t('services.electrical.title')} desc={t('services.electrical.desc')} to="/services/electrical" color="var(--amber)" bgColor="#FEF7E0" />
          </div>
        </div>
      </section>
    </div>
  );
}
