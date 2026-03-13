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
    const siteUrl = 'https://venuvascular.com'; // Placeholder - Update with your actual domain
    const fullUrl = `${siteUrl}${pathname}`;

    const seoTitle = title || 'Venuva Vascular | Leading Vascular & Interventional Radiology Center';
    const seoDescription = description || 'Expert minimally invasive treatments for varicose veins, thyroid nodules, UFE, and more at Venuva Vascular Center.';
    const seoKeywords = keywords || 'vascular surgery india, interventional radiology, varicose veins treatment, thyroid ablation, UFE, Venuva Vascular';
    const seoCanonical = canonical || fullUrl;

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
            <meta property="og:site_name" content="Venuva Vascular" />
            <meta property="og:locale" content="en_IN" />
            <meta property="og:title" content={seoTitle} />
            <meta property="og:description" content={seoDescription} />
            <meta property="og:url" content={seoCanonical} />
            <meta property="og:type" content={type} />
            {image && <meta property="og:image" content={image} />}

            {/* Twitter Tags */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={seoTitle} />
            <meta name="twitter:description" content={seoDescription} />
            {image && <meta name="twitter:image" content={image} />}
            
            {/* JSON-LD Schema */}
            {schema && (
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
                />
            )}
        </Helmet>
    );
};

export default SEO;
