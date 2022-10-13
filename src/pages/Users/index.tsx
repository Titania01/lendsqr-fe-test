import { userData } from "../../atoms/data/userData";
import UserCard from "../../molecules/users";

import DashboardLayout from "../../templates/dashboardLayout";
import "./Users.scss";

const Users = () => {
  return (
    <DashboardLayout>
      <div className="users-container">
        <h3 className="header">Users</h3>
      </div>
      <div className="card-wrapper">
        {userData.map((user, index) => (
          <div className="wrapper">
            <UserCard
              img={user.img}
              title={user.title}
              count={user.number}
              key={index}
            />
          </div>
        ))}
      </div>
    </DashboardLayout>
  );
};

export default Users;
