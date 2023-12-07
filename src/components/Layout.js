import Header from "./Header";
import "../App.css"
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

function Layout() {
    return ( 
        <div className="site-wrapper">
            <Header />
            <main>
                <Outlet />
            </main>
            <Footer />
        </div>
     );
}

export default Layout;