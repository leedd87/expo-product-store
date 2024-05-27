import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from '../screens/home/HomeScreen';
import { LoginScreen } from '../screens/auth/Login/LoginScreen';

import { LoadingScreen } from '../screens/loading/LoadingScreen';

export type RootStackParams = {
  LoginScreen: undefined;
  LoadingScreen: undefined;
  HomeScreen: undefined;
};

const Stack = createStackNavigator();

export const MainStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
  );
};
