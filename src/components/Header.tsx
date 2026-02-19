import { useState } from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import type { Language } from '../i18n/translations';
import { Menu, X } from 'lucide-react';
import logo from '../assets/matnext-logo.png';
import './Header.css';

const navItems = [
    { key: 'nav.features', href: '#features' },
    { key: 'nav.traction', href: '#metrics' },
    { key: 'nav.ai', href: '#ai' },
    { key: 'nav.why', href: '#why' },
    { key: 'nav.customers', href: '#customers' },
    { key: 'nav.testimonials', href: '#testimonials' },
    { key: 'nav.contact', href: '#contact' },
];

const languages: { code: Language; label: string }[] = [
    { code: 'en', label: 'ENG' },
    { code: 'ja', label: 'JPN' },
    { code: 'th', label: 'THA' },
];

export default function Header() {
    const { language, setLanguage, t } = useLanguage();
    const [mobileOpen, setMobileOpen] = useState(false);

    return (
        <header className="header">
            <div className="header-inner container">
                <a href="#" className="header-logo">
                    <img src={logo} alt="MatNEXT" className="logo-img blend-multiply" />
                </a>

                <nav className={`header-nav ${mobileOpen ? 'open' : ''}`}>
                    {navItems.map((item) => (
                        <a
                            key={item.key}
                            href={item.href}
                            className="nav-link"
                            onClick={() => setMobileOpen(false)}
                        >
                            {t(item.key)}
                        </a>
                    ))}
                    <div className="mobile-lang-toggle">
                        {languages.map((lang) => (
                            <button
                                key={lang.code}
                                className={`lang-btn ${language === lang.code ? 'active' : ''}`}
                                onClick={() => setLanguage(lang.code)}
                            >
                                {lang.label}
                            </button>
                        ))}
                    </div>
                    <div className="mobile-actions">
                        <a
                            href="https://app.matnext.com"
                            className="btn-login mobile-btn"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {t('nav.login')}
                        </a>
                        <a href="#contact" className="btn btn-primary mobile-btn" onClick={() => setMobileOpen(false)}>
                            {t('nav.demo')}
                        </a>
                    </div>
                </nav>

                <div className="header-actions">
                    <div className="lang-toggle">
                        {languages.map((lang) => (
                            <button
                                key={lang.code}
                                className={`lang-btn ${language === lang.code ? 'active' : ''}`}
                                onClick={() => setLanguage(lang.code)}
                            >
                                {lang.label}
                            </button>
                        ))}
                    </div>

                    <a
                        href="https://app.matnext.com"
                        className="btn-login"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ background: 'var(--primary)', color: '#fff', border: 'none' }}
                    >
                        {t('nav.login')}
                    </a>

                    <a href="#contact" className="btn btn-primary header-cta">
                        {t('nav.demo')}
                    </a>

                    <button
                        className="mobile-toggle"
                        onClick={() => setMobileOpen(!mobileOpen)}
                        aria-label="Toggle Menu"
                    >
                        {mobileOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>
        </header>
    );
}
