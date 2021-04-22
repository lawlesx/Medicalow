import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

export default function Gossips() {
  return (
    <View style={styles.container}>
      <View style={styles.gossipsContainer}>
        <View style={styles.profile}></View>
        <Text style={styles.gossips}>Gossips</Text>
      </View>
      <View style={styles.search}>
        <TextInput style={styles.input}>
          <Text style={styles.searchInput}>Search</Text>
          <FontAwesome name="search" size={24} color="black" />
        </TextInput>
      </View>
      <View style={styles.chatsContainer}>
        <View style={styles.chatProfile}></View>
        <View style={styles.chatContents}>
          <Text style={styles.name}>Group Name</Text>
          <Text style={styles.preview}>Lorem Ipsum dolor sit</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center'
  },
  gossipsContainer: {
    // flex: 1,
    flexDirection: 'row',
    height: 80,
    width: 350,
    alignItems: 'center',
    justifyContent: 'flex-start',
    // backgroundColor: 'darkred'
  },
  profile : {
    backgroundColor: '#f6f6f6',
    width: 60,
    height: 60,
    borderRadius:30
  },
  gossips : {
    color: 'white',
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 24,
    paddingLeft:24
  },
  search : {
    width: 305,
    height: 56,
    backgroundColor: '#f6f6f6',
    borderRadius: 30,
    paddingHorizontal: 25,
    justifyContent: 'center',
  },
  searchInput : {
    fontFamily: 'Poppins-Light',
    fontSize: 18,
    color: '#8e8e8e'
  },
  
  
})