import "./index.css";

//creating component Header, a variable with a string value, then creating the output.
export const Header = () => {
   const headertext = "New Albums & Singles";
   
   return (
    <header> 
    <h1>{headertext}</h1>
    </header>
   )
}
