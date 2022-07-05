import Home from './src/screens/Home';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomTabNav from './src/navigation/BottomTabNavigator';

import PostDetails from './src/screens/PostDetails';

import { Amplify, Auth } from 'aws-amplify';
import awsconfig from './src/aws-exports';

function App() {
  Amplify.configure(awsconfig);
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name="Home" component={BottomTabNav}/>
        <Stack.Screen name="PostDetails" component={PostDetails}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App

