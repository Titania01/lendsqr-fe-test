import { ReactNode } from "react";
import Sidenav from "../../organisms/sidenav";
import "./DashboardLayout.scss";

const DashboardLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="dashboard-layout">
      <div>
        <Sidenav />
      </div>
      <main>
        <header className="bg-white h-[6.5rem] w-full head-nav"></header>
        <section className="bg-grey">{children}</section>
      </main>
    </div>
  );
};

export default DashboardLayout;
