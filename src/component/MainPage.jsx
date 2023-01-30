import React from 'react'
import Navbar from './Navbar'
import Home from './Home'
// import Link from './Link'
import { Route, Routes } from 'react-router-dom'


function MainPage() {
    return (
        <div className='main-container'>
            <div>
                <Navbar/>
                <Routes>
                    <Route path='home' exact element={<Home/>}/>
                    {/* <Route path='link' element={<Link/>}/> */}
                </Routes>
            </div>            
        </div>
    )
}

export default MainPage