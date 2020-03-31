import React, {useState} from 'react';
import {View, Text} from 'react-native';

import Header from '../common/Header';
import CheckBoxButton from '../common/ChekcBoxButton';
import CheckBoxScreen1 from './CheckbocScreen1';

// const CheckBoxScreen = ({navigation}) => {
//   const [checkBox, setCheckBox] = useState(false);

//   const _handleCheckBox = () => {
//     setCheckBox(!checkBox);
//   };
//   return (
//     <View>
//       <View style={{flex: 1}}>
//         <Header title="Radio Button" isHeader={true} navigation={navigation} />
//       </View>
//       <View style={{marginTop: 50}}>
//         <CheckBoxButton
//           selected={checkBox}
//           onPress={_handleCheckBox}
//           text="JavaScript"
//         />
//       </View>
//       <CheckBoxScreen1 />
//     </View>
//   );
// };

const options = [
  {
    key: '1',
    text: 'asad',
  },
  {
    key: '2',
    text: 'ffsdfdf',
  },
  {
    key: '3',
    text: 'ljkjk',
  },
  {
    key: '4',
    text: 'ioio',
  },
];

const CheckBoxScreen = ({navigation}) => {
  const [checkBox, setCheckBox] = useState(false);

  const _handleCheckBox = () => {
    setCheckBox(!checkBox);
  };
  return (
    <View>
      <View style={{flex: 1}}>
        <Header title="Radio Button" isHeader={true} navigation={navigation} />
      </View>
      <View style={{marginTop: 70}}>
        <CheckBoxButton
          options={options}
          selected={checkBox}
          onPress={_handleCheckBox}
        />
      </View>
    </View>
  );
};

export default CheckBoxScreen;
