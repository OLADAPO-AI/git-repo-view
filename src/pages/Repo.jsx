import { React, useEffect, useState } from 'react'
import axios from 'axios'
import { useQuery } from '@tanstack/react-query'
import CardList from '../components/cardList'
import Pagination from './pagination'
import Search from '../components/Search'
import { useActionData } from 'react-router-dom'

function Repo() {
  const [repos, setRepos] = useState([])
  const [currentPage, setcurrentPage] = useState(1)
  const [postsPerPage, setPostPerPage] = useState(6)
  const [search, setSearch] = useState('')
  //  base URL for the GitHub API
  const url = 'https://api.github.com/'

  // GitHub API token (auth key)
  const apiToken = `${import.meta.env.VITE_API_KEY}`

  const headers = {
    Authorization: `Bearer ${apiToken}`,
    'Content-Type': 'application/json',
    Accept: 'application/json',
  }

  const config = {
    headers: headers,
  }

  async function fetchGithubUserData() {
    try {
      const response = await axios.get(`${url}user/repos`, config)

      setRepos(response.data)
    } catch (error) {
      console.error('Error:', error)
    }
  }

  // Call the async function with a specific GitHub username
  useEffect(() => {
    fetchGithubUserData()
  }, [])

  const filteredRepos = repos.filter((repo) =>
    repo.name.toLowerCase().includes(search.toLowerCase())
  )

  const lastIndex = currentPage * postsPerPage
  const firstIndex = lastIndex - postsPerPage
  const currentRepo = filteredRepos.slice(firstIndex, lastIndex)

  const handleSearchChange = (e) => {
    setSearch(e.target.value)
    setcurrentPage(1)
  }
  return (
    <div role="main">
      <div
        class="flex flex-row justify-center mb-8"
        aria-label="Search Section"
      >
        <Search handleSearchChange={handleSearchChange} />
      </div>

      <div aria-label="Repository List">
        <CardList repos={currentRepo} />
      </div>

      <div
        class="flex flex-row justify-center p-6"
        aria-label="Pagination Section"
      >
        <Pagination
          totalPosts={repos.length}
          postsPerPage={postsPerPage}
          setCurrentPage={setcurrentPage}
        />
      </div>
    </div>
  )
}

export default Repo
