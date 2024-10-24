import {Outlet, Link} from "react-router-dom";
import Header from "../layout-parts/Header";
import Footer from "../layout-parts/Footer";
import ComponentList from "../pages/ComponentList";

function Layout() {
    return (
      <div>
          <Header/>
          <Outlet/>
          <Footer/>
      </div>
    );
}
export default Layout;