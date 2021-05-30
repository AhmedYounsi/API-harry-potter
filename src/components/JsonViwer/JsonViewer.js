import React from 'react'
import JSONTree from "react-json-tree";
import "./scoped.JsonViewer.css"
function JsonViewer({Data}) {
    return (
        <div className="Result">
        <JSONTree
          
             labelRenderer={([key]) => <p style={{margin:0,fontSize:15}}>{key} : </p>}
            valueRenderer={(raw) => <em style={{margin:0,fontSize:15}}>{raw}</em>}  
             
          data={Data} />
        </div>
    )
}

export default JsonViewer
