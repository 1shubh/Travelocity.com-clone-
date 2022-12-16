import Navbar from '../component/navbar';
import SearchBox from '../component/searchBox';
import Imagecard from '../component/ImageCard';
import LargeWithLogoCentered from "../component/Footer"


import React from 'react'

const Home = () => {
  return (
    <div>
        <Navbar/>
        <SearchBox/>
        <Imagecard/>
        <LargeWithLogoCentered/>
    </div>
  )
}

export default Home