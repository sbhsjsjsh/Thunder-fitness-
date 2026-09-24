import React from 'react';

export function SchemaOrg() {
  const domain = "https://thunder-fitness-gym.vercel.app";
  const logoUrl = `${domain}/favicon.svg`;
  const primaryImageUrl = "https://i.ibb.co/RTD7Q8M8/1790279030486.jpg";
  const businessName = "Thunder Fitness Gym Sultanpalya";
  const phone = "+91 78927 72515";
  const email = "thunderfitnessofficial@gmail.com";
  
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${domain}/#organization`,
        "name": businessName,
        "url": domain,
        "logo": {
          "@type": "ImageObject",
          "@id": `${domain}/#logo`,
          "url": logoUrl,
          "contentUrl": logoUrl,
          "width": 512,
          "height": 512,
          "caption": businessName
        },
        "image": { "@id": `${domain}/#logo` },
        "sameAs": [
          "https://www.instagram.com/thunderfitnessofficial",
          "https://www.facebook.com/thunderfitnesssultanpalya",
          "https://www.youtube.com/@thunderfitnessofficial"
        ],
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": phone,
          "contactType": "customer service",
          "email": email,
          "availableLanguage": ["English", "Hindi"]
        }
      },
      {
        "@type": "WebSite",
        "@id": `${domain}/#website`,
        "url": domain,
        "name": businessName,
        "publisher": { "@id": `${domain}/#organization` },
        "potentialAction": {
          "@type": "SearchAction",
          "target": {
            "@type": "EntryPoint",
            "urlTemplate": `${domain}/?s={search_term_string}`
          },
          "query-input": "required name=search_term_string"
        }
      },
      {
        "@type": "WebPage",
        "@id": `${domain}/#webpage`,
        "url": domain,
        "name": "Thunder Fitness Gym Sultanpalya | Best Gym & Personal Training in Bengaluru",
        "isPartOf": { "@id": `${domain}/#website` },
        "about": { "@id": `${domain}/#organization` },
        "description": "Join Thunder Fitness Gym Sultanpalya, Bengaluru for strength training, weight loss, bodybuilding, cardio, personal training, nutrition plans, and 21 Days Body Transformation programs.",
        "breadcrumb": { "@id": `${domain}/#breadcrumb` },
        "primaryImageOfPage": { "@id": `${domain}/#primaryimage` }
      },
      {
        "@type": "AboutPage",
        "@id": `${domain}/#about`,
        "url": `${domain}/#services`,
        "name": "About Thunder Fitness Gym",
        "isPartOf": { "@id": `${domain}/#website` },
        "description": "Established in April 2024, Thunder Fitness is Sultanpalya's premier destination for body transformation."
      },
      {
        "@type": "ContactPage",
        "@id": `${domain}/#contact-page`,
        "url": `${domain}/#contact`,
        "name": "Contact Thunder Fitness Gym",
        "isPartOf": { "@id": `${domain}/#website` }
      },
      {
        "@type": ["Gym", "HealthAndBeautyBusiness", "SportsActivityLocation", "FitnessCenter"],
        "@id": `${domain}/#localbusiness`,
        "name": businessName,
        "url": domain,
        "telephone": phone,
        "email": email,
        "address": {
          "@type": "PostalAddress",
          "@id": `${domain}/#address`,
          "streetAddress": "1st Floor, JA Heights, 4, Sultanpalya Main Rd, RT Nagar, Sultanpalya",
          "addressLocality": "Bengaluru",
          "addressRegion": "Karnataka",
          "postalCode": "560032",
          "addressCountry": "IN"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "@id": `${domain}/#geo`,
          "latitude": 13.0186,
          "longitude": 77.5954
        },
        "openingHoursSpecification": [
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            "opens": "06:00",
            "closes": "22:30"
          },
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": "Sunday",
            "opens": "17:30",
            "closes": "21:30"
          }
        ],
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.8",
          "reviewCount": "330",
          "bestRating": "5",
          "worstRating": "1"
        },
        "review": [
          {
            "@type": "Review",
            "author": {
              "@type": "Person",
              "name": "Local Member"
            },
            "reviewRating": {
              "@type": "Rating",
              "ratingValue": "5",
              "bestRating": "5"
            },
            "reviewBody": "Excellent facility with top-notch equipment and very helpful trainers. Highly recommend for anyone in Sultanpalya."
          }
        ],
        "areaServed": [
          { "@type": "City", "name": "Bengaluru" },
          { "@type": "Neighborhood", "name": "Sultanpalya" },
          { "@type": "Neighborhood", "name": "RT Nagar" },
          { "@type": "Neighborhood", "name": "North Bengaluru" }
        ],
        "priceRange": "₹₹",
        "hasOfferCatalog": { "@id": `${domain}/#offercatalog` }
      },
      {
        "@type": "OfferCatalog",
        "@id": `${domain}/#offercatalog`,
        "name": "Fitness & Training Services",
        "itemListElement": [
          {
            "@type": "Service",
            "name": "Strength Training",
            "description": "Professional strength training for muscle building and power.",
            "provider": { "@id": `${domain}/#localbusiness` }
          },
          {
            "@type": "Service",
            "name": "Weight Loss & Cardio",
            "description": "High-intensity cardio and weight loss programs.",
            "provider": { "@id": `${domain}/#localbusiness` }
          },
          {
            "@type": "Service",
            "name": "Personal Training",
            "description": "One-on-one elite fitness coaching.",
            "provider": { "@id": `${domain}/#localbusiness` }
          },
          {
            "@type": "Service",
            "name": "Women's Personal Training",
            "description": "Safe and effective personal training tailored for women.",
            "provider": { "@id": `${domain}/#localbusiness` }
          },
          {
            "@type": "Service",
            "name": "21 Days Body Transformation Challenge",
            "description": "Our signature challenge for rapid, visible results.",
            "provider": { "@id": `${domain}/#localbusiness` }
          }
        ]
      },
      {
        "@type": "FAQPage",
        "@id": `${domain}/#faq`,
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Is there a gym in Sultanpalya?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, Thunder Fitness Gym Sultanpalya is the best fitness center in the area, offering premium equipment and coaching."
            }
          },
          {
            "@type": "Question",
            "name": "Does the gym offer weight loss training?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, we specialize in weight loss programs including cardio training, nutrition guidance, and personal coaching."
            }
          },
          {
            "@type": "Question",
            "name": "Are nutrition or diet plans available?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Absolutely. We provide customized nutrition guidance and diet plans as part of our transformation programs."
            }
          }
        ]
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
