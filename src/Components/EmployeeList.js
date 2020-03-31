import React from 'react';
import {View} from 'react-native';

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
        <ButtonNavigation screenName="Swiper" navigation={navigation} />
        <ButtonNavigation screenName="Picker" navigation={navigation} />
        <ButtonNavigation screenName="Toast" navigation={navigation} />
        <ButtonNavigation screenName="Radio" navigation={navigation} />
        <ButtonNavigation screenName="CheckBox" navigation={navigation} />
      </View>
    </View>
  );
};

export default EmployeeList;
