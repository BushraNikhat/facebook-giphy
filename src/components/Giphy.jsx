import React, { useState} from "react";
import {ArrowBack} from "@material-ui/icons"
import axios from "axios";

const Giphy = ({ gify,closeGif,clickedGiphy }) => {

  const [text, setText] = useState("");
  const [results, setResults] = useState([]);



// for fetching gifs by name entered in input
const handleChange=async(e)=>{
    setText(e.target.value)
    try {
      
     
        const res = await axios.get(`https://api.giphy.com/v1/gifs/search?&api_key=qevXuSL6fLpYUcjKY0bIrm80jGiZdl3P&q=${text}`);
        setResults(res.data.data);

        
    } catch (error) {
        console.log(error.message);
    }

}


// setting gif to state
const giphyClick=(e)=>{
    clickedGiphy(e.target.src)
    closeGif(false)
    setText("")
}



  return (
    <>
      {gify && (
        <div className="giphy_container shadow p-2">
        <div onClick={()=>closeGif(false)}>
            <ArrowBack className="giphy_icon mb-2"/>
        </div>
          <input
          type="search"
            placeholder="Search GIF across apps shadow"
            className=" px-3 py-2 "
            onChange={handleChange}
            name="text"
            value={text}
          />
         <div className="gif_container">
              {results.map((gifs)=>{
                    return <div className="row" key={gifs.images.fixed_height.url} >
                        <div className="col-sm-10 col-12" >
                        <img src={gifs.images.fixed_height.url} alt="" onClick={giphyClick}/>
                        </div>
                    </div>
                    
              })}
            </div>
        </div>
      )}
    </>
  );
};

export default Giphy;

// onClick={setGifUrl(gifs.images.fixed_height.url)}
