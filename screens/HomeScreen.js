import { View, Text, Button } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import useAuth from '../hooks/UseAuth'

const HomeScreen = () => {

const navigation = useNavigation();

const {logout} = useAuth();

  return (
    <View>
      <Text>I am the HomeScreen</Text>
      <Button title="Go to Chat Screen" onPress={()=> navigation.navigate("Chat")}/>
      <Button title="Logout" onPress={logout}/>
    </View>
  )
}

export default HomeScreen