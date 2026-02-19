import { useLanguage } from '../i18n/LanguageContext';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import {
    BrainCircuit, ScanFace, FileCheck, Split, Activity, ShieldAlert
} from 'lucide-react';
import './LiveMetrics.css'; // Reusing LiveMetrics CSS for similar card style or create new if needed

export default function AICoreSection() {
    const { t } = useLanguage();
    const { ref, isVisible } = useScrollAnimation(0.1);

    const aiFeatures = [
        {
            icon: <BrainCircuit size={32} />,
            title: t('ai.capture'),
            desc: t('ai.capture.desc'),
        },
        {
            icon: <ShieldAlert size={32} />,
            title: t('ai.risk'),
            desc: t('ai.risk.desc'),
        },
        {
            icon: <FileCheck size={32} />,
            title: t('ai.compliance'),
            desc: t('ai.compliance.desc'),
        },
        {
            icon: <Split size={32} />,
            title: t('ai.optimization'),
            desc: t('ai.optimization.desc'),
        },
        {
            icon: <Activity size={32} />,
            title: t('ai.anomaly'),
            desc: t('ai.anomaly.desc'),
        },
        {
            icon: <ScanFace size={32} />,
            title: t('ai.carbon'),
            desc: t('ai.carbon.desc'),
        }
    ];

    // Wait, I should not hardcode English if I can avoid it.
    // Let's duplicate 'ai.anomaly' logic or similar for now, or use a generic one.
    // Actually, I'll use the 'features.resilience' content but frame it as AI?
    // User was very specific about "6 cards".
    // I'll add a 6th key to translations in the next step called 'ai.carbon'.

    return (
        <section id="ai" className="section ai-section" ref={ref}>
            <div className="container section-center">
                <span className="section-label">{t('ai.label')}</span>
                <h2 className="section-title">{t('ai.title')}</h2>
                <p className="section-subtitle">{t('ai.subtitle')}</p>
            </div>

            <div className="container">
                <div className={`metrics-grid ${isVisible ? 'visible' : ''}`}>
                    {aiFeatures.map((feature, index) => (
                        <div key={index} className="metric-card" style={{ animationDelay: `${index * 0.1}s` }}>
                            <div className="metric-icon-wrapper" style={{ color: 'var(--primary)', backgroundColor: 'rgba(150, 204, 57, 0.1)' }}>
                                {feature.icon}
                            </div>
                            <div className="metric-title" style={{ marginTop: '1rem', fontSize: '1.25rem' }}>{feature.title}</div>
                            <p className="metric-desc">{feature.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
