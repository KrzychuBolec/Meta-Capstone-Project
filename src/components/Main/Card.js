import { Link } from "react-router-dom"

export const Card = (props) =>{

    return (
        <div className={"card-special "+props.classList}>

            <img src={props.url} className="card-image"></img>
            <div className="card-description">

                {props.children}

                <button className="mainButton">
                    <Link to={"/Order"}>
                        Order a delivery
                    </Link>
                </button>

            </div>
        </div>
    )

}