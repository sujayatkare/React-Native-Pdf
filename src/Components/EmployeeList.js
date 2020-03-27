import React from 'react';
import {View, Text} from 'react-native';

import FetchApi from '../common/useApi';
import ButtonNavigation from '../common/Button';
import Header from '../common/Header';

const EmployeeList = ({navigation, item}) => {
  return (
    <View>
      <View style={{flex: 1}}>
        <Header title="Employee List" isHeader={true} navigation={navigation} />
      </View>
      <View style={{marginTop: 70}}>
        <FetchApi />
        <ButtonNavigation screenName="Pdf" navigation={navigation} />
      </View>
    </View>
  );
};

export default EmployeeList;
