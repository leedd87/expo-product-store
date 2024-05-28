import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from '../screens/home/HomeScreen';
import { LoginScreen } from '../screens/auth/Login/LoginScreen';
import { LoadingScreen } from '../screens/loading/LoadingScreen';
import { RegisterScreen } from '../screens/auth/Register/RegisterScreen';

export type RootStackParams = {
  LoginScreen: undefined;
  RegisterScreen: undefined;
  LoadingScreen: undefined;
  HomeScreen: undefined;
};

const Stack = createStackNavigator();

export const MainStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Loading" component={LoadingScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
    </Stack.Navigator>
  );
};
