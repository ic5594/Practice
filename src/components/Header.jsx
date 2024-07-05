import Logo from '../assets/logo.jpg';
import Button from './UI/Button';
import { useContext } from 'react';
import CartContext from '../store/CartContext';
import UserProgressContext from '../store/UserProgressContext';

export default function Header() {
  const cartCtx = useContext(CartContext);
  const userProgressCtx = useContext(UserProgressContext);

  const cartIndex = cartCtx.items.reduce((acc, cur) => {
    return acc + cur.quantity;
  }, 0);

  const handleShowCart = () => {
    userProgressCtx.showCart();
  };

  return (
    <header id="main-header">
      <div id="title">
        <img src={Logo} alt="header_logo" />
        <h1>JungHyun's Food</h1>
      </div>
      <nav>
        <Button textOnly={true} onClick={handleShowCart}>
          Cart({cartIndex})
        </Button>
      </nav>
    </header>
  );
}
