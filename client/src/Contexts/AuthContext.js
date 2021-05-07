import React, { useContext, useState, useEffect } from 'react'
import Axios from 'axios'

const AuthContext = React.createContext()

export function useAuth() {
    return useContext(AuthContext)
}

export function AuthProvider({ children }) {
    const [currentUser, setCurrentUser] = useState()
    const [error, setError] = useState("")

    function signup(email, password) {
        Axios.post("http://localhost:3001/signup", {
                email: email,
                password: password,
            }).then((response) => {
                console.log(response);
        });
        setCurrentUser(email)
    }

    function login(email, password) {
        Axios.post("http://localhost:3001/login", {
            email: email,
            password: password,
        }).then((response) => {
            if(response.data.message) {
                setError(response.data.message)
            }
        });
        setCurrentUser(email)
    }

    useEffect(() => {
    }, [])

    const value = {
        currentUser,
        login,
        signup,
    }

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}