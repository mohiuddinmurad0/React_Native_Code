import { Tabs } from "expo-router";
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
// import Ionicons from '@expo/vector-icons/Ionicons';
import Entypo from '@expo/vector-icons/Entypo';

export default function TabLayout() {
  return (
   <Tabs screenOptions={{tabBarActiveTintColor: 'tomato', tabBarInactiveTintColor: 'gray'}}>  
  
    {/* Using  focused attribute to focus icon and change*/}

    {/* <Tabs.Screen name= 'index' options={{
      title: 'Home', 
      tabBarIcon: ({color, focused}) => {
       return focused ? <FontAwesome5 name="home" size={24} color={color} /> :
        <Ionicons name="home-outline" size={24} color="black" />
    }}} /> */}

    <Tabs.Screen name= 'index' options={{
      title: 'Home', 
      tabBarIcon: ({color}) => {
       return <FontAwesome5 name="home" size={24} color={color} />
    }}} />

    <Tabs.Screen name='loginScreen' options={{title: 'Login', tabBarIcon: ({color}) => {
      return <Entypo name="login" size={24} color={color} />
    }}} />
  </Tabs>
  );
}
