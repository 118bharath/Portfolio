import { useState } from "react"
import { Code2, Database, Wrench } from "lucide-react"
import SkillsCards from "./SkillsCards"

const Skills = () => {
    const [flippedCards, setFlippedCards] = useState({})

    const handleCardClick = (index) => {
        setFlippedCards(prev => ({
            ...prev,
            [index]: !prev[index]
        }))
    }

    const categories = [
        {
            title: "Frontend",
            icon: <Code2 className="w-12 h-12 mb-4 text-[#111111] dark:text-white" />,
            skills: ["React", "Vue", "Tailwind CSS", "GSAP", "Framer Motion"],
            description: "Building beautiful, interactive user interfaces."
        },
        {
            title: "Backend",
            icon: <Database className="w-12 h-12 mb-4 text-[#111111] dark:text-white" />,
            skills: ["Javascript", "TypeScript", "Java", "Python", "Node.js", "Express", "MySQL", "MongoDB"],
            description: "Architecting robust and scalable server-side systems."
        },
        {
            title: "Tools",
            icon: <Wrench className="w-12 h-12 mb-4 text-[#111111] dark:text-white" />,
            skills: ["Git", "Docker", "Figma", "AWS", "Vercel"],
            description: "Streamlining development and deployment workflows."
        }
    ]

    return (
        <section id="skills" className="py-[80px] px-6 md:px-12 lg:px-24 bg-white dark:bg-[#050505]">
            <div className="max-w-[1400px] mx-auto space-y-16">

                {/* Header */}
                <div className="text-center space-y-4">
                    <h2 className="text-[32px] md:text-[40px] font-bold text-[#111111] dark:text-white tracking-tight">
                        The Stack Behind the Work
                    </h2>
                    <p className="text-[#6b6b6b] dark:text-[#888888] text-[17px] max-w-2xl mx-auto">
                        A curated set of technologies that powers everything I build, optimize, and iterate on.
                    </p>
                </div>

                {/* Cards Grid */}
                <SkillsCards />

            </div>
        </section>
    )
}

export default Skills
