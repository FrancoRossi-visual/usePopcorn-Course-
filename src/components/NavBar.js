import { useState } from "react";

export default function NavBar({ numberOfResults }) {
  return (
    <nav className='nav-bar'>
      <Logo />
      <SearchBar />
      <NumberOfResults numberOfResults={numberOfResults} />
    </nav>
  );
}

function Logo() {
  return (
    <div className='logo'>
      <span role='img'>🍿</span>
      <h1>usePopcorn</h1>
    </div>
  );
}

function SearchBar() {
  const [query, setQuery] = useState("");

  return (
    <input
      className='search'
      type='text'
      placeholder='Search movies...'
      value={query}
      onChange={(e) => setQuery(e.target.value)}
    />
  );
}

function NumberOfResults({ numberOfResults }) {
  return (
    <p className='num-results'>
      Found <strong>{numberOfResults}</strong> results
    </p>
  );
}
