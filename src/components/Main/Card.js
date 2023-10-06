export const Card = (props) =>{

    return (
        <div className={"card-special "+props.classList}>

            <img src={props.url} className="card-image"></img>
            <div className="card-description">

                {props.children}

                <button className="mainButton">
                    Order a delivery
                </button>

            </div>
        </div>
    )

}