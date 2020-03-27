import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import axios from 'axios';

const Api = () => {
  const [userData, setUserData] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(async () => {
    try {
      const response = await axios(
        'https://jsonplaceholder.typicode.com/users',
      );
      setUserData(response.data);
    } catch (err) {
      setErrorMessage('Something went wrong');
    }
  }, []);

  return [userData, errorMessage];
};

export default Api;
