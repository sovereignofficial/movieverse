import { ReactNode } from "react"

export const SubmitBtn: React.FC<{ children: ReactNode, disabled: boolean, className: string }> = ({ children, disabled, className: className }) => {
  return (
    <button  disabled={disabled} type="submit" className={className}>{children}</button>
  )
}
