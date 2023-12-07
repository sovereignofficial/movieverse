export const CardHeader: React.FC<{ imgAddress: string }> = ({
  imgAddress,
}) => {
  return (
    <div className="w-full flex items-center justify-center p-2">
      <div className="w-56 h-56 rounded-xl flex items-center justify-center relative overflow-hidden">
        <img src={imgAddress} className="w-full h-full object-cover" />
      </div>
    </div>
  );
};
