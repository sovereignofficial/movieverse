import { LogoMobile } from "../logo/LogoMobile";
import { Search } from "../forms/SearchInput";
import { Navigation } from "./Navigation";
import { LogoDesktop } from "../logo/LogoDesktop";

export const Header = () => {
  return (
    <header className="grid grid-flow-col items-center p-3">
      <div className="sm:hidden md:block">
        <LogoDesktop />
      </div>
      <div className="sm:block md:hidden">
        <LogoMobile />
      </div>
      <section className="sm:hidden lg:block">
        <Search />
      </section>
      <section className="block">
        <Navigation />
      </section>
    </header>
  );
};
