import React, { useEffect, useState } from 'react';
import { fetchUsers } from '../../services/api';
import './UserList.css';

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsersData = async () => {
      try {
        const usersData = await fetchUsers();
        setUsers(usersData.data);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsersData();
  }, []);

  return (
    <div className="user-list">
      <h2>Users</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id} className="user">
            <div className="user-info">
              <img
                src={user.picture}
                alt={user.firstName}
                className="user-avatar"
              />
              <div>
                <h3>
                  {user.firstName} {user.lastName}
                </h3>
                <p>Email: {user.email}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
