import React from 'react'
import { TMovie, TMovieDetail } from '~/types/movies'
import { getMovieImageUrl } from '~/utils/helpers'

export const AccountBackground:React.FC<{bests:TMovie[] | TMovieDetail[]}> = ({bests})=> {
  return (
    <div className='w-full h-full bg-zinc-950'>
      {bests && <img className='w-1/2 h-full object-center mx-auto rounded-xl' src={getMovieImageUrl(bests[0]?.poster_path)}/>}
    </div>
  )
}
