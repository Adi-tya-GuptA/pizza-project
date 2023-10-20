import React from 'react';
import { useSelector } from 'react-redux';

export default function UserName() {
  const username = useSelector((state) => state.user.username);

  if (!username) return null;
  return (
    <span className="hidden text-sm font-semibold md:block">{username}</span>
  );
}
