import React, {useState, useEffect} from 'react';
import {View, Text, ActivityIndicator} from 'react-native';

const Loader = ({isLoading}) => {
  return (
    <View style={{flex: 1, padding: 20}}>
      <ActivityIndicator size="large" isLoading={isLoading} />
    </View>
  );
};
export default Loader;
