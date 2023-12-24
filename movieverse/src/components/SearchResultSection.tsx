import { ReactNode } from "react";

export const SearchResultSection: React.FC<{
  children: ReactNode;
  header: string;
}> = ({ header, children }) => {
  return (
    <section>
      <div>
        <h2>{header}</h2>
      </div>
      <div className="grid lg:grid-cols-4 xl:grid-cols-5 sm:grid-cols-1 md:grid-cols-3">{children}</div>
    </section>
  );
};
