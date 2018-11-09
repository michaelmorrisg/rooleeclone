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
//Images//
import bottoms from './Assets/carousel-bottoms.jpg'
import dresses from './Assets/carousel-dresses.jpg'
import jumpsuits from './Assets/carousel-jumpsuits.jpg'
import outerwear from './Assets/carousel-outerwear.jpg'
import newArrivals from './Assets/carousel-newArrivals.jpg'
import swim from './Assets/carousel-swim.jpg'
import tops from './Assets/carousel-tops.jpg'

class App extends Component {
  constructor(){
    super()
    this.state = {
      kidsExpanded : false,
      clothingExpanded : false,
      shoesExpanded : false,
      momExpanded: false,
      homeExpanded: false,
      giftsExpanded: false
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
  expandShoes = ()=>{
    this.setState({
      shoesExpanded: true
    })
  }
  shrinkShoes = ()=>{
    this.setState({
      shoesExpanded: false
    })
  }
  expandMom = ()=>{
    this.setState({
      momExpanded: true
    })
  }
  shrinkMom = ()=>{
    this.setState({
      momExpanded: false
    })
  }
  expandHome = ()=>{
    this.setState({
      homeExpanded: true
    })
  }
  shrinkHome = ()=>{
    this.setState({
      homeExpanded: false
    })
  }
  expandGifts = ()=>{
    this.setState({
      giftsExpanded: true
    })
  }
  shrinkGifts = ()=>{
    this.setState({
      giftsExpanded: false
    })
  }
  render() {
    return (
      <div className="App">
        <ChatBubble />
        <UpArrowButton />
        <TopMessage />
        <MainNav 
        expandKids={this.expandKids} 
        shrinkKids={this.shrinkKids} 
        expandClothing={this.expandClothing}
        shrinkClothing={this.shrinkClothing}
        expandShoes={this.expandShoes}
        shrinkShoes={this.shrinkShoes}
        expandMom={this.expandMom}
        shrinkMom={this.shrinkMom}
        expandHome={this.expandHome}
        shrinkHome={this.shrinkHome}
        expandGifts={this.expandGifts}
        shrinkGifts={this.shrinkGifts}
        />
        <Dropdown 
        expand={this.expandKids} 
        shrink={this.shrinkKids} 
        id={this.state.kidsExpanded ? "kids-showing" : "kids-hidden"} 
        listItems={["NEW KIDS", "BABY 0-24 MONTHS", "GIRLS", "BOYS", "BEDDING", "MOM ACCESSORIES", "PLAY"]} 
        images={[{image:bottoms,text: "BOTTOMS"},{image:tops,text:"TOPS"},{image:dresses,text:"DRESSES"},{image:jumpsuits,text:"JUMPSUITS + ROMPERS"},{image:outerwear,text:"OUTERWEAR"}]}/> 
        <Dropdown 
        expand={this.expandClothing} 
        shrink={this.shrinkClothing} 
        id={this.state.clothingExpanded ? "clothing-showing" : "clothing-hidden"}  
        listItems={["NEW ARRIVALS","TOPS","BOTTOMS","DRESSES","JUMPSUITS + ROMPERS", "OUTERWEAR","PLUS","SWIM","SALE","BACK IN STOCK"]}
        images={[{image:newArrivals, text:"NEW ARRIVALS"},{image:tops,text:"TOPS"}, {image:bottoms,text: "BOTTOMS"},{image:dresses,text:"DRESSES"},{image:jumpsuits,text:"JUMPSUITS + ROMPERS"},{image:outerwear,text:"OUTERWEAR"},{image:swim, text:"SWIM"}]}/>        
        <Dropdown 
        expand={this.expandShoes}
        shrink={this.shrinkShoes}
        id={this.state.shoesExpanded ? "shoes-showing" : "shoes-hidden"}
        listItems={["NEW ARRIVALS", "BANDANAS + HAIR", "SHOES","HATS","JEWELRY","PURSES + BAGS","WATCHES","OTHER"]}
        images={[{image:bottoms,text: "BOTTOMS"},{image:tops,text:"TOPS"},{image:dresses,text:"DRESSES"},{image:jumpsuits,text:"JUMPSUITS + ROMPERS"},{image:outerwear,text:"OUTERWEAR"}]}/> 
        <Dropdown 
        expand={this.expandMom}
        shrink={this.shrinkMom}
        id={this.state.momExpanded ? "mom-showing" : "mom-hidden"}
        listItems={["ROOLEE MOM", "NURSING FRIENDLY", "ACCESSORIES"]}
        images={[{image:bottoms,text: "BOTTOMS"},{image:tops,text:"TOPS"},{image:dresses,text:"DRESSES"},{image:jumpsuits,text:"JUMPSUITS + ROMPERS"},{image:outerwear,text:"OUTERWEAR"}]}/>
        <Dropdown 
        expand={this.expandHome}
        shrink={this.shrinkHome}
        id={this.state.homeExpanded ? "home-showing" : "home-hidden"}
        listItems={["NEW ARRIVALS","HOME DECOR", "PAPER + PARTY"]}
        images={[{image:bottoms,text: "BOTTOMS"},{image:tops,text:"TOPS"},{image:dresses,text:"DRESSES"},{image:jumpsuits,text:"JUMPSUITS + ROMPERS"},{image:outerwear,text:"OUTERWEAR"}]}/>        
        <Dropdown 
        expand={this.expandGifts}
        shrink={this.shrinkGifts}
        id={this.state.giftsExpanded ? "gifts-showing" : "gifts-hidden"}
        listItems={["GIFT CARDS", "WOMENS GIFTS", "MENS GIFTS", "KIDS GIFTS"]}
        images={[{image:bottoms,text: "BOTTOMS"},{image:tops,text:"TOPS"},{image:dresses,text:"DRESSES"},{image:jumpsuits,text:"JUMPSUITS + ROMPERS"},{image:outerwear,text:"OUTERWEAR"}]}/>
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
