/* eslint-disable react/prop-types */
// import React from "react";

import "./DisplayUsers.css";
import { Link } from "react-router-dom";

const DisplayUsers = (props) => {
  console.log(props);
  // eslint-disable-next-line react/prop-types
  const { id, name, phone, username, website, address, company, email } =
    props.user;
  return (
    <div
      style={{
        border: "red 1px solid",
        marginBottom: "5px",
        paddingLeft: "10px",
        textAlign: "center",
        borderRadius: "10px",
        boxShadow: "0px 0px 5px red",
        paddingBottom: "10px",
      }}
    >
      <h4>Name: {name}</h4>
      <h4>Email: {email}</h4>
      <p>Website: {website}</p>
      <Link to={`/users/${id}`}>
        <button> View Details</button>
      </Link>
    </div>
  );
};

export default DisplayUsers;
