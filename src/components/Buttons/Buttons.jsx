

export const Buttons = () => {
   const Buttons(props) {
        return <button onClick={props.onClick}>{props.children}</button>;
      }
  
    return (
    <section>
        <button className="heart">

        </button>
        <button className="play">

        </button>
        <button class="dots">

        </button>
    </section>
  )
}
