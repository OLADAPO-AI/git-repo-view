import React from 'react'

function Search({ handleSearchChange }) {
  return (
    <input
      type="text"
      placeholder="Type here"
      className="input input-bordered input-primary w-full max-w-xs"
      onChange={handleSearchChange}
    />
  )
}

export default Search
