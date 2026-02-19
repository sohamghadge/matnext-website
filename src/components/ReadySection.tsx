import { useLanguage } from '../i18n/LanguageContext';
import { ArrowRight } from 'lucide-react';
import './ReadySection.css';

export default function ReadySection() {
    const { t } = useLanguage();

    return (
        <section className="ready-section" id="ready">
            <div className="ready-bg">
                <div className="ready-glow" />
            </div>
            <div className="container section-center" style={{ position: 'relative', zIndex: 1 }}>
                <span className="section-label" style={{ color: 'var(--primary)' }}>{t('ready.label')}</span>
                <h2 className="section-title" style={{ color: 'var(--text-light)' }}>{t('ready.title')}</h2>
                <p className="section-subtitle" style={{ color: 'rgba(255,255,255,0.7)', marginBottom: 40 }}>
                    {t('ready.subtitle')}
                </p>
                <a href="#contact" className="btn btn-primary btn-lg">
                    {t('ready.cta')}
                    <ArrowRight size={18} />
                </a>
            </div>
        </section>
    );
}
