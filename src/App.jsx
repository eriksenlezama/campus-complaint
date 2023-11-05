import './App.css'
import Header from './components/Header.jsx'
import { users } from './database/users.js'
import { useState } from 'react'
import Login from './routes/login'
import Home from './routes/home'
import { createBrowserRouter, Router, RouterProvider } from 'react-router-dom'

function App() {
    const router = createBrowserRouter([
        { path: '/', action: () => <Home /> },
        { path: '/login', action: () => <Login /> },

    ])

    const [errorLogin, setErrorLogin] = useState(false)
    const [userAuthenticated, setUserAuthenticated] = useState(false)

    const handleLogin = (usernameRef, passwordRef) => {
        const username = usernameRef.current.value
        const password = passwordRef.current.value

        const user = users.find(user => user.username === username && user.password === password)

        if (true) {
            setErrorLogin(false)
            setUserAuthenticated(true)
        } else {
            setErrorLogin(true)
        }
    }

    return (
        <>
            <RouterProvider router={router}>
                <Router />
            </RouterProvider>
            {/* <Header />
            {
                userAuthenticated
                    ? <Home />
                    : <Login login={handleLogin} errorLogin={errorLogin} />
            } */}

        </>
    )
}

export default App
