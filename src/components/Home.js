import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Home</h1>
      <p className="mb-2">Choose a user to view their profile:</p>
      <ul className="space-y-2">
        {[1, 2, 3].map(id => (
          <li key={id}>
            <Link to={`/user/${id}`} className="text-blue-600 hover:underline">User {id}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
