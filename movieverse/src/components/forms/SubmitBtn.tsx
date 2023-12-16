import { ReactNode } from "react"

export const SubmitBtn:React.FC<{children:ReactNode,disabled:boolean}> = ({children,disabled}) => {
  return (
    <button disabled={disabled} type="submit" >{children}</button>
  )
}
