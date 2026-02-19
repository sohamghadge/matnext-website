import { useState } from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import { Send, MapPin, Mail as MailIcon, Phone } from 'lucide-react';
import logo from '../assets/matnext-logo.png';
import './Footer.css';

export default function Footer() {
    const { t } = useLanguage();
    const [form, setForm] = useState({
        name: '', email: '', industry: '', volume: '', message: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert('Thank you! We will be in touch soon.');
        setForm({ name: '', email: '', industry: '', volume: '', message: '' });
    };

    return (
        <footer className="footer" id="contact">
            <div className="container">
                <div className="footer-grid">
                    {/* Contact Form */}
                    <div className="footer-form-section">
                        <h3 className="footer-form-title">Get in Touch</h3>
                        <p className="footer-form-subtitle">Reach out to discuss how MatNEXT can transform your supply chain operations.</p>
                        <form className="footer-form" onSubmit={handleSubmit}>
                            <div className="form-row">
                                <div className="form-group">
                                    <label>{t('footer.form.name')}</label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={form.name}
                                        onChange={handleChange}
                                        placeholder="Enter your full name"
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label>{t('footer.form.email')}</label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={form.email}
                                        onChange={handleChange}
                                        placeholder="name@company.com"
                                        required
                                    />
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-group">
                                    <label>{t('footer.form.industry')}</label>
                                    <select name="industry" value={form.industry} onChange={handleChange} required>
                                        <option value="">Select Industry</option>
                                        <option value="automotive">Automotive</option>
                                        <option value="steel">Steel</option>
                                        <option value="plastic">Plastic</option>
                                        <option value="aluminium">Aluminium</option>
                                        <option value="battery">Battery</option>
                                        <option value="hvac">HVAC</option>
                                        <option value="other">Other</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label>{t('footer.form.volume')}</label>
                                    <input
                                        type="text"
                                        name="volume"
                                        value={form.volume}
                                        onChange={handleChange}
                                        placeholder="e.g., 10,000 Tons/year"
                                    />
                                </div>
                            </div>
                            <div className="form-group">
                                <label>{t('footer.form.message')}</label>
                                <textarea
                                    name="message"
                                    value={form.message}
                                    onChange={handleChange}
                                    placeholder="Tell us about your requirements..."
                                    rows={4}
                                />
                            </div>
                            <button type="submit" className="btn btn-primary">
                                {t('footer.form.submit')}
                                <Send size={16} />
                            </button>
                        </form>
                    </div>

                    {/* Footer Info */}
                    <div className="footer-info">
                        <img src={logo} alt="MatNEXT" className="footer-logo" />
                        <p className="footer-desc">
                            Advanced product and material tracking, traceability and sustainability platform for the industrial value chain.
                        </p>

                        <div className="footer-contacts">
                            <div className="footer-contact-item">
                                <MapPin size={16} />
                                <span>Mumbai, India</span>
                            </div>
                            <div className="footer-contact-item">
                                <MapPin size={16} />
                                <span>Tokyo, Japan</span>
                            </div>
                            <div className="footer-contact-item">
                                <MailIcon size={16} />
                                <span>info-matnext@genbanext.com</span>
                            </div>
                            <div className="footer-contact-item">
                                <Phone size={16} />
                                <span>+81 80-8529-3858</span>
                            </div>
                        </div>

                        <div className="footer-nav">
                            <a href="#features">{t('nav.features')}</a>
                            <a href="#metrics">{t('metrics.label')}</a>
                            <a href="#customers">{t('customers.label')}</a>
                            <a href="#ai">{t('ai.label')}</a>
                            <a href="#why">{t('why.label')}</a>
                            <a href="#testimonials">{t('nav.testimonials')}</a>
                            <a href="#contact">{t('nav.contact')}</a>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>{t('footer.copyright')}</p>
                    <div className="footer-bottom-links">
                        <a href="#">Privacy Policy</a>
                        <a href="#">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
