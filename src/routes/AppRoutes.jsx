import ScrollToTop from '../components/ScrollToTop/ScrollToTop';
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from '../pages/Home/Home';
import Shop from '../pages/Shop/Shop';
import AboutUs from '../pages/AboutUs/AboutUs';


const AppRoutes = () => {
  return (
    <Router>
      <ScrollToTop/>
      <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/shop' element={<Shop/>}/>
          <Route path='/about-us' element={<AboutUs/>}/>
      </Routes>
    </Router>
  )
}

export default AppRoutes