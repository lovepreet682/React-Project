import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import "./App.css";
import NavbarSection from "./components/NavbarSection";
import MyTask from "./components/TodoList/MyTask";
import AllTask from "./components/TodoList/AllTask";
import Completedtask from "./components/TodoList/Completedtask";
import Pendingtask from "./components/TodoList/Pendingtask";
import Home from "./components/Home";

function App() {
  return (
    <BrowserRouter>
      <>
        <NavbarSection />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mytask" element={<MyTask />}>
            <Route index element={<AllTask />} />
            <Route path="alltask" element={<AllTask />} />
            <Route path="completedtask" element={<Completedtask />} />
            <Route path="pendingtask" element={<Pendingtask />} />
          </Route>
        </Routes>
      </>
    </BrowserRouter>
  );
}

export default App;
