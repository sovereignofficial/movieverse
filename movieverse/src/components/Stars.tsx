import { FaRegStar, FaStar } from "react-icons/fa";

export const Stars: React.FC<{ vote_average: number }> = ({ vote_average }) => {
  const stars = new Array(10).fill(0).map((_, index) => {
    if (index < Math.round(vote_average)) {
      return 1;
    } else {
      return 0;
    }
  });
  return (
    <ul className="flex">
      {stars.map((item, index) => (
        <li key={index}>
          {item === 0 ? (
            <FaRegStar style={{ color: "yellow" }} />
          ) : (
            <FaStar style={{ color: "yellow" }} />
          )}
        </li>
      ))}
    </ul>
  );
};
