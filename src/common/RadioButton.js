import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  Alert,
} from 'react-native';

const RadioButtonScreen = ({options, navigation}) => {
  const [value, setValue] = useState(null);

  console.log({value});

  return (
    <View style={{marginHorizontal: 50, marginTop: 10}}>
      <FlatList
        data={options}
        renderItem={({item}) => {
          return (
            <View key={item.key} style={styles.container}>
              <Text>{item.text}</Text>
              <TouchableOpacity
                style={styles.circle}
                onPress={() => {
                  setValue(item.key);
                }}>
                {value === item.key && <View style={styles.filledCircle} />}
              </TouchableOpacity>
            </View>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 30,
  },
  circle: {
    height: 20,
    width: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'orange',
    alignItems: 'center',
    justifyContent: 'center',
  },
  filledCircle: {
    width: 14,
    height: 14,
    borderRadius: 7,
    backgroundColor: 'skyblue',
  },
});

export default RadioButtonScreen;
