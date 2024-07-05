import { useEffect, useState } from 'react';
import MealsList from './Mealslist';

export default function Meals() {
  const [mealsData, setMealsData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('http://localhost:3000/meals');

      if (!response.ok) {
        throw new Error('Fail to take meals data');
      }

      const resData = await response.json();
      console.log(resData);
      setMealsData(resData);
    }

    fetchData();
  }, []);

  return (
    <ul id="meals">
      {mealsData.map((x) => (
        <MealsList key={x.id} data={x} />
      ))}
    </ul>
  );
}
