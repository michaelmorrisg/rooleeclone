import React, { Component } from 'react';
import './reset.css'
import './App.css';
import TopMessage from './TopMessage/TopMessage'
import MainNav from './MainNav/MainNav'
import MainCarousel from './MainCarousel/MainCarousel';
import SectionBreak from './SectionBreak/SectionBreak'
import MainImage from './MainImage/MainImage'
import Categories from './Categories/Categories'

class App extends Component {
  render() {
    return (
      <div className="App">
        <TopMessage />
        <MainNav />
        <MainCarousel />
        <SectionBreak lineOne="we believe in" lineTwo="SUNSHINE & JOY IN EVERY DETAIL"/>
        <MainImage/>
        <SectionBreak lineOne="browse through" lineTwo="OUR FAVORITE CATEGORIES"/>
        <Categories />
        <SectionBreak lineOne="just for you:" lineTwo="HANDPICKED OUTFITS"/>
      </div>
    );
  }
}

export default App;
