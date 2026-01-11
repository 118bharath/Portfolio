import { useRef } from "react"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const About = () => {
    const containerRef = useRef(null)

    useGSAP(() => {
        const paragraphs = containerRef.current.querySelectorAll(".about-paragraph")

        gsap.fromTo(paragraphs,
            {
                y: 30,
                opacity: 0
            },
            {
                y: 0,
                opacity: 1,
                duration: 0.8,
                stagger: 0.15,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 80%",
                    toggleActions: "play none none reverse"
                }
            }
        )
    }, { scope: containerRef })

    return (
        <section id="about" className="bg-white dark:bg-[#050505] py-[100px] px-4 md:px-[60px]">
            <div ref={containerRef} className="w-full max-w-[1400px] mx-auto space-y-12">
                {/* Section Header - Serif italic like reference */}
                <div className="text-left">
                    <h2 className="font-serif italic font-normal text-[48px] md:text-[64px] text-[#111111] dark:text-white tracking-[-0.02em] leading-[1.1]">
                        About
                    </h2>
                </div>

                {/* 2-Column Grid Layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-8">
                    {/* Left Column */}
                    <div className="space-y-8">
                        <p className="about-paragraph font-sans text-[16px] md:text-[17px] text-[#111111] dark:text-white leading-[1.7]">
                            Over the past few years, I've been building scalable web applications and intuitive user interfaces. I specialize in React, Node.js, and modern JavaScript ecosystems, with a strong focus on performance and clean architecture.
                        </p>
                        <p className="about-paragraph font-sans text-[16px] md:text-[17px] text-[#111111] dark:text-white leading-[1.7]">
                            At my core, I'm driven by curiosity and the desire to solve complex problems with elegant solutions. I enjoy building systems that are both technically sound and genuinely useful.
                        </p>
                    </div>

                    {/* Right Column */}
                    <div className="space-y-8">
                        <p className="about-paragraph font-sans text-[16px] md:text-[17px] text-[#111111] dark:text-white leading-[1.7]">
                            I excel at creating seamless user experiences, automated workflows, and intelligent systems that eliminate manual work and amplify impact.
                        </p>
                        <p className="about-paragraph font-sans text-[16px] md:text-[17px] text-[#111111] dark:text-white leading-[1.7]">
                            Outside of work, I'm continuously learning new technologies, contributing to open source, and mentoring aspiring developers in web development and system design.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
