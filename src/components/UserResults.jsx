import React, { useContext } from 'react'
import User from './User'
import GithubContext from './context/GithubContext'

function UserResults() {

    const {users, isLoading} = useContext(GithubContext)

    if (!isLoading)
        return (
            <div className='users'>
                {users.map(user => (
                    <h3><User key={user.id} user={user}/></h3>
                ))}
            </div>
        )
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

export default UserResults