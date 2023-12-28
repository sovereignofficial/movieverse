export const DetailImage:React.FC<{imgUrl:string,alt:string}> = ({imgUrl,alt}) => {
  return (
    <div className="aspect-square rounded-xl w-full relative overflow-hidden">
      <img className="w-full h-full object-fill" src={imgUrl} alt={alt} />
    </div>
  );
};
