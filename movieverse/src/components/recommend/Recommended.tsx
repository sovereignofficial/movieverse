import { ReactNode } from "react"

export const Recommended = ({children}:RecommendedProps) => {
  return (
    <div >
      <h2 className="md:ml-32 text-lg font-medium">Recommended</h2>
      {children}
    </div>
  )
}

interface RecommendedProps {
    children:ReactNode
}
