import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { ButtonGroup } from 'react-native-elements';


class HomeScreen extends React.Component {
  render() {
      const buttonList = [
        'All',
        'Great(0)',
        'Good(0)',
        'Poor(0)',
      ];
    return (
      <View style={{ flex: 1 }}>
      <ButtonGroup
        buttons={buttonList}
      />
      </View>
    );
  }
}


export default HomeScreen;