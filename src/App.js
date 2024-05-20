//import RightSide from './component/rightBar/RightSide.jsx'
import Skeleton from './Skeleton.jsx'
import Home from '../src/component/Home/Home.jsx'
import { Routes, Route } from "react-router-dom";
import { WebRoutes } from "./routes.jsx";
import './App.css'
function App() {
  return (
    <>
      <Routes>
      <Route path={WebRoutes.HOME} element={<Skeleton />}>
      <Route path={WebRoutes.HOME} element={<Home/>}/>
    
      </Route>

      </Routes> 
      
    </>
  );
}

export default App;
