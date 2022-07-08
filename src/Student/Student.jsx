import React from "react"
import Score from "../score"
const Student = (props) => {
  return (
    <>
      <div>
        <h2>{props.name}</h2>
        <p>{props.bio}</p>
        {/* {props.scores.map((score, idx) => 
          <Score key={idx} scores={props.scores} />
        )} */}
        <h4>{Score}</h4>
      </div>  
    </>
  )
}

export default Student