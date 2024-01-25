import React from 'react';
import "./style.scss";
import HeroBanner from './heroBanner/Herobanner';
import Trending from './trending/Trending';
import Populer from './popular/populer';
import TopRated from './topRated/TopRated';



const Home = () => {
    return (
        <div className="homepage">
            <HeroBanner />
            <Trending />
            <Populer />
            <TopRated />
        </div>
    )
}

export default Home