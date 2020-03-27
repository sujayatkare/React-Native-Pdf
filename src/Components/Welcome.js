import React from 'react';
import {View, StyleSheet} from 'react-native';

import ButtonNavigation from '../common/Button';

const Welcome = ({navigation}) => {
  return (
    <View style={styles.container}>
      <ButtonNavigation screenName="Login" navigation={navigation} />
      <ButtonNavigation screenName="SignUp" navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Welcome;
