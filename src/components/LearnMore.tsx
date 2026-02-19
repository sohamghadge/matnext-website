import { useLanguage } from '../i18n/LanguageContext';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import './LearnMore.css';

export default function LearnMore() {
    const { t } = useLanguage();
    const { ref, isVisible } = useScrollAnimation(0.1);

    return (
        <section className="section learn-section" id="learn" ref={ref}>
            <div className="container section-center">
                <span className="section-label">{t('learn.label')}</span>
                <h2 className="section-title">{t('learn.title')}</h2>
            </div>

            <div className="container">
                <div className={`learn-grid ${isVisible ? 'visible' : ''}`}>
                    <div className="learn-placeholder">
                        <p className="learn-placeholder-text">{t('learn.placeholder')}</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
