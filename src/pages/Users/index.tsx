import { Menu } from "antd";
import moment from "moment";
import { useEffect, useLayoutEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { userData } from "../../components/atoms/data/userData";
import UserCard from "../../components/molecules/users";
import Tablee from "../../components/organisms/Table";
import { fetchFromApi } from "../../services";

import DashboardLayout from "../../templates/dashboardLayout";
import "./Users.scss";

const Users = () => {
  const navigate = useNavigate();
  const [activeUser, setactiveUser] = useState(null);
  const [users, setUsers] = useState<any>();
  const fetchUsers = async () => {
    try {
      const response = await fetchFromApi({ url: "/users", method: "get" });
      setUsers(response.data);
    } catch (error) {}
  };

  const usersData = users?.map((user: any, userIndex: number) => ({
    key: user.id,
    organization: user.orgName,
    username: user.userName,
    email: user.email,
    phonenumber: user.phoneNumber,
    date: moment(user.createdAt).format("MMM DD, YYYY HH:MMa"),
    status: (
      <span className="bg-[#39CD62] text-[#39CD62] bg-opacity-5 px-3 py-2 rounded-[100px]">
        active
      </span>
    ),
  }));

  const menu = (
    <Menu
      onClick={(e) => {
        if (e.key == "1") {
          navigate(`${activeUser}`);
        }
      }}
      items={[
        { key: "1", label: "View details" },
        { key: "2", label: "Blacklist User" },
        { key: "3", label: "Activate User" },
      ]}
    />
  );
  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <DashboardLayout>
      <div className="users-container">
        <h3 className="header">Users</h3>
      </div>
      <div className="card-wrapper">
        {userData.map((user, index) => (
          <div className="wrapper" key={index}>
            <UserCard img={user.img} title={user.title} count={user.number} />
          </div>
        ))}
      </div>
      <Tablee data={usersData} menu={menu} setactiveUser={setactiveUser} />
    </DashboardLayout>
  );
};

export default Users;
