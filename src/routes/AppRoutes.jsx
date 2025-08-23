import ScrollToTop from '../components/ScrollToTop/ScrollToTop';
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from '../pages/Home/Home';


const AppRoutes = () => {
  return (
    <Router>
      <ScrollToTop/>
      <Routes>
          <Route path='/' element={<Home/>}/>
      </Routes>
    </Router>
  )
}

export default AppRoutes