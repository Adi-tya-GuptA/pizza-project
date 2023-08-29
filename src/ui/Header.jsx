import React from "react";
import { Link } from "react-router-dom";
import SeachOrder from "../features/order/SeachOrder";

export default function Header() {
  return (
    <header>
      <Link to="/">Fast Pizza .co</Link>
      <SeachOrder />
      <p>Aditya Gupta</p>
    </header>
  );
}
