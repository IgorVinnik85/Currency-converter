import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import css from './Home.module.css';
import { Link } from 'react-router-dom';
import { setCurrency } from 'redux/currencySlice';
import { useGetExchangesQuery, useGetLatestCurrQuery } from 'redux/authSlice';

const Home = () => {
  const currency = useSelector(state => state.currency);
  console.log('currency :>> ', currency);
  // const dispatch = useDispatch();
  // const { data } = useGetExchangesQuery();
  // console.log('data :>> ', data);
  // const { data: latest } = useGetLatestCurrQuery(
  //   {
  //     symbols: JSON.stringify(Object.keys(data?.symbols || [])),
  //     base: currency,
  //   },
  //   { skip: !data && !currency }
  // );
  // console.log('latest :>> ', latest);

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
