import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AiTwotoneMail } from "react-icons/ai";
import { CiCalendarDate } from "react-icons/ci";

const UserProfile = () => {
  const { userId } = useParams();

  const [userDetails, setUserDetails] = useState(null);

  const userDetail = async () => {
    const response = await axios.get(
      `https://randomuser.me/api/?uuid=${userId}`
    );
    if (response.status === 200) {
      setUserDetails(response.data.results[0]);
    }
  };

  useEffect(() => {
    userDetail();
  }, [userId]);

  return (
    <div className="container-fluid">
      <div className="container">
        <div className="main-profile mt-3">
          <div className="user-img">
            <img
              src={userDetails?.picture.large}
              className="card-img-top"
              alt="..."
            />
          </div>
          <div className="user-details text-center">
            <div className="user-name">
              <h1>
                {userDetails?.name.first}&nbsp;
                {userDetails?.name.last}
              </h1>
            </div>

            <div className="users-email">
              <AiTwotoneMail size={26} />
              &nbsp;
              {userDetails?.email}
            </div>

            <div className="user-dob mt-2">
              <CiCalendarDate size={26} />
              {userDetails?.dob.date}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
