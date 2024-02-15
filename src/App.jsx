import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home/Home";
import Counter from "./Components/Counter/Counter";
import Counter5 from "./Components/Counter/Counter5";
import Name from "./Components/Name/Name";
import Todo from "./Components/Todo/Todo";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/counter" element={<Counter />} />
          <Route path="/counter5" element={<Counter5 />} />
          <Route path="/name" element={<Name />} />
          <Route path="/todo" element={<Todo />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
