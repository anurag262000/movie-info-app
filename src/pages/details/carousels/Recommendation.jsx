import React from "react";
import Carousel from "../../../components/carousel/Carousel";
import useFetch from "../../../hooks/UseFetch";

const Recommendation = ({ mediaType, id }) => {
    const { data, loading, error } = useFetch(`/${mediaType}/${id}/recommendations`);

    // Check if data is null or empty
    const hasRecommendations = data && data.results && data.results.length > 0;

    return (
        <div>
            {loading && <p>Loading...</p>}
            {error && (
                <p style={{ color: "white", textAlign: "center", fontSize: "20px", }}>
                    Error: {error}
                </p>
            )}
            {!loading && !error && !hasRecommendations && (
                <p style={{ color: "white", textAlign: "center", fontSize: "20px" }}>
                    No recommendations available.
                </p>
            )}
            {!loading && !error && hasRecommendations && (
                <Carousel title="Recommendations" data={data.results} loading={loading} endpoint={mediaType} />
            )}
        </div>
    );
};

export default Recommendation;
