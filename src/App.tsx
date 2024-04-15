import {ReactNode, useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
    return (
        <>
            <Router>
                <Header />
                <Routes>
                    <Route path='/' element />
                </Routes>
            </Router>
        </>
    )
}

export default App
