import React, { Component } from 'react';
import './reset.css'
import './App.css';
import TopMessage from './TopMessage/TopMessage'
import MainNav from './MainNav/MainNav'
import MainCarousel from './MainCarousel/MainCarousel';
import SectionBreak from './SectionBreak/SectionBreak'
import MainImage from './MainImage/MainImage'
import Categories from './Categories/Categories'
import watches from './Assets/watches.jpg'
import mom from './Assets/mom.jpg'
import GoldenBorder from './GoldenBorder/GoldenBorder'
import ChatBubble from './ChatBubble/ChatBubble'
import HandpickedOutfits from './HandpickedOutfits/HandpickedOutfits'

class App extends Component {
  render() {
    return (
      <div className="App">
        <ChatBubble />
        <TopMessage />
        <MainNav />
        <MainCarousel />
        <SectionBreak lineOne="we believe in" lineTwo="SUNSHINE & JOY IN EVERY DETAIL"/>
        <MainImage image={watches}/>
        <GoldenBorder />
        <SectionBreak lineOne="browse through" lineTwo="OUR FAVORITE CATEGORIES"/>
        <Categories />
        <GoldenBorder />
        <SectionBreak lineOne="just for you:" lineTwo="HANDPICKED OUTFITS"/>
        <HandpickedOutfits />
        <GoldenBorder />
        <SectionBreak lineOne="did you know we carry" lineTwo="TREASURES FOR FAMILY & HOME"/>
        <MainImage image={mom}/>
      </div>
    );
  }
}

export default App;
