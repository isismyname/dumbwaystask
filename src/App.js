import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Product from './admin/product';
import Income from './admin/income';
import Afterl from './afterlog/afterlog';
import Cart from './afterlog/cart';
import Profile from './afterlog/profile';
import Home from './home/homepage';
import List from './menupage/listmenu';
import Toping from './admin/toping';

// path="/"
// element={
//   <>
//     <Navbar
//       isLogin={isLogin}
//       isAdmin={isAdmin}
//       openLogin={false}
//       onClick={() => setIsLogin(!isLogin)}
//     />
//     <Jumbotron />
//     <Menu />
//   </>
// }
function App() {
  return (
    <Router>
      <Routes>
      <Route exact path='/admin/add-toping' element={<Toping/>} />
        <Route exact path='/admin/add-product' element={<Product/>} />
        <Route exact path='/admin/income' element={<Income/>} />
        <Route exact path='/userid' element={<Afterl/>} />
        <Route exact path='/cart' element={<Cart/>} />
        <Route exact path='/profile' element={<Profile/>} />
        <Route exact path='/' element={<Home/>} />
        <Route exact path='/menu' element={<List/>} />
      </Routes>
    </Router>
  )
}


export default App;