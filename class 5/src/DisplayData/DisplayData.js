import React from "react";

const DisplayData = ({ student }) => {
  console.log(student);
  const { id, name, semester, fee, gender } = student;
  // const { albumId, id, thumbnailUrl, title, url } = props;

  return (
    <div style={{ border: "red 1px solid", marginBottom: "5px" }}>
      <ul>
        <li>Id: {id}</li>
        <li>Name: {name}</li>
        <li>Semesters: {semester}</li>
        <li>Fee: {fee}</li>
        <li>Gender: {gender}</li>
      </ul>
      {/* <ul>
        <img src={thumbnailUrl} alt="" />
        <li>Id: {id}</li>
        <li>Album ID: {albumId}</li>
        <li>Title: {title}</li>
        <li>Link :{url}</li>
      </ul> */}
    </div>
  );
};

export default DisplayData;
