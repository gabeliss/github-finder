import { createContext, useReducer } from "react";
import githubReducer from "./GithubReducer";

const GithubContext = createContext()

export function GithubProvider({children}) {

    const GITHUB_URL = process.env.REACT_APP_GITHUB_URL

    const intialState = {
        users: [],
        user: {},
        isLoading: false,
    }

    const [state, dispatch] = useReducer(githubReducer, intialState)

    // Get search results
    const searchUsers = async (text) => {
        setLoading()

        const params = new URLSearchParams({
            q: text
        })

        const response = await fetch(`${GITHUB_URL}/search/users?${params}`)
        const {items} = await response.json()
        // this is same thing as above line -> const items = (await response.json()).items
        
        dispatch({
            type: 'SEARCH_USERS',
            payload: items,
        })
    }

    // Get user
    const getUser = async (login) => {
        setLoading()

        const response = await fetch(`${GITHUB_URL}/users/${login}`)
        console.log(response)
        
        if (response.status === 404) {
            window.location = '/notfound'
        }
        else {
            const data = await response.json()
            console.log(data)
            dispatch({
                type: 'GET_USER',
                payload: data,
            })
        }
    }

    // Set Loading
    const setLoading = () => {
        dispatch({
            type: 'SET_LOADING'
        })
    }

    // Clear users from state
    const handleClear = () => {
        dispatch({
            type: 'CLEAR_USERS',
        })
    }

    return (
        <GithubContext.Provider value={{
            users: state.users, 
            user: state.user, 
            isLoading: state.isLoading, 
            searchUsers, getUser, handleClear}}>
            {children}
        </GithubContext.Provider>
    )
}

export default GithubContext