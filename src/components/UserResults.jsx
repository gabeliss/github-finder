import React from 'react'
import { useEffect, useState } from 'react'
import User from './User'

function UserResults() {

    const [users, setUsers] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        fetchUsers()
    }, [])

    const fetchUsers = async () => {
        const response = await fetch(`${process.env.REACT_APP_GITHUB_URL}/users`)
        const data = await response.json()
        setUsers(data)
        setIsLoading(false)
    }

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
                    <div class="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
                </div>
            </>
        )
    }
}

export default UserResults