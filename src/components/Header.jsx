

//creating component Header, a variable with a string value, then creating the output.
export const Header = () => {
   const headertext = "New Albums & Singles";
   const headerextratext = "A Technigo Student Project";
   
   return (
    <header> 
    <h1>{headertext}</h1>
    <p>{headerextratext}</p>
    </header>
   )
}
