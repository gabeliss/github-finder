import React from 'react'
import { Link } from 'react-router-dom'

function User({user}) {
  return (
    <div className='user'>
        <div className='avatar'>
            <img src={user.avatar_url} alt="avatar" />
        </div>
        <div className='userinfo'>
            <div className='login'>
                <h3>{user.login}</h3>
            </div>
            <div className='visitprofile'>
                <Link to={`/user/${user.login}`}>
                <button className='profilebtn'>Visit Profile</button>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default User