import { useSearchParams } from "react-router-dom"

export const Search = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q');

  return (
    <div className="page">
      <div className="page-header">
        <h1>Results for {query}</h1>
      </div>
    </div>
  )
}
