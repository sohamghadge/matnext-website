import { useLanguage } from '../i18n/LanguageContext';
// import { useScrollAnimation } from '../hooks/useScrollAnimation';
// import { Quote } from 'lucide-react';
import './Customers.css';

// import MarutiLogo from '../assets/customers/maruti.svg';
// import ToyotaLogo from '../assets/customers/toyota.svg';
// import HondaLogo from '../assets/customers/honda.svg';
// import ToyotaTsushoLogo from '../assets/customers/toyota_tsusho.svg';

/*
const partners = [
    { name: 'Maruti Suzuki', logo: MarutiLogo },
    // { name: 'Maruti Suzuki Toyotsu', logo: ToyotaTsushoLogo }, // Keeping commented out until confirmed if this is the correct logo
    { name: 'Toyota Tsusho', logo: ToyotaTsushoLogo },
    { name: 'Toyota', logo: ToyotaLogo },
    { name: 'Honda', logo: HondaLogo },
];

const testimonials = [
    {
        quote: 'MatNEXT has transformed how we track materials across our entire supply chain. The compliance automation alone saved us hundreds of hours.',
        name: 'Supply Chain Director',
        company: 'Leading Automotive OEM',
        avatar: 'SC',
    },
    {
        quote: 'The real-time visibility into our Scope 3 emissions data has been a game-changer for our sustainability reporting.',
        name: 'Sustainability Head',
        company: 'Tier 1 Auto Supplier',
        avatar: 'SH',
    },
    {
        quote: 'Onboarding was seamless. The AI-powered data capture meant our suppliers could participate without any technical burden.',
        name: 'Procurement Manager',
        company: 'Global OEM',
        avatar: 'PM',
    },
];
*/

export default function Customers() {
    const { t } = useLanguage();
    // const { ref, isVisible } = useScrollAnimation(0.1);

    return (
        <section className="section customers-section" id="customers">
            <div className="container section-center">
                <span className="section-label">{t('customers.label')}</span>
                <h2 className="section-title">{t('customers.title')}</h2>
                <p className="section-subtitle" style={{ fontSize: '1.2rem', marginTop: '1rem', opacity: 0.7 }}>{t('customers.updating')}</p>
                {/* <p className="section-subtitle">{t('customers.trusted')}</p> */}
            </div>



            {/* Marquee and Testimonials hidden per request
            <div className="marquee-container">
                <div className="marquee-track">
                    {[...partners, ...partners, ...partners, ...partners].map((partner, i) => (
                        <div key={i} className="partner-logo">
                            <img src={partner.logo} alt={partner.name} />
                        </div>
                    ))}
                </div>
            </div>

            <div className="container section-center" style={{ marginTop: 80 }}>
                <h3 className="section-title" style={{ fontSize: 28 }}>{t('testimonials.title')}</h3>
            </div>

            <div className="container">
                <div className={`testimonials-grid ${isVisible ? 'visible' : ''}`}>
                    {testimonials.map((item, i) => (
                        <div key={i} className="testimonial-card" style={{ animationDelay: `${i * 0.15}s` }}>
                            <Quote size={32} className="testimonial-quote-icon" />
                            <p className="testimonial-text">{item.quote}</p>
                            <div className="testimonial-author">
                                <div className="testimonial-avatar">{item.avatar}</div>
                                <div>
                                    <div className="testimonial-name">{item.name}</div>
                                    <div className="testimonial-company">{item.company}</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            */}
        </section>
    );
}
