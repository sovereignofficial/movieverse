
export const Card = ({Title,Year,Poster,runtime,imdbRating}:CardProps) => {
  return (
    <div className="h-full sm:w-3/5 md:w-1/3 flex flex-col justify-between items-center gap-1
    border border-zinc-800 rounded-lg p-1 bg-zinc-950 ">
       <div><span className="font-medium">{Title} - {Year}</span></div>
       <div className=" aspect-square flex items-center justify-center overflow-hidden">
        <img src={Poster} className="w-full object-cover rounded-md" />
       </div>
       <div className="space-x-4">
        <span>⏳{runtime}min</span>
        <span>⭐{imdbRating}</span>
       </div>
    </div>
  )
}

interface CardProps{
  Title: string,
  Year: string,
  Poster: string,
  runtime: number,
  imdbRating: number,
}