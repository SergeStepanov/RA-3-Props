import './App.css';
import Stars from './RatingOfFilms/Stars';
import Listing from './ListOfOffers/Listing';
import data from './Data.json';

function App() {
  // const items = JSON.parse(data);
  return (
    <>
      <h2>Рейтинг фильмов</h2>
      <Stars count={5} />
      <Stars count />
      <Stars count='ghj' />

      <hr />
      <h2>Список предложений</h2>
      <Listing />
      {/* {console.log(items)} */}
    </>
  );
}

export default App;
