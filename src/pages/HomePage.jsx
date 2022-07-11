import React from 'react'
import UserResults from '../components/UserResults'
import UserSearch from '../components/UserSearch'

function HomePage() {
  return (
    <div className='App'>
        <UserSearch />
        <UserResults />
    </div>
        
  )
}

export default HomePage