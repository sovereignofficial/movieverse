import { TbArrowLeft } from "react-icons/tb"
import { useNavigate } from "react-router-dom"
import { PersonDetail } from "~/components/detail/PersonDetail";
import { usePerson } from "~/hooks/usePerson";

export const PersonDetails = () => {
    const navigate = useNavigate();
    const {person} = usePerson();

  return (
    <div className="page">
        <div className="page-header">
        <button onClick={() => navigate(-1)} className="btn-secondary">
          <TbArrowLeft />
        </button>
        <h1>{person?.name}</h1>
        </div>
        <div className="page-body">
            {person &&<PersonDetail person={person}/>}
        </div>
    </div>
  )
}
