import { ReactNode } from "react"

export const ResultsList = ({children}:ResultsProps) => {
  return (
    <div >
       <h2 className="md:ml-32 text-lg font-medium">Movies</h2>
      {children}
    </div>
  )
}

interface ResultsProps{
  children:ReactNode
}