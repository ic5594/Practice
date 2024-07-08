import { useContext } from 'react';
import CartContext from '../store/CartContext';
import { Formatter } from '../utils/Formatter';
import Input from './UI/Input';
import Button from './UI/Button';
import UserProgressContext from '../store/UserProgressContext';
import Modal from './UI/Modal';
import useHttp from '../hooks/useHttp';

const requestConfig = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    order: {
      items: cartCtx.items,
      customer: customerData,
    },
  }),
};

export default function Checkout() {
  const cartCtx = useContext(CartContext);
  const userProgressCtx = useContext(UserProgressContext);

  const { data, isLoading, error } = useHttp(
    'http://localhost:3000/orders',
    requestConfig,
    []
  );

  const cartTotal = cartCtx.items.reduce(
    (totalPrice, item) => totalPrice + item.quantity * item.price,
    0
  );

  const handleClose = () => {
    userProgressCtx.hideCheckout();
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const fd = new FormData(event.target);
    const customerData = Object.fromEntries(fd.entries()); //객체를 받을 수 있음

    const response = await fetch('http://localhost:3000/orders', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        order: {
          items: cartCtx.items,
          customer: customerData,
        },
      }),
    });

    if (!response.ok) {
      throw new Error('Fail to order');
    }
  };

  return (
    <Modal open={userProgressCtx.progress === 'checkout'}>
      <form onSubmit={handleSubmit}>
        <h2>Checkout</h2>
        <p>Total Amount: {Formatter.format(cartTotal)} </p>

        <Input label="Full Name" type="text" id="name" />
        <Input label="E-Mail Address" type="email" id="email" />
        <Input label="Street" type="text" id="street" />
        <div className="control-row">
          <Input label="Postal Code" type="text" id="postal-code" />
          <Input label="City" type="text" id="city" />
        </div>

        {error && <Error title="Failed to Checkout" />}

        <p className="modal-actions">
          <Button type="button" textOnly onClick={handleClose}>
            Close
          </Button>
          <Button>Submit Order</Button>
        </p>
      </form>
    </Modal>
  );
}
