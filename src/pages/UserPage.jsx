import React from 'react'
import { useEffect, useContext } from 'react'
import GithubContext from '../components/context/GithubContext'
import { useParams, Link } from 'react-router-dom'

function UserPage() {

  const {getUser, user, isLoading} = useContext(GithubContext)

  const params = useParams()

  useEffect(() => {
    getUser(params.login)
  }, [])

  const {
    name,
    company,
    avatar_url,
    location,
    bio,
    blog,
    login,
    html_url,
    followers,
    following,
    public_repos,
    public_gists,
    hireable
  } = user;

  if (!isLoading) {
    return(
      <div className='user-page'>
        <div>
            <Link to="/">
              <button className='bts-btn'>Back to Search</button>
            </Link>
        </div>
        <div className='user-container'>
          <div className='user-img-container'>
            <div className='user-img'>
              <img src={avatar_url} alt="" />
            </div>
            <div className='user-info'>
              <h3 className='user-tags'>{name}</h3>
              <p className='user-tags'>{login}</p>
            </div>
          </div>
          <div className='user-info-container'>
            <h2>{name}</h2>
            <p>{bio}</p>
            <a
              href={html_url}
              target='_blank'
              rel='noreferrer'
            >
              <button>Visit Github Profile</button>
            </a>
          </div>
        </div>
      </div>
    )
  }
  else {
    return(
      <>  
          <div>
              <h3>Loading...</h3>
              <div className="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
          </div>
      </>
    )
  }
}

export default UserPage