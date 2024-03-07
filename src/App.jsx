import { Header } from "./Header";
import { Album } from "./Album/Album"
import { SideBar } from "./SideBar/SideBar";

export const App = ()=>{
  return (
    <>
      <Header />
      <main>
        <SideBar />
        <Album />
      </main> 
    </>
  )
}