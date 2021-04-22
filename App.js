import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import Login from './Screens/Login';
import SignUpComponent from './Screens/SignUp';
import Gossips from './Screens/Gossips';

export default function App() {

  let [fontsLoaded] = useFonts({
    'Poppins-Bold': require('./assets/Fonts/Poppins-Bold.ttf'),
    'Poppins-Light': require('./assets/Fonts/Poppins-Light.ttf'),
    'Poppins-Medium': require('./assets/Fonts/Poppins-Medium.ttf'),
    'Poppins-Regular': require('./assets/Fonts/Poppins-Regular.ttf'),
    'Poppins-SemiBold': require('./assets/Fonts/Poppins-SemiBold.ttf'),
    'Montserrat-SemiBold': require('./assets/Fonts/Montserrat-SemiBold.ttf'),

  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }
  else {
    return (
      <View style={styles.container}>
        <Login />
        {/* <SignUpComponent/>
        <Gossips/> */}
        <StatusBar style="auto" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1C252E',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
