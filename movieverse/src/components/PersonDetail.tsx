import { TPerson } from "~/types/people"
import { DetailImage } from "./images/DetailImage"
import { getPersonImageUrl } from "~/utils/helpers"

export const PersonDetail:React.FC<{person:TPerson}> = ({ person }) => {
  return (
    <div className=''>
      <DetailImage imgUrl={getPersonImageUrl(person.profile_path)} alt={person.name} />
      <h2>{person.name}</h2>
      <p>{person.known_for_department}</p>
      <p>Birth Date: {person.gender}</p>
      <p>Nationality: {person.popularity}</p>
      <p>Known For: {person.known_for.join(', ')}</p>
    </div>
  )
}