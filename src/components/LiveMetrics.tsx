import { useLanguage } from '../i18n/LanguageContext';
import { useCountUp } from '../hooks/useCountUp';
import {
    ScanLine, CloudRain, Recycle, Users, Factory, Star, FileCheck
} from 'lucide-react';
import './LiveMetrics.css';

const industries = ['Automotive', 'HVAC', 'Steel', 'Plastic', 'Aluminium', 'Battery'];

export default function LiveMetrics() {
    const { t } = useLanguage();
    const { count: industryCount, ref: ref1 } = useCountUp(6, 1500);
    const { count: stakeholderCount, ref: ref2 } = useCountUp(25, 2000);
    const { count: trackingCount, ref: ref3 } = useCountUp(120000, 2500);
    const { count: ghgCount, ref: ref4 } = useCountUp(356760, 2500);
    const { count: circularityCount, ref: ref5 } = useCountUp(73, 2000);
    const { count: complianceCount, ref: ref6 } = useCountUp(15000, 2000);

    const formatIndian = (num: number) => {
        if (num >= 100000) {
            const str = num.toString();
            const lastThree = str.substring(str.length - 3);
            const otherNums = str.substring(0, str.length - 3);
            const formatted = otherNums.replace(/\B(?=(\d{2})+(?!\d))/g, ',');
            return formatted + ',' + lastThree;
        }
        return num.toLocaleString();
    };

    return (
        <section className="section live-metrics-section" id="metrics">
            <div className="container section-center">
                {/* Removed badge as per request for cleaner look */}
                <h2 className="section-title" style={{ marginTop: 16 }}>{t('metrics.title')}</h2>
            </div>

            <div className="container">
                <div className="metrics-grid">
                    {/* Industries */}
                    <div className="metric-card metric-highlight" ref={ref1}>
                        <div className="metric-icon-wrapper">
                            <Factory size={24} />
                        </div>
                        <div className="metric-number">{industryCount}</div>
                        <div className="metric-title">{t('metrics.industries')}</div>
                        <p className="metric-desc">{t('metrics.industries.desc')}</p>
                        <div className="industry-tags">
                            {industries.map((ind) => (
                                <span key={ind} className="industry-tag">
                                    <Star size={10} /> {ind}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Stakeholders */}
                    <div className="metric-card" ref={ref2}>
                        <div className="metric-icon-wrapper">
                            <Users size={24} />
                        </div>
                        <div className="metric-number">{stakeholderCount}</div>
                        <div className="metric-title">{t('metrics.stakeholders')}</div>
                        <p className="metric-desc">{t('metrics.stakeholders.desc')}</p>
                    </div>

                    {/* Tracking */}
                    <div className="metric-card" ref={ref3}>
                        <div className="metric-icon-wrapper">
                            <ScanLine size={24} />
                        </div>
                        <div className="metric-number">{formatIndian(trackingCount)} <span className="metric-unit">Tons</span></div>
                        <div className="metric-title">{t('metrics.tracking')}</div>
                        <p className="metric-desc">{t('metrics.tracking.desc')}</p>
                    </div>

                    {/* GHG */}
                    <div className="metric-card" ref={ref4}>
                        <div className="metric-icon-wrapper">
                            <CloudRain size={24} />
                        </div>
                        <div className="metric-number">{formatIndian(ghgCount)} <span className="metric-unit">Tons</span></div>
                        <div className="metric-title">{t('metrics.ghg')}</div>
                        <p className="metric-desc">{t('metrics.ghg.desc')}</p>
                    </div>

                    {/* Circularity */}
                    <div className="metric-card" ref={ref5}>
                        <div className="metric-icon-wrapper">
                            <Recycle size={24} />
                        </div>
                        <div className="metric-number">{circularityCount}<span className="metric-unit">%</span></div>
                        <div className="metric-title">{t('metrics.circularity')}</div>
                        <p className="metric-desc">{t('metrics.circularity.desc')}</p>
                    </div>

                    {/* Automated Compliance (AI Proxy) */}
                    <div className="metric-card" ref={ref6}>
                        <div className="metric-icon-wrapper">
                            <FileCheck size={24} />
                        </div>
                        <div className="metric-number">{formatIndian(complianceCount)}+</div>
                        <div className="metric-title">{t('metrics.compliance')}</div>
                        <p className="metric-desc">{t('metrics.compliance.desc')}</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
