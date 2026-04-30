'use client' 

import CommonLine from '@/components/CommonLine/CommonLine'
import CustomHero from '@/components/CustomHero/CustomHero'
import HeroInsights from '@/components/HeroInsights/HeroInsights'
import FAQSection from '@/components/sections/FAQSection'
import PartnerLogoSection from '@/components/Service/TrustedPartners'
import { Box, Container } from '@mui/material'
import React from 'react'

export default function Branding() {
    return (
        <div>
            <Box sx={{ pt: { xs: 10, md: 15 } }}>
                <Container maxWidth="lg">
                    <CustomHero
                        title="Elevate Your Brand with Strategic Branding Solutions"
                        subtitle="Build a strong and memorable brand identity. From logo design to brand strategy, our services ensure your business stands out in a competitive market."
                        linkHref="/contact-us"
                        linkText="Start Building Now"
                        imageSrc="/service/s3.jpg"
                        imageAlt="Custom Web Design"
                    />
                </Container>
                <Box>
                    <PartnerLogoSection />
                </Box>
                <Container maxWidth="lg">
                    <HeroInsights
                        title="Branding."
                        subtitle="Develop a captivating brand identity with our comprehensive branding services, tailored to reflect your values and vision."
                        services={[
                            "Logo Design",
                            "Brand Strategy",
                            "Visual Identity",
                            "Market Positioning",
                            "Brand Guidelines",
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
