export const CardHeader: React.FC<{ imgAddress: string }> = ({
  imgAddress,
}) => {
  return (
    <div className="w-full flex items-center justify-center p-2">
      <div className="aspect-square rounded-xl flex items-center justify-center relative overflow-hidden">
        <img src={imgAddress} className="w-full h-full object-center" />
      </div>
    </div>
  );
};
