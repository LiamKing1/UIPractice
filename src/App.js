import Backdrop from "./components/backdrop";
import Modal from "./components/modal";
import Todo from "./components/todo";

function App() {
  return (
    <div>
      <h1> My Todos </h1>
      <Todo text="Small Dawg" />
      <Todo text="Big Dawg" />
      <Todo text="Little Dawg" />
      <Modal />
      <Backdrop />
    </div>
  );
}

export default App;
