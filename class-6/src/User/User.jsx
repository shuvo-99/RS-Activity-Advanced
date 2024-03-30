import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const User = () => {
  const { userId } = useParams();

  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(true);

  const { id, name, phone, username, website, address, company, email } = user;

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
      .then((res) => res.json())
      .then((data) => {
        setUser(data);
        setLoading(false);
        console.log(data); // Set loading to false once data is fetched
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
          <p>Id: {id}</p>
          <p>Name: {name}</p>
          <p>UserName:{username}</p>
          <p>Email: {email}</p>
          <p>Website: {website}</p>
          <p>Phone: {phone}</p>
        </div>
      )}
    </div>
  );
};

export default User;
