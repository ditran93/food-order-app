import classes from "./MealItem.module.css";
import { currencyFormatter } from "../util/currencyFormatter";
import Button from "./UI/Button";
import { useContext } from "react";
import CartContext from "../store/CartContext";
function MealItem({ mealInfo }) {
  const cartCtx = useContext(CartContext);
  function handleAddItem() {
    cartCtx.addItem(mealInfo);
  }
  return (
    <li className={classes["meal-item"]}>
      <article>
        <img
          src={`http://localhost:3000/${mealInfo.image}`}
          alt={mealInfo.name}
        />
        <div>
          <h3>{mealInfo.name}</h3>
          <p className={classes["meal-item-price"]}>
            {currencyFormatter.format(mealInfo.price)}
          </p>
          <p className={classes["meal-item-description"]}>
            {mealInfo.description}
          </p>
        </div>
        <p className={classes["meal-item-actions"]}>
          <Button onClick={handleAddItem}>Add to Cart</Button>
        </p>
      </article>
    </li>
  );
}

export default MealItem;
