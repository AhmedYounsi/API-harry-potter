import React, { useEffect, useState } from "react";

function CodeApiExemple() {

  const [Coppied, setCoppied] = useState(false)
  var timeout = null
  const text = `  //Import axios
  const axios = require('axios');
  
  //Make a request for a Spell with a given name
  axios.get('URL/Spells/Accio')
  .then((response) => {
  //you get all data of the spell Accio
  console.log(response)
  })
  .catch(function (error) {
  //catch if error
  console.log(error);
  })`

   const copy = () =>{
     
     clearTimeout(timeout)
    setCoppied(true)
    navigator.clipboard.writeText(text)
   }
   
   useEffect(() => {
     // eslint-disable-next-line
    timeout =  setTimeout(() => {
        setCoppied(false)
     }, 2000);
   }, [Coppied])

  return (
    <div className="code">
     
    
       <button onClick={() => copy()}  className="copy">
       {
       !Coppied ?
       <img src={'images/copy.png'} alt="" />
     :  <p style={{color:'grey'}}>Copied</p>
      } 
            </button>
           

     

      <p className="comment">{"//"}Import axios</p>
      <strong style={{ color: "#ff6666" }}>const</strong> axios ={" "}
      <strong className="get">require</strong>('axios');<br/>
      <strong style={{ color: "#ff6666" }}>const</strong> URL ={" "}
      <strong className="get">"https://api-hp.herokuapp.com"</strong> 
      <p className="comment" style={{ marginTop: 20 }}>
        {"//"}Make a request for a Spell with a given name
      </p>
      axios.<strong className="get">get</strong>(
      <span className="url">'URL/api/Spells/Accio'</span>) <br />
      .then((response) =&gt; {"{"} <br />
      <p className="comment">{"//"}you get all data of the spell Accio</p>
      console.<strong className="get">log</strong>(response)
      <br />
      {"}"})
      <br />
      .catch(function (error)  {"{"} <br />
      <p className="comment">{"//"}catch if error</p>
    console.log(error);
    <br />
      {"}"})
    </div>
  );
}

export default CodeApiExemple;
