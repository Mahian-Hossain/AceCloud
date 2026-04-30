import React from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Button, Stack } from "@mui/material";

const ServicesSection: React.FC = () => {
    return (
        <section
            className="w-full h-[400px] sm:h-[500px] relative mb-[100px] sm:mb-[150px] mt-[50px] sm:mt-[60px] px-4 sm:px-0 font-['DM_Sans']"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
        >
            {/* Background Video */}
            <div
                className="bg-video-wrapper"
                style={{
                    borderRadius: "20px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "flex-end",
                    flexWrap: "nowrap",
                    gap: "10px",
                    opacity: 1,
                    overflow: "hidden",
                    zIndex: 0,
                    top: 0,
                    position: "absolute",
                    width: "100%",
                    height: "100%",
                    left: "calc(50% - 100% / 2)",
                    padding: 0,
                }}
            >
                <video
                    src="https://framerusercontent.com/assets/lr4LSmXa1klevAvb0jf1i2zsDE.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="auto"
                    style={{
                        width: "100%",
                        height: "100%",
                        display: "block",
                        objectFit: "cover",
                        objectPosition: "50% 50%",
                        borderRadius: "inherit",
                    }}
                />
            </div>

            {/* Overlay content */}
            <div className="absolute inset-0 text-center flex flex-col justify-center items-center text-white p-4 sm:p-6">
                {/* Title Section */}
                <div className="flex flex-col gap-2 sm:gap-2.5 items-center mb-6 sm:mb-7 text-center">
                    <div>
                        <h2 className="m-0 text-2xl md:text-5xl font-normal leading-tight">
                            Each Project we Undertake <br />
                            <span className="m-0 font-normal leading-tight text-white/60">
                                is a Unique Opportunity.
                            </span>
                        </h2>
                        <p className="text-[16px] text-white/80 font-light max-w-lg py-2 mx-auto leading-relaxed">
                            We approach each collaboration as a unique chance to deliver
                            exceptional results and build lasting partnerships.
                        </p>
                    </div>
                </div>

                {/* Buttons */}
                <div className="flex flex-row gap-1 items-center justify-center group">
                    <Stack
                        direction="row"
                        spacing={0}
                        alignItems="center"
                        sx={{
                            '&:hover .animated-button': {
                                backgroundColor: '#5a3ae4',
                            },
                            '&:hover .animated-arrow': {
                                transform: 'translateX(5px)',
                            },
                        }}
                    >
                        <Button
                            variant="contained"
                            href="contact"
                            className="animated-button"
                            sx={{
                                backgroundColor: '#0055FE',
                                color: 'white',
                                padding: '6.5px 24px',
                                borderRadius: '50px',
                                fontSize: '0.9rem',
                                fontWeight: '500',
                                textTransform: 'none',
                                transition: 'background-color 0.3s ease',
                            }}
                        >
                            Work With Us!
                        </Button>
                        <Button
                            variant="contained"
                            className="animated-button animated-arrow"
                            sx={{
                                backgroundColor: '#0055FE',
                                color: 'white',
                                minWidth: '39px',
                                padding: '0px',
                                height: '39px',
                                borderRadius: '50%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                transition: 'background-color 0.3s ease, transform 0.3s ease',
                            }}
                        >
                            <ArrowForwardIcon sx={{ padding: '0px !important' }} />
                        </Button>
                    </Stack>
                </div>
            </div>
        </section>
    );
};

export default ServicesSection;