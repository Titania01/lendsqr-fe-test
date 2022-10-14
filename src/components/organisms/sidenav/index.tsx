import { NavLink } from "react-router-dom";
import "./Sidenav.scss";

const Sidenav = () => {
  const nav = [
    {
      title: "CUSTOMER",
      submenu: [
        { title: "Users", icon: "userIcon.svg", link: "/users" },
        { title: "Guarantors", icon: "guarantorIcon.svg", link: "/guarantors" },
        { title: "Loans", icon: "loanIcon.svg", link: "/loans" },
        { title: "Decision Models", icon: "handIcon.svg", link: "/decisions" },
        { title: "Savings", icon: "piggyIcon.svg", link: "/savings" },
        {
          title: "Loan Requests",
          icon: "savingsIcon.svg",
          link: "/loanrequest",
        },
        { title: "Whitelist", icon: "whitelistIcon.svg", link: "/whitelist" },
        { title: "Karma", icon: "productIcon.svg", link: "/karma" },
      ],
    },
    {
      title: "BUSINESSES",
      submenu: [
        {
          title: "Organization",
          icon: "profileIcon.svg",
          link: "/organisation",
        },
        {
          title: "Loan Products",
          icon: "profileIcon.svg",
          link: "/loanproduct",
        },
        {
          title: "Savings Products",
          icon: "savingsIcon.svg",
          link: "/savingsproduct",
        },
        {
          title: "Fees and Charges",
          icon: "chargesIcon.svg",
          link: "/charges",
        },
        {
          title: "Transactions",
          icon: "transactionIcon.svg",
          link: "/loanproduct",
        },
        {
          title: "Service Account",
          icon: "accountIcon.svg",
          link: "/loanproduct",
        },
        {
          title: "Settlements",
          icon: "settlementIcon.svg",
          link: "/loanproduct",
        },
        { title: "Reports", icon: "reportIcon.svg", link: "/loanproduct" },
      ],
    },
    {
      title: "SETTINGS",
      submenu: [
        {
          title: "Preferences",
          icon: "preferencesIcon.svg",

          link: "/preference",
        },
        {
          title: "Systems Messages",
          icon: "systemIcon.svg",
          link: "/preference",
        },
        {
          title: "Logout",
          icon: "preferencesIcon.svg",
          link: "/preference",
        },
      ],
    },
  ];
  const isActive = window.location.pathname;
  return (
    <aside>
      <div className="image-wrap">
        <img src="/vectors/logo.svg" />
      </div>
      <div className="nav-description">
        <img src="/vectors/briefcaseIcon.svg" />
        <p>Switch Organization</p>
        <img src="/vectors/arrowdown.svg" className="cursor-pointer" />
      </div>
      <div className="flex-grow overflow-y-auto">
        {nav.map((n, i) => (
          <div className="nav-link" key={i}>
            <span>{n.title}</span>
            {n.hasOwnProperty("submenu") && (
              <div className="submenu-nav">
                {n.submenu.map((menu, index) => (
                  <div
                    className={`link-wrap ${
                      isActive == menu.link ? "active" : ""
                    }`}
                    key={index}
                  >
                    <div className="vectors-wrap">
                      <img src={`/vectors/${menu.icon}`} />
                    </div>
                    <NavLink to={menu.link}>{menu.title}</NavLink>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </aside>
  );
};

export default Sidenav;
