import Todolist, { TaskType } from "./Todolist";
import "./App.css";

let tasks1 = [
  { id: 1, title: "Css", isDone: true },
  { id: 2, title: "Js", isDone: true },
  { id: 3, title: "Html", isDone: false },
];

let tasks2: Array<TaskType> = [
  { id: 1, title: "term", isDone: true },
  { id: 2, title: "norterm", isDone: true },
  { id: 3, title: "alaska", isDone: true },
];

function App() {
  return (
    <div className="App">
      <input type="text" name="" id="" />
      <Todolist title="What to learn" tasks={tasks1} />
      <Todolist title="Movie"tasks={tasks2} />
    </div>
  );
}

export default App;
