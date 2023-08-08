import React, { ReactNode, SetStateAction } from "react"
import { AiOutlineClose } from "react-icons/ai"

export const Modal = ({title,saveChanges, isOpen,setOpen, children }: Modal) => {

  const handleChangesAndCloseModal = () =>{
    saveChanges();
    setOpen(false);
  }

  return (
    <div className={isOpen ? 
      `z-50 bg-black/50 justify-center items-center flex fixed inset-0` : 'hidden'}>
      <div className=" w-1/2 h-96 rounded-lg grid grid-flow-row bg-white text-black ">
        <div className=" row-span-1 border-b border-b-zinc-300 flex justify-center items-center relative">
          <h2 className="text-xl font-medium">{title}</h2>
          <button className="absolute right-2" onClick={()=>{setOpen(false)}}><AiOutlineClose/></button>
        </div>
        <div className="row-span-4 border-b border-b-zinc-300 place-items-center grid">
          {children}
        </div>
        <div className="row-span-1 grid place-items-center">
          <button onClick={handleChangesAndCloseModal} className="px-4 py-2 bg-black text-white rounded-md">Accept Changes</button>
        </div>
      </div>
    </div>
  )
}
interface Modal {
  children: ReactNode,
  isOpen : boolean,
  setOpen : React.Dispatch<SetStateAction<boolean>>,
  title:string,
  saveChanges:Function,
}