import React from 'react';
import {View, Text, FlatList} from 'react-native';

const FlatListApi = ({result}) => {
  return (
    <View>
      <FlatList
        data={result}
        renderItem={({item}) => {
          return (
            <View>
              <Text>{item.name}</Text>
            </View>
          );
        }}
      />
    </View>
  );
};

export default FlatListApi;
