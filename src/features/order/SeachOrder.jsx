import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SeachOrder() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  function handleSubmit(e) {
    e.preventDefault();
    if (!query) return;
    navigate(`/order/${query}`);

    setQuery("");
  }
  function handleChange(e) {
    setQuery(e.target.value);
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="search order #"
        value={query}
        onChange={handleChange}
      />
    </form>
  );
}
