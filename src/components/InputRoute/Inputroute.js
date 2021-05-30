import React  from 'react'
import './Inputroute.css'
function Inputroute(props) {
    return (
        <div className="Input-box-home">
       <div className="route">
       <p style={{ fontFamily: "BluuNext" }}>api-hp.herokuapp.com/api/</p>
        <input
          value={props.InputVal}
          className="Input-home"
          onChange={(text) => props.send_input_val(text.target.value)}
          placeholder="Exemple1/Exemple2"
        />

       </div>
        <div onClick={() =>  props.submit()} className="button">
          Send
        </div>
      </div>

    )
}

export default Inputroute
