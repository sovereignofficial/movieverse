import React from 'react'
import { TMovie, TMovieDetail } from '~/types/movies'
import { getMovieImageUrl } from '~/utils/helpers'

export const AccountBackground:React.FC<{bests:TMovie[] | TMovieDetail[]}> = ({bests})=> {
  return (
    <div className='w-full h-40 bg-red-500'>
      <img className='w-full h-full object-fill' src={getMovieImageUrl(bests[0].poster_path)}/>
    </div>
  )
}
