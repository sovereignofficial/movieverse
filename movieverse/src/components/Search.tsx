import { useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
export const Search = ({handleSearchRequest}:Search) => { 
  const [query ,setQuery] = useState("")
  return (
    <div className="bg-zinc-900 lg:w-1/2 m-auto p-2  rounded-full grid grid-flow-col h-10 md:mr-64">
        <input onChange={(e)=>setQuery(e.target.value)} type="text" className="col-span-11 w-full h-full bg-transparent 
         text-center text-white text-sm outline-none" placeholder="Looking for a movie?"  />
        <button onClick={()=>handleSearchRequest(query)} className='flex items-center justify-center col-span-1 w-full h-full'><AiOutlineSearch/></button>
    </div>
  )
}
interface Search{
  handleSearchRequest:Function
}