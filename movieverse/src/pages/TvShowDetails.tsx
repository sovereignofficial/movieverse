import { TbArrowLeft } from "react-icons/tb"
import { useNavigate } from "react-router-dom"
import { TrailerPlayer } from "~/components/detail/TrailerPlayer";
import { TvShowDetail } from "~/components/detail/TvShowDetail";
import { useTVShow } from "~/hooks/useTvShow";

export const TvShowDetails = () => {
    const navigate = useNavigate();
    const {tvshow,trailer} = useTVShow();
  return (
    <div className="page space-y-5">
        <div className="page-header">
        <button onClick={() => navigate(-1)} className="btn-secondary">
          <TbArrowLeft />
        </button>
        <h1>{tvshow?.name}</h1>
        </div>
        <div className="page-body space-y-4">
          {trailer && <TrailerPlayer trailerUrl={trailer.videoUrl}/>}
          {tvshow && <TvShowDetail tvShow={tvshow}/>}
        </div>
    </div>
  )
}


