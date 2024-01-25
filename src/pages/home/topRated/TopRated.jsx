import React, { useState } from 'react';

import ContentWrapper from '../../../components/contentWrapper/ContentWrapper';
import SwitchTabs from '../../../components/switchTabs/SwitchTabs';
import useFetch from '../../../hooks/UseFetch';
import Carousel from '../../../components/carousel/Carousel';



const TopRated = () => {

    const [endpoint, setEndpoint] = useState("tv");

    const { data, loading } = useFetch(`/${endpoint}/top_rated`);

    const onTabChange = (tab) => {
        setEndpoint(tab === "TV Shows" ? "tv" : "movie");
    };

    return (
        <div className='carasoulSection' >
            <ContentWrapper  >
                <div className='extra'>
                    <span className="carouselTitle">Top Rated</span>
                    <SwitchTabs data={["TV Shows", "Movies"]} onTabChange={onTabChange} />
                </div>

            </ContentWrapper>

            <Carousel data={data?.results} loading={loading} endpoint={endpoint} />
        </div>
    )
}

export default TopRated