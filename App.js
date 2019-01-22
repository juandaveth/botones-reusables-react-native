import React from 'react';
import { StyleSheet, Alert, View } from 'react-native';
import Boton from '.Boton';

export default class App extends React.Component {
  
  // Paso 8:
  function onPressBtn() {
    Alert.alert('Alert', 'You clicked this button!');
  }

  const MainApp  = () => (
    <View style={styles.container}>
      <Button style={styles.btn}> My first button </Button>
      <Button success style={styles.btn}> Success button </Button>
      <Button info style={styles.btn}> Info button </Button>
      <Button danger rounded style={styles.btn} onPress={onPressBtn}> Rounded button </Button>
    </View>
  );
  
  render() {
    return (

    );
  }
}

const styles = StyleSheet.create({
  
});
