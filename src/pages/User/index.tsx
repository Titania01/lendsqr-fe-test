import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Button from "../../components/atoms/button";
import { fetchFromApi } from "../../services";
import DashboardLayout from "../../templates/dashboardLayout";
import "./SingleUser.scss";

const User = () => {
  const search = useParams();
  const [user, setUser] = useState<any>(null);
  const [loading, setloading] = useState(false);
  const fetchUser = async () => {
    try {
      setloading(true);
      const response = await fetchFromApi({
        url: `/users/${search.id}`,
        method: "get",
      });
      setUser(response.data);
    } catch (error) {
    } finally {
      setloading(false);
    }
  };
  useEffect(() => {
    fetchUser();
  }, []);

  const navigate = useNavigate();

  const currency = user?.profile.currency;

  return (
    <DashboardLayout>
      <div className="single-user-wrap">
        <div className="user-pointer" onClick={() => navigate("/users")}>
          <div className="arrow">
            <img src="/vectors/pointarrowIcon.svg" alt="" />
          </div>
          <p>Back to Users</p>
        </div>

        <div className="user-detail-wrap">
          <h3>User Details</h3>
          <div className="button-container">
            <div className="button w-[10.625rem] text-tomato ">
              <Button
                customClasses="border border-tomato rounded-lg text-sm font-semibold"
                outline
              >
                BLACKLIST USER
              </Button>
            </div>
            <div className="button w-[10.625rem] text-blueish ">
              <Button
                customClasses="border border-blueish rounded-lg text-sm font-semibold"
                outline
              >
                ACTIVATE USER
              </Button>
            </div>
          </div>
        </div>

        {loading ? (
          <span className="text-4xl font-bold text-primary">Loading.....</span>
        ) : (
          <>
            <div className="general-details-wrap">
              <div className="top-section">
                <div className="avatar-wrap">
                  <img src="/vectors/avatar.svg" alt="" />
                </div>
                <div className="grace">
                  <div className="detail">
                    <h3>
                      {user?.profile.firstName + " " + user?.profile.lastName}
                    </h3>
                    <p>{user?.orgName}</p>
                  </div>
                  <div className="line"></div>
                  <div className="user-tier">
                    <h4>User’s Tier</h4>
                    <div className="star-wrap">
                      <img src="/vectors/stars.svg" alt="" />
                    </div>
                  </div>
                  <div className="line"></div>
                  <div className="providus">
                    <h3>₦{user?.accountBalance?.toLocaleString()}</h3>
                    <p>{user?.accountNumber}/Providus Bank</p>
                  </div>
                </div>
              </div>
              <div className="bottom-section">
                <h2 className="text-blueish border-b-2 border-blueish">
                  General Details
                </h2>
                <h2>Documents</h2>
                <h2>Bank Details</h2>
                <h2>Loans</h2>
                <h2>Savings</h2>
                <h2>App and System</h2>
              </div>
            </div>

            <div className="personal-info-wrap">
              <h1 className="header">Personal Information</h1>
              <div className="first-section">
                <div className="upper-section">
                  <div className="detail-wrapper">
                    <p className="top-paragraph">FULL NAME</p>
                    <div className="bottom-paragraph">
                      {" "}
                      {user?.guarantor.firstName +
                        " " +
                        user?.guarantor.lastName}
                    </div>
                  </div>
                  <div className="detail-wrapper">
                    <p className="top-paragraph">PHONE NUMBER</p>
                    <div className="bottom-paragraph">
                      {user?.guarantor.phoneNumber}
                    </div>
                  </div>
                  <div className="detail-wrapper">
                    <p className="top-paragraph">EMAIL ADDRESS</p>
                    <div className="bottom-paragraph">{user?.email}</div>
                  </div>
                  <div className="detail-wrapper">
                    <p className="top-paragraph">BVN</p>
                    <div className="bottom-paragraph">{user?.profile.bvn}</div>
                  </div>
                  <div className="detail-wrapper">
                    <p className="top-paragraph">GENDER</p>
                    <div className="bottom-paragraph">
                      {user?.profile.gender}
                    </div>
                  </div>
                </div>
                <div className="lower-section">
                  <div className="detail-wrapper">
                    <p className="top-paragraph">MARITAL STATUS</p>
                    <div className="bottom-paragraph">Single</div>
                  </div>
                  <div className="detail-wrapper">
                    <p className="top-paragraph">CHILDREN</p>
                    <div className="bottom-paragraph">None</div>
                  </div>
                  <div className="detail-wrapper">
                    <p className="top-paragraph">TYPE OF RESIDENCE</p>
                    <div className="bottom-paragraph">Parent’s Apartment</div>
                  </div>
                </div>
                <hr />
              </div>

              <h1 className="header pt-8">Education and Employment</h1>
              <div className="first-section">
                <div className="upper-section">
                  <div className="detail-wrapper">
                    <p className="top-paragraph">LEVEL OF EDUCATION</p>
                    <div className="bottom-paragraph">
                      {user?.education.level}
                    </div>
                  </div>
                  <div className="detail-wrapper">
                    <p className="top-paragraph">EMPLOYMENT STATUS</p>
                    <div className="bottom-paragraph">
                      {user?.education.employmentStatus}
                    </div>
                  </div>
                  <div className="detail-wrapper">
                    <p className="top-paragraph">SECTOR OF EMPLOYMENT</p>
                    <div className="bottom-paragraph">
                      {user?.education.sector}
                    </div>
                  </div>
                  <div className="detail-wrapper">
                    <p className="top-paragraph">DURATION OF EMPLOYMENT</p>
                    <div className="bottom-paragraph">
                      {user?.education.duration}
                    </div>
                  </div>
                </div>
                <div className="lower-section">
                  <div className="detail-wrapper">
                    <p className="top-paragraph">OFFICIAL EMAIL</p>
                    <div className="bottom-paragraph">
                      {user?.education.officeEmail}
                    </div>
                  </div>
                  <div className="detail-wrapper">
                    <p className="top-paragraph">MONTHLY INCOME</p>
                    <div className="bottom-paragraph">
                      {currency}
                      {user?.education.monthlyIncome[0]?.toLocaleString()}-
                      {currency}
                      {user?.education.monthlyIncome[1]?.toLocaleString()}
                    </div>
                  </div>

                  <div className="detail-wrapper">
                    <p className="top-paragraph">LOAN REPAYMENT</p>
                    <div className="bottom-paragraph">
                      {currency}
                      {user?.education.loanRepayment}
                    </div>
                  </div>
                </div>
                <hr />
                <div className="flex flex-col">
                  <h1 className="header">Socials</h1>
                  <div className="social-wrap flex gap-[12rem]">
                    <div className="detail-wrapper">
                      <p className="top-paragraph">TWITTER</p>
                      <div className="bottom-paragraph">
                        {user?.socials.twitter}
                      </div>
                    </div>
                    <div className="detail-wrapper">
                      <p className="top-paragraph">FACEBOOK</p>
                      <div className="bottom-paragraph">
                        {user?.socials.facebook}
                      </div>
                    </div>

                    <div className="detail-wrapper">
                      <p className="top-paragraph">INSTAGRAM</p>
                      <div className="bottom-paragraph">
                        {user?.socials.instagram}
                      </div>
                    </div>
                  </div>
                </div>
                <hr />
                <div className="flex flex-col">
                  <h1 className="header">Guarantor</h1>
                  <div className="social-wrap flex gap-[12rem]">
                    <div className="detail-wrapper">
                      <p className="top-paragraph">FULL NAME</p>
                      <div className="bottom-paragraph">
                        {user?.guarantor.firstName +
                          " " +
                          user?.guarantor.lastName}
                      </div>
                    </div>
                    <div className="detail-wrapper">
                      <p className="top-paragraph">PHONE NUMBER</p>
                      <div className="bottom-paragraph">
                        {user?.guarantor.phoneNumber}
                      </div>
                    </div>

                    <div className="detail-wrapper">
                      <p className="top-paragraph">EMAIL ADDRESS</p>
                      <div className="bottom-paragraph">{user?.email}</div>
                    </div>
                    <div className="detail-wrapper">
                      <p className="top-paragraph">RELATIONSHIP</p>
                      <div className="bottom-paragraph">Sister</div>
                    </div>
                  </div>
                </div>
                <hr />
                <div className="flex flex-col">
                  <div className="social-wrap flex gap-[12rem]">
                    <div className="detail-wrapper">
                      <p className="top-paragraph">FULL NAME</p>
                      <div className="bottom-paragraph">
                        {user?.guarantor.firstName +
                          " " +
                          user?.guarantor.lastName}
                      </div>
                    </div>
                    <div className="detail-wrapper">
                      <p className="top-paragraph">PHONE NUMBER</p>
                      <div className="bottom-paragraph">
                        {user?.guarantor.phoneNumber}
                      </div>
                    </div>

                    <div className="detail-wrapper">
                      <p className="top-paragraph">EMAIL ADDRESS</p>
                      <div className="bottom-paragraph">{user?.email}</div>
                    </div>
                    <div className="detail-wrapper">
                      <p className="top-paragraph">RELATIONSHIP</p>
                      <div className="bottom-paragraph">Sister</div>
                    </div>
                  </div>
                </div>
                <hr />
              </div>
            </div>
          </>
        )}
      </div>
    </DashboardLayout>
  );
};

export default User;
