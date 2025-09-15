"use client";
import { SiteThemeProvider } from '@/components/sections/ThemeProvider';
import NavbarLayoutFloatingInline from '@/components/navigation/NavbarLayoutFloatingInline';
import SplitHero from '@/components/sections/layouts/hero/SplitHero';
import CtaAbout from '@/components/sections/layouts/about/CtaAbout';
import HowToBuy2D from '@/components/sections/layouts/howtobuy/2DHTB';
import NumberGridTokenomics from '@/components/sections/layouts/tokenomics/NumberGridTokenomics';
import CentralFAQ from '@/components/sections/layouts/faq/CentralFAQ';
import FooterBase from '@/components/footer/FooterBase';

export default function Home() {
  return (
    <SiteThemeProvider theme={{ styleVariant: 'futuristicAndOutOfBox', colorTemplate: 2, textAnimation: 'slide' }}>
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingInline
          navItems={[
            { name: 'Hero', id: 'hero' },
            { name: 'About', id: 'about' },
            { name: 'How to Buy', id: 'how-to-buy' },
            { name: 'Tokenomics', id: 'tokenomics' },
            { name: 'FAQ', id: 'faq' },
            { name: 'Footer', id: 'footer' },
          ]}
          logoSrc="/images/logo.svg"
          logoWidth={100}
          logoHeight={50}
          buttonText="Start Free Trial"
          onButtonClick={() => alert('Free Trial Started')}
          className="your-navbar-class"
          buttonClassName="your-button-class"
          buttonBgClassName="your-button-bg-class"
          navItemClassName="your-nav-item-class"
        />
      </div>
      <div id="hero" data-section="hero">
        <SplitHero
          title="Welcome to Your SaaS Brand"
          subtitle="Experience the future of productivity with our innovative platform."
          primaryButtonText="Get Started"
          secondaryButtonText="Learn More"
          onPrimaryButtonClick={() => alert('Get Started')}
          onSecondaryButtonClick={() => alert('Learn More')}
        />
      </div>
      <div id="about" data-section="about">
        <CtaAbout
          title="About Our SaaS"
          descriptions={[
            "Our platform offers unparalleled productivity tools that integrate seamlessly with your daily operations.",
            "Experience innovation at its finest, tailored to enhance your workflow and boost results."
          ]}
        />
      </div>
      <div id="how-to-buy" data-section="how-to-buy">
        <HowToBuy2D variant="simple" />
      </div>
      <div id="tokenomics" data-section="tokenomics">
        <NumberGridTokenomics
          title="Tokenomics Overview"
          description="Our token model is built for growth and sustainability."
          kpiItems={[
            { value: '100M', description: 'Total Supply' },
            { value: '50%', description: 'For Community Incentives' },
            { value: '30%', description: 'Locked for 3 Years' },
          ]}
        />
      </div>
      <div id="faq" data-section="faq">
        <CentralFAQ
          items={[
            { title: 'What is our SaaS?', content: 'It is a platform designed to enhance productivity and collaboration.' },
            { title: 'How to sign up?', content: 'Visit our homepage and click the "Get Started" button.' },
            { title: 'Is there a free trial?', content: 'Yes, we offer a 14-day free trial for new users.' },
            { title: 'Can I cancel anytime?', content: 'Absolutely, you can cancel your subscription anytime without penalties.' },
          ]}
        />
      </div>
      <div id="footer" data-section="footer">
        <FooterBase
          logoSrc="/images/logo.svg"
          logoWidth={100}
          logoHeight={50}
          columns={[
            { title: 'Features', items: [{ label: 'Collaboration Tools', onClick: () => {} }, { label: 'Productivity Boost', onClick: () => {} }] },
            { title: 'Resources', items: [{ label: 'Documentation', onClick: () => {} }, { label: 'Support', onClick: () => {} }] },
            { title: 'Company', items: [{ label: 'About Us', onClick: () => {} }, { label: 'Careers', onClick: () => {} }] },
          ]}
          copyrightText="© 2023 Your SaaS Brand"
          onPrivacyClick={() => alert('Privacy Policy')}
        />
      </div>
    </SiteThemeProvider>
  );
}
