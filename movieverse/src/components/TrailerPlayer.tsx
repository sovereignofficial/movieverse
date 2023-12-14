import ReactPlayer from "react-player/youtube";

export const TrailerPlayer: React.FC<{ trailerUrl: string }> = ({
  trailerUrl,
}) => {
  return (
    <div className="sm:w-full md:w-10/12 mx-auto aspect-video rounded-xl overflow-hidden">
      <ReactPlayer
        width={"100%"}
        height={"100%"}
        controls={true}
        url={trailerUrl}
      />
    </div>
  );
};
