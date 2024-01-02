import { AccountHeader } from "~/components/account/AccountHeader";
import { AccountPanel } from "~/components/account/AccountPanel";
import { AccountSidePanel } from "~/components/account/AccountSidePanel";
import { useBests } from "~/hooks/useBests";

export const Account = () => {
  const { bests } = useBests();
  console.log(bests);
  
  return (
    <div className="page">
      <div className="page-header">
        {bests &&  <AccountHeader bests={bests} />}
      </div>
      <div className="w-full grid grid-cols-12">
        {bests && <AccountSidePanel bests={bests} />}
        <AccountPanel/>
      </div>
    </div>
  );
};
