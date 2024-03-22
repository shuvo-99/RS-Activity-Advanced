import React from "react";
import DisplayData from "../DisplayData/DisplayData";

const LoadData = () => {
  const students = [
    {
      id: "1",
      name: "Siam",
      semester: "3rd",
      fee: 19800,
      gender: "Male",
    },
    {
      id: "2",
      name: "Jerin",
      semester: "3rd",
      fee: 20000,
      gender: "Female",
    },
    {
      id: "3",
      name: "Akib",
      semester: "3rd",
      fee: 22000,
      gender: "Male",
    },
  ];

  return (
    <div>
      {students.map((student) => (
        <DisplayData key={student.id}>{student}</DisplayData>
      ))}
    </div>
  );
};

export default LoadData;
