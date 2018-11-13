import React, {Component} from 'react'
import InstagramPost from '../InstagramPost/InstagramPost'
import axios from 'axios'
import './InstagramSection.css'
import insta1 from '../Assets/Insta1.jpg'
import insta2 from '../Assets/Insta2.jpg'
import insta3 from '../Assets/Insta3.jpg'
import insta4 from '../Assets/Insta4.jpg'
import insta5 from '../Assets/Insta5.jpg'
import { ENGINE_METHOD_DIGESTS } from 'constants';

class InstagramSection extends Component{
    constructor(){
        super()
        this.state = {
            instagramPhotos : [insta1,insta2,insta3,insta4,insta5]
        }
    }

    componentDidMount(){
        axios.get('http://142.93.80.53:3045/api/insta').then(res => {
            console.log(res, 'me')
            this.setState({
                instagramPhotos : res.data
            })
        })
    }

    render(){ 
        return (
            <div className="InstagramSection-main">
                <InstagramPost image={this.state.instagramPhotos[8]} />
                <InstagramPost image={this.state.instagramPhotos[9]} />
                <InstagramPost image={this.state.instagramPhotos[10]} />
                <InstagramPost image={this.state.instagramPhotos[11]} />
                <InstagramPost image={this.state.instagramPhotos[12]} />
            </div>
        )
    }
} export default InstagramSection