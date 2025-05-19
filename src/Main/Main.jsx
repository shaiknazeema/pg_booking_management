import React, { useState, useEffect } from "react";
import axios from "axios";
import './Main.css';

const Storecomponent = () => {
  const [users, setUsers] = useState([]);
  const [editUserId, setEditUserId] = useState(null);
  const [editFormData, setEditFormData] = useState({
    username: "",
    email: "",
    phone_number: "",
    password: "",
  });
  const [expandedUserId, setExpandedUserId] = useState(null);

  const fetchUsers = async () => {
    try {
      const response = await axios.get("http://localhost:3001/main");
      setUsers(response.data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3001/main/${id}`);
      setUsers(users.filter((user) => user.id !== id));
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  const handleEditClick = (user) => {
    setEditUserId(user.id);
    setEditFormData({
      username: user.username,
      email: user.email,
      phone_number: user.phone_number,
      password: user.password,
    });
  };

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditFormData({ ...editFormData, [name]: value });
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:3001/main/${editUserId}`, editFormData);
      setUsers(users.map((user) => (user.id === editUserId ? { ...user, ...editFormData } : user)));
      setEditUserId(null);
    } catch (error) {
      console.error("Error updating user:", error);
    }
  };

  const handleRead = (id) => {
    setExpandedUserId(expandedUserId === id ? null : id);
  };

  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Username</th>
          <th>Email</th>
          <th>Phone Number</th>
          <th>Password</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <React.Fragment key={user.id}>
            <tr>
              <td>{user.id}</td>
              {editUserId === user.id ? (
                <>
                  <td>
                    <input
                      type="text"
                      name="username"
                      value={editFormData.username}
                      onChange={handleEditChange}
                    />
                  </td>
                  <td>
                    <input
                      type="email"
                      name="email"
                      value={editFormData.email}
                      onChange={handleEditChange}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      name="phone_number"
                      value={editFormData.phone_number}
                      onChange={handleEditChange}
                    />
                  </td>
                  <td>
                    <input
                      type="password"
                      name="password"
                      value={editFormData.password}
                      onChange={handleEditChange}
                    />
                  </td>
                  <td>
                    <button onClick={handleUpdate} className="save">Save</button>
                    <button onClick={() => setEditUserId(null)} className="cancel">Cancel</button>
                  </td>
                </>
              ) : (
                <>
                  <td>{user.username}</td>
                  <td>{user.email}</td>
                  <td>{user.phone_number}</td>
                  <td>{user.password}</td>
                  <td>
                    <button onClick={() => handleRead(user.id)} className="read">Read</button>
                    <button onClick={() => handleEditClick(user)} className="edit">Edit</button>
                    <button onClick={() => handleDelete(user.id)} className="delete">Delete</button>
                  </td>
                </>
              )}
            </tr>
            {expandedUserId === user.id && (
              <tr className="expanded-row">
                <td colSpan="6">
                  <div className="expanded-details">
                    <h4>User Details</h4>
                    <p><strong>Username:</strong> {user.username}</p>
                    <p><strong>Email:</strong> {user.email}</p>
                    <p><strong>Phone Number:</strong> {user.phone_number}</p>
                    <p><strong>Password:</strong> {user.password}</p>
                  </div>
                </td>
              </tr>
            )}
          </React.Fragment>
        ))}
      </tbody>
    </table>
  );
};

export default Storecomponent;
