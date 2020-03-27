import React from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  Text,
  Button,
  TouchableOpacity,
  Image,
} from 'react-native';
import ButtonNavigation from '../common/Button';
import Header from '../common/Header';

const Login = ({navigation}) => {
  return (
    <View>
      <Header title="Login" isHeader={true} navigation={navigation} />
      <View style={{marginTop: 100}}>
        <Text style={{marginLeft: 10}}>Username/Email</Text>
        <View style={styles.textInput}>
          <TextInput
            placeholder="Username/Email"
            clearButtonMode="always"
            autoCorrect={false}
            autoCapitalize={false}
          />
        </View>
        <Text style={{marginTop: 20, marginLeft: 10}}>Password</Text>
        <View style={styles.textInput}>
          <TextInput
            placeholder="Password"
            clearButtonMode="always"
            autoCorrect={false}
            autoCapitalize={false}
          />
        </View>
        {/* <Button title="Submit" onPress={() => navigation.navigate('Dashboard')} /> */}
        <ButtonNavigation screenName="Submit" navigation={navigation} />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  textInput: {
    borderWidth: 1,
    borderColor: 'black',
    marginLeft: 10,
    marginRight: 10,
  },
});
export default Login;
