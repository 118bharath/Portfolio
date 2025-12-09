import { useRef } from "react"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const About = () => {
    const containerRef = useRef(null)
    const text = "I’m someone who loves turning ideas into things that actually work, whether it’s a simple concept or a complex problem that needs patience and clarity. I’m driven by curiosity, always trying to understand how things fit together and how they can be made better. I enjoy building with intention, staying calm under pressure, and finding thoughtful solutions even when the path isn’t obvious. At my core, I value learning, improving, and creating work that genuinely feels meaningful."

    useGSAP(() => {
        const words = containerRef.current.querySelectorAll(".word")

        gsap.fromTo(words,
            {
                y: 50,
                opacity: 0
            },
            {
                y: 0,
                opacity: 1,
                duration: 0.8,
                stagger: 0.02,
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
            <div ref={containerRef} className="w-full max-w-[1400px] mx-auto space-y-16">
                {/* Section Header */}
                <div className="text-center space-y-4">
                    <h2 className="text-[32px] md:text-[40px] font-bold text-[#111111] dark:text-white tracking-tight">
                        About Me
                    </h2>
                </div>

                {/* Animated Text */}
                <div className="flex flex-wrap justify-start gap-x-2 gap-y-1 leading-[1.6]">
                    {text.split(" ").map((word, i) => (
                        <div key={i} className="overflow-hidden">
                            <span className="word inline-block font-sans text-[#111111] dark:text-white text-[19px] md:text-[24px]">
                                {word}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default About
