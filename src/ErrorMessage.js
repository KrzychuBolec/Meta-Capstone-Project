export const ErrorMessage = ({children}) =>{

  return(
    <p style={{
      color:"darkred",
      border:"solid 1px darkred",
      borderRadius:"5px",
      padding:"0.5rem"
    }}>{children}</p>
  )

}