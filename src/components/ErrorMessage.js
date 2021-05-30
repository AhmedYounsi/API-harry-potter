import React from 'react'

function ErrorMessage({Error}) {
    return (
        <div>
            {Error && (
          <div className="error">
            <img src={"images/error.png"} alt="harry potter api error request" />
            <p> {Error} </p>
          </div>
        )}     
        </div>
    )
}

export default ErrorMessage
