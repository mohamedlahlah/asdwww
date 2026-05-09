import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
    title: string;
    description: string;
    keywords?: string;
    ogImage?: string;
    canonicalUrl?: string;
}

const SEO: React.FC<SEOProps> = ({ 
    title, 
    description, 
    keywords = "التجارة الإلكترونية, تصميم متاجر, تسويق رقمي, تحسين محركات البحث, التاجر الرقمي", 
    ogImage = "https://dtajer.vercel.app/dtajer.png", 
    canonicalUrl 
}) => {
    const siteName = "التاجر الرقمي | Digital Merchant";
    const fullTitle = `${title} | ${siteName}`;

    // Schema.org JSON-LD for Organization
    const schemaOrgJSONLD = {
        "@context": "http://schema.org",
        "@type": "Organization",
        "name": siteName,
        "url": "https://dtajer.vercel.app/",
        "logo": "https://dtajer.vercel.app/dtajer.png",
        "sameAs": [
            "https://twitter.com/dtajer",
            "https://instagram.com/dtajer"
        ],
        "description": "منصة ناشئة تهدف إلى تمكين التجار العرب، عبر توفير أدوات وخدمات رقمية تساعدهم على بناء أعمال مستدامة وقابلة للنمو."
    };

    return (
        <Helmet>
            {/* Standard metadata tags */}
            <title>{fullTitle}</title>
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />
            
            {/* Canonical Link */}
            {canonicalUrl && <link rel="canonical" href={`https://dtajer.vercel.app${canonicalUrl}`} />}

            {/* OpenGraph tags (for Facebook, LinkedIn, WhatsApp) */}
            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={ogImage} />
            <meta property="og:type" content="website" />
            <meta property="og:url" content={`https://dtajer.vercel.app${canonicalUrl || ''}`} />
            <meta property="og:site_name" content={siteName} />

            {/* Twitter Card tags */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={fullTitle} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={ogImage} />

            {/* Schema.org for Google */}
            <script type="application/ld+json">
                {JSON.stringify(schemaOrgJSONLD)}
            </script>
        </Helmet>
    );
};

export default SEO;
