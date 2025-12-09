import Navbar from "./Navbar"
import Footer from "./Footer"

const Layout = ({ children }) => {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow pt-24 mx-4 md:mx-auto max-w-7xl w-full">
                {children}
            </main>
            <Footer />
        </div>
    )
}

export default Layout
