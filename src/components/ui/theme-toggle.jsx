import { Moon, Sun } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTheme } from "@/components/theme-provider"

export function ThemeToggle() {
    const { theme, setTheme } = useTheme()

    return (
        <div className="fixed bottom-6 right-6 z-50">
            <Button
                variant="outline"
                size="icon"
                className="rounded-full w-12 h-12 bg-white dark:bg-[#111111] border-gray-200 dark:border-[#333333] shadow-lg hover:scale-110 transition-transform duration-300"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
                <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 text-orange-500" />
                <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 text-blue-400" />
                <span className="sr-only">Toggle theme</span>
            </Button>
        </div>
    )
}
