import { Outlet } from "react-router-dom"
import { Header } from "../header/AppHeader"

export const AppLayout = () => {
  return (
    <div id="app-layout">
        <Header/>
        <Outlet/>
    </div>
  )
}
