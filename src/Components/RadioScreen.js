import React from 'react';
import {View} from 'react-native';

import Header from '../common/Header';
import RadioButton from '../common/RadioButton';

const options = [
  {
    key: '1',
    text: 'JavaScript',
  },
  {
    key: '2',
    text: 'React',
  },
  {
    key: '3',
    text: 'React-Native',
  },
  {
    key: '4',
    text: 'Flutter',
  },
];

const RadioScreen = ({navigation}) => {
  return (
    <View>
      <View style={{flex: 1}}>
        <Header title="Radio Button" isHeader={true} navigation={navigation} />
      </View>
      <View style={{marginTop: 70}}>
        <RadioButton options={options} />
      </View>
    </View>
  );
};

export default RadioScreen;
