

import { Card } from "./Card"

import { Link } from "react-router-dom"

export const Main = (props) =>{

    return (
        
        <main className="col-12">
            {props.children}
        </main>
    )

}