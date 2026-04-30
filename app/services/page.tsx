import HeroInsights from '@/components/HeroInsights/HeroInsights';
import FAQSection from '@/components/sections/FAQSection';
import ServiceFor from '@/components/Service/ServiceFor';
import { Box, Container } from '@mui/material';
import React from 'react';
const Services: React.FC = () => {
    return (
        <div>
            <div>
                <ServiceFor />
            </div>
            <Container>
                <div className="pt-10 lg:py-32">
                    <div className="mb-8">
                        <div className="flex flex-wrap justify-between mb-3 md:mb-5 lg:mb-0">
                            <div className="px-2 relative">
                                <div className="inline-flex items-center space-x-2 w-auto mb-3 lg:absolute lg:top-3 lg:left-4">
                                    <div className="w-1.5 h-1.5 rounded-full bg-white"></div>
                                    <div
                                        style={{
                                            background: 'linear-gradient(to right, #00FFAB, #6B46FF)',
                                            WebkitBackgroundClip: 'text',
                                            WebkitTextFillColor: 'transparent',
                                            backgroundClip: 'text',
                                            color: 'transparent',
                                            display: 'inline-block',
                                        }}>
                                        Services
                                    </div>
                                </div>
                                <h1 className="text-2xl md:text-5xl
                            font-sans-primary tracking-tight
                            text-white dark:text-grayDark-100
                            leading-none lg:leading-snug text-balance
                            lg:indent-32">

                                    We’re a<br />
                                    Full Service <br />
                                    Digital Agency
                                </h1>
                            </div>
                        </div>
                        <div className="w-full flex md:justify-end">
                            <div className="px-2">
                                <div className="w-full relative max-w-xl pr-10 lg:pr-0 lg:max-w-2xl lg:pl-32">
                                    <h2 className="mb-3 text-lg md:text-2xl xl:text-2xl 4xl:text-4xl tracking-tight text-white dark:text-grayDark-100 leading-tight">
                                        We bring our passion for good design to brave brands and deliver something you can shout about.
                                    </h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    <HeroInsights
                        title="Design."
                        subtitle='Brand designers and web designers in-house crafting visuals to match your brand values.'
                        services={[
                            "Brand Identity",
                            "Web Design Strategy",
                            "User Experience Research",
                            "Visual Design Systems",
                            "Interaction Design",
                            "Prototyping & Testing",
                        ]}
                    />
                    <HeroInsights
                        title="Support."
                        subtitle="Our team of expert brand and web designers ensures your brand's visuals resonate with your values and target audience."
                        services={[
                            "Brand Identity",
                            "UI/UX Design",
                            "Web Development",
                            "Graphic Design",
                            "Creative Strategy",
                        ]}
                    />
                    <HeroInsights
                        title="Develop."
                        subtitle="Our team of skilled brand and web designers crafts unique visuals and digital experiences that align with and enhance your brand's core values."
                        services={[
                            "Brand Identity",
                            "User Experience Design",
                            "Web Development",
                            "Digital Marketing",
                            "Interaction Design",
                            "Strategy Consulting",
                        ]}
                    />
                    <HeroInsights
                        title="Prototyping & Testing."
                        subtitle='Brand designers and web designers in-house crafting visuals to match your brand values.'
                        services={[
                            "Prototyping",
                            "User Testing",
                            "Usability Testing",
                            "Visual Design",
                            "Interaction Design",
                            "Wireframe",
                        ]}
                    />
                </div>
                <Box sx={{ mb: 5 }}>
                    <FAQSection />
                </Box>
            </Container>
        </div>
    );
};

export default Services;
