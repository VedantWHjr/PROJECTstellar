import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default class DailyPic extends React.Component{
    render(){
        return(
            <View
                style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center"
                }}>
                <Text>Daily Picture Screen!</Text>
            </View>
        )

    }

}