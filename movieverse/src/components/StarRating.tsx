import { SetStateAction, useState } from "react"
import { AiFillStar, AiOutlineStar } from "react-icons/ai"

export const StarRating = ({setRating,rated}:StarRateProps) => {
    const [defaultRate , setDefaultRate] = useState(rated);
    const [mockRate , setMockRate] = useState(defaultRate); 
    const onRate = ()=>{
        setDefaultRate(mockRate);
        setRating(mockRate);
    }
    const onHoverIn = (index:number) => {
        setMockRate(index + 1);
    }
    const onHoverOut = () =>{
        setMockRate(defaultRate);
    }
  return (
    <div className="flex">
        {Array.from({length:10},(_,index)=>(
            <Star key={index} indexNumber={index} mockRate={mockRate} defaultRate={defaultRate}
            onRate={onRate} onHoverIn={onHoverIn} onHoverOut={onHoverOut}/>
        ))}
    </div>
  )
}

const Star = ({indexNumber,onRate,onHoverIn,onHoverOut,mockRate}:StarProps)=>{

    return (
        <div onClick={()=>onRate()} onMouseEnter={()=>onHoverIn(indexNumber)} onMouseLeave={()=>onHoverOut()} >
            {mockRate > indexNumber 
            ? <AiFillStar  style={{color:"orange"}} size={20}/>
            : <AiOutlineStar style={{color:"orange"}}  size={20}/>
        }
        </div>
    )
}


interface StarRateProps{
    setRating:React.Dispatch<SetStateAction<number>>,
    rated:number,
}

interface StarProps{
    indexNumber:number
    onRate:Function,
    onHoverIn:Function,
    onHoverOut:Function,
    mockRate:number,
    defaultRate:number,
}