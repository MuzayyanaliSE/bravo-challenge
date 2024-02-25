import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Select from "react-select";
import {
  fetchUsers,
  setGenderFilter,
  setCurrentPage,
} from "../features/users/userSlice";
import { PiGenderIntersexFill } from "react-icons/pi";
import { MdOutlineMail } from "react-icons/md";
import ReactCountryFlag from "react-country-flag";

const UserList = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const dispatch = useDispatch();
  const { userList, genderFilter, currentPage } = useSelector(
    (state) => state.users
  );

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch, genderFilter, currentPage]);

  const genderOptions = [
    { value: "", label: "All Genders" },
    { value: "male", label: "Male" },
    { value: "female", label: "Female" },
  ];

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredUsers = searchQuery
    ? userList.filter((user) =>
        `${user.name.first} ${user.name.last}`
          .toLowerCase()
          .includes(searchQuery.toLowerCase())
      )
    : userList;

  return (
    <div className="container-fluid">
      <div className="container">
        <div className="mt-3 d-flex justify-content-between">
          <Select
            options={genderOptions}
            className="w-25"
            onChange={(option) =>
              dispatch(setGenderFilter(option ? option.value : ""))
            }
            value={genderOptions.find(
              (option) => option.value === genderFilter
            )}
            isClearable
            placeholder="Filter by Gender"
          />

          <input
            type="text"
            className="form-control w-25"
            placeholder="Search user by name"
            value={searchQuery}
            onChange={handleSearchChange}
          />
        </div>

        <div className="row row-cols-1 row-cols-md-4 g-4 mt-3">
          {filteredUsers.map((user) => (
            <div className="col" key={user.login.uuid}>
              <div className="card h-100">
                <img
                  src={user.picture.large}
                  className="card-img-top"
                  alt={`${user.name.first} ${user.name.last}`}
                />
                <div className="card-body">
                  <Link
                    to={`/profile/${user.login.uuid}`}
                    className="card-title"
                  >
                    <ReactCountryFlag countryCode={user.nat} svg  style={{
                    width: '1.5em',
                    height: '1.5em',
                }}/>
                    &nbsp;
                    &nbsp;
                    {user.name.first} {user.name.last}
                  </Link>
                  <ul className="list-unstyled">
                    <li style={{ textTransform: "capitalize" }}>
                      <PiGenderIntersexFill size={20} />
                      &nbsp;{user.gender}
                    </li>
                    <li>
                      <MdOutlineMail size={20} />
                      &nbsp;
                      <a href={`mailto:${user.email}`} className="user-email">
                        {user.email}
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-3 mb-3 d-flex justify-content-between">
          <button
            onClick={() => dispatch(setCurrentPage(currentPage - 1))}
            className="btn btn-primary"
            disabled={currentPage === 1}
          >
            Previous
          </button>
          <button
            onClick={() => dispatch(setCurrentPage(currentPage + 1))}
            className="btn btn-primary"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserList;
