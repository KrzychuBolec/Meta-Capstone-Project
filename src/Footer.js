import bottomLogo from "./bottomLogo.png"
import { Nav } from "./components/Header/Nav"

export const Footer = (props) =>{

    return (
        <footer className="row">
            <img src={bottomLogo} className="footer-img col-1 offset-1"></img>
            <Nav classList="footer-nav col-1 offset-7"/>
            {/* <Contact />
            <SocialMedia /> */}
        </footer>
    )

}
