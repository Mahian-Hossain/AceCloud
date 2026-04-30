"use client";

import CommonLine from "@/components/CommonLine/CommonLine";
import CustomHero from "@/components/CustomHero/CustomHero";
import HeroInsights from "@/components/HeroInsights/HeroInsights";
import FAQSection from "@/components/sections/FAQSection";
import PartnerLogoSection from "@/components/Service/TrustedPartners";
import { Container, Box } from "@mui/material";

export default function SEOPage() {
    return (
        <div>
            <Box sx={{ pt: { xs: 10, md: 15 } }}>
                <Container maxWidth='lg'>
                    <CustomHero
                        title="Drive Traffic with Expert SEO Strategies"
                        subtitle="Maximize your online presence with our tailored SEO services. From keyword research to performance tracking, we ensure your website ranks high and drives organic traffic."
                        linkHref="/contact-us"
                        linkText="Start Building Now"
                        imageSrc="/service/s2.jpg"
                        imageAlt="Custom Web Design"
                    />
                </Container>
                <Box>
                    <PartnerLogoSection />
                </Box>
                <Container maxWidth="lg">
                    <HeroInsights
                        title=" SEO Strategies."
                        subtitle="Maximize your online presence with our tailored SEO services."
                        services={[
                            "Comprehensive Keyword Research", "On-Page & Off-Page Optimization", "Technical SEO Audits", "SEO Optimization", "Local SEO for Targeted Visibility", "Regular Performance Tracking"
                        ]}
                    />
                </Container>
                <Box sx={{ mt: 2 }}>
                    <CommonLine />
                </Box>
                <Box sx={{ mb: 5 }}>
                    <FAQSection />
                </Box>
            </Box>
        </div>
    )
}
