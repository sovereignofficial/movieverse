import React, { ReactNode } from 'react'
import { BiSolidMoviePlay } from 'react-icons/bi'

export const ExtraInfoItem:React.FC<{children:ReactNode}> = ({children}) => {
  return (
    <div className="flex justify-start items-center gap-1">
    <BiSolidMoviePlay size={20} />
    <p className="font-medium">{children}</p>
  </div>
  )
}
