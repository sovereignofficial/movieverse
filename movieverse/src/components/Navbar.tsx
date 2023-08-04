import { ReactNode } from "react"
import { Logo } from "./Logo"

export const Navbar = ({children}:NavbarProps) => {
  return (
    <div className="px-1 md:px-5 py-5 flex justify-between md:w-5/6 m-auto">
        <Logo/>
        {children}
    </div>
  )
}

interface NavbarProps {
    children:ReactNode
}
