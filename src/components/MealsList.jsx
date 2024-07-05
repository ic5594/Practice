export default function MealsList({ name }) {
  console.log(name);
  return (
    <li className="meal-item">
      <article>
        <img></img>
        <div>
          <h3>{name}</h3>
          <p className="meal-item-price">213</p>
          <p className="meal-item-description"></p>
          <p className="meal-item-actions">
            <button>Add to Cart</button>
          </p>
        </div>
      </article>
    </li>
  );
}
