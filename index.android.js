import React, { Component  } from 'react';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon } from 'native-base';

import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class NativeBase extends Component {
  render() {
    return (
      <Container>
        <Header>
          <Left>
            <Button transparent>
              <Icon name='menu' />
            </Button>
          </Left>
          <Body>
            <Title>Header</Title>
          </Body>
          <Right />
        </Header>
        <Content>
        <Text>Your main content goes here</Text>
          <Icon ios='ios-menu' android="md-menu" style={{fontSize: 20, color: 'red'}}/>
        </Content>
        <Footer>
          <FooterTab>
            <Button full>
              <Text>Footer</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}



AppRegistry.registerComponent('NativeBase', () => NativeBase);
