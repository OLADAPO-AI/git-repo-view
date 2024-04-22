import React from 'react'

import { Link } from 'react-router-dom'

function CardList({ repos }) {
  return (
    <div
      className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-4"
      role="list"
    >
      {repos.map((repo) => {
        return (
          <div key={repo.id} role="listitem">
            <Link to={`/repo/${repo.name}`} role="link">
              <div className="card w-full sm:w-80 bg-primary text-primary-content m-3">
                <div className="card-body">
                  <h2 className="card-title">{repo.name}</h2>
                  <p>{repo.full_name}</p>
                  <div className="card-actions justify-end">
                    <button className="btn">Details</button>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        )
      })}
    </div>
  )
}

export default CardList
