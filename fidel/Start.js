import React from 'react';
import { ImageBackground, StyleSheet, Text, Button ,View} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

//import Login from './Login.js';
//import Register from './Register.js';

const Start = (props) => 
{
  return(
  <View style={styles.container}>
    <ImageBackground source={require("/BGlogo1.png")} resizeMode="cover" style={styles.image}>
      
      
      <Text style={styles.text1}>
      FIDEL
      </Text>

      
      <Text style={styles.text}>
      If you already have an account
      </Text>

    <View style={styles.button}>
      <Button
        title="Login" 
        onPress={() => props.navigation.navigate('Login')}
        color="#c977be"
        
      />

      <Text style={styles.text}>
      Or
      </Text>

      <Button 
        title="Register" 
        onPress={() => props.navigation.navigate('Register')}
        color="#DB7093"/>
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
    
    color: '#cf86c5',
    fontSize: 18,
    lineHeight: 54,
    //fontWeight: 'bold',
    textAlign: 'center',
  },
  text1: {
    marginTop: 320,
    color: '#ffc273',
    fontSize: 60,
    lineHeight: 40,
    fontWeight: 'bold',
    textAlign: 'center',
    //backgroundColor: '#000000a0',
  },
  button: {
    padding: 70,
  }

});

const Stack = createStackNavigator();

const Navigate = () =>
{
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Start" component={Register} />   

      </Stack.Navigator>
    </NavigationContainer>
  );

}

export default Start;

