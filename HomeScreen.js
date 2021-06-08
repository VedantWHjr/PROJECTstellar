import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  ImageBackground,
  SafeAreaView,
  StatusBar,
  Platform,
} from 'react-native';

export default class HomeScreen extends Component {
  render() {
    return( 
    <View>
        <View>
        <Text>Stellar App</Text>
       
        </View> 
        <TouchableOpacity
        onPress={()=>this.props.navigation.navigate('Daily Picture')}>
        <Text>Daily Picture ;)</Text>
        </TouchableOpacity>
        <TouchableOpacity
        onPress={()=>this.props.navigation.navigate('Space Ship')}>
        <Text>Space Ship</Text>
        </TouchableOpacity>
        <TouchableOpacity
        onPress={()=>this.props.navigation.navigate('Star Map')}>
        <Text>Star Map</Text>
        </TouchableOpacity>
      
    </View>
    
    
    )
  }
}

