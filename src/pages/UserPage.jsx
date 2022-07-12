import React from 'react'
import { useEffect, useContext } from 'react'
import GithubContext from '../components/context/GithubContext'
import { useParams } from 'react-router-dom'

function UserPage() {

  const {getUser, user} = useContext(GithubContext)

  const params = useParams()

  useEffect(() => {
    getUser(params.login)
  }, [])

  return (
    <div>
        {params.login}
    </div>
  )
}

export default UserPage