import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchUser } from '../api/users';

const UserProfile = () => {
  const { id } = useParams();
  const [user, setUser]   = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError]     = useState();

  useEffect(() => {
    setLoading(true);
    fetchUser(id)
      .then(data => {
        setUser(data);
        setError(undefined);
      })
      .catch(err => setError(err.message))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <p>Loading user…</p>;
  if (error)   return <p className="text-red-500">Error: {error}</p>;
  if (!user)  return <p className="text-red-500">User not found</p>;

  return (
    <div>
      <h1 className="text-2xl font-bold mb-2">{user.name}</h1>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Phone:</strong> {user.phone}</p>
      <p><strong>Website:</strong> {user.website}</p>
    </div>
  );
};

export default UserProfile;
