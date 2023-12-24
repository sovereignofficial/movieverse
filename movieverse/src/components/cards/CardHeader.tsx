export const CardHeader: React.FC<{ imgAddress: string; title: string }> = ({
  imgAddress,
  title
}) => {
  return (
    <div className="w-full flex items-center justify-center p-2">
      <div className="aspect-square rounded-xl flex items-center justify-center relative overflow-hidden">
        <img
          src={imgAddress}
          alt={`${title} poster`}
          className="w-full h-full object-center"
        />
      </div>
    </div>
  );
};
