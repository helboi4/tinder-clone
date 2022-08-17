import { Button, View, Text } from 'react-native'
import {useNavigation} from "@react-navigation/core"
import React, {useLayoutEffect} from 'react'
import useAuth from '../hooks/UseAuth';

const LoginScreen = () => {

    const {signInWithGoogle, loading} = useAuth();
    const navigation = useNavigation();

    useLayoutEffect(() => {
      navigation.setOptions({
        headerShown: false,
      });
    }, [])

  return (
    <View>
      <Text>{loading ? "loading..." : "login to the app"}</Text>
      <Button title="Login" onPress={signInWithGoogle}/>
    </View>
  )
}

export default LoginScreen