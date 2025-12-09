import { Github, Linkedin, Mail, FileText, ArrowUpCircle } from "lucide-react"
import { Download } from "lucide-react"
import Resume from "../../assets/Sai_Bharath_Resume.pdf"

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" })
    }

    return (
        <footer className="bg-white dark:bg-[#050505] text-[#111111] dark:text-white py-20 px-6 md:px-12 lg:px-24 border-t border-gray-100 dark:border-[#111111]">
            <div className="max-w-[1400px] mx-auto flex flex-col gap-20">

                {/* Top Row */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-8 md:gap-4">
                    {/* Copyright */}
                    <div className="text-[#6b6b6b] dark:text-[#888888] text-sm md:text-base font-light">
                        &copy; Sai Bharath Vemula 2025.
                    </div>

                    {/* Social Links */}
                    <div className="flex items-center gap-8 md:gap-12">
                        <a href="https://github.com/118bharath" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[#111111] dark:text-white hover:text-[#6b6b6b] dark:hover:text-[#888888] transition-colors group">
                            <Github className="w-5 h-5" />
                            <span className="font-medium text-lg">Github</span>
                        </a>
                        <a href="https://www.linkedin.com/in/saibharath03/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[#111111] dark:text-white hover:text-[#6b6b6b] dark:hover:text-[#888888] transition-colors group">
                            <Linkedin className="w-5 h-5" />
                            <span className="font-medium text-lg">LinkedIn</span>
                        </a>
                        <a href="mailto:bharathvemula118@gmail.com.com" className="flex items-center gap-2 text-[#111111] dark:text-white hover:text-[#6b6b6b] dark:hover:text-[#888888] transition-colors group">
                            <Mail className="w-5 h-5" />
                            <span className="font-medium text-lg">Email</span>
                        </a>
                        <a href={Resume} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[#111111] dark:text-white hover:text-[#6b6b6b] dark:hover:text-[#888888] transition-colors group">
                            <FileText className="w-5 h-5" />
                            <span className="font-medium text-lg">Resume</span>
                        </a>
                    </div>

                    {/* Back to Top */}
                    <button
                        onClick={scrollToTop}
                        className="flex items-center gap-2 text-[#6b6b6b] dark:text-[#888888] hover:text-[#111111] dark:hover:text-white transition-colors group"
                    >
                        <span className="text-sm md:text-base">Back To Top</span>
                        <ArrowUpCircle className="w-6 h-6 group-hover:-translate-y-1 transition-transform duration-300" />
                    </button>
                </div>

                {/* Middle: Quote */}
                <div className="text-center max-w-3xl mx-auto">
                    <p className="text-lg md:text-xl lg:text-2xl text-[#111111] dark:text-white font-light leading-relaxed">
                        <span className="text-[#111111] dark:text-white">"Preparation can take you only so far. After that, you have to take a few leaps of faith."</span>
                        <span className="block mt-4 text-[#6b6b6b] dark:text-[#888888] text-base md:text-lg">- Michael Scofield, Television Character</span>
                    </p>

                    <div className="flex justify-center gap-2 mt-12">
                        <span className="w-2 h-0.5 bg-[#e5e5e5] dark:bg-[#333333]"></span>
                        <span className="w-2 h-0.5 bg-[#e5e5e5] dark:bg-[#333333]"></span>
                        <span className="w-2 h-0.5 bg-[#e5e5e5] dark:bg-[#333333]"></span>
                    </div>
                </div>

            </div>
        </footer>
    )
}

export default Footer
