
import { Link } from "react-router-dom";

export const Nav = (props) =>{

    const Links = ["Home", "About", "Menu", "Reservations", "Order Online", "Login"]



    return (
        <nav className={props.classList}>
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
    )

}
