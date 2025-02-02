import React from "react";
import HeroSection from "./HeroSection";
import classes from "./Sections.module.css";
import NavBar from "../Bars/NavBar";
import TrendingMovies from "./TrendingMovies";
import TopRatedMovies from './TopRatedMovies';
import PopularMovies from './PopularMovies'
import PopularTv from './PopularTv';
import TopRatedTv from './TopRatedTv';

const Section = () => {
  return (
    <main className={classes.container_main}>
      <NavBar />
      <div className={classes.content_div}>
        <HeroSection />
        <PopularMovies/>
        <TrendingMovies/>
        <TopRatedMovies/>
        <PopularTv/>
        <TopRatedTv/>
      </div>
    </main>
  );
};

export default Section;
