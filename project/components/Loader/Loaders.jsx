import React from "react";
import Loader from "react-js-loader";
// import "../../assets/css/user.css";
function Loaders() {
  return (
    <div style={{display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    background: "#FEFBF3" }} >
      <Loader
        type="ekvalayzer"
        bgColor={"#4d2c29"}
        color={"#800000"}
        size={200}
        
      />
    </div>
  );
}

export default Loaders;
// import React from 'react'
// import "../../assets/css/user.css"
// function Loader() {
//   return (
//     <div className='loader'>

//     </div>
//   )
// }

// export default Loader