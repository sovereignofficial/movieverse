import React from 'react'
import { useNavigate } from 'react-router-dom'
import { getMovieImageUrl } from '~/utils/helpers'

export const ImageLink:React.FC<{imgUrl:string,title:string,overwiew:string,movieId:number}> = ({
    imgUrl,title,movieId
}) => {
    const navigate = useNavigate();

  return (
    <div onClick={()=>navigate(`/movie?m=${movieId}`)} className='relative overflow-hidden aspect-square rounded-xl sm:w-28 lg:w-96 cursor-pointer'>
        <img className='w-full h-full object-center' src={getMovieImageUrl(imgUrl)}/>
        <div className='absolute bottom-0 left-0 z-50 w-full h-full p-2 grid place-items-center hover:opacity-100 opacity-0 backdrop-brightness-50 animation-slow'>
            <h3>{title}</h3>
        </div>
    </div>
  )
}
