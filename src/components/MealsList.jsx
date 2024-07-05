import Button from './UI/Button';
import { Formatter } from '../utils/Formatter';
import { useContext } from 'react';
import CartContext from '../store/CartContext';

export default function MealsList({ data }) {
  const cartCtx = useContext(CartContext);

  const handleOnClick = () => {
    cartCtx.addItem(data);
  };

  return (
    <li className="meal-item">
      <article>
        <img src={`http://localhost:3000/${data.image}`}></img>
        <div>
          <h3>{data.name}</h3>
          <p className="meal-item-price">{Formatter.format(data.price)}</p>
          <p className="meal-item-description">{data.description}</p>
          <p className="meal-item-actions">
            <Button onClick={handleOnClick}>Add to cart</Button>
          </p>
        </div>
      </article>
    </li>
  );
}
