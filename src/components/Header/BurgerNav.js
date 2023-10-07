
import { Link } from "react-router-dom";
import burgerMenu from "./🦆 icon _hamburger menu.svg"
import { useState } from "react";

export const BurgerNav = (props) =>{

    const [active,setActive] = useState(false)

    const Links = ["Home", "About", "Menu", "Reservations", "Order Online", "Login"]

    return (
        <div className="burgerWrapper">
            <img src={burgerMenu} onClick={()=>setActive(state=>!state)}></img>
            <nav className={"burger " + (active && "activated")}>
                <ul>

                {Links.map(link=>{
                    return (
                        <li key={link}>
                            <Link to={`/${link}`}>
                                {link}
                            </Link>
                        </li>
                    )
                })}

                </ul>
            </nav>
        </div>
    )

}
