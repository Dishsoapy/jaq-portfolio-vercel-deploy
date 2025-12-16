import { Navbar } from "./Nav";
import { Outlet } from "react-router-dom";
import './Layout.css';

export function Layout() {
    return(
        <div className="Layout">
            <div className="Navbar">
                <Navbar/>
            </div>
            <div>
                <main>
                    <Outlet/>
                </main>
            </div>
        </div>
    )
}