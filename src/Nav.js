

export const Nav = (props) =>{

    const Links = ["Home", "About", "Menu", "Reservations", "Order Online", "Login"]



    return (
        <nav>
            <ul>

            {Links.map(link=>{
                return (
                    <li key={link}>
                        <a>
                            {link}
                        </a>
                    </li>
                )
            })}

            </ul>
        </nav>
    )

}
