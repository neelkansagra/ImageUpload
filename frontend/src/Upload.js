import React, {useEffect} from 'react'
import './Upload.css'
import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:9000';

function Upload(){

    useEffect(() => {
        let r = document.querySelector(".image-container")
        let t = document.querySelector("#textb")
        let g = document.createElement("img")
        let st = ''
        axios.get('/').then((respon) => {
            st = respon.data.image
            st = st.slice(1,st.length-1)
            console.log(st)
            g.src= st
            r.innerHTML =''
            r.appendChild(g)
            r.style.border = "none"
            t.value = axios.defaults.baseURL + "/sckbchvuysdfudyfwdtadtwfd"
        }).catch((err) => console.log(err))
        
        
    }, [])

    function handle(e){
        let val = document.querySelector("#textb")
        navigator.clipboard.writeText(val.value)
        alert("Copied !")

    }


    return (
        <div className="box">
           <div className='content'>
            <div className='done'>
            <svg viewBox="0 0 24 24" ><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"></path></svg>
            </div>
            <div className='succesful'>Uploaded Successfully!</div>
            <div className='image-container'>

            </div>
            <div className='link'>
                <form className='inside'>
                    <input id = "textb" type="text" />
                    <input id = "but" type="button" onClick = {(e) => handle(e)} value="Copy link"/>
                </form>
            </div>
           </div>
        </div>
    )
}
export default Upload