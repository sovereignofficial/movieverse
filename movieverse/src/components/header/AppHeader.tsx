import { useNavigate } from "react-router-dom";
import { Logo } from "../Logo";
import { FormContainer } from "../forms/Form";
import { Navigation } from "./Navigation";
import { FaSearch } from "react-icons/fa";

export const Header = () => {
  const navigate = useNavigate();

  return (
    <header className="grid grid-flow-col p-3">
      <Logo />
      <FormContainer
        initialValues={{
          query: "",
        }}
        onSubmit={(values) => navigate(`/search?q=${values.query}`)}
      >
        <FormContainer.textInput
            name="query"
            placeHolder="search for a movie"
            maxLength={50}
            submitBtn={(<FormContainer.submitBtn disabled={false}><FaSearch/></FormContainer.submitBtn>)}
        />
      </FormContainer>
      <Navigation />
    </header>
  );
};
