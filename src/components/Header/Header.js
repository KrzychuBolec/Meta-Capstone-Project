
export const Header = ({children}) =>{

    return (
        <header className="row">
            <div className="col-10 offset-1 d-flex flex-row ">
                {children}
            </div>
        </header>
    )

}
