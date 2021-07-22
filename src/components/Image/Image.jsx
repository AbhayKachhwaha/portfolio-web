import React from "react";

const Image = (props) => {
  return (
    <>
      <img
        src={props.src}
        alt={props.alt}
        max-height="200px"
        height= {(props.height ? props.height : '200px')}
        width="auto"
      />
    </>
  );
};

export default Image;
