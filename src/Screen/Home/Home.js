// eslint-disable-next-line
import axios from "axios";
// eslint-disable-next-line
import React, { useState, useEffect } from "react";
import ErrorMessage from "../../components/ErrorMessage";
import HeaderApi from "../../components/HeaderApi/HeaderApi";
import Inputroute from "../../components/InputRoute/Inputroute";

// import { Route } from "react-router";
import JsonViewer from "../../components/JsonViwer/JsonViewer";
import HintsLinks from "./HintsLinks";
import "./Home.css";



function Home(props) {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  // eslint-disable-next-line
  const [InputVal, setInputVal] = useState("");
  // eslint-disable-next-line
  const [Data, setData] = useState([]);
  const [ResultLink, setResultLink] = useState(null);
  const [Error, setError] = useState(null);
  const [Active, setActive] = useState("Characters");
  // eslint-disable-next-line
  const [URL, setURL] = useState("http://harrypotter-api.site/api");
  const [Loading, setLoading] = useState(false) 

  useEffect(() => {
    setInputVal("");
    setResultLink(null);
    setData([]);
    setError(null);
  }, [Active]);

  const Get = () => {
    if (InputVal.length === 0) return;
    setLoading(true)
    setData([])
    axios
      .get(`${URL}/${InputVal}`)
      .then((res) => {
        setLoading(false)
        console.log(res.data)
        setError(null);

        setData(res.data);
        setResultLink(`${URL}/${InputVal}`);
      })
      .catch(function (error) {
        setError("Resource not found");
        setLoading(false)
        setData([]);
      });
  };

  const Get_Hint = async (hint) => {
    setLoading(true)
    setData([])
    axios
      .get(`${URL}/${hint}`)
      .then((res) => {
        setLoading(false)
        setError(null);
        setData(res.data);
        setInputVal(hint);
        setResultLink(`${URL}/${hint}`);
      })
      .catch(function (error) {
        setLoading(false)
        setError("Resource not found");
        setData([]);
      });
  };

  return (
    <div className="Home">
      <div className="header-home">
        {/* <img className="img-header"  src={'copie163.jpg'} alt="harry potter api send req" /> */}
        <h1 className="Home-title">Harry Potter API</h1>
        <h2 className="title2">The RESTful Harry Potter API</h2>
        <div className="transparent"></div>
      </div>
      <div className="try-it">
        <img
          className="thunder"
          src={"images/thunder.png"}
          alt="get api harry potter wand"
        />
        <img
          className="star"
          src={"images/star.gif"}
          alt="harry potter api wallpaper"
        />
        <h3 style={{ fontSize: 40 }} className="title2">
          TRY THE M
          <img src={"images/A.png"} alt="harry potter api magic" />
          GIC !{/* <img   src={"wand.png"} alt='harry potter api magic' /> */}
        </h3>
          


          
        <HeaderApi send_API_Home={(api) => setActive(api)} />
        

     

        <Inputroute
          InputVal={InputVal}
          submit={() => Get()}
          send_input_val={(text) => setInputVal(text)}
        />

        <HintsLinks Active={Active} Get_Hint={(hint) => Get_Hint(hint)} />

        {Data.length > 0 && (
          <>
          <p className="hint">
            Direct link
           
          </p>
           <span className="direct_link" onClick={() => window.open(ResultLink, "_blank")}>
           {ResultLink}
         </span>
         </>
        )}

        <ErrorMessage Error={Error} />
           

        <div style={{ marginTop: 30, width: "100%" }}>
          {
           Data.length > 0 ?  <JsonViewer Data={Data} /> : 
           <>
          
           <div className="resource">
           <p className={!Loading ? "resource-display" : "loading"}>
             <img className="resource-icon" src={'/images/resource.png'} alt='harry potter api resource' />
               Resources
             </p>
             <p  className={Loading ? "resource-display" : "loading"}>
             <img className="loading-icon" src={'/images/loading.png'} alt='harry potter api loading' />
              Loading
             </p> 
         {/* {
            Loading &&
             <p>
             <img src={'/images/loading.png'} alt='harry potter api loading' />
              Loading
             </p>
            
           } */}
             
           </div>
           </>
          }
         
        </div>
      </div>
    </div>
  );
}

export default Home;
