import React from 'react'
import "./Categories.css"

export default function Categories(){
    return(
        <div className="Categories-main">
            <div className="Categories-row1">
                <div className="Categories-row1-left"><button>NEW ARRIVALS</button></div>
                <div className="Categories-row1-right"><button>DRESSES</button></div>
            </div>
            <div className="Categories-row2">
                <div className="Categories-row2-left"><button>TOPS</button></div>
                <div className="Categories-row2-right"><button>SHOES</button></div>
            </div>

        </div>
    )
}