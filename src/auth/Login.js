import React, { useState } from 'react';
import { useAuth } from './AuthContext';

export default function Login() {
  const { login } = useAuth();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError]       = useState();

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      await login(username, password);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="max-w-sm mx-auto mt-20 p-6 bg-white shadow">
      <h1 className="text-xl font-bold mb-4">Login</h1>
      {error && <p className="text-red-500">{error}</p>}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label>Username</label>
          <input
            className="w-full border p-2"
            value={username}
            onChange={e => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            className="w-full border p-2"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
        </div>
        <button className="w-full bg-blue-600 text-white p-2">Login</button>
      </form>
    </div>
  );
}
