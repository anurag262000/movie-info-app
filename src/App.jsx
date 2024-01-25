import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { fetchDataFromApi } from "./utils/api";
import { useSelector, useDispatch } from 'react-redux'
import { getApiConfiguration, getGenres } from '../store/homeSlice';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/home/Home';
import Details from './pages/details/details';
import SearchResult from './pages/searchResult/searchResult';
import Explore from './pages/explore/explore';
import PageNotFound from './pages/404/pageNotFound';


function App() {
  const dispatch = useDispatch()
  const url = useSelector((state) => state.home);
  console.log(url);

  useEffect(() => {
    featchApiConfig();
    genresCall();
  }, []);

  const featchApiConfig = () => {
    fetchDataFromApi("/configuration")
      .then((res) => {
        console.log(res);
        const url = {
          backdrop: res.images.base_url + "original",
          poster: res.images.base_url + "original",
          profile: res.images.base_url + "original",
        }

        dispatch(getApiConfiguration(url));

      });
  };


  const genresCall = async () => {
    let Promises = []
    let endpoints = ["tv", "movie"]
    let allGenres = {}

    endpoints.forEach((url) => {
      Promises.push(fetchDataFromApi(`/genre/${url}/list`))
    })

    const data = await Promise.all(Promises);

    data.map(({ genres }) => {
      return genres.map((item) => (allGenres[item.id] = item));
    });

    dispatch(getGenres(allGenres));
  };

  return (
    <BrowserRouter>
      <Header />

      <Routes>

        <Route path="/" element={<Home></Home>} />

        <Route path="/:mediaType/:id" element={<Details />} />

        <Route path="/search/:query" element={<SearchResult />} />

        <Route path="/explore/:mediaType" element={<Explore />} />

        <Route path="/*" element={<PageNotFound />} />

      </Routes>

      <Footer />

    </BrowserRouter>
  )

}

export default App
