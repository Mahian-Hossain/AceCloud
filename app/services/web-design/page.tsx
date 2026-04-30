"use client";


import CommonLine from "@/components/CommonLine/CommonLine";
import CustomHero from "@/components/CustomHero/CustomHero";
import HeroInsights from "@/components/HeroInsights/HeroInsights";
import FAQSection from "@/components/sections/FAQSection";
import PartnerLogoSection from "@/components/Service/TrustedPartners";
import { Container, Box } from "@mui/material";




export default function WebDesignSection() {

  return (
    <Box sx={{ pt: { xs: 10, md: 15 } }}>
      <Container maxWidth='lg'>
        <CustomHero
          title="Crafted Web Design for Exceptional Experiences"
          subtitle="Transform your ideas into stunning digital experiences. Our expert design services focus on user-centric interfaces, responsive layouts, and seamless functionality to elevate your online presence."
          linkHref="/contact-us"
          linkText="Start Building Now"
          imageSrc="/service/s1.jpg"
          imageAlt="Custom Web Design"
        />
      </Container>
      <Box>
        <PartnerLogoSection />
      </Box>
      <Container maxWidth='lg'>
        <HeroInsights
          title="Web Design."
          subtitle="Transform your ideas into stunning digital experiences with our expert web design services."
          services={[
            "Custom Design", "User-Centric UI/UX", "Responsive Layouts", "SEO Optimization", "Brand Identity"
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
  );
}
