import { Outlet } from "react-router-dom"
import MainFooter from "../components/organisms/MainFooter"
import MainHeader from "../components/organisms/MainHeader"

export default function RootLayout() {
    return (
        <div id=""
            className="flex flex-column h-100"
        >
            <header id="MainHeader"
            >
                <MainHeader />
            </header>
            
            <main id="MainContent"
            className="min-h-100"
            >
                <Outlet />
            </main>

            <footer id="MainFooter"
            >
                <MainFooter />
            </footer>
        </div>
    )
}
