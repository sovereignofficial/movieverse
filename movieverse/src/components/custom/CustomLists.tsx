import { Carousel } from "../Carousel"
import { Card } from "../Card"
import React, { ReactNode, SetStateAction, useState } from "react"
import {  AiOutlineDown } from 'react-icons/ai';

export const CustomLists = () => {
  const [activeList, setActiveList] = useState('');
  return (
    <div >
      <h2 className="md:ml-32 text-lg font-medium">Your Lists</h2>
      <ListsDropDown activeList={activeList} setActiveList={setActiveList} />
      <Carousel>
        <Card />
      </Carousel>
    </div>
  )
}

const ListsDropDown = ({ activeList, setActiveList }: ListsDD) => {
  const [isOpen, setOpen] = useState<boolean>(false);

  const handleChangeList = (e: React.MouseEvent<HTMLButtonElement>) => {
    setActiveList(e.currentTarget.textContent!);
    setOpen(false)
  }
  return (
    <div className="flex flex-col justify-center items-center">
      <button onClick={() => setOpen(true)} className="flex border rounded-md
      border-zinc-800 w-40 space-x-1 justify-center items-center ">
        <h2 className="ml-3">{activeList}</h2>
        <span >{<AiOutlineDown/>}</span>
      </button>
      <div className={isOpen ? `p-1 flex flex-col bg-zinc-950 w-40 
    border border-zinc-800 rounded-md z-10` : 'hidden'}>
        <DropDownButton handleChangeList={handleChangeList}>List1</DropDownButton>
        <DropDownButton handleChangeList={handleChangeList}>List2</DropDownButton>
        <DropDownButton handleChangeList={handleChangeList}>List3</DropDownButton>
        <DropDownButton handleChangeList={handleChangeList}>List4</DropDownButton>
      </div>
    </div>
  )
}

const DropDownButton = ({ handleChangeList, children }: DDBtnProps) => {
  return (
    <button onClick={(e) => handleChangeList(e)} className="hover:bg-zinc-800 " >
      {children}
    </button>
  )
}

interface ListsDD {
  activeList: string,
  setActiveList: React.Dispatch<SetStateAction<string>>
}
interface DDBtnProps {
  children: ReactNode,
  handleChangeList: Function
}