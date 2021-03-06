import React from 'react'
import { useState, useContext } from 'react'
import GithubContext from './context/GithubContext'
import AlertContext from './context/AlertContext'

function UserSearch() {

    const [text, setText] = useState('')

    const {users, searchUsers, handleClear} = useContext(GithubContext)

    const {setAlert} = useContext(AlertContext)

    const handleChange = (e) => {
        setText(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if (text === '') {
            setAlert('Please register a search', 'error')
        }
        else {
            searchUsers(text)
            setText('')
        }
    }

  return (
    <div className='usersearch'>
        <div className='search-form'>
            <form onSubmit={handleSubmit}>
                <div className='search-input'>
                    <input 
                        type="text" 
                        placeholder='Search'
                        className='search-bar'
                        value={text}
                        onChange={handleChange}
                    />
                </div>
                <div className='go-btn'>
                    <button type='submit'>
                        Go
                    </button>
                </div>
            </form>
        </div>
        {users.length > 0 && (
            <div className='clear-btn'>
                <button type='submit' onClick={handleClear}>
                    Clear
                </button>
            </div>
        )}
    </div>
  )
}

export default UserSearch