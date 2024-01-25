import React, { useState } from 'react';

import ContentWrapper from '../../../components/contentWrapper/ContentWrapper';
import SwitchTabs from '../../../components/switchTabs/SwitchTabs';
import useFetch from '../../../hooks/UseFetch';
import Carousel from '../../../components/carousel/Carousel';



const Trending = () => {

    const [endpoint, setEndpoint] = useState("day");

    const { data, loading } = useFetch(`/trending/all/${endpoint}`);

    const onTabChange = (tab) => {
        setEndpoint(tab === "Day" ? "day" : "week");
    };

    return (
        <div className='carasoulSection' >
            <ContentWrapper  >
                <div className='extra'>
                    <span className="carouselTitle">Trending</span>
                    <SwitchTabs data={["Day", "week"]} onTabChange={onTabChange} />
                </div>

            </ContentWrapper>

            <Carousel data={data?.results} loading={loading} />
        </div>
    )
}

export default Trending