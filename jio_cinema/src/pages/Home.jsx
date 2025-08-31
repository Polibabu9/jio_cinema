import React, { useEffect, useState } from 'react'
import Header from '../components/header/Header'
import Tags from '../components/tags/Tags'
import Channels from '../components/channels/Channels'
import Featured from '../components/feature/Featured'
import Shows from '../components/shows/Shows'
import Carousell from '../components/carousel/Carousell'

export default function Home() {
  
  let [movies , setMovies] = useState([]);
  let [featuredMovies , setFeaturedMovies] = useState([]);
  let [dramaMovies , setDramaMovies] = useState([]);
  let [teluguMovies , setTeluguMovies] = useState([]);
  let [topMovies , setTopMovies] = useState([]);



  useEffect(async ()=>{

    try{
      let movieResponse = await fetch("https://jio-cinema-1.onrender.com/movies")
      let movieData = await movieResponse.json()
      setMovies(movieData)

      //filter for featured movies

      let featureMovies = movieData.filter((movie)=>{return movie.featured === true})
      setFeaturedMovies(featureMovies.slice(0,4));

      //filter for Drama movies

      let draMovies = movieData.filter((dram)=>{return dram.genre.includes("Drama")})
      setDramaMovies(draMovies.slice(0,6))
      
      //filter for telugu movies

      let langMovies = movieData.filter((lan)=>{return lan.language ==="Telugu"})
      setTeluguMovies(langMovies.slice(0,6))

      //filter for imdb movies
      let topMovie = movieData.filter((top)=>{return top.imdb >= 8.5})
      setTopMovies(topMovie.slice(0,6))

    }

    catch(err){
      console.log(err)
    }

  },[])

  return (
    <>
    <Header movies = {movies}/>
    <Tags/>
    <Carousell/>
    <Channels/>
    <Featured movies = {featuredMovies}/>
    <Shows title= "Drama Movies" movies = {dramaMovies}/>
    <Shows title= "Telugu Language Movies" movies ={teluguMovies} />
    <Shows title= "Top Rated Movies" movies ={topMovies}/>
    </>
  )
}