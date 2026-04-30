'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Marquee from 'react-fast-marquee';

interface PartnerLogoProps {
    alt: string;
    src: string;
    width?: number;
    height?: number;
}

const PartnerLogo: React.FC<PartnerLogoProps> = ({ alt, src, width = 80, height = 80 }) => (
    <li>
        <Image
            alt={alt}
            src={src}
            width={width}
            height={height}
            loading="lazy"
            className="w-28 h-auto"
        />
    </li>
);

const PartnerLogoSection: React.FC = () => {
    const partners = [
        { alt: 'Asana', src: 'https://cdn.prod.website-files.com/64350ccbd2c687494da08367/643d1ff8dd96547f19dd2e8c_Logo-01%402x.png' },
        { alt: 'Tidal', src: 'https://cdn.prod.website-files.com/64350ccbd2c687494da08367/643d1ff5835c890267993fc4_Logo-02%402x.webp' },
        { alt: 'Innovaccer', src: 'https://cdn.prod.website-files.com/64350ccbd2c687494da08367/643d1ff6031352f66eabb5a3_Logo-03%402x.webp' },
        { alt: 'Linear', src: 'https://cdn.prod.website-files.com/64350ccbd2c687494da08367/643d1ff8f140198081f268f6_Logo-04%402x.png' },
        { alt: 'Raycast', src: 'https://cdn.prod.website-files.com/64350ccbd2c687494da08367/643d1ff80aff9025fccbed1e_Logo-05%402x.png' },
        { alt: 'Labelbox', src: 'https://cdn.prod.website-files.com/64350ccbd2c687494da08367/643d1ff8ea3ee579ab81a0f1_Logo-06%402x.png' },
        { alt: 'Company 07', src: 'https://cdn.prod.website-files.com/64350ccbd2c687494da08367/643d1ff9835c8962df994007_Logo-07%402x.png' },
        { alt: 'Company 08', src: 'https://cdn.prod.website-files.com/64350ccbd2c687494da08367/643d1ff861039c55f6fc4630_Logo-08%402x.webp' },
        { alt: 'Company 09', src: 'https://cdn.prod.website-files.com/64350ccbd2c687494da08367/643d1ff9f9187e7d71ae1c83_Logo-09%402x.webp' },
        { alt: 'Company 10', src: 'https://cdn.prod.website-files.com/64350ccbd2c687494da08367/643d1ff8e402d4ed86c43b29_Logo-10%402x.png' },
        { alt: 'Company 11', src: 'https://cdn.prod.website-files.com/64350ccbd2c687494da08367/643d1ff9830acfdd53e12e4b_Logo-11%402x.png' },
        { alt: 'Company 12', src: 'https://cdn.prod.website-files.com/64350ccbd2c687494da08367/643d1ff95fde2a1e9e7fa012_Logo-12%402x.png' },
    ];

    return (
        <motion.section
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            viewport={{ once: true, amount: 0.4 }}
            className="h-full mx-auto w-full  md:max-w-screen-xl  md:px-12 lg:px-20"
        >
            <div className="lg:py-2">
                <div className="mx-auto px-4 md:px-8">
                    <div className="lg:mt-8">
                        {/* First Marquee (Left to Right) */}
                        <Marquee direction="left" speed={30} gradient={false}>
                            <ul className="flex items-center gap-x-6 gap-y-6 md:gap-x-16 justify-center">
                                {partners.map((partner, index) => (
                                    <PartnerLogo key={index} alt={partner.alt} src={partner.src} />
                                ))}
                            </ul>
                        </Marquee>
                    </div>
                </div>
            </div>
        </motion.section>
    );
};

export default PartnerLogoSection;