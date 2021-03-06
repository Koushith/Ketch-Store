import { Routes, Route } from 'react-router-dom';
import {
  HomeScreen,
  AllProductsScreen,
  CartScreen,
  ProductDetailsScreen,
  ProfileScreen,
  WishListScreen,
  LoginScreen,
  RegisterScreen,
} from './screens';
import Mockman from 'mockman-js';
import { NavBar } from './components/common/navbar.component';
import { Footer } from './components/common/footer';

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<HomeScreen />} />
        <Route path='shop' element={<AllProductsScreen />} />
        <Route path='cart' element={<CartScreen />} />
        <Route path='wishlist' element={<WishListScreen />} />
        <Route path='product/:id' element={<ProductDetailsScreen />} />
        <Route path='profile' element={<ProfileScreen />} />
        <Route path='login' element={<LoginScreen />} />
        <Route path='register' element={<RegisterScreen />} />
        <Route path='mock' element={<Mockman />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
