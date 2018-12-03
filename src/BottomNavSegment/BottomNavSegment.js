import React, {Component} from 'react'
import "./BottomNavSegment.css"

class BottomNavSegment extends Component {
    constructor(props){
        super()
        this.state = {
            listLength: props.list.length,
            expanded: false
        }
    }
    expand(){
        this.setState({
            expanded: !this.state.expanded
        })
    }

    render(){

        return(
            <div className="BottomNavSegment-main" style={{height:this.state.expanded ? this.props.height : "16px"}}>
                <div className="BottomNavSegment-title" onClick={()=>this.expand()} ><p>{this.props.category}</p></div>
                <div>
                    <ul>
                        {this.props.list.map((item, i) => {
                            return (
                                <li key={i}>{item}</li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        )
    }
} export default BottomNavSegment