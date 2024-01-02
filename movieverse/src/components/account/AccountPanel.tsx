import { Outlet } from "react-router-dom"
import { PanelNav } from "./PanelNav"

export const AccountPanel = () => {
  return (
    <section className="col-span-8 w-full h-full">
        <PanelNav/>
        <Outlet/>
    </section>
  )
}
