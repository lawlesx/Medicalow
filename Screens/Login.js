import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

export default function Login() {
  return (
    <View style={styles.Welcome}>
      <View style={styles.cover3}></View>
      <View style={styles.cover2}></View>
      <View style={styles.cover1}></View>

      <Text style={styles.header}>Medicalow</Text>
      <View style={styles.button}>
        <FontAwesome name="google" size={40} color="#EB88F3" />
        <Text style={styles.Login}>Sign In with Google</Text>
      </View>
      <Text style={styles.intro}>Knowledge Sharing Platform for
Doctors and Medical Students </Text>
    </View>

  )
}

const styles = StyleSheet.create({
  Welcome: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  header: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 48,   
    color: 'white',
    textShadowColor: '#9441B0',
    textShadowOffset: {
      width: 0,
      height: 4
    },
    textShadowRadius: 4
  },
  button: {
    flex: 1,
    flexDirection: 'row',
    maxHeight: 60,
    width: 300,
    backgroundColor: 'white',
    borderRadius: 12,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  Login : {
    fontFamily: 'Poppins-Regular',
    fontSize: 18,
  },
  cover1: {
    height: 440,
    width: 382,
    backgroundColor: '#BF49D3',
    position: 'absolute',

    transform: [{ rotate: "-15deg" }],
    top: -45,
    left: 150
  },
  cover2: {
    height: 440,
    width: 382,
    backgroundColor: '#9441B0',
    position: 'absolute',

    transform: [{ rotate: "-15deg" }],
    top: 22,
    left: 113
  },
  cover3: {
    height: 575,
    width: 519,
    backgroundColor: '#EB88F3',
    position: 'absolute',

    transform: [{ rotate: "-8deg" }],
    top: -50,
    left: 50,
  },
  intro : {
    fontFamily: 'Poppins-Regular',
    fontSize: 18,
    textAlign: 'center',
    paddingHorizontal: 20,
    letterSpacing: 1
  }

  
})