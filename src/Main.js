
import foodPhoto from "./restauranfood.jpg"

export const Main = (props) =>{

    return (
        
        <main className="col-12">
            <section className="hero row d-flex flex-row">
                <div className="hero-entrance col-4 offset-2">

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
                        Reserve a table
                    </button>

                </div>
                <div className="hero-image col-3 offset-1">
                    <img src={foodPhoto}>
                    </img>
                </div>
            </section>

            <section className="specials">
                
            </section>
        </main>
    )

}