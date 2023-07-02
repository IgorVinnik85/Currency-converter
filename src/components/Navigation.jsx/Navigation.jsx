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

const Navigation = () => {
  const currency = useSelector(state => state.currency) 
  const dispatch = useDispatch();
  console.log(currency);
  const { data } = useGetExchangesQuery()
  console.log(data)

  return (
    <div className={css.authWrapper}>
      <NavLink className={css.link} to="/">
        Home
      </NavLink>
      <div className={css.navWrapper}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">{currency}</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={currency}
            label="Age"
            // onChange={handleChange}
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
        <>
          <NavLink className={css.link} to="/exchange">
            Exchange
          </NavLink>
        </>
      </div>
    </div>
  );
};

export default Navigation;
