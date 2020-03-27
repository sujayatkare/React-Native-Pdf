// import React from 'react';
// import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
// import {Header, Icon} from 'react-native-elements';
// // const Header = props => {
// //   return (
// //     <View style={styles.container}>
// //       <View
// //         // eslint-disable-next-line react-native/no-inline-styles
// //         style={{
// //           borderBottomWidth: 2,
// //           borderBottomColor: 'black',
// //           flexDirection: 'row',
// //         }}>
// //         <Image
// //           source={require('../../assets/icons/button.jpg')}
// //           style={{width: 30, height: 30, marginTop: 20}}
// //         />
// //         <Text style={styles.text}>{props.title}</Text>
// //       </View>
// //     </View>
// //   );
// // };

// // const styles = StyleSheet.create({
// //   container: {
// //     marginTop: 10,
// //   },
// //   text: {
// //     marginTop: 13,
// //     fontSize: 20,
// //     padding: 10,
// //     fontWeight: 'bold',
// //     textAlign: 'center',
// //   },
// // });

// const HeaderBaba = ({navigation, title}) => {
//   return (
//     <View>
//       <Header
//         leftComponent={
//           <Image
//             source={require('../../assets/icons/button.jpg')}
//             style={{width: 30, height: 30}}
//           />
//         }
//         centerComponent={{
//           text: `${title}`,
//           style: {fontSize: 24, fontWeight: 'bold', color: 'white'},
//         }}
//         rightComponent={
//           <TouchableOpacity onPress={() => navigation.navigate('Welcome')}>
//             <Image
//               source={require('../../assets/icons/logout.png')}
//               style={{width: 30, height: 30}}
//             />
//           </TouchableOpacity>
//         }
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   text: {
//     fontSize: 20,
//   },
// });

// export default HeaderBaba;

import React from 'react';
import {Container, Header, Left, Body, Right, Button, Title} from 'native-base';
import {Image} from 'react-native';

const HeaderScreen = ({navigation, title, isHeader}) => {
  return (
    <Container style={{marginTop:-20}}>
      <Header>
        <Left>
          {isHeader ? (
            <Button transparent onPress={() => navigation.goBack()}>
              <Image
                source={require('../../assets/icons/button.jpg')}
                style={{width: 20, height: 20}}
              />
            </Button>
          ) : null}
        </Left>
        <Body>
          <Title>{title}</Title>
        </Body>
        <Right />
      </Header>
    </Container>
  );
};

export default HeaderScreen;
