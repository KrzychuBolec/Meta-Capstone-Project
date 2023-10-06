import { Link } from "react-router-dom"
import foodPhoto from "./restauranfood.jpg"

export const Hero = (props) =>{

    return (

        <section className="hero row d-flex flex-row">
                <div className="hero-entrance col-4 offset-1">

                    <h1>
                    Little Lemon
                    </h1>

                    <h2>
                    Chicago
                    </h2>
                    
                    <p>
                    We are a family owned Mediterranean restaurant focused on traditional recipes served with a modern twist
                    </p>

                    <button className="mainButton">
                        <Link to="/Reservations">
                            Reserve a table
                        </Link>
                    </button>

                </div>
                <div className="hero-image col-3 offset-2">
                    <img src={foodPhoto}>
                    </img>
                </div>
            </section>

    )

}