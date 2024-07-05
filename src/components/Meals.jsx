import { useEffect, useState } from 'react';

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
      {mealsData.map((x) => {
        <li key={x.id}> {x.name}</li>;
      })}
    </ul>
  );
}
