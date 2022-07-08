import { createContext, useReducer } from "react";
import githubReducer from "./GithubReducer";

const GithubContext = createContext()

export function GithubProvider({children}) {

    const intialState = {
        users: [],
        isLoading: true
    }

    const [state, dispatch] = useReducer(githubReducer, intialState)

    const fetchUsers = async () => {
        const response = await fetch(`${process.env.REACT_APP_GITHUB_URL}/users`)
        const data = await response.json()
        
        dispatch({
            type: 'GET_USERS',
            payload: data
        })
    }

    return (
        <GithubContext.Provider value={{users: state.users, isLoading: state.isLoading, fetchUsers}}>
            {children}
        </GithubContext.Provider>
    )
}

export default GithubContext