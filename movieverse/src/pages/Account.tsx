import { AccountHeader } from "~/components/account/AccountHeader";
import { AccountPanel } from "~/components/account/AccountPanel";
import { AccountSidePanel } from "~/components/account/AccountSidePanel";
import { useBests } from "~/hooks/useBests";


export const Account = () => {
  const { bests } = useBests();
  return (
      <div className="page">
        <div className="page-header">
          <AccountHeader bests={bests!} />
        </div>
        <div className="page-body md:grid md:grid-cols-12 space-y-10 ">
          <AccountSidePanel bests={bests!} />
          <AccountPanel />
        </div>
      </div>
  );
};
