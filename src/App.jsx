import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import axios from "axios";

import Navbar from "./components/0.Navbar/Navbar"
import Home from "./components/1.Home/Home"
import Movies from "./components/2.Movies/Movies"
import Tv from "./components/3.Tv/Tv"
import NotFound from "./components/4.NotFound/NotFound"
import Detail_NS from "./components/5.Detail/Detail_NS"
import Detail_CM from "./components/5.Detail/Detail_CM"
import Detail_TV from "./components/5.Detail/Detail_TV"

import Footer from "./components/6.Footer/Footer"

function App() {
  const [dataNowShow, setDataNowShow] = useState([]);
  const [dataComing, setDataComing] = useState([]);
  const [dataTv, setDataTv] = useState([])

  useEffect(() => {
    const options = {
      method: 'GET',
      url: 'https://api.themoviedb.org/3/discover/movie',
      params: {
        include_adult: 'true',
        include_video: 'true',
        language: 'en-US',
        page: '1',
        sort_by: 'now_playing',
        year: '2024'
      },
      // sort_by: now_playing  popularity.desc upcoming
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5ZDYyYjBjZjkyZGFmZjg5MDYxMjM2YWM2M2ViNjBhNSIsIm5iZiI6MTcxOTkwNDQwNy4xODQxNzQsInN1YiI6IjY2MTRkNDEzZTEwZjQ2MDE2MzM5YWRjMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.WytA9zxkP5aGtKsgAOZ0n3tDBFV3RF9c-EW18Qc-MJE' // Replace with your actual API key
      }
    };

    const fetchDataNowShow = async () => {
      try {
        const response = await axios.request(options);
        setDataNowShow(response.data.results.slice(0, 20)); // Limit to 20 titles
      } catch (error) {
        console.error(error);
      }
    };

    fetchDataNowShow();
  }, []);
  useEffect(() => {
    const options = {
      method: 'GET',
      url: 'https://api.themoviedb.org/3/discover/movie',
      params: {
        include_adult: 'true',
        include_video: 'true',
        language: 'en-US',
        page: '1',
        sort_by: 'upcoming',
        year: '2025',

      },

      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5ZDYyYjBjZjkyZGFmZjg5MDYxMjM2YWM2M2ViNjBhNSIsIm5iZiI6MTcxOTkwNDQwNy4xODQxNzQsInN1YiI6IjY2MTRkNDEzZTEwZjQ2MDE2MzM5YWRjMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.WytA9zxkP5aGtKsgAOZ0n3tDBFV3RF9c-EW18Qc-MJE' // Replace with your actual API key
      }
    };

    const fetchDataComing = async () => {
      try {
        const response = await axios.request(options);
        setDataComing(response.data.results.slice(0, 20)); // Limit to 20 titles
      } catch (error) {
        console.error(error);
      }
    };

    fetchDataComing();
  }, []);
  useEffect(() => {
    const options = {
      method: 'GET',
      url: 'https://api.themoviedb.org/3/discover/tv',
      params: {
        include_adult: 'true',
        include_video: 'true',
        language: 'en-US',
        page: '1',
        sort_by: 'popularity',
        year: '2024'
      },
      // sort_by: now_playing  popularity.desc upcoming
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5ZDYyYjBjZjkyZGFmZjg5MDYxMjM2YWM2M2ViNjBhNSIsIm5iZiI6MTcxOTkwNDQwNy4xODQxNzQsInN1YiI6IjY2MTRkNDEzZTEwZjQ2MDE2MzM5YWRjMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.WytA9zxkP5aGtKsgAOZ0n3tDBFV3RF9c-EW18Qc-MJE' // Replace with your actual API key
      }
    };

    const fetchDataTv = async () => {
      try {
        const response = await axios.request(options);
        setDataTv(response.data.results.slice(0, 20)); // Limit to 20 titles
      } catch (error) {
        console.error(error);
      }
    };

    fetchDataTv();
  }, []);

  // console.log(dataComing);
  
  return (
    <BrowserRouter>
     
      <Routes>
        <Route path="/" element={<Home data={dataNowShow} data_CM={dataComing}/>} ></Route>
        <Route path="/movies" element={<Movies data_NS={dataNowShow} data_CM={dataComing} />} ></Route>
        <Route path="/tv" element={<Tv data_TV={dataTv} />} ></Route>
        <Route path="*" element={<NotFound />} ></Route>
        {/* Navigate */}
        <Route path="/home" element={<Navigate to="/" />}></Route>

        <Route path="/movie_NS/:id" element={<Detail_NS data_NS={dataNowShow} />}></Route>
        <Route path="/movie_CM/:id" element={<Detail_CM data_CM={dataComing} />}></Route>
        <Route path="/Tv_series/:id" element={<Detail_TV data_TV={dataTv} />}></Route>

      </Routes>
       {/* <Footer /> */}
    </BrowserRouter>

    // <div>
    //   <Navbar />
    // </div>
  )
}

export default App