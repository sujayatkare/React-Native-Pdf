import React from 'react';
import {View, Text, StyleSheet, Button, Image, Dimensions} from 'react-native';
import Swiper from 'react-native-web-swiper';
import {TouchableOpacity} from 'react-native-gesture-handler';
import ButtonNavigation from '../common/Button';
import {withNavigation} from 'react-navigation';

const SwiperScreen = ({navigation}) => {
  return (
    <View style={{flex: 1}}>
      <Swiper index={1}>
        <View style={[styles.slideContainer, styles.slide1]}>
          <Image
            source={require('../../images/image1.jpg')}
            style={{
              width: Dimensions.get('window').width,
              height: Dimensions.get('window').height,
            }}
          />
        </View>
        <View style={[styles.slideContainer, styles.slide2]}>
          <Image
            source={require('../../images/image2.jpg')}
            style={{
              width: Dimensions.get('window').width,
              height: Dimensions.get('window').height,
            }}
          />
        </View>
        <View style={[styles.slideContainer, styles.slide3]}>
          <Image
            source={require('../../images/image3.jpg')}
            style={{
              width: Dimensions.get('window').width,
              height: Dimensions.get('window').height,
            }}
          />
        </View>
      </Swiper>
      <View style={{alignItems: 'center', justifyContent: 'center'}}>
        <TouchableOpacity onPress={() => navigation.navigate('Welcome')}>
          <Text>Close Slider</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  slideContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  slide1: {
    backgroundColor: 'rgba(20,20,200,0.3)',
  },
  slide2: {
    backgroundColor: 'rgba(20,200,20,0.3)',
  },
  slide3: {
    backgroundColor: 'rgba(200,20,20,0.3)',
  },
});

export default withNavigation(SwiperScreen);
