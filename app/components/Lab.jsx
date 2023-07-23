'use client'
import { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import Image from 'next/image';
const SectionWithScroll = () => {
    const [scrollPosition, setScrollPosition] = useState(0);
    const controls = useAnimation();

    const headings = ['Heading 1', 'Heading 2',];
    const texts = [
        'Text for Heading 1',
        'Text for Heading 2',

    ];

    useEffect(() => {
        const handleScroll = () => {
            setScrollPosition(window.scrollY);
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        // Logic to update the headings and texts based on scroll position
        const currentHeadingIndex = Math.min(
            Math.floor(scrollPosition / 50), // Adjust 400 to control scroll threshold for heading change
            headings.length - 1
        );

        controls.start({ opacity: 0, y: -20 }).then(() => {
            controls.start({ opacity: 1, y: 0 });
        });
    }, [scrollPosition, controls]);

    return (
        <section className="flex justify-between px-32">
            <div className='flex flex-col gap-3'>
                <div className="">
                    {headings.map((heading, index) => (
                        <motion.h2
                            key={index}
                            initial={{ opacity: 0, y: -20 }}
                            animate={{
                                opacity:
                                    index ===
                                        Math.min(
                                            Math.floor(scrollPosition / 400),
                                            headings.length - 1
                                        )
                                        ? 1
                                        : 0,
                                y:
                                    index ===
                                        Math.min(
                                            Math.floor(scrollPosition / 400),
                                            headings.length - 1
                                        )
                                        ? 0
                                        : -20,
                            }}
                            className={`text-2xl font-bold`}
                        >
                            {heading}
                        </motion.h2>
                    ))}
                </div>
                <div className="">
                    {texts.map((text, index) => (
                        <motion.p
                            key={index}
                            initial={{ opacity: 0, y: -20 }}
                            animate={{
                                opacity:
                                    index ===
                                        Math.min(
                                            Math.floor(scrollPosition / 400),
                                            headings.length - 1
                                        )
                                        ? 1
                                        : 0,
                                y:
                                    index ===
                                        Math.min(
                                            Math.floor(scrollPosition / 400),
                                            headings.length - 1
                                        )
                                        ? 0
                                        : -20,
                            }}
                            className={`text-gray-600`}
                        >
                            {text}
                        </motion.p>
                    ))}
                </div>
            </div>
            <div className="">
                <Image src={'/labs.jpg'} width={500} height={500} alt='lab' />
            </div>
        </section>
    );
};

export default SectionWithScroll;

