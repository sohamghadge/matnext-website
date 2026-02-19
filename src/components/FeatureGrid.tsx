import { useLanguage } from '../i18n/LanguageContext';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import {
    ScanLine, RefreshCcw, Recycle, CloudRain,
    Leaf, CreditCard, Search, ShieldCheck,
    Wallet, Users, Factory, Layers
} from 'lucide-react';
import './FeatureGrid.css';

const features = [
    { key: 'tracking', icon: ScanLine },
    { key: 'closedloop', icon: RefreshCcw },
    { key: 'circular', icon: Recycle },
    { key: 'ghg', icon: CloudRain },
    { key: 'neutrality', icon: Leaf },
    { key: 'credits', icon: CreditCard },
    { key: 'supplier', icon: Search },
    { key: 'resilience', icon: ShieldCheck },
    { key: 'financing', icon: Wallet },
    { key: 'hr', icon: Users },
    { key: 'manufacturing', icon: Factory },
    { key: 'aas', icon: Layers },
];

export default function FeatureGrid() {
    const { t } = useLanguage();
    const { ref, isVisible } = useScrollAnimation(0.1);

    return (
        <section className="section section-features" id="features" ref={ref}>
            <div className="container section-center">
                <span className="section-label">{t('features.label')}</span>
                <h2 className="section-title">Comprehensive Sustainability <span className="text-copper">Engine</span></h2>
            </div>
            <div className="container">
                <div className={`features-grid ${isVisible ? 'visible' : ''}`}>
                    {features.map((feature, i) => {
                        const Icon = feature.icon;
                        return (
                            <div
                                key={feature.key}
                                className="feature-card"
                                style={{ animationDelay: `${i * 0.06}s` }}
                            >
                                <div className="icon-wrapper">
                                    <Icon size={22} strokeWidth={2} />
                                </div>
                                <h3>{t(`features.${feature.key}`)}</h3>
                                <p>{t(`features.${feature.key}.desc`)}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
