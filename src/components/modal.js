function Modal(props) {

  function handleCancel() {
    props.onCancel();
  }

  function handelConfirm() {
    props.onConfirm();
  }

  return (
    <div className="modal">
      <p> Are you sure? </p>
      <button className="btn btn--alt" onClick={handleCancel}> Cancel </button>
      <button className="btn" onClick={handelConfirm}> Confirm </button>
    </div>
  );
}

export default Modal;
