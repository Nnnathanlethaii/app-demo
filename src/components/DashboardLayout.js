import { NavLink, Outlet } from 'react-router-dom';
import { useAuth } from '../auth/AuthContext';

export default function DashboardLayout() {
  const { logout, user } = useAuth();
  return (
    <div className="flex h-screen">
      <aside className="w-48 bg-gray-100 p-4">
        <h2 className="font-bold mb-4">Hi, {user.name}</h2>
        <nav className="flex flex-col space-y-2">
          <NavLink to="home" className={({isActive}) => isActive ? 'font-bold' : ''}>
            Dashboard Home
          </NavLink>
          <NavLink to="settings" className={({isActive}) => isActive ? 'font-bold' : ''}>
            Settings
          </NavLink>
          <button onClick={logout} className="mt-4 text-red-600">Logout</button>
        </nav>
      </aside>
      <main className="flex-1 p-6">
        <Outlet />
      </main>
    </div>
  );
}