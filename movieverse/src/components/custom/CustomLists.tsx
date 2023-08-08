import { ReactNode } from "react"

export const CustomLists = ({children}:CustomListsProps) => {

  return (
    <div >
      <h2 className="md:ml-32 text-lg font-medium">Your Lists</h2>
      {children}
    </div>
  )
}




interface CustomListsProps{
  children:ReactNode,
}




