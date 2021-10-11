import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { decrementCounter, incrementCounter } from './redux/counter';
import { loginUser, logoutUser } from './redux/user';
import apiClient from 'common/utils/api-client';

export default function Home() {
  const count = useSelector((state) => state.home.counter.value);
  const userStatus = useSelector((state) => state.home.user.status);
  const arr = [1, 5, 5, 66];
  const dispatch = useDispatch();

  const callApi = () => {
    apiClient.get('/home');
  };

  return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(incrementCounter())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrementCounter())}
        >
          Decrement
        </button>
      </div>
      <div>
        <h1>{userStatus}</h1>
        <button onClick={() => dispatch(loginUser({ status: 'signed in' }))}>
          {' '}
          login user{' '}
        </button>
        <button onClick={() => dispatch(logoutUser({ status: 'signed out' }))}>
          {' '}
          logout user
        </button>
      </div>
      <div>
        <button onClick={callApi}> Call API </button>
      </div>
      <label htmlFor="pet-select">Choose a pet:</label>

      <select
        id="pet-select"
        onClick={(e) => apiClient.post('/', e.target.value)}
      >
        {arr.map((num) => (
          <option key={num} value={num}>
            {num}
          </option>
        ))}
      </select>
    </div>
  );
}
