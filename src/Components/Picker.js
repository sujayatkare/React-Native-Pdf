import React, {useState, useEffect} from 'react';
import {View, Text, Picker, Switch, Button, Alert} from 'react-native';

import Header from '../common/Header';

const PickerScreen = ({navigation}) => {
  const [chooseLabel, setChosenLabel] = useState([]);
  const [switchValue, setSwitchValue] = useState(false);

  const updateLabel = chooseLabel => {
    setChosenLabel(chooseLabel);
  };

  const toggleSwitch = switchValue => {
    setSwitchValue(switchValue);
  };

  const toggleAlert = () => {
    Alert.alert('Logout', 'Do you want to really logout?', [
      {text: 'Yes', onPress: () => console.log('yes pressed')},
      {text: 'No', onPress: () => console.log('no pressed')},
    ]);
  };

  console.log({chooseLabel});
  console.log({switchValue});

  return (
    <View>
      <View style={{flex: 1}}>
        <Header title="Picker list" isHeader={true} navigation={navigation} />
      </View>
      <View style={{marginTop: 70}}>
        <Text>Select preffered Language : </Text>
        <Picker selectedValue={chooseLabel} onValueChange={updateLabel}>
          <Picker.Item label="Javascript" value="Javascript" />
          <Picker.Item label="React" value="React" />
          <Picker.Item label="React-Native" value="React-Native" />
        </Picker>
        <Text>Selected language is {chooseLabel} </Text>
      </View>
      <Switch
        onValueChange={toggleSwitch}
        value={switchValue}
        style={{alignSelf: 'center'}}
        thumbColor="yellow"
        trackColor="violet"
      />
      <Text style={{alignSelf: 'center'}}>
        {switchValue ? 'Switch is ON' : 'Switch is OFF'}
      </Text>
      <Button title="Alert" onPress={toggleAlert} />
    </View>
  );
};

export default PickerScreen;

// import React, {Component} from 'react';
// import {View, Text, Picker, StyleSheet} from 'react-native';

// class PickerExample extends Component {
//   state = {user: ''};
//   updateUser = user => {
//     this.setState({user: user});
//   };
//   render() {
//     return (
//       <View>
//         <Picker selectedValue={this.state.user} onValueChange={this.updateUser}>
//           <Picker.Item label="Steve" value="steve" />
//           <Picker.Item label="Ellen" value="ellen" />
//           <Picker.Item label="Maria" value="maria" />
//         </Picker>
//         <Text style={styles.text}>{this.state.user}</Text>
//       </View>
//     );
//   }
// }
// export default PickerExample;

// const styles = StyleSheet.create({
//   text: {
//     fontSize: 30,
//     alignSelf: 'center',
//     color: 'red',
//   },
// });
