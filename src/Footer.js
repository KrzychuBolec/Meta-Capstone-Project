import bottomLogo from "./bottomLogo.png"
import { Nav } from "./components/Header/Nav"

export const Footer = (props) =>{

    return (
        <footer className="row">
            <img src={bottomLogo} className="footer-img col-xs-1 col-1 offset-lg-1"></img>
            <Nav classList="footer-nav col-xs-3 col-1 offset-lg-7"/>
            {/* <Contact />
            <SocialMedia /> */}
        </footer>
    )

}
