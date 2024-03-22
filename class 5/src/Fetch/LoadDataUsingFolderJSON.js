import React, { useEffect, useState } from "react";
import DisplayData from "../DisplayData/DisplayData";
import "./Fetch.css";

const LoadDataUsingFolderJSON = () => {
  const [students, setStudents] = useState([]);

  // useEffect hook is called after every render
  useEffect(() => {
    fetch("students.json")
      .then((res) => res.json())
      .then((data) => setStudents(data));
  }, []); // Empty dependency array means this effect runs only once after initial render

  return (
    <div className="data_container">
      {students.map((student) => (
        <DisplayData key={student.id}>{student}</DisplayData>
      ))}
    </div>
  );
};

export default LoadDataUsingFolderJSON;
