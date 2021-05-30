// eslint-disable-next-line 
import React , {useState,useEffect} from "react";
import "./Header_api.css";

 // eslint-disable-next-line 
import Carousel, { consts } from 'react-elastic-carousel';

function HeaderApi(props) {

const [ActiveApi, setActiveApi] = useState("Characters")

const Set_APi = (api) =>{
     setActiveApi(api)
     props.send_API_Home(api)
}

 
 
// const  myArrow = ({ type, onClick, isEdge }) => {
//   const pointer = type === consts.PREV ? '👈' : '👉'
//   return (
//     <Button onClick={onClick} disabled={isEdge}>
//       {pointer}
//     </Button>
//   )
// }


 

const breakPoints = [
  { width: 1, itemsToShow: 1 ,itemsToScroll:1 },
  { width: 300, itemsToShow: 2, itemsToScroll: 1, pagination: false },
  { width: 600, itemsToShow: 3 ,itemsToScroll:1 },
  { width: 750, itemsToShow: 4, itemsToScroll: 1 },
  { width: 1450, itemsToShow: 5 ,itemsToScroll:1 },
  { width: 1750, itemsToShow: 6 ,itemsToScroll:1 },
]


 

  return (
    <div className="HeaderApi">
       
  
      <Carousel    breakPoints={breakPoints}>
      <div onClick={() => Set_APi("Characters")}  
        className={`circle house ${ActiveApi === "Characters" ? "active_api" : ""}`}>
            <img className="api-img" src={'images/character_api.png'} alt="harry potter api characters" />
            <p>Characters</p>
        </div>
        <div onClick={() => Set_APi("Houses")}
        className={`circle house ${ActiveApi === "Houses" ? "active_api" : ""}`}>
       <img className="api-img" src={'images/house_api.png'} alt="harry potter api characters" />
            <p>Houses</p>
        </div>
        <div onClick={() => Set_APi("Spells")}
        className={`circle house ${ActiveApi === "Spells" ? "active_api" : ""}`}>
        <img className="api-img" src={'images/spell_api.png'} alt="harry potter api characters" />
            <p>Spells</p>
        </div>
        <div onClick={() => Set_APi("Potions")}
        className={`circle house ${ActiveApi === "Potions" ? "active_api" : ""}`}>
       <img className="api-img" src={'images/potion_api.png'} alt="harry potter api characters" />
            <p>Potions</p>
        </div>
        <div onClick={() => Set_APi("Horcruxes")}
        className={`circle house ${ActiveApi === "Horcruxes" ? "active_api" : ""}`}>
       <img className="api-img" src={'images/horcruxe.png'} alt="harry potter api characters" />
            <p>Horcruxes</p>
        </div>
        <div onClick={() => Set_APi("Deathly")}
        className={`circle house ${ActiveApi === "Deathly" ? "active_api" : ""}`}>
       <img className="api-img" src={'images/deathly hallows.png'} alt="harry potter api characters" />
            <p className="deathly">Deathly hallows</p>
        </div>
         
        {/* </Carousel> */}
        </Carousel>  
    </div>
    
  );
}

export default HeaderApi;
