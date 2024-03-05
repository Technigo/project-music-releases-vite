import { Fragment } from "react";
import { Header } from "./Header";
import { Album } from "./Album/Album"

export const App = ()=>{
  return (
    <Fragment>
      <Header />
      <Album />
    </Fragment>
  )
}