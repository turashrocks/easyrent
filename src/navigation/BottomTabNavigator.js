import {AntDesign, SimpleLineIcons, Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { colors } from '../modal/color';

import Home from '../screens/Home';
import PostDetails from '../screens/PostDetails';
import Listings from '../screens/Listings';

const BottomTabNav = () => {
    // const Stack = createNativeStackNavigator();
    const Tab = createBottomTabNavigator();
    return(
        <Tab.Navigator
            // sceneContainerStyle={{backgroundColor: colors.backgroundColor}} 
            screenOptions={{
                headerShown: false,
                tabBarActiveBackgroundColor: colors.black,
                tabBarInactiveBackgroundColor: colors.white,
                tabBarActiveTintColor: colors.primaryColor,
                tabBarInactiveTintColor: colors.black,
                tabBarStyle:{ height: 60},
            }}>
            <Tab.Screen 
                name="Explore" 
                component={Home} 
                options={{
                    tabBarIcon:({color})=>(
                        <AntDesign name='find' size={25} color={color}/>
                    )
                }}
            />
            <Tab.Screen 
                name="Job Lists" 
                component={Listings} 
                options={{
                    tabBarIcon:({color})=>(
                        <SimpleLineIcons name='briefcase' size={25} color={color}/>
                    )
                }}
            />
            <Tab.Screen 
                name="Chat" 
                component={Home} 
                options={{
                    tabBarIcon:({color})=>(
                        <Ionicons name='chatbox-outline' size={25} color={color}/>
                    )
                }}
            />
            <Tab.Screen 
                name="Profile" 
                component={PostDetails} 
                options={{
                    tabBarIcon:({color})=>(
                        <SimpleLineIcons name='user' size={25} color={color}/>
                    )
                }}
            />
        </Tab.Navigator>
    )
}

export default BottomTabNav