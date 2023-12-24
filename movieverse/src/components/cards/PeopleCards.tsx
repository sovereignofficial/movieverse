import { TPerson } from "~/types/people";
import { Card } from "./Card";
import { CardBody } from "./CardBody";
import { getPersonImageUrl } from "~/utils/helpers";

export const PeopleCards: React.FC<{
  people: TPerson[];
}> = ({ people }) => {
  return (
    <>
      {people.map((person, key) => (
        <Card key={key}>
          <Card.CardHeader
            title={person.original_name}
            imgAddress={getPersonImageUrl(person.profile_path ?? "")}
          />
          <CardBody title={person.original_name} overview={""}/>
        </Card>
      ))}
    </>
  );
};
