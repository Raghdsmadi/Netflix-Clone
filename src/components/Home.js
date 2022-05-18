import { useState,useEffect} from "react";
import MovieList from "./MovieList";


export default function Home() {
  const [trending, setTrending] = useState([]);

  async function getTrending() {
    let url = process.env.REACT_APP_SERVER;
    console.log("1,url", url);
    let response = await fetch(`${url}/trending`);
     console.log("2,response", response);

    let trendingData = await response.json();
     console.log("3,trendingData", trendingData);
    setTrending(trendingData);
  // console.log("states",recipes);
  }

  useEffect(() => {
    getTrending();
  }, []);


  return (
    <>
      <h1>Home Page</h1>
      {
        (trending.length>0)&& <MovieList trending={trending} />
      }
    </>
  );
}