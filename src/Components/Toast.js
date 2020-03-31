import React from 'react';
import {View, Text, Button, ToastAndroid} from 'react-native';

import Header from '../common/Header';

const ToastScreen = ({navigation}) => {
  const _toastWithDurationHandler = () => {
    ToastAndroid.show('Hi i am simple toast', ToastAndroid.SHORT);
  };

  const _toastShowWithGravity = () => {
    ToastAndroid.showWithGravity(
      'Hi i am toast with gravity',
      ToastAndroid.SHORT,
      ToastAndroid.CENTER,
    );
  };

  const _toastShowWithGravityAndOffset = () => {
    ToastAndroid.showWithGravityAndOffset(
      'Hi i am toast with gravity and offset',
      ToastAndroid.LONG,
      ToastAndroid.CENTER,
    );
  };
  return (
    <View>
      <View style={{flex: 1}}>
        <Header title="Toast" isHeader={true} navigation={navigation} />
      </View>
      <Text style={{marginTop: 70}}>Toast screen</Text>
      <Button title="Toast 1" onPress={_toastWithDurationHandler} />
      <Button title="Toast 2" onPress={_toastShowWithGravity} />
      <Button title="Toast 3" onPress={_toastShowWithGravityAndOffset} />
    </View>
  );
};

export default ToastScreen;
