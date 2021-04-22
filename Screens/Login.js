import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

export default function Login() {
  const [email,onEmailChange] = useState(null);
  const [password,onPasswordChange] = useState(null);
  const onLogin = () => {
    console.log('Button Pressed');
  }
  return (
    <View style={styles.Welcome}>
    <LinearGradient
        // Background Linear Gradient
        colors={['#00D1FF', '#1C252E']}
        start={[0.45,0]}
        end= {[0,0.45]}
        locations = {[0,1]}
        style={styles.background}
      />
      <Text style={styles.header}>Medicalow</Text>
      <Text style={styles.intro}>Knowledge Sharing Platform for
Doctors and Medical Students </Text>
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          onChangeText={onEmailChange}
          value={email}
          placeholder="Email"
        />
        <TextInput
          style={styles.input}
          onChangeText={onPasswordChange}
          value={password}
          placeholder="Password"
        />
        <TouchableOpacity
        style={styles.Lbutton}
        onPress={onLogin}
        >
          <Text style={styles.Login}>Log In</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.or}>Or</Text>
      
      <TouchableOpacity
        onPress={onLogin} //Has to be changed to onGoogle Sign In
        style={styles.button}
      >
       
        <FontAwesome name="google" size={40} color="#00D1FF" />
        <Text style={styles.Login}>Sign In with Google</Text>
      
      </TouchableOpacity>
      
      
    </View>

  )
}

const styles = StyleSheet.create({
  Welcome: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor:'#1C252E',
    height:400,
    width: 400
  },
  header: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 48,   
    color: 'white',
    textShadowColor: 'rgba(0, 0, 0, 0.25);',
    textShadowOffset: {
      width: 0,
      height: 4
    },
    textShadowRadius: 6,

  },
  button: {
    flex: 1,
    flexDirection: 'row',
    maxHeight: 55,
    width: 300,
    backgroundColor: 'white',
    borderTopLeftRadius:15,
    borderBottomRightRadius:15,
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
  intro : {
    fontFamily: 'Poppins-Regular',
    fontSize: 18,
    textAlign: 'center',
    paddingHorizontal: 20,
    letterSpacing: 1,
    lineHeight: 32,
    color: 'white'
  },
  input : {
    backgroundColor: '#f6f6f6',
    width: 290,
    height: 55,
    paddingHorizontal: 20,
    marginVertical: 15,
    borderTopLeftRadius:15,
    borderBottomRightRadius:15,
    fontSize: 18,
    fontFamily: 'Poppins-Light',
  },
  form: {
    // flex: 1,
    // justifyContent: 'space-evenly',
    alignItems: 'center',
    maxHeight: 1000,
    // backgroundColor: 'blue'

  },
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: 600,
  },
  Lbutton : {
    flex: 1,
    flexDirection: 'row',
    maxHeight: 55,
    width: 123,
    backgroundColor: 'white',
    borderTopLeftRadius:15,
    borderBottomRightRadius:15,
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
    marginTop: 15
  },
  or : {
    color: '#8E8E8E',
    fontSize: 20,
    fontFamily: 'Poppins-Regular',
    
  }
  
})