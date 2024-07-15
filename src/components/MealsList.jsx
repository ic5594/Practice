import { useContext } from 'react';

import { Formatter } from '../utils/Formatter.js';
import Button from './UI/Button.jsx';
import CartContext from '../store/CartContext.jsx';

export default function MealItem({ meal }) {
  const cartCtx = useContext(CartContext);
  const envSetting = window.location.href.indexOf('react') > -1;

  function handleAddMealToCart() {
    cartCtx.addItem(meal);
  }

  return (
    <li className="meal-item">
      <article>
        <img
          src={
            envSetting
              ? `http://reactpracticesect18.web.app${meal.image}`
              : `http://localhost:3000/${meal.image}`
          }
          alt={meal.name}
        />
        <div>
          <h3>{meal.name}</h3>
          <p className="meal-item-price">{Formatter.format(meal.price)}</p>
          <p className="meal-item-description">{meal.description}</p>
        </div>
        <p className="meal-item-actions">
          <Button onClick={handleAddMealToCart}>Add to Cart</Button>
        </p>
      </article>
    </li>
  );
}
