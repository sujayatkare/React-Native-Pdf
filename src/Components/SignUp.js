import React from 'react';
import {Text, View} from 'react-native';
import Header from '../common/Header';

const SignUp = ({navigation}) => {
  return (
    <View>
      <Header title="Register" isHeader={true} navigation={navigation} />
      <View style={{marginTop: 100}}>
        <Text>SignUp</Text>
      </View>
    </View>
  );
};

export default SignUp;
