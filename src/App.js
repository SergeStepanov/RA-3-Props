import './App.css';
import Stars from './RatingOfFilms/Stars';
import Listing from './ListOfOffers/Listing';

const data = require('./Data.json')

function App() {
  return (
    <>
      <h2>Рейтинг фильмов</h2>
      <Stars count={5} />
      <Stars count />
      <Stars count='ghj' />

      <hr />

      <h2>Список предложений</h2>
      <Listing items={data} />
      {console.log(data)}
    </>
  );
}

export default App;
