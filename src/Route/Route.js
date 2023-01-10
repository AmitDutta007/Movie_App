import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from "../Container/Home/Home"
import Movies from "../Container/Movies/Movies"
import Search from "../Container/Search/Search"
import TvSeries from "../Container/TvSeries/TvSeries"
import Header from "../Components/Header/Header"
import Footer from "../Components/Footer/Footer"
import Details from '../Container/Details/Details'

const RouteComponent = () => {
    return (
        <>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path='/' exact element={<Home />} />
                    <Route path='/movies' element={<Movies />} />
                    <Route path='/search' element={<Search />} />
                    <Route path='/series' element={<TvSeries />} />
                    <Route path='/details/:movieid/:mediatype' element={<Details />} />
                </Routes>
                <Footer/>
            </BrowserRouter>
        </>
    )
}

export default RouteComponent