import axios from "axios";
import React, { useEffect, useState } from "react";
import Spinner from "./spinner";

const API_KEY = 'kC0kZcGTTNZITKMQPLaxGwHeGpwYMn4S';
const Random = () => {
    const[gif, setGif] = useState("");
    const[loader, setLoader] = useState(false);
    const[tag, setTag] = useState(" ");

    async function fetchData(){
      setLoader(true)
      const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;
     const {data} = await axios.get(url);
     const imageSource = data.data.images.downsized_large.url;
     setGif(imageSource);
     setLoader(false)
    }

    useEffect(() => {
      fetchData();
    }, [])

    function clickHandler(){
      fetchData();
    }

  return <div className="w-1/2 mb-4 mx-auto mt-[20px] py-4 
  rounded-lg border border-black flex flex-col items-center justify-between bg-green-400">
    <h1 className="font-bold text-2xl underline mb-2">A Random Gif</h1>
    {
      loader ? (<Spinner/>) : (<img src={gif} width={400} alt="random-gif"/>)
    }
    <input className="mt-3 text-center rounded-sm" type="text" name="text-gif" onChange={(event) => setTag(event.target.value)}></input>
    <div className="mt-3">
    <button 
    className="w-[500px] bg-slate-50 rounded-sm text-xl"
    onClick={clickHandler}>Generate</button>
    </div>
  </div>;
};
export default Random;
