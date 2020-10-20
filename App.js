import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import Dashboard from './screens/dashboard';
import Mycountry from './screens/mycountry';
import Precautions from './screens/precautions';
import Viewall from './screens/viewall';
import Graph from './screens/graph';
import Bot from './screens/bot';
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

export default class App extends React.Component{
 stackscreen = () => {
   return(
    <Stack.Navigator>
      <Stack.Screen name="Dashboard" component={Dashboard} options={{headerTransparent:true,title:''}}/>
      <Stack.Screen name="Viewall" component={Viewall} options={{title:'All Countries',headerTintColor:'#fff',headerStyle:{backgroundColor:'#3498DB',borderBottomLeftRadius:20,borderBottomRightRadius:20}}}/>
      <Stack.Screen name="Graph" component={Graph} options={{title:'ThingSpeak Graph',headerTintColor:'#fff',headerStyle:{backgroundColor:'#3498DB',borderBottomLeftRadius:20,borderBottomRightRadius:20}}}/>
      <Stack.Screen name="Bot" component={Bot} options={{title:'Covid-19 ChatBot',headerTintColor:'#fff',headerStyle:{backgroundColor:'#3498DB',borderBottomLeftRadius:20,borderBottomRightRadius:20}}}/>
   </Stack.Navigator>
   );
 }

  render(){
    return(
      <NavigationContainer>
        <Tab.Navigator tabBarOptions={{
          activeTintColor: 'blue',
          inactiveTintColor: 'gray',
          style : {
            borderRadius : 100,
            marginHorizontal : 10,
            bottom : 10,
            backgroundColor : '#f2f2f2',
          },
          tabStyle : {
            borderRadius : 100,
          },
          labelStyle : {
            fontSize : 17,
            textAlign:'center',
            marginBottom : 15
          },
        }}>
          <Tab.Screen name="Dashboard" component={this.stackscreen}
          options={{
            tabBarLabel : 'Home'
          }}
          />
          <Tab.Screen name="My Country" component={Mycountry} 
          options={{
            tabBarLabel : 'Country'
          }}/>
          <Tab.Screen name="Precautions" component={Precautions} 
          options={{
            tabBarLabel : 'Aid'
          }}/>
          <Tab.Screen name="Bot" component={Bot} 
          options={{
            tabBarLabel : 'Bot'
          }}/>
        </Tab.Navigator>
      </NavigationContainer>
    );
  }
}