import react from "react";
import Mobiles from "./Mobiles";
function Electronics(props) {
  return (
    <>
      <h2>Welcome to Electronics </h2>
      <Mobiles name={props.name} />

    </>
  );
}
export default Electronics;