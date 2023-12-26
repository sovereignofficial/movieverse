import React from 'react'
import { TvShow } from '~/types/tvshow'
import { Card } from './Card'
import {  getTvShowImageUrl } from '~/utils/helpers'

export const TvCards:React.FC<{
    tv_shows:TvShow[]
}> = ({tv_shows}) => {
  return (
    <>
        {tv_shows.map((tv_show,key)=>(
            <Card key={key}>
                <Card.CardHeader title={tv_show.original_name} imgAddress={getTvShowImageUrl(tv_show.poster_path ?? tv_show.backdrop_path ?? "")}/>
                <Card.CardBody title={tv_show.original_name} overview={tv_show.overview}/>
            </Card>
        ))}
    </>
  )
}
