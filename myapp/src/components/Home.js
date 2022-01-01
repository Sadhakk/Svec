import React from 'react'
import { BrowserRouter, Route, link, Link } from 'react-router-dom'


export default function Home() {
    return (
        <div>
            <BrowserRouter>
            <Routes>
                <Route path="/" element={<main/>}></Route>
            </Routes>


            </BrowserRouter>
        </div>
    )
}




function Main(){


    return(
        <>
        
        <h1>:: Homepage  ::</h1>
        
        </>
    )
}