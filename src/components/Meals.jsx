import MealsList from './MealsList.jsx';
import useHttp from '../hooks/useHttp.js';
import Error from './Error.jsx';

const requestConfig = {};

export default function Meals() {
  // const envSetting = window.location.href.indexOf('react') > -1;

  const {
    data: loadedMeals,
    isLoading,
    error,
  } = useHttp(
    // envSetting
    //   ? 'http://reactpracticesect18.web.app'
    // :
    'http://192.168.0.35:3000/meals',
    requestConfig,
    []
  );

  if (isLoading) {
    return <p className="center">Fetching meals...</p>;
  }

  if (error) {
    return <Error title="Failed to fetch meals" message={error} />;
  }

  return (
    <ul id="meals">
      {loadedMeals.map((meal) => (
        <MealsList key={meal.id} meal={meal} />
      ))}
    </ul>
  );
}
