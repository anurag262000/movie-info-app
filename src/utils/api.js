import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";
const TMDB_TOKEN = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2MDFjZDFhMTBhZDc0MTRhZGU5MDk1YTJhOWMyYTIxYiIsInN1YiI6IjY1YWExNGI1YzQzM2VhMDBjODc0NzlmMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.MDXfDcgwpC04VGPGD-UpxJESf1F3T-UFQKXmJZ_bRuk"

const headers = {
    Authorization: "bearer " + TMDB_TOKEN,
};

export const fetchDataFromApi = async (url, params) => {
    try {
        const { data } = await axios.get(BASE_URL + url, {
            headers,
            params,
        });
        return data;
    } catch (err) {
        console.log(err);
        return err;
    }
};