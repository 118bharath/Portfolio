import { useState, useEffect } from "react"
import { motion, animate } from "framer-motion"
import { cn } from "@/lib/utils"
import { FaReact, FaHtml5, FaCss3Alt, FaJs, FaNodeJs, FaPython, FaDocker, FaAws, FaGitAlt, FaJava } from "react-icons/fa"
import { SiTailwindcss, SiRedux, SiGreensock, SiFramer, SiTypescript, SiExpress, SiMysql, SiMongodb, SiPostman, SiVercel } from "react-icons/si"
import { VscAzure } from "react-icons/vsc"

const CARDS = [
    {
        key: 'frontend',
        title: 'Frontend',
        description: 'Building beautiful, interactive user interfaces.',
        icons: [
            { Icon: FaReact, className: "text-blue-400" },
            { Icon: FaHtml5, className: "text-orange-500" },
            { Icon: FaCss3Alt, className: "text-blue-600" },
            { Icon: SiTailwindcss, className: "text-cyan-400" },
            { Icon: SiFramer, className: "text-black dark:text-white" }
        ],
        skills: [
            { name: 'React', icon: FaReact },
            { name: 'HTML', icon: FaHtml5 },
            { name: 'CSS', icon: FaCss3Alt },
            { name: 'TailwindCSS', icon: SiTailwindcss },
            { name: 'GSAP', icon: SiGreensock },
            { name: 'Framer Motion', icon: SiFramer },
            { name: 'Redux', icon: SiRedux }
        ]
    },
    {
        key: 'backend',
        title: 'Backend',
        description: 'Architecting robust and scalable server-side systems.',
        icons: [
            { Icon: FaNodeJs, className: "text-green-500" },
            { Icon: SiExpress, className: "text-gray-500" },
            { Icon: SiMysql, className: "text-blue-500" },
            { Icon: SiMongodb, className: "text-green-600" },
            { Icon: FaPython, className: "text-yellow-500" }
        ],
        skills: [
            { name: 'Javascript', icon: FaJs },
            { name: 'TypeScript', icon: SiTypescript },
            { name: 'Java', icon: FaJava },
            { name: 'Python', icon: FaPython },
            { name: 'Node.js', icon: FaNodeJs },
            { name: 'Express', icon: SiExpress },
            { name: 'MySQL', icon: SiMysql },
            { name: 'MongoDB', icon: SiMongodb }
        ]
    },
    {
        key: 'tools',
        title: 'Tools',
        description: 'Streamlining development and deployment workflows.',
        icons: [
            { Icon: FaGitAlt, className: "text-orange-600" },
            { Icon: FaDocker, className: "text-blue-500" },
            { Icon: SiPostman, className: "text-orange-500" },
            { Icon: FaAws, className: "text-orange-400" },
            { Icon: SiVercel, className: "text-black dark:text-white" }
        ],
        skills: [
            { name: 'Git', icon: FaGitAlt },
            { name: 'Docker', icon: FaDocker },
            { name: 'Postman', icon: SiPostman },
            { name: 'Azure', icon: VscAzure },
            { name: 'AWS', icon: FaAws },
            { name: 'Vercel', icon: SiVercel }
        ]
    }
]

export default function Skills() {
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

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-[1400px] mx-auto">
                    {CARDS.map((card, index) => (
                        <SkillCard key={card.key} card={card} index={index} />
                    ))}
                </div>
            </div>
        </section>
    )
}

const SkillCard = ({ card, index }) => {
    const [isFlipped, setIsFlipped] = useState(false)

    const handleFlip = () => {
        setIsFlipped(!isFlipped)
    }

    const handleKeyDown = (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault()
            handleFlip()
        }
    }

    return (
        <div
            className="group h-[420px] perspective-1000 cursor-pointer"
            onClick={handleFlip}
            onKeyDown={handleKeyDown}
            tabIndex={0}
            role="button"
            aria-pressed={isFlipped}
            aria-label={`Flip ${card.title} card`}
        >
            <motion.div
                className="relative w-full h-full transition-all duration-500 [transform-style:preserve-3d]"
                animate={{ rotateY: isFlipped ? 180 : 0 }}
                transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
            >
                {/* Front */}
                <div className="absolute inset-0 [backface-visibility:hidden]">
                    <Card className="h-full flex flex-col">
                        <CardSkeletonContainer>
                            <Skeleton icons={card.icons} />
                        </CardSkeletonContainer>
                        <div className="mt-6 text-center">
                            <CardTitle>{card.title}</CardTitle>
                            <CardDescription>{card.description}</CardDescription>
                        </div>
                        <div className="mt-auto pt-4 text-center">
                            <span className="text-xs font-medium text-muted-foreground bg-secondary/50 px-3 py-1 rounded-full">
                                Click to reveal skills
                            </span>
                        </div>
                    </Card>
                </div>

                {/* Back */}
                <div className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)]">
                    <Card className="h-full flex flex-col justify-center items-center bg-white dark:bg-[#111111] border-primary/10">
                        <h3 className="text-2xl font-bold text-foreground mb-8">{card.title} Stack</h3>
                        <div className="grid grid-cols-2 gap-4 w-full px-4">
                            {card.skills.map((skill, idx) => (
                                <div key={idx} className="flex items-center gap-3 p-3 rounded-lg bg-secondary/30 border border-border/50">
                                    <skill.icon className="w-5 h-5 text-primary" />
                                    <span className="text-sm font-medium text-foreground/80">{skill.name}</span>
                                </div>
                            ))}
                        </div>
                        <div className="mt-auto pt-4">
                            <span className="text-xs font-medium text-muted-foreground">
                                Click to flip back
                            </span>
                        </div>
                    </Card>
                </div>
            </motion.div>
        </div>
    )
}

// --- Animated Skeleton Components ---

const Skeleton = ({ icons }) => {
    const scale = [1, 1.1, 1]
    const transform = ["translateY(0px)", "translateY(-4px)", "translateY(0px)"]
    const sequence = [
        [".icon-1", { scale, transform }, { duration: 0.8 }],
        [".icon-2", { scale, transform }, { duration: 0.8 }],
        [".icon-3", { scale, transform }, { duration: 0.8 }],
        [".icon-4", { scale, transform }, { duration: 0.8 }],
        [".icon-5", { scale, transform }, { duration: 0.8 }],
    ]

    useEffect(() => {
        animate(sequence, {
            repeat: Infinity,
            repeatDelay: 1,
        })
    }, [])

    const sizes = ["h-8 w-8", "h-12 w-12", "h-16 w-16", "h-12 w-12", "h-8 w-8"]

    return (
        <div className="p-8 overflow-hidden h-full relative flex items-center justify-center bg-transparent">
            <div className="flex flex-row shrink-0 justify-center items-center gap-4">
                {icons.map((item, i) => (
                    <div key={i} className={`relative ${sizes[i] || "h-8 w-8"} icon-${i + 1}`}>
                        <item.Icon className={cn("w-full h-full drop-shadow-lg", item.className)} />
                    </div>
                ))}
            </div>
        </div>
    )
}

const Card = ({ className, children }) => {
    return (
        <div className={cn(
            "max-w-sm w-full mx-auto p-8 rounded-[24px] border border-gray-200 dark:border-[#333333] bg-white dark:bg-[#111111] shadow-[0_8px_30px_rgb(0,0,0,0.04)] group",
            className
        )}>
            {children}
        </div>
    )
}

const CardTitle = ({ children, className }) => {
    return (
        <h3 className={cn("text-xl font-bold text-[#111111] dark:text-white py-2", className)}>
            {children}
        </h3>
    )
}

const CardDescription = ({ children, className }) => {
    return (
        <p className={cn("text-sm font-medium text-[#6b6b6b] dark:text-[#888888] max-w-sm mx-auto", className)}>
            {children}
        </p>
    )
}

const CardSkeletonContainer = ({ className, children, showGradient = true }) => {
    return (
        <div className={cn(
            "h-[180px] rounded-xl z-40 overflow-hidden relative",
            className
        )}>
            {children}
        </div>
    )
}
