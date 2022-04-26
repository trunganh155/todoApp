import "./App.css";
import "antd/dist/antd.css";
import { Routes, Route } from "react-router-dom";
import Todo from "./pages/todo";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Todo />} />
      </Routes>
    </div>
  );
}

export default App;
