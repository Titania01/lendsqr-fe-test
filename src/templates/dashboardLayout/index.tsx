import { ReactNode } from "react";
import Sidenav from "../../components/organisms/sidenav";
import "./DashboardLayout.scss";

const DashboardLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="dashboard-layout">
      <div className="overflow-hidden h-full">
        <Sidenav />
      </div>
      <main className="overflow-hidden flex flex-col">
        <header className="head-nav">
          <div className="input-wrap">
            <input type="text" placeholder="Search for anything" />
            <div className="search-wrap ">
              <img src="/vectors/searchIcon.svg" alt="" />
            </div>
          </div>
          <div className="right">
            <p className="underline text-purple">Docs</p>
            <div className="bell-icon">
              <img src="/vectors/bellIcon.svg" alt="" />
            </div>
            <div className="pic-icon">
              <img
                src="/images/pictureIcon.png"
                className="rounded-full"
                alt=""
              />
            </div>
            <div className="user-wrap">
              <p>Adedeji</p>
              <img src="/vectors/userdropIcon.svg" alt="" />
            </div>
          </div>
        </header>
        <section className="bg-grey flex-grow overflow-y-auto">
          {children}
        </section>
      </main>
    </div>
  );
};

export default DashboardLayout;
