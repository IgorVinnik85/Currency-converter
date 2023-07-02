import css from './Navigation.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import { useGetExchangesQuery } from 'redux/authSlice';
import { getToken } from 'redux/selectors';
import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { setCurrency } from 'redux/currencySlice';

const Navigation = () => {
  const currency = useSelector(state => state.currency) 
  const dispatch = useDispatch();
  console.log(currency);
  const { data } = useGetExchangesQuery()
  console.log(data)

  const handleChange = (e) => {
  dispatch(setCurrency(e.target.value));
}

  return (
    <div className={css.authWrapper}>
      <NavLink className={css.link} to="/">
        Home
      </NavLink>
      <NavLink className={css.link} to="/exchange">
        Exchange
      </NavLink>
      <div className={css.navWrapper}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Currency</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={currency}
            label="Age"
            onChange={handleChange}
          >
            {data &&
              Object.keys(data.symbols).map(currency => (
                <MenuItem key={currency} value={currency}>
                  {currency}
                </MenuItem>
              ))}
          </Select>
        </FormControl>
        <></>
      </div>
    </div>
  );
};

export default Navigation;
