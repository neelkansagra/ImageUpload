import React from 'react'
import './Loading.css'

class Loading extends React.Component{

    render(){
        return(
        <div className="loading-box">
        <div className='loading-content'>
            <div className="text">
            Uploading...
            </div>
            <div className='loading-bar'><div className="loading-prog"></div><div className="loading-prog2"></div></div>
        </div>
        </div>
        )
    }
}

export default Loading