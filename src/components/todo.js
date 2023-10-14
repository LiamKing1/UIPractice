import { useState } from "react";
import Modal from "./components/modal";
import Backdrop from "./components/backdrop";

function Todo(props) {
  const [showModal, setShowModal] = useState(false);

  function deletHandler() {
    // console.log('Delete Button Clicked');
    // console.log(props);
    setShowModal(true);
  }

  return (
    <div className="card">
      {/* Props is taking the 'text' property from where the component is being rendered
    and allowing it to parse through all 'text' initiations in oder to display their unique text */}
      <h2> {props.text} </h2>
      <div className="actions">
        <button className="btn" onClick={deletHandler}>
          DELETE
        </button>
      </div>
      {/* Ternary Expression */}
      {showModal && <Modal /> }
      {showModal && <Backdrop /> }
      {/* Can otherwise be written like the example below called a Ternary expression
       {showModal ? <Modal /> : null} 
       {showModal ? <Backdrop /> : null} */}
    </div>
  );
}

export default Todo;
