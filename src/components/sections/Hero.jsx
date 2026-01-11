import { useEffect, useRef, useState } from "react"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { Download } from "lucide-react"
import Resume from "../../assets/Sai_Bharath_Resume.pdf"


const Hero = () => {
    const containerRef = useRef(null)

    useGSAP(() => {
        const tl = gsap.timeline({ defaults: { ease: "power3.out" } })

        // Initial delay of 80ms
        tl.delay(0.08)

        tl.from(".reveal-line", {
            y: 28,
            opacity: 0,
            duration: 0.7,
            stagger: 0.12,
        })
            .from(".hero-sub", {
                opacity: 0,
                y: 10,
                duration: 0.5
            }, "-=0.3")
            .from(".hero-badge", {
                opacity: 0,
                y: -10,
                duration: 0.5
            }, "<")
        // .from(".hero-btn", {
        //     opacity: 0,
        //     y: 20,
        //     duration: 0.6,
        //     ease: "back.out(1.7)"
        // }, "-=0.5")

    }, { scope: containerRef })

    return (
        <section
            id="hero"
            ref={containerRef}
            className="min-h-[calc(100vh-6rem)] flex items-center bg-white dark:bg-[#050505] relative overflow-hidden pt-[45px] pb-[40px] px-4 md:px-[60px]"
        >
            <div className="flex flex-col items-start justify-center w-full max-w-[1400px] mx-auto text-left">
                {/* Badge */}
                <div className="hero-badge mb-6 inline-flex items-center px-[14px] py-[8px] sm:px-[18px] sm:py-[10px] rounded-[999px] border border-[#EDEDED] dark:border-[#333333] bg-[#FCFCFC] dark:bg-[#111111] text-[#6b6b6b] dark:text-[#888888] text-[12px] sm:text-[14px] leading-none">
                    Where clean design meets reliable engineering.
                </div>

                {/* Heading - Large serif like reference */}
                <h1 className="font-serif font-normal text-[#111111] dark:text-white tracking-[-0.02em] leading-[1.05] text-[clamp(48px,12vw,100px)] mb-4 break-words w-full">
                    <div className="overflow-hidden">
                        <div className="reveal-line">Sai Bharath</div>
                    </div>
                </h1>

                {/* Subtitle - Italic serif like reference */}
                <h2 className="font-serif italic font-normal text-[#111111] dark:text-white tracking-[-0.01em] leading-[1.3] text-[clamp(20px,4vw,32px)] mb-8">
                    <div className="overflow-hidden">
                        <div className="reveal-line">Full Stack Developer & UI Engineer</div>
                    </div>
                </h2>

                {/* Subheading - Sans-serif body text */}
                <p className="hero-sub text-[#6b6b6b] dark:text-[#888888] text-[17px] md:text-[19px] leading-[1.7] font-normal max-w-[640px] mb-10">
                    I'm a developer with a background in computer science. My work blends UI craftsmanship with system-level thinking — delivering applications that look good, work fast, scale smoothly, and stay maintainable.
                </p>

                {/* Resume Button */}
                <a
                    href={Resume} // Replace with actual resume path
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hero-btn inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#111111] dark:bg-white text-white dark:text-black font-medium text-[16px] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(0,0,0,0.2)] dark:hover:shadow-[0_0_20px_rgba(255,255,255,0.3)]"
                >
                    <span>Download Resume</span>
                    <Download className="w-4 h-4" />
                </a>
            </div>
        </section>
    )
}

export default Hero
