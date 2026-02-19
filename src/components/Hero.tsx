import { useLanguage } from '../i18n/LanguageContext';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import './Hero.css';

export default function Hero() {
    const { t } = useLanguage();

    return (
        <section className="hero" id="home">
            <div className="hero-bg">
                <div className="hero-grid" />
                <div className="hero-glow hero-glow-1" />
                <div className="hero-glow hero-glow-2" />

                {/* Animated traceability nodes */}
                <div className="hero-nodes">
                    {Array.from({ length: 8 }).map((_, i) => (
                        <div key={i} className={`hero-node node-${i + 1}`}>
                            <div className="node-dot" />
                        </div>
                    ))}
                    <svg className="hero-connections" viewBox="0 0 1200 600" preserveAspectRatio="none">
                        <path d="M100,300 Q300,100 500,250 T900,200 T1100,350" className="connection-path" />
                        <path d="M150,400 Q400,200 600,350 T1050,280" className="connection-path path-2" />
                    </svg>
                </div>
            </div>

            <div className="container hero-content">
                <motion.div
                    className="hero-text"
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                >
                    <h1 className="hero-title">{t('hero.title')}</h1>
                    <p className="hero-subtitle">{t('hero.subtitle')}</p>

                    <div className="hero-actions">
                        <a href="#contact" className="btn btn-primary btn-lg">
                            {t('hero.cta')}
                            <ArrowRight size={18} />
                        </a>
                        <a href="#features" className="btn btn-secondary btn-lg">
                            Explore the <span className="text-copper">Engine</span>
                        </a>
                    </div>

                    <div className="hero-stats">
                        <div className="hero-stat">
                            <span className="stat-number">1,20,000+</span>
                            <span className="stat-label">Tons Tracked</span>
                        </div>
                        <div className="hero-stat-divider" />
                        <div className="hero-stat">
                            <span className="stat-number">25+</span>
                            <span className="stat-label">Stakeholders</span>
                        </div>
                        <div className="hero-stat-divider" />
                        <div className="hero-stat">
                            <span className="stat-number">6</span>
                            <span className="stat-label">Industries</span>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    className="hero-visual"
                    initial={{ opacity: 0, x: 60 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
                >
                    <div className="dashboard-mockup">
                        <div className="mockup-header">
                            <div className="mockup-dots">
                                <span /><span /><span />
                            </div>
                            <span className="mockup-title">Traceability Map</span>
                        </div>
                        <div className="mockup-body">
                            <div className="heatmap-row">
                                <span className="heatmap-label">Steel</span>
                                <div className="heatmap-bar">
                                    <div className="heatmap-fill" style={{ width: '85%', background: 'var(--primary)' }} />
                                </div>
                                <span className="heatmap-value">85%</span>
                            </div>
                            <div className="heatmap-row">
                                <span className="heatmap-label">Lithium</span>
                                <div className="heatmap-bar">
                                    <div className="heatmap-fill" style={{ width: '45%', background: '#FFA726' }} />
                                </div>
                                <span className="heatmap-value">45%</span>
                            </div>
                            <div className="heatmap-row">
                                <span className="heatmap-label">Cobalt</span>
                                <div className="heatmap-bar">
                                    <div className="heatmap-fill risk-pulse" style={{ width: '25%', background: '#EF5350' }} />
                                </div>
                                <span className="heatmap-value">25%</span>
                            </div>
                            <div className="heatmap-row">
                                <span className="heatmap-label">Copper</span>
                                <div className="heatmap-bar">
                                    <div className="heatmap-fill" style={{ width: '70%', background: 'var(--secondary)' }} />
                                </div>
                                <span className="heatmap-value">70%</span>
                            </div>
                            <div className="heatmap-row">
                                <span className="heatmap-label">Aluminium</span>
                                <div className="heatmap-bar">
                                    <div className="heatmap-fill" style={{ width: '60%', background: 'var(--primary)' }} />
                                </div>
                                <span className="heatmap-value">60%</span>
                            </div>
                            <div className="mockup-footer">
                                <div className="mockup-metric">
                                    <span className="metric-value">99.8%</span>
                                    <span className="metric-label">Compliance Score</span>
                                </div>
                                <div className="mockup-metric">
                                    <span className="metric-value">2.4M</span>
                                    <span className="metric-label">Units Tracked</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
