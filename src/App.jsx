import { ThemeProvider } from "@/components/theme-provider"
import { ThemeToggle } from "@/components/ui/theme-toggle"
import Layout from "./components/layout/Layout"
import Hero from "./components/sections/Hero"
import About from "./components/sections/About"
import Skills from "./components/sections/SkillsCards"
import Projects from "./components/sections/Projects"
import Contact from "./components/sections/Contact"

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Layout>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <ThemeToggle />
      </Layout>
    </ThemeProvider>
  )
}

export default App
