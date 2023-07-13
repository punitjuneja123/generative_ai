import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { TodoList } from "./components/TodoList";
import { CreateTodo } from "./components/CreateTodo";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<TodoList />} />
        <Route path="/create" element={<CreateTodo />} />
      </Routes>
    </Router>
  );
}

export default App;
