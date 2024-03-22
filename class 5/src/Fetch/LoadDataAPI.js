import React, { useEffect, useState } from "react";
import DisplayData from "../DisplayData/DisplayData";

const LoadDataAPI = () => {
  const [students, setStudents] = useState([]);

  // useEffect hook is called after every render
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setStudents(data));
  }, []);
  return (
    <div className="data_container">
      {students.map((student) => (
        <DisplayData key={student.id} student={student}></DisplayData>
      ))}
    </div>
  );
};

export default LoadDataAPI;
