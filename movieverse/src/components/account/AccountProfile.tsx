export const AccountProfile:React.FC<{fullName:string}> = ({fullName}) => {
  return (
    <div className="flex-1 flex items-center gap-4">
      <div className="relative overflow-hidden rounded-full w-40 h-40">
        <img className="w-full h-full object-center" src="/avatar.jpg" />
      </div>
      <h2 className="flex items-center gap-4">
        {fullName ?? "Admin"}
        <span className="text-sm font-light italic mt-3">( Not Premium )</span>
      </h2>
    </div>
  );
};
