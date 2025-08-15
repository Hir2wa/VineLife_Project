import React, { useState } from "react";

const Link1 = () => {
  const [students, clearStudents] = useState([
    { id: 1, name: "Alice", score: 80 },
    { id: 2, name: "Bob", score: 45 },
    { id: 3, name: "Charlie", score: 67 },
  ]);

  return (
    <>
      {students.length === 0 ? (
        <p>List Is Empty</p>
      ) : (
        students.map((student) => {
          return (
            <p
              key={student.id}
              style={{ color: student.score >= 50 ? "green" : "red" }}
            >{`  Name: ${student.name}   Score: ${student.score}  ${
              student.score >= 50 ? "pass" : "failed"
            }`}</p>
          );
        })
      )}
      <button onClick={() => clearStudents([])}>clean</button>
    </>
  );
};

export default Link1;
