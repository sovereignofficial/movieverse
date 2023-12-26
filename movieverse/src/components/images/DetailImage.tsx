export const DetailImage:React.FC<{imgUrl:string,alt:string}> = ({imgUrl,alt}) => {
  return (
    <div className="aspect-square grid place-items-center rounded-xl w-52 relative">
      <img className="w-full h-full object-cover" src={imgUrl} alt={alt} />
    </div>
  );
};
