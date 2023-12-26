import { TbArrowLeft } from "react-icons/tb"
import { useNavigate } from "react-router-dom"
import { TvShowDetail } from "~/components/TvShowDetail";
import { useTVShow } from "~/hooks/useTvShow";

export const TvShowDetails = () => {
    const navigate = useNavigate();
    const {tvshow} = useTVShow();

  return (
    <div className="page">
        <div className="page-header">
        <button onClick={() => navigate(-1)} className="btn-secondary">
          <TbArrowLeft />
        </button>
        <h1>X person</h1>
        </div>
        <div className="page-body">
          {tvshow && <TvShowDetail tvShow={tvshow}/>}
        </div>
    </div>
  )
}


