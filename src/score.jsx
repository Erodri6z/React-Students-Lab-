import React from "react";

const Score = (props) => {
  return (
    <>
    <div>
      <p>Score: {props.scores}</p>
      <p>Date: {props.dates}</p>
    </div>
    </>
  )
}

export default Score