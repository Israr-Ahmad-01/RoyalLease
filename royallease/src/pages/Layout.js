
import { Outlet, Link } from "react-router-dom";
import '../index.css';
import NavBar from './Components/NavBar'
import Footer from './Components/Footer'
const Layout = () => {
    return <><div className="wrapper">
        <NavBar />
        <Outlet />
        <Footer />
    </div>

    </>
};

export default Layout;