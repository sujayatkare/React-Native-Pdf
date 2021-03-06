import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import axios from 'axios';

import FlatListApi from './FlatListApi';
import Loader from './Loader';

const ApiFetch = () => {
  const [userData, setUserData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');

  const fetchMyData = async () => {
    setIsLoading(true);
    try {
      const response = await axios(
        'https://jsonplaceholder.typicode.com/users',
      );
      setUserData(response.data);
      setIsLoading(false);
    } catch (err) {
      setErrorMessage('Something went wrong');
    }
  };

  useEffect(() => {
    fetchMyData();
  }, []);

  console.log(userData);

  return isLoading ? (
    <View>
      <Loader isLoading={isLoading} />
    </View>
  ) : errorMessage ? (
    <Text>{errorMessage}</Text>
  ) : (
    <View>
      <FlatListApi title="name" result={userData} />
    </View>
  );
};
export default ApiFetch;
