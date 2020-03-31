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

