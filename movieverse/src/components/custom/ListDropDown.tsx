import React, { useState, SetStateAction } from 'react';
import { CustomList } from '../../App';
import { AiOutlineDown, AiOutlineFolderAdd } from 'react-icons/ai';
import { DropDownButton } from './DropDownBtn';
import { Modal } from '../Modal';

export const ListsDropDown = ({ lists,setLists, activeList, setActiveList }: ListsDD) => {
  const [isOpen, setOpen] = useState<boolean>(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [newList, setNewList] = useState('');


  const findList = (name: string): CustomList => {
    const list: CustomList = lists.find((list: CustomList) => list.name === name)!;
    return list
  }
  const handleChangeList = (e: React.MouseEvent<HTMLButtonElement>) => {
    setActiveList(findList(e.currentTarget.textContent!));
    setOpen(false)
  }

  return (
    <div className="flex justify-center items-center gap-2">
      <div className=" flex-col justify-center items-center ">
        <button onClick={() => setOpen(true)} className="flex border rounded-md
        border-zinc-800 w-40 space-x-1 justify-center items-center ">
          <h2 className="ml-3">{activeList.name}</h2>
          <span >{<AiOutlineDown />}</span>
        </button>
        <div className={isOpen ? `p-1 flex flex-col bg-zinc-950 w-40 
      border border-zinc-800 rounded-md z-10` : 'hidden'}>
          {lists.length > 0 && lists.map((list, index) => (
            <DropDownButton key={index} handleChangeList={handleChangeList}>{list.name}</DropDownButton>
          ))}
        </div>
      </div>
      <button onClick={() => setModalOpen(true)}><AiOutlineFolderAdd size={20} /></button>

      <Modal title="Create List" saveChanges={() => {
        if (newList.trim() === "") { return alert(`Please type a title!`) };
        const customList: CustomList = { name: newList, items: [] };
        setLists([...lists, customList]);
      }} isOpen={modalOpen} setOpen={setModalOpen} >
        <input type="text" placeholder="List Name" onChange={(e) => { setNewList(e.target.value) }}
          className="bg-black text-white text-center rounded-lg p-2" />
      </Modal>
    </div>
  )
}

interface ListsDD {
  activeList: CustomList,
  setActiveList: React.Dispatch<SetStateAction<CustomList>>,
  lists:CustomList[],
  setLists:React.Dispatch<SetStateAction<CustomList[]>>,
}
