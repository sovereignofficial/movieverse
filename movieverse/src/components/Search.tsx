import { AiOutlineSearch } from 'react-icons/ai';
export const Search = () => { 
  return (
    <div className="bg-zinc-900 lg:w-1/2 m-auto p-2  rounded-full grid grid-flow-col h-10 md:mr-64">
        <input type="text" className="col-span-11 w-full h-full bg-transparent 
         text-center text-white text-sm outline-none" placeholder="Looking a movie?"  />
        <button className='flex items-center justify-center col-span-1 w-full h-full'><AiOutlineSearch/></button>
    </div>
  )
}
