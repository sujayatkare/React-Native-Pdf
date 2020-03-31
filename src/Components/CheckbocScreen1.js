import React, {useState} from 'react';
import {View, Text} from 'react-native';

import CheckBoxButton from '../common/ChekcBoxButton';

const CheckBoxScreen1 = () => {
  const [checkBox, setCheckBox] = useState(false);

  const _handleCheckBox = () => {
    setCheckBox(!checkBox);
  };

  return (
    <View>
      <View>
        <CheckBoxButton
          selected={checkBox}
          onPress={_handleCheckBox}
          text="React"
        />
      </View>
    </View>
  );
};

export default CheckBoxScreen1;
