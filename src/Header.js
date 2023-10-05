
export const Header = ({children}) =>{

    return (
        <header className="row">
            <div className="col-8 offset-2 d-flex flex-row ">
                {children}
            </div>
        </header>
    )

}
