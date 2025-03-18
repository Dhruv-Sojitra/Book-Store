import Course from "./components/Course";
import Courses from "./Courses/Courses";
import Home from "./Home/Home";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <div className="dark:bg-slate-900 dark:text-white ">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/course" element={<Courses />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
