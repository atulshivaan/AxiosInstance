import { useEffect, useState } from "react";
import axiosInstance from "../utils/axios";

const User = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axiosInstance.get("/users")
      .then((response) => {
        setUsers(response.data);
        console.log("Users:", response.data);
      })
      .catch((error) => {
        console.log("Error fetching users:", error);
      });
  }, []);

  return (
    <div className="p-4">
     
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {users.map((user) => (
          <div key={user.id} className="border p-4 rounded shadow">
            <img
              src={`https://i.pravatar.cc/150?img=${user.id}`} 
              alt={`${user.name.firstname} ${user.name.lastname}`}
              className="h-40 w-40 object-cover rounded-full mx-auto"
            />
            <h2 className="text-lg font-semibold mt-2 text-center">
              {user.name.firstname} {user.name.lastname}
            </h2>
            <p className="text-sm text-gray-600 text-center">{user.email}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default User;
