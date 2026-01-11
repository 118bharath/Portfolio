import { useEffect, useRef, useState } from "react"
import BlissBowl from "../../assets/images/Bliss-Bowl.png";
import AmbulanceSystem from "../../assets/images/Ambulance system.png";
import BlockChain from "../../assets/images/block chain.png";
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { ArrowUpRight } from "lucide-react"

const Projects = () => {
    const [activeProject, setActiveProject] = useState(0)
    const projectRefs = useRef([])
    const skillsContainerRef = useRef(null)

    const projects = [
        {
            id: 1,
            title: "Bliss Bowl",
            description: "A comprehensive online shopping experience designed for scalability and user engagement.",
            image: BlissBowl,
            skills: ["React", "Tailwind CSS", "Node.js", "MongoDB", "ExpressJS", "Redux Toolkit", "Git", "Postman"],
            event: "Freelance",
            year: "2024",
            liveUrl: "https://swiggy-clone-ebon-delta.vercel.app/",
            githubUrl: "https://github.com/118bharath/Swiggy-Clone"
        },
        {
            id: 2,
            title: "Ambulance System",
            description: "A real-time emergency response coordination platform.",
            image: AmbulanceSystem,
            skills: ["Python", "Machine Learning Algorithms", "Random FOrest Classifier", "Decision Tree Classifier", "K-Nearest Neighbors (KNN)", "NumPy", "Pandas", "Scikit-Learn", "Matplotlib", "Tkinter"],
            event: "Hackathon",
            year: "2023",
            liveUrl: "https://github.com/118bharath/AI-Integrated-Ambulance-System",
            githubUrl: "https://github.com/118bharath/AI-Integrated-Ambulance-System"
        },
        {
            id: 3,
            title: "Blockchain Voting",
            description: "Secure and transparent voting system leveraging blockchain technology.",
            image: BlockChain,
            skills: ["BlockChain", "Python", "Tkinter", "Hashlib", "Smart Contracts", "Git"],
            event: "Personal",
            year: "2023",
            liveUrl: "https://github.com/118bharath/Digital-Certificate-Verification",
            githubUrl: "https://github.com/118bharath/Digital-Certificate-Verification"
        },
        {
            id: 4,
            title: "Prism",
            description: "A full-stack blogging platform inspired by Medium, featuring rich text editing, user authentication, and article publishing.",
            image: "https://images.unsplash.com/photo-1456324504439-367cee3b3c32?q=80&w=800&auto=format&fit=crop",
            skills: ["React", "Node.js", "ExpressJS", "MongoDB", "JWT Authentication", "Rich Text Editor", "Tailwind CSS"],
            event: "Personal Project",
            year: "2023",
            liveUrl: "#",
            githubUrl: "#"
        }
    ]

    useEffect(() => {
        const observers = []

        projectRefs.current.forEach((ref, index) => {
            if (!ref) return

            const observer = new IntersectionObserver(
                ([entry]) => {
                    if (entry.isIntersecting) {
                        setActiveProject(index)
                    }
                },
                {
                    root: null,
                    threshold: 0.5, // Trigger when 50% of the card is visible
                    rootMargin: "-10% 0px -10% 0px"
                }
            )

            observer.observe(ref)
            observers.push(observer)
        })

        return () => {
            observers.forEach(observer => observer.disconnect())
        }
    }, [])

    useGSAP(() => {
        if (!skillsContainerRef.current) return

        // Animate skills change
        gsap.fromTo(skillsContainerRef.current,
            { opacity: 0, y: 20 },
            { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" }
        )

        // Dispatch event for HeroRightPanel
        window.dispatchEvent(new CustomEvent('project-change', {
            detail: {
                index: activeProject,
                skills: projects[activeProject].skills
            }
        }))
    }, [activeProject])

    return (
        <section id="projects" className="bg-white dark:bg-[#050505] py-[60px] px-4 md:px-[70px] lg:px-[100px]">
            <div className="w-full max-w-[1400px] mx-auto space-y-16">
                {/* Section Header */}
                <div className="text-left space-y-4">
                    <h2 className="font-serif italic font-normal text-[48px] md:text-[64px] text-[#111111] dark:text-white tracking-[-0.02em] leading-[1.1]">
                        Projects
                    </h2>
                </div>

                <div className="grid lg:grid-cols-[1fr_400px] gap-16 relative">

                    {/* Left Column: Project Cards */}
                    <div className="flex flex-col gap-[60px] md:gap-[100px]">
                        {projects.map((project, index) => (
                            <div
                                key={project.id}
                                ref={el => projectRefs.current[index] = el}
                                className="flex flex-col gap-6 group"
                            >
                                {/* Project Thumbnail - Clickable */}
                                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="block w-full aspect-[16/9] rounded-[24px] overflow-hidden bg-gray-100 dark:bg-[#111111] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-200 dark:border-[#333333] transition-all duration-300 group-hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)]">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transform transition-all duration-700 ease-out group-hover:scale-105"
                                    />
                                </a>

                                {/* Mobile Skills (Visible only on mobile/tablet) */}
                                <div className="lg:hidden">
                                    <h4 className="text-[#111111] dark:text-white font-medium mb-2">Skills used</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {project.skills.map(skill => (
                                            <span key={skill} className="inline-flex items-center px-[18px] py-[10px] rounded-[999px] border border-[#EDEDED] dark:border-[#333333] bg-[#FCFCFC] dark:bg-[#111111] text-[#6b6b6b] dark:text-[#888888] text-[14px] leading-none hover:scale-105 hover:shadow-[0_0_12px_rgba(0,0,0,0.1)] dark:hover:shadow-[0_0_15px_rgba(255,255,255,0.15)] transition-all duration-300 cursor-default">
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Project Info Grid */}
                                <div className="flex flex-col gap-6">
                                    <h3 className="font-serif text-[#111111] dark:text-white text-[28px] md:text-[36px] font-normal tracking-[-0.01em]">
                                        {project.title}
                                    </h3>

                                    <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr_2fr_auto] gap-8 items-start border-t border-gray-100 dark:border-[#333333] pt-6">
                                        {/* Event */}
                                        <div>
                                            <span className="block text-xs font-medium text-gray-400 uppercase tracking-wider mb-2">Event</span>
                                            <span className="text-base text-[#111111] dark:text-white font-medium">{project.event}</span>
                                        </div>

                                        {/* Year */}
                                        <div>
                                            <span className="block text-xs font-medium text-gray-400 uppercase tracking-wider mb-2">Year</span>
                                            <span className="text-base text-[#111111] dark:text-white font-medium">{project.year}</span>
                                        </div>

                                        {/* Description */}
                                        <div>
                                            <span className="block text-xs font-medium text-gray-400 uppercase tracking-wider mb-2">Description</span>
                                            <p className="text-base text-[#6b6b6b] dark:text-[#888888] leading-relaxed">
                                                {project.description}
                                            </p>
                                        </div>

                                        {/* Action Button */}
                                        <a
                                            href={project.githubUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="w-12 h-12 rounded-full border border-gray-200 dark:border-[#333333] flex items-center justify-center hover:bg-[#111111] hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors duration-300 mt-4 md:mt-0"
                                            aria-label="View on GitHub"
                                        >
                                            <ArrowUpRight className="w-5 h-5" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Right Column: Sticky Skills Panel (Desktop Only) */}
                    <div className="hidden lg:block relative">
                        <div className="sticky top-[120px] h-fit p-8 rounded-[24px] border border-gray-200 dark:border-[#333333] bg-white dark:bg-[#050505] shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
                            <div className="space-y-6">
                                <h4 className="font-serif italic text-[#111111] dark:text-white text-[24px] font-normal border-b border-gray-100 dark:border-[#333333] pb-4">
                                    Skills used
                                </h4>

                                <div ref={skillsContainerRef} className="flex flex-wrap gap-2">
                                    {projects[activeProject].skills.map((skill, index) => (
                                        <span key={skill} className="inline-flex items-center px-[18px] py-[10px] rounded-[999px] border border-[#EDEDED] dark:border-[#333333] bg-[#FCFCFC] dark:bg-[#111111] text-[#6b6b6b] dark:text-[#888888] text-[14px] leading-none hover:scale-105 hover:shadow-[0_0_12px_rgba(0,0,0,0.1)] dark:hover:shadow-[0_0_15px_rgba(255,255,255,0.15)] transition-all duration-300 cursor-default">
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Projects
