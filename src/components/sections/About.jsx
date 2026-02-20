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
        <section id="about" className="bg-[#FDF8F0] dark:bg-[#050505] py-[100px] px-4 md:px-[60px]">
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
                            I build backend-focused applications using both the Java (Spring Boot) stack and the MERN ecosystem. I enjoy designing clean REST APIs, optimizing databases, and building reliable systems that scale well and stay easy to maintain.
                        </p>
                        <p className="about-paragraph font-sans text-[16px] md:text-[17px] text-[#111111] dark:text-white leading-[1.7]">
                            I believe good software isn’t just about writing code — it’s about solving the right problems the right way. I value clarity in communication, structured thinking, and staying calm while debugging complex issues. Whether working independently or collaborating in a team, I focus on understanding the bigger picture before jumping into solutions.
                        </p>
                    </div>

                    {/* Right Column */}
                    <div className="space-y-8">
                        <p className="about-paragraph font-sans text-[16px] md:text-[17px] text-[#111111] dark:text-white leading-[1.7]">
                            I’m naturally curious about how systems work under the hood. I enjoy thinking about scalability, performance trade-offs, and clean architecture decisions that make applications future-proof. For me, writing code isn’t just about making it run — it’s about making it efficient, readable, and built to handle growth.
                        </p>
                        <p className="about-paragraph font-sans text-[16px] md:text-[17px] text-[#111111] dark:text-white leading-[1.7]">
                            Outside of projects, I continuously explore new tools and concepts — from improving my system design thinking to experimenting with DevOps workflows and automation. I regularly practice problem-solving, refine my fundamentals, and stay updated with evolving technologies to keep sharpening my engineering mindset.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
