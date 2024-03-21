import React, { useEffect, useState } from 'react';
import { fetchUsers } from '../../services/api';

import './styles.css';

function UserList() {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const getUsers = async () => {
      try {
        const userData = await fetchUsers(page);
        setUsers(userData.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    getUsers();
  }, [page]);

  const loadMore = () => {
    setPage(page + 1);
  };
  return (
    <div className="user-list-container">
      <h1>User List</h1>
      <div className="user-cards">
        {users.map((user) => (
          <div key={user.id} className="user-card">
            <img
              className="user-avatar"
              src={user.picture}
              alt={`${user.firstName} ${user.lastName}`}
            />

            <p className="user-name">
              {user.firstName} {user.lastName}
            </p>
          </div>
        ))}
      </div>
      <button className="load-more-button" onClick={loadMore}>
        Cargar Más
      </button>
    </div>
  );
}

export default UserList;
