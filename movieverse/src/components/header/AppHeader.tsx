import { Logo } from "../Logo";
import { Navigation } from "./Navigation";

export const Header = () => {
  return (
    <header className="grid grid-flow-col p-3">
      <Logo/>
      <input type="text" placeholder="search"/>
      <Navigation />
    </header>
  );
};
