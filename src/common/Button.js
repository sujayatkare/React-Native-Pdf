import React from 'react';
import {View, Text, Button, TouchableOpacity} from 'react-native';
import {useNavigation} from 'react-navigation';

const ButtonNavigation = ({navigation, screenName}) => {
  // const navigation = useNavigation();
  return (
    <View>
      <Button
        title={`${screenName}`}
        onPress={() => navigation.navigate(screenName)}
      />
    </View>
  );
};
export default ButtonNavigation;
