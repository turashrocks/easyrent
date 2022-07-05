import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from '../screens/Home';
import PostDetails from '../screens/PostDetails';

const Route = () => {
    const Stack = createNativeStackNavigator();
    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={Home}/>
                <Stack.Screen name="PostDetails" component={PostDetails}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Route