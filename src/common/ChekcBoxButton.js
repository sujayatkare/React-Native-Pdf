import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  Alert,
  Image,
} from 'react-native';

// const CheckBoxButton = ({selected, onPress, text = ''}) => {
//   console.log({selected});
//   return (
//     <View>
//       <View>
//         <TouchableOpacity onPress={onPress} style={styles.container}>
//           <Image
//             source={
//               selected
//                 ? require('../../assets/icons/checkbox.png')
//                 : require('../../assets/icons/outline_checkbox.png')
//             }
//             style={{width: 20, height: 20}}
//           />
//           <Text>{text}</Text>
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flexDirection: 'row',
//     justifyContent: 'center',
//     marginTop: 50,
//   },
// });

const CheckBoxButton = ({options, selected, onPress, navigation}) => {
  return (
    <View style={{marginHorizontal: 50, marginTop: 10}}>
      <FlatList
        data={options}
        renderItem={({item}) => {
          return (
            <View key={item.key} style={styles.container}>
              <TouchableOpacity onPress={onPress}>
                <Image
                  source={
                    selected
                      ? require('../../assets/icons/checkbox.png')
                      : require('../../assets/icons/outline_checkbox.png')
                  }
                  style={{width: 20, height: 20}}
                />
              </TouchableOpacity>
              <Text>{item.text}</Text>
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
    justifyContent: 'center',
    marginTop: 10,
  },
});
export default CheckBoxButton;
