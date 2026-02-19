import { useLanguage } from '../i18n/LanguageContext';
// import './Testimonials.css'; // We might reuse Customers.css or create a new one if needed, for now inline or minimal css

export default function Testimonials() {
    const { t } = useLanguage();

    return (
        <section className="section testimonials-section" id="testimonials">
            <div className="container section-center">
                <span className="section-label">{t('customers.label')}</span>
                <h2 className="section-title">{t('testimonials.title')}</h2>
            </div>

            <div className="container section-center" style={{ padding: '60px 0' }}>
                <h3 className="section-title" style={{ color: 'var(--text-secondary)', opacity: 0.7 }}>
                    {t('testimonials.placeholder')}
                </h3>
            </div>
        </section>
    );
}
