import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import css from './Home.module.css';
import { Link } from 'react-router-dom';
import { setCurrency } from 'redux/currencySlice';

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    var requestOptions = {
      method: 'GET',
    };

    fetch(
      'https://api.geoapify.com/v1/ipinfo?&apiKey=808bae090d424630884bc909c00e8ac6',
      requestOptions
    )
      .then(response => response.json())
      .then(result => dispatch(setCurrency(result.country.currency)))
      .catch(error => console.log('error', error));
  }, []);
  return <></>;
};

export default Home;
