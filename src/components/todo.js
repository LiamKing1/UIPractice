function Todo(props) {
    function deletHandler() {
        // console.log('Delete Button Clicked');
        // console.log(props);
        
    }

  return (
    <div className='card'>
        {/* Props is taking the 'text' property from where the component is being rendered
    and allowing it to parse through all 'text' initiations in oder to display their unique text */}
      <h2> {props.text} </h2>
      <div className='actions'>
        <button className='btn' onClick={deletHandler}> DELETE </button>
      </div>
    </div>
  );
}

export default Todo;
