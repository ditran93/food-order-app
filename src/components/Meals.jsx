import { useEffect, useState } from "react";
import MealItem from "./MealItem";
import classes from "./Meals.module.css";
function Meals() {
  const [meals, setMeals] = useState();
  useEffect(() => {
    const fetchMeals = async () => {
      const response = await fetch("http://localhost:3000/meals");
      const resData = await response.json();
      setMeals(resData);
    };
    fetchMeals();
  }, []);

  return (
    <ul id={classes.meals}>
      {meals && meals.map((meal) => <MealItem mealInfo={meal} key={meal.id} />)}
    </ul>
  );
}

export default Meals;
