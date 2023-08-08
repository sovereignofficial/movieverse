import { AiOutlineClose } from "react-icons/ai";
import { CustomList, MovieUsersLike, MovieDetails, mockMovieDetails } from "../../App";
import { IoIosAdd } from 'react-icons/io';
import { StarRating } from "../StarRating";
import React, { SetStateAction, useState } from "react";
import { Modal } from "../Modal";
import { ListsDropDown } from "../custom/ListDropDown";

export const DetailScreen = ({lists,setLists, activeList, setActiveList, setSelectedMovie, selectedMovie, rated, setRating }: DetailScreenProps) => {
  const [isModalOpen, setModalOpen] = useState(false);

  const completeAddingToList = (list: CustomList) => {
    if (!list.items.some(item => item.Title === selectedMovie?.Title)) {
      const movie: MovieUsersLike = {
        "Title": selectedMovie?.Title,
        "Poster": selectedMovie?.Poster,
        "Year": selectedMovie?.Released,
        "usersRate":rated
      }
       list.items.push(movie);
       
        const updatedLists = lists?.map(list => {
          if (list.name === activeList.name) {
            return activeList;
          } else {
            return list;
          }
        });
        localStorage.setItem("lists", JSON.stringify(updatedLists))
       return setActiveList(list);
    } else {
      return alert("It's already added. Please try another list to add!")
    }
  }

  return (
    <div className={selectedMovie.Title ? `bg-black/50 fixed inset-0 z-50 flex justify-end ` : 'hidden'}>
      <div className="h-screen bg-zinc-950 w-1/2 space-y-8 p-5">
        <div className="w-full grid place-items-center">
          <span className="sm:text-xl md:text-5xl font-medium">{selectedMovie?.Title}</span>
          <button onClick={() => {
            setSelectedMovie(mockMovieDetails);
            setRating(0);
          }}
            className="absolute right-3  md:top-5"><AiOutlineClose /></button>
        </div>
        <div className="grid grid-flow-col p-5">
          <div className="w-full col-span-1 h-64 m-auto relative overflow-hidde flex justify-center items-center">
            <img className="object-fit w-full h-full rounded-xl" src={selectedMovie?.Poster} />
          </div>
          <div className="col-span-1 flex flex-col gap-4 justify-center items-center">
            <span className="text-sm font-medium">{selectedMovie?.Director}</span>
            <div className="flex justify-center">
              <span className="text-sm">{selectedMovie?.Released}</span>
              <span className="text-sm before:content-['|'] before:mx-2 before:text-gray-400">{selectedMovie?.Runtime}</span>
            </div>
            <span className="text-sm">{selectedMovie?.Genre}</span>
            <div className="flex justify-center">
              <span className="text-sm font-medium">⭐ {selectedMovie?.imdbRating}</span>
              <span className="text-sm before:content-['|'] before:mx-2 before:text-gray-400">{selectedMovie?.imdbVotes} votes</span>
            </div>
            <span className="text-sm text-zinc-300">{selectedMovie?.Type}</span>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center gap-6 border border-zinc-800 p-2 rounded-lg">
          <p className="text-center">{selectedMovie?.Plot}</p>
          <div>
            <StarRating setRating={setRating} rated={rated} />
          </div>
          <button onClick={() => setModalOpen(true)}
            className="px-6 py-2 bg-red-600 rounded-full flex items-center gap-1"><IoIosAdd size={24} />Add to List</button>
        </div>
      </div>
      <Modal title="Add to List" saveChanges={() => { completeAddingToList(activeList) }} isOpen={isModalOpen} setOpen={setModalOpen} >
        <ListsDropDown lists={lists} setLists={setLists} activeList={activeList} setActiveList={setActiveList} />
      </Modal>
    </div>
  )
}

interface DetailScreenProps {
  selectedMovie: MovieDetails,
  rated: number,
  setRating: React.Dispatch<SetStateAction<number>>,
  setSelectedMovie: React.Dispatch<SetStateAction<MovieDetails >>,
  activeList: CustomList,
  setActiveList: React.Dispatch<SetStateAction<CustomList>>,
  lists:CustomList[],
  setLists: React.Dispatch<SetStateAction<CustomList[]>>,
}