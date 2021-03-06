import { Link } from 'react-router-dom';
import { Button } from '../primitives/button/button.component';
import navbarStyles from './navbar.component.module.css';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../../hooks/useCart';
import { useWishList } from '../../hooks/useWishlist';
export const NavBar = () => {
  let navigate = useNavigate();
  const { cartProducts } = useCart();
  const { wishListState } = useWishList();

  const itemInCartReducer = (prev, curr) => prev + curr.quantity;
  const totalItemsInCart = cartProducts.cartList.reduce(itemInCartReducer, 0);

  return (
    <div className={navbarStyles.navbar_container}>
      <div className={navbarStyles.navbar_main}>
        <h2 className={navbarStyles.logo} onClick={() => navigate('/')}>
          KETCH
        </h2>
        <div className={navbarStyles.search_container}>
          <i className='fa fa-search' aria-hidden='true'></i>
          <input type='text' placeholder='search' />
        </div>

        <nav>
          <ul>
            <button variant='ghost' label='Login' className={navbarStyles.login_btn}>
              Login
            </button>
            <li>
              <Link to='/wishlist'>
                <div className={navbarStyles.cart_badge}>
                  <i className='fa-regular fa-heart'></i>
                  <div className={navbarStyles.innerText}>
                    <span>{wishListState.wishListArray.length}</span>
                  </div>
                </div>
              </Link>
            </li>
            <li>
              <Link to='/cart'>
                <div className={navbarStyles.cart_badge}>
                  <i className='fa fa-shopping-cart '></i>
                  <div className={navbarStyles.innerText}>
                    <span>{totalItemsInCart}</span>
                  </div>
                </div>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};
