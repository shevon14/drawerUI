import React from "react";
import HomeScreen from '../screens/home';
import DrawerScreen from '../screens/drawer';
import { createStackNavigator } from "react-navigation-stack";
import { createDrawerNavigator } from "react-navigation-drawer";
import { createAppContainer } from "react-navigation";
import { COLORS, SIZES } from '../constants/theme';
import Icon  from "react-native-vector-icons/MaterialCommunityIcons";


const homeStack = createStackNavigator({
    home: {
        screen: HomeScreen,
        navigationOptions: {
            headerTitle: 'Finance Manager',
            headerStyle: {
                backgroundColor: COLORS.primary,
            },
            headerTitleStyle: {
                color: COLORS.white,
            }
        }
    }
}, {
    defaultNavigationOptions: ({navigation}) => ({
        headerLeft: (
            <Icon name="menu"
            onPress={() => navigation.openDrawer()}
            size={30}
            style={{ color: COLORS.white, paddingLeft: 10}} />
        )
    })
});

const drawerStack = createDrawerNavigator({
    drawer: {
        screen: homeStack,
    },
}, {
    contentComponent: DrawerScreen,
    drawerWidth: SIZES.width - 60,
});


const router = createAppContainer(drawerStack);

export default router;