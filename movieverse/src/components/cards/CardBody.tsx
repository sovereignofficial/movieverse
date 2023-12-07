
export const CardBody:React.FC<{title:string,overview:string}> = ({title,overview}) => {
  return (
    <div className="text-center p-2"> 
        <h3>{title}</h3>
        <p className="text-zinc-400 truncate">{overview}</p>
    </div>
  )
}
