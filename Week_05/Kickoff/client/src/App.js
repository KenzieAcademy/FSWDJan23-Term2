import { Route, Routes } from "react-router-dom";
import "./App.css";
import { ControlledForms, Kickoff } from "./pages";
import { Navigation, Timespent } from "./components";

function App() {
  return (
    <>
      <Navigation />
      <Timespent />
      {/* 
        The Routes component creates a sort of routing table, if you will.
      */}
      <Routes>
        {/* 
          Within Routes, we can render any child Route components. Each 
          Route component should have two props:
            1.  path - this is a string, and represents the URL after 
                http://localhost:3000/ that should render the component in 
                question
            2.  element - this is the component that should be rendered
                when the currently active route matches the Route component's
                path attribute
        */}
        <Route path="" element={<Kickoff />} />
        <Route path="controlledforms" element={<ControlledForms />} />
      </Routes>
    </>
  );
}

export default App;
