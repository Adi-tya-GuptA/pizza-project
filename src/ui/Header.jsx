import React from 'react';
import { Link } from 'react-router-dom';
import SeachOrder from '../features/order/SeachOrder';
import UserName from '../features/users/UserName';
export default function Header() {
  return (
    <header className="font-pizza flex items-center justify-between border-b border-stone-300 bg-yellow-500 px-4 py-3 uppercase">
      <Link to="/" className="tracking-widest">
        Fast Pizza .co
      </Link>
      <SeachOrder />
      <p>
        <UserName />
      </p>
    </header>
  );
}
