import { ReactNode } from "react"


export const DropDownButton = ({ handleChangeList, children }: DDBtnProps) => {
    return (
      <button onClick={(e) => handleChangeList(e)} className="hover:bg-zinc-800 text-white" >
        {children}
      </button>
    )
  }

  interface DDBtnProps {
    children: ReactNode,
    handleChangeList: Function
  }