import { Link } from "react-router-dom";
import Logo from "../assets/images/Logo-mopkit.svg";

function Footer() {

    return (
        <footer>
            <div className="left">
                <div className="logo">
                    <Link to="/">
                        <img src={Logo} alt="Logo" />
                    </Link>
                </div>
            </div>
            <div className="right">
                <div className="credentials">
                    <div className="text">For internal use only</div>
                    <div className="text dark">Copyright © 2024 Procter & Gamble. All rights reserved.</div>
                </div>
            </div>
        </footer>
    );

}

export default Footer;