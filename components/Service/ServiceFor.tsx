'use client';

import React from 'react';
import Link from 'next/link';
import { Box, Button, Stack } from "@mui/material";
import { motion } from "framer-motion";
import banner from '@/public/banner/new-banner.svg';
import PartnerLogoSection from './TrustedPartners';

export default function ServiceFor() {
  return (
    <div
      className='pt-28 relative'
      style={{
        backgroundImage: `url(${banner.src})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Gradient overlay for better text readability */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.1), hsl(220, 65%, 3.52%)',
        }}
      ></div>

      <motion.div
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.4 }}
        className="text-center relative z-10"
      >
        <Box sx={{ width: { xs: '100%', md: 700 }, mx: 'auto' }}>
          <motion.p
            className="text-[2rem] md:text-[3rem] lg:!leading-snug font-normal lg:mt-3 text-white text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <span className='mr-1'>Our </span>
            <span
              style={{
                background: 'linear-gradient(to right, #00FFAB, #6B46FF)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                color: 'transparent',
              }}
            >
              Services
            </span>
          </motion.p>
          <motion.p
            className="text-[0.8rem] lg:text-[1.125rem] lg:!leading-snug lg:mt-3 text-[#BABABA] text-center lg:w-[550px] py-2 mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            We work with clients in all sectors and of all sizes, from bootstrapped startups to Fortune 500 companies.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <Stack sx={{ my: 3 }} direction="row" spacing={2} justifyContent="center">
              <Link href="/services/branding" passHref>
                <Button variant="outlined" sx={{ color: 'white', borderColor: 'white', '&:hover': { borderColor: 'gray' }, borderRadius: '50px', textTransform: 'none' }}>
                  Branding
                </Button>
              </Link>
              <Link href="/services/seo" passHref>
                <Button variant="outlined" sx={{ color: 'white', borderColor: 'white', '&:hover': { borderColor: 'gray' }, borderRadius: '50px', textTransform: 'none' }}>
                  SEO
                </Button>
              </Link>
              <Link href="/services/web-design" passHref>
                <Button variant="outlined" sx={{ color: 'white', borderColor: 'white', '&:hover': { borderColor: 'gray' }, borderRadius: '50px', textTransform: 'none' }}>
                  Web Design
                </Button>
              </Link>
            </Stack>
          </motion.div>
        </Box>
      </motion.div>
      <PartnerLogoSection />
    </div>
  );
}