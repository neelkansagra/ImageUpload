import React,{useState} from 'react'
import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:9000';




function ImageUpload({data, onDataChange}){


  function d(file){

    let fileReader = new FileReader()
    fileReader.readAsDataURL(file)

    fileReader.addEventListener('loadstart',()=>{
        onDataChange(1)
    })
    
    fileReader.addEventListener('loadend',()=>{
      console.log(fileReader.result)
      axios.post('/',{
          Headers:{
            'Access-Control-Allow-Origin' : '*'
          },
          "Image":JSON.stringify(fileReader.result)
      }).then((response) =>{
        console.log(response)
        onDataChange(2)
      }).catch((err) => console.log(err))
    })
    console.log(fileReader)
  }

  function dargfunc(e){
    let file = e.dataTransfer.files[0]
    console.log(file)
    d(file)
    e.preventDefault();
    }
  function dragover(e){
    e.preventDefault();

  }
  function changeevent(e){
    
    let t = document.querySelector("#fileInput").files[0]
    console.dir(t)
    d(t)

    }

  function on(e){
      document.querySelector("#fileInput").click()
  }

    return(
    <div className="box">
        <div className='content'>
      <div className='heading'>
        Upload your image
      </div>
      <div className='descri'>
      File should be Jpeg, Png...
      </div>
      <div id="drop-area" onDrop = {(e) =>dargfunc(e)} onDragOver={(e) => dragover(e)} className='image-box'>
      <input id="fileInput2" type="file" style={{display: "none"}}/>
        <img src="./Capture.JPG" alt="image2" width="114" height="88"></img>
        <div className='image-text'>Drag &#38; Drop your image here</div>
      </div>
      <div className='or'>
        Or
      </div>
      <div className='button'>
        <input id="fileInput" type="file" onChange={(e) => changeevent(e)}style={{display: "none"}}/>
        <button onClick={(e) => on(e)}>Choose a File</button>
      </div>
    </div>
  </div>
)
}
export default ImageUpload