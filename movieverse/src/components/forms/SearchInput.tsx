import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { FormContainer } from "./Form";

export const Search:React.FC<{onSearch?:()=>void}> = ({onSearch}) => {
  const navigate = useNavigate();

  return (
    <FormContainer
      initialValues={{
        query: "",
      }}
      onSubmit={(values) =>{
        const query = values.query;
        onSearch && onSearch();
        if(query.toString().trim())navigate(`/search?q=${values.query}`)
      }}
    >
      <FormContainer.textInput
        label=""
        name="query"
        placeholder="Search for a movie, person or tv show"
        maxLength={50}
        submitBtn={
          <FormContainer.submitBtn className="" disabled={false}>
            <FaSearch />
          </FormContainer.submitBtn>
        }
      />
    </FormContainer>
  );
};
