
export const Nav = (props) =>{

    const Links = ["Home", "About", "Menu", "Reservations", "Order Online", "Login"]

    const preparedLinks = Links.forEach(link=>{
        return (
            <li key={link}>
            <a>
                {link}
            </a>
            </li>
        )
    })

    console.log(preparedLinks)


    return (
        <nav>
            <ul>
            {Links}

            </ul>
        </nav>
    )

}
