import React from 'react';
import { ImageBackground, StyleSheet, Text, Button ,View} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Start from './Start.js';


const App = (props) => 
{
  return(
  <View style={styles.container}>
    <ImageBackground source={require("/BGlogo1.png")} resizeMode="cover" style={styles.image}>
      <Text style={styles.text}>
      
      </Text>
      <Text style={styles.text}>
      Welcome to
      </Text>
      
      <Text style={styles.text1}>
      FIDEL
      </Text>

    <View style={styles.button}>
      <Button
        title="Tap to Start" onPress={() => props.navigation.navigate('Start')}
        color="#c977be"
      />
    </View>



   </ImageBackground> 
  </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
  text: {
    marginTop: 150,
    color: '#cf86c5',
    fontSize: 18,
    lineHeight: 54,
    //fontWeight: 'bold',
    textAlign: 'center',
  },
  text1: {
    color: '#ffc273',
    fontSize: 60,
    lineHeight: 40,
    fontWeight: 'bold',
    textAlign: 'center',
    //backgroundColor: '#000000a0',
  },
  button: {
    padding: 100,
  }

});

const Stack = createStackNavigator();

const Navigate = () =>
{
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={App} />
        <Stack.Screen name="Start" component={Start} />   

      </Stack.Navigator>
    </NavigationContainer>
  );

}

export default App;

