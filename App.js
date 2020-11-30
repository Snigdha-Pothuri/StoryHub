import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-na-tabs';
import WriteStory from './screens/WriteStory';
import ReadStory from './screens/ReadStory';

export default function App() {

  return (
    <View style={styles.container}>
     <WriteStory/> 
     <ReadStory/>
     <Text> Storyhub App </Text>
    </View>
  );
 
}

const TabNavigator = createBottomTabNavigator({
  ReadStory: { screen: ReadStory },
  WriteStory: { screen: WriteStory }
},
{defaultNavigationOptions:
({navigation})=>({
  tabBarIcon:()=>{
    const routeName = navigation.state.routeName 
  }
})
}
);
const AppContainer = createAppContainer(TabNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

