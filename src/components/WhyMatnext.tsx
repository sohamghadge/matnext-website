import { useLanguage } from '../i18n/LanguageContext';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import {
    Globe, ShieldCheck, Layers, Zap, Lock, BarChart3
} from 'lucide-react';
import './WhyMatnext.css';

const reasons = [
    {
        icon: Globe,
        title: 'Full Value Chain Coverage',
        desc: 'From raw material extraction to end-of-life, MatNEXT maps and monitors every node in your supply chain — beyond Tier 1 to Tier N.',
    },
    {
        icon: ShieldCheck,
        title: 'Regulation-Ready Compliance',
        desc: 'Built-in frameworks for CBAM, EPR, EU Battery Directive, and USA IRA. Stay ahead of evolving global regulations without custom development.',
    },
    {
        icon: Layers,
        title: 'Cascading Data Collection',
        desc: 'Trigger upstream data requests with one click. Every tier contributes data securely, dramatically reducing manual follow-up.',
    },
    {
        icon: Zap,
        title: 'AI-First Architecture',
        desc: 'Not an afterthought — AI is embedded at every layer: from supplier email parsing to predictive risk scoring and automated report generation.',
    },
    {
        icon: Lock,
        title: 'Privacy by Design',
        desc: 'Middle-party protection ensures sensitive data is anonymised and shared only with authorised recipients. Trust and traceability, maintained.',
    },
    {
        icon: BarChart3,
        title: 'Audit-Ready Insights',
        desc: 'One-click compliance documentation, Scope 3 accounting, and material passports — all designed for external audit readiness from day one.',
    },
];

export default function WhyMatnext() {
    const { t } = useLanguage();
    const { ref, isVisible } = useScrollAnimation(0.1);

    return (
        <section className="section why-section" id="why" ref={ref}>
            <div className="container section-center">
                <span className="section-label">{t('why.label')}</span>
                <h2 className="section-title">{t('why.title')}</h2>
            </div>

            <div className="container">
                <div className={`why-grid ${isVisible ? 'visible' : ''}`}>
                    {reasons.map((reason, i) => {
                        const Icon = reason.icon;
                        return (
                            <div key={i} className="why-card" style={{ animationDelay: `${i * 0.1}s` }}>
                                <div className="why-card-number">{String(i + 1).padStart(2, '0')}</div>
                                <div className="why-card-icon">
                                    <Icon size={24} />
                                </div>
                                <h3>{reason.title}</h3>
                                <p>{reason.desc}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
