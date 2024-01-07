
export const HeaderAvatar:React.FC<{avatar:string}> = ({avatar}) => {
  return (
    <div className="relative overflow-hidden rounded-full w-8 h-8">
      <img
        loading="lazy"
        className="w-full h-full object-center"
        src={avatar}
        alt="movieverse-user-avatar"
      />
    </div>
  );
};
