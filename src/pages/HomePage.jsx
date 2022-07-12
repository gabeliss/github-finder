import React from 'react'
import UserResults from '../components/UserResults'
import UserSearch from '../components/UserSearch'
import Alert from '../components/Alert'

function HomePage() {
  return (
    <div className='App'>
        <Alert />
        <UserSearch />
        <UserResults />
    </div>
        
  )
}

export default HomePage