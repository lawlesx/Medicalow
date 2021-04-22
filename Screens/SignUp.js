import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity,
TouchableWithoutFeedback, Keyboard } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import {Formik} from 'formik';
import * as yup from 'yup';

const signUpSchema = yup.object({
  username: yup.string().required().min(4),
  email: yup.string().required().min(8),
  password: yup.string().required().min(6),
  name: yup.string().required().min(4)
})

export default function SignUpComponent() {

  const onSignIn = () => {
    console.log('Signed In');
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.signup}>
        <LinearGradient
          // Background Linear Gradient
          colors={['#00D1FF', '#1C252E']}
          start={[0.45,0]}
          end= {[0,0.45]}
          locations = {[0,1]}
          style={styles.background}
        />
      
        <Text style={styles.intro}>Enter Details Below</Text>
        
        <Formik
          initialValues={{username: '',email: '',password: '', name:''}}
          validationSchema={signUpSchema}
          onSubmit={(values, actions)=> {
            actions.resetForm();
            console.log(values);
          }}
        >
          {(props) => (
            <View style={styles.form}>
              <TextInput
                style={styles.input}
                onChangeText={props.handleChange('username')}
                value={props.values.username}
                placeholder="Username"
              />
              <Text style={styles.warning}>{props.touched.username && props.errors.username}</Text>
              <TextInput
                style={styles.input}
                onChangeText={props.handleChange('email')}
                value={props.values.email}
                placeholder="Email"
              />
              <Text style={styles.warning}>{props.touched.email && props.errors.email}</Text>

              <TextInput
                style={styles.input}
                onChangeText={props.handleChange('password')}
                value={props.values.password}
                placeholder="Password"
              />
              <Text style={styles.warning}>{props.touched.password && props.errors.password}</Text>

              <TextInput
                style={styles.input}
                onChangeText={props.handleChange('name')}
                value={props.values.name}
                placeholder="Name"
              />
              <Text style={styles.warning}>{props.touched.name && props.errors.name}</Text>
              <TouchableOpacity
                style={styles.Lbutton}
                onPress={props.handleSubmit}
              >
                  <Text style={styles.Login}>Log In</Text>
              </TouchableOpacity>
            </View>
          )}

        </Formik>
        <Text style={styles.or}>Or</Text>
      
        <TouchableOpacity
          onPress={onSignIn} //Has to be changed to onGoogle Sign In
          style={styles.button}
        >
        
          <FontAwesome name="google" size={40} color="#00D1FF" />
          <Text style={styles.Login}>Sign In with Google</Text>
        
        </TouchableOpacity>
        
      </View>
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
  signup: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height:400,
    width: 400,
  },
  intro: {
    fontFamily: 'Poppins-Regular',
    fontSize: 18,
    textAlign: 'center',
    paddingHorizontal: 20,
    letterSpacing: 1,
    lineHeight: 32,
    color: 'white',
    marginBottom: 10
  },
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: 600,
    
  },
  form: {
    // flex: 1,
    // justifyContent: 'space-evenly',
    alignItems: 'center',
    // maxHeight: 1000,
    // backgroundColor: 'cornsilk'

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
  input : {
    backgroundColor: '#f6f6f6',
    width: 290,
    height: 55,
    paddingHorizontal: 20,
    marginTop: 15,
    borderTopLeftRadius:15,
    borderBottomRightRadius:15,
    fontSize: 18,
    fontFamily: 'Poppins-Light',
  },
  Login : {
    fontFamily: 'Poppins-Regular',
    fontSize: 18,
  },
  warning : {
    color: '#f6f6f6',
    fontSize: 12,
    fontFamily: 'Poppins-Regular',
    marginTop: 5
    
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
  or : {
    color: '#8E8E8E',
    fontSize: 20,
    fontFamily: 'Poppins-Regular',
    marginVertical: 20,
    // backgroundColor: 'cornsilk',
    alignItems: 'center'
    
  }
})