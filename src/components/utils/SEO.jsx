import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

const SEO = ({
    title,
    description,
    keywords,
    image,
    type = 'website',
    canonical,
    schema,
}) => {
    const { pathname } = useLocation();
    const siteUrl = 'https://venuvavascular.com'; // Placeholder - Update with your actual domain
    const fullUrl = `${siteUrl}${pathname}`;

    const seoTitle = title || 'Best Varicose Vein & Vascular Treatment in Bengaluru | Venuva Vascular Center';
    const seoDescription = description || 'Venuva Vascular Center offers advanced varicose vein and vascular treatments in Bengaluru with expert minimally invasive procedures.';
    const seoKeywords = keywords || 'vascular treatment Bengaluru, varicose vein treatment Bengaluru, vascular clinic Bangalore, DVT treatment Bangalore, diabetic foot treatment Bangalore, angioplasty treatment Bengaluru, EVLT treatment Bangalore, vascular surgeon Bangalore';
    const seoCanonical = canonical || fullUrl;

    const defaultSchema = {
        "@context": "https://schema.org",
        "@type": "MedicalClinic",
        "name": "Venuva Vascular Center",
        "url": "https://venuvavascular.com/",
        "logo": "https://venuvavascular.com/assets/venuva-logo-OgticSHR.png",
        "image": "https://venuvavascular.com/assets/AboutUs-laHemSoL.webp",
        "description": "Venuva Vascular Center offers advanced varicose vein and vascular treatments in Bengaluru with minimally invasive procedures and expert vascular care.",
        "telephone": "+919019900716",
        "medicalSpecialty": "Vascular Surgery",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "No. 38, 8th Cross Road, 5th Main Road, Malleshwaram",
            "addressLocality": "Bengaluru",
            "addressRegion": "Karnataka",
            "postalCode": "560003",
            "addressCountry": "IN"
        },
        "areaServed": "Bengaluru",
        "sameAs": [
            "https://www.instagram.com/",
            "https://www.facebook.com/",
            "https://www.linkedin.com/"
        ]
    };

    const finalSchema = schema || defaultSchema;

    return (
        <Helmet>
            <link rel="canonical" href={seoCanonical} />
            <title>{seoTitle}</title>
            <meta name="description" content={seoDescription} />
            <meta name="keywords" content={seoKeywords} />
            <meta name="author" content="Venuva Vascular" />
            <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
            <meta name="googlebot" content="index, follow" />
            
            {/* OG Tags */}
            <meta property="og:site_name" content="Venuva Vascular Center" />
            <meta property="og:locale" content="en_IN" />
            <meta property="og:title" content={seoTitle} />
            <meta property="og:description" content={seoDescription} />
            <meta property="og:url" content={seoCanonical} />
            <meta property="og:type" content={type} />
            <meta property="og:image" content={image || "https://venuvavascular.com/assets/AboutUs-laHemSoL.webp"} />

            {/* Twitter Tags */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={seoTitle} />
            <meta name="twitter:description" content={description || "Advanced vascular and minimally invasive vein treatments in Bengaluru."} />
            <meta name="twitter:image" content={image || "https://venuvavascular.com/assets/AboutUs-laHemSoL.webp"} />
            
            {/* JSON-LD Schema */}
            {finalSchema && (
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(finalSchema) }}
                />
            )}
        </Helmet>
    );
};

export default SEO;
