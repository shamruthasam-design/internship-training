import React, { useContext } from "react";
import { MobileContext } from "./MobileContext";

function Mobiles() {

  const mobile = useContext(MobileContext);

  console.log(mobile);

  return (
    <>
      <h2>Welcome to Mobiles</h2>

      <h3>Mobile: {mobile.name}</h3>
      <h3>Price: {mobile.price}</h3>
      <h3>Color: {mobile.color}</h3>
    </>
  );
}

export default Mobiles;