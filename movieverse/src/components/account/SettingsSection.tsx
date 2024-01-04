import { ReactNode } from "react";

export const SettingsSection: React.FC<{
  title: string;
  children: ReactNode;
}> = ({ title, children }) => {
  return (
    <section className="space-y-3">
      <h3>{title}</h3>
      <div className="grid place-items-center gap-2">{children}</div>
    </section>
  );
};
