// eslint-disable-next-line
import axios from "axios";
// eslint-disable-next-line
import React, { useState, useEffect } from "react";
import CodeApiExemple from "../../components/CodeApiExemple";
// import { Route } from "react-router";
// import JsonViewer from "../../components/JsonViwer/JsonViewer";
import "./scoped.About.css";

function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="about">
      <div className="how">
        <img src={"images/how.png"} alt="harry potter api how to use" />
        <p>How To Use</p>
      </div>
      <img className="star_gif" alt="star" src={"images/star.gif"} />
      <div className="api">
        <h3 className="about-title">What is an API ?</h3>
        <p className="about-text">
          An API (Application Programming Interface) is a contract that allow
          developers to interact with an application through a set of
          interfaces. In this case, the application is a database of thousands
          of Harry Potter related objects, and the interfaces are URL links.
        </p>
      </div>

      
      <div className="exemple api" style={{marginTop:10}}>
        <h3 className="about-title">What is this ?</h3>

        <p className="about-text">
          This web app provides a RESTful API interface to highly detailed
          objects built from thousands of lines of data related to
          <span className="harry_span">Harry potter</span>
        </p>

        <p className="about-text" style={{ marginTop: 10 }}>
          using <button className="get_span">GET</button> command you are able
          to fetch :
        </p>
        <ul>
          <li>/Characters</li>
         
          <li>/Houses</li>
          <li>/Spells</li>
          <li>/Potions</li>
          {/* <li>/</li> */}
          <li>/Horcruxes</li>
        </ul>


     
        <div className="exemple">
          
        <h3 className="about-title">
       
          Exemple :</h3>
        <p className="about-text" style={{ marginBottom: 20 }}>
        consume this API with <a style={{marginLeft:5}} target="true" href="https://github.com/axios/axios">axios</a>
        </p>
        <CodeApiExemple />

        </div>
      </div>
    </div>
  );
}

export default About;
