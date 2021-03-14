import React from "react";

const ErrorMessage = (props) => {
  const { Error} = props;
  return(
    <>
    <p>
          {Error ?(
            <p style={{color: "red"}}>{props.children}</p>
         ): null}
    </p>
    </>
  )
};

export default ErrorMessage