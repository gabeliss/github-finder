import { createContext, useReducer } from "react";
import githubReducer from "./GithubReducer";

const GithubContext = createContext()

export function GithubProvider({children}) {

    const GITHUB_URL = process.env.REACT_APP_GITHUB_URL

    const intialState = {
        users: [],
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
        console.log(response)
        const {items} = await response.json()
        // this is same thing as above line -> const items = (await response.json()).items
        
        dispatch({
            type: 'GET_USERS',
            payload: items,
        })
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
        <GithubContext.Provider value={{users: state.users, isLoading: state.isLoading, searchUsers, handleClear}}>
            {children}
        </GithubContext.Provider>
    )
}

export default GithubContext