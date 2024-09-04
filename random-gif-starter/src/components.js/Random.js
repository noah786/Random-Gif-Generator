import axios from "axios";
import React, { useEffect, useState } from "react";
import Spinner from "./spinner";

const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;
const Random = () => {
    const[gif, setGif] = useState("");
    const[loader, setLoader] = useState(false);

    async function fetchData(){
      setLoader(true)
      const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
      // axios is basically a promised based http client and a javascript library that
      // allow developers to make a http request from browser to server or from node.js to server
      // using axios we don't need to convert the api response into json format
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

  return <div className="w-1/2 mx-auto mt-[20px] py-4 
  rounded-lg border border-black flex flex-col items-center justify-between bg-green-400">
    <h1 className="font-bold text-2xl underline mb-2">A Random Gif</h1>
    {
      loader ? (<Spinner/>) : (<img src={gif} width={400} alt="random-gif"/>)
    }
    <div className="mt-3">
    <button 
    className="w-[500px] bg-slate-50 rounded-sm text-xl"
    onClick={clickHandler}>Generate</button>
    </div>
  </div>;
};
export default Random;
