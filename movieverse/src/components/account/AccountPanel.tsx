import { Outlet } from "react-router-dom"
import { PanelNav } from "./PanelNav"

export const AccountPanel = () => {
  return (
    <section className="md:col-span-8 sm:row-span-8 md:w-full md:h-full">
        <PanelNav/>
        <Outlet/>
    </section>
  )
}
