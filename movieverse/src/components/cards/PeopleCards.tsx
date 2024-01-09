import { TPerson } from "~/types/people";
import { Card } from "./Card";
import { CardBody } from "./CardBody";
import { getPersonImageUrl, isFavorited } from "~/utils/helpers";
import { useNavigate } from "react-router-dom";
import { useUsersStore } from "~/zustand/usersStore";
import { memo } from "react";
import { motion } from "framer-motion";

export const PeopleCards: React.FC<{
  people: TPerson[];
  handleFav: (person: TPerson) => void;
}> = memo(({ people, handleFav }) => {
  const navigate = useNavigate();
  const { favoritePeople } = useUsersStore();
  const childVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5 } },
  };
  return (
    <>
      {people.map((person, key) => {
        const favorited = isFavorited(favoritePeople!, person);
        const onClickFavorite = () => handleFav(person);
        const onClickDetails = () => {
          navigate(`/person?p=${person.id}`);
        };

        return (
          <motion.div variants={childVariants}>
            <Card key={key}>
              <Card.CardHeader
                title={person.name}
                imgAddress={getPersonImageUrl(person.profile_path ?? "")}
              />
              <CardBody title={person.name} overview={""} />
              <Card.CardFooter
                isLoading={false}
                isFavorited={favorited}
                onClickFavorite={onClickFavorite}
                onClickDetails={onClickDetails}
              />
            </Card>
          </motion.div>
        );
      })}
    </>
  );
});
