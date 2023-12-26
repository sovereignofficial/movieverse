import { TPerson } from "~/types/people";
import { Card } from "./Card";
import { CardBody } from "./CardBody";
import { getPersonImageUrl } from "~/utils/helpers";
import { useNavigate } from "react-router-dom";

export const PeopleCards: React.FC<{
  people: TPerson[];
  isLoading: boolean;
  handleFav: (person: TPerson) => void;
  peopleFromDb: TPerson[];
}> = ({ people, isLoading, handleFav, peopleFromDb }) => {
  const navigate =useNavigate();

  return (
    <>
      {people.map((person, key) => {
        const isFavorited = peopleFromDb.some(dbPerson => dbPerson.id === person.id);
        const onClickFavorite = () => handleFav(person);
        const onClickDetails = () => { navigate(`/person/${person.id}`)};

        return (
          <Card key={key}>
            <Card.CardHeader
              title={person.original_name}
              imgAddress={getPersonImageUrl(person.profile_path ?? "")}
            />
            <CardBody title={person.original_name} overview={""}/>
            <Card.CardFooter 
              isLoading={isLoading} 
              isFavorited={isFavorited} 
              onClickFavorite={onClickFavorite} 
              onClickDetails={onClickDetails} 
            />
          </Card>
        );
      })}
    </>
  );
};