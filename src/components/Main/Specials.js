import { Card } from "./Card"
import greekSalad from "./greek salad.jpg"
import bruchetta from "./bruchetta.svg"
import lemonDessert from "./lemon dessert.jpg"

export const Specials = (props) =>{

    return (

        <section className="specials row">
                <div className="row specials-header">
                    <h1 className="col-5 offset-1">This weeks specials</h1>
                </div>
                <div className="col-10 offset-1  specials-cards">
                    <Card classList="" url={greekSalad}>
                        <h5>Greek Salad</h5>
                        <p>The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. </p>
                    </Card>
                    <Card classList="" url={bruchetta}>
                        <h5>Bruchetta</h5>    
                        <p>The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. </p>
                    </Card>
                    <Card classList="" url={lemonDessert}>
                        <h5>Lemon Dessert</h5>    
                        <p>This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.</p>
                    </Card>
                </div>
            </section>

    )

}