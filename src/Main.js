
import foodPhoto from "./restauranfood.jpg"

export const Main = (props) =>{

    return (
        <main>
            <section className="hero">
                <div className="hero-entrance">

                    <h1>
                        Little Lemon
                    </h1>

                    <h2>
                        Chicago
                    </h2>

                    <p>
                        We are a family owned Mediterranean restaurant focused on traditional recipes served with a modern twist
                    </p>

                </div>
                <div className="hero-image">
                    <img src={foodPhoto}>
                    </img>
                </div>
            </section>

            <section className="specials">
                
            </section>

        </main>
    )

}