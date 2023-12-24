import { Logo } from "../Logo";
import { Search } from "../forms/SearchInput";
import { Navigation } from "./Navigation";

export const Header = () => {
  return (
    <header className="grid grid-flow-col p-3">
      <Logo />
      <Search />
      <Navigation />
    </header>
  );
};
