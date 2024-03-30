import { useEffect, useState } from "react";
import DisplayUsers from "./DisplayUsers";
import "./DisplayUsers.css";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
        setLoading(false); // Set loading to false once data is fetched
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false); // Set loading to false in case of error
      });
  }, []);
  return (
    <div className="users_container">
      {loading ? (
        <div className="loader">Loading...</div>
      ) : (
        users.map((user) => <DisplayUsers key={user.id} user={user} />)
      )}
    </div>
  );
};

export default Users;
