import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const User = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get("http://45.147.176.236:5000/users/");
        if (response.status === 200) {
          setUsers(response.data);
        }
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };
    fetchUsers();
  }, []);

  return (
    <div className="px-5 mt-3">
      <div className="d-flex justify-content-center">
        <h3>СОТРУДНИКИ</h3>
      </div>
      <Link to="/dashboard/add_user" className="btn btn-success">
        Добавить
      </Link>
      <div className="my-4">
        <table>
          <thead>
            <tr>
              <th>ИМЯ</th>
            </tr>
          </thead>
          <tbody></tbody>
        </table>
      </div>
    </div>
  );
};

export default User;
