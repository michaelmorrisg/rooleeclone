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
import familyBusiness from './Assets/family_business.jpg'
import GoldenBorder from './GoldenBorder/GoldenBorder'
import ChatBubble from './ChatBubble/ChatBubble'
import HandpickedOutfits from './HandpickedOutfits/HandpickedOutfits'
import SecondaryCategories from './SecondaryCategories/SecondaryCategories'
import UpArrowButton from './UpArrowButton/UpArrowButton'
import InstagramSection from './InstagramSection/InstagramSection'
import SignUpNow from './SignUpNow/SignUpNow'
import TalkToUs from './TalkToUs/TalkToUs'
import Footer from './Footer/Footer'
import BottomLine from './BottomLine/BottomLine'
import Dropdown from './Dropdown/Dropdown'

class App extends Component {
  constructor(){
    super()
    this.state = {
      kidsExpanded : false,
      clothingExpanded : false
    }
  }
  expandKids = ()=>{
    this.setState({
      kidsExpanded: true
    })
  }
  shrinkKids = ()=>{
    this.setState({
      kidsExpanded: false
    })
  }
  expandClothing = ()=>{
    this.setState({
      clothingExpanded: true
    })
  }
  shrinkClothing = ()=>{
    this.setState({
      clothingExpanded: false
    })
  }
  render() {
    return (
      <div className="App">
        <ChatBubble />
        <UpArrowButton />
        <TopMessage />
        <MainNav expandKids={this.expandKids} shrinkKids={this.shrinkKids} expandClothing={this.expandClothing}
        shrinkClothing={this.shrinkClothing}/>
        <Dropdown expand={this.expandKids} shrink={this.shrinkKids} id={this.state.kidsExpanded ? "kids-showing" : "kids-hidden"} listItems={["NEW KIDS", "BABY 0-24 MONTHS", "GIRLS", "BOYS", "BEDDING", "MOM ACCESSORIES", "PLAY"]} />
        <Dropdown expand={this.expandClothing} shrink={this.shrinkClothing} id={this.state.clothingExpanded ? "clothing-showing" : "clothing-hidden"}  listItems={["NEW ARRIVALS","TOPS","BOTTOMS","DRESSES","JUMPSUITS + ROMPERS", "OUTERWEAR","PLUS","SWIM","SALE","BACK IN STOCK"]}/>
        {/* <Dropdown />
        <Dropdown />
        <Dropdown />
        <Dropdown /> */}
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
        <SecondaryCategories />
        <GoldenBorder />
        <MainImage image={familyBusiness}/>
        <GoldenBorder />
        <SectionBreak lineOne="recently on" lineTwo="@ROOLEE"/>
        <InstagramSection />
        <GoldenBorder full={true}/>
        <SignUpNow />
        <GoldenBorder full={true}/>
        <TalkToUs/>
        <GoldenBorder full={true}/>
        <Footer />
        <BottomLine />
      </div>
    );
  }
}

export default App;
