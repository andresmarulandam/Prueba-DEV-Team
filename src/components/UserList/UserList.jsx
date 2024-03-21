import React, { useEffect, useState } from 'react';
import { fetchUsers } from '../../services/api';

function UserList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      try {
        const userData = await fetchUsers();
        setUsers(userData.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    getUsers();
  }, []);
  return (
    <div>
      <h1>User List</h1>
      <div>
        {users.map((user) => (
          <div key={user.id}>
            <img
              src={user.picture}
              alt={`${user.firstName} ${user.lastName}`}
            />
            <p>
              {user.firstName} {user.lastName}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default UserList;
