import {
  StackCardStyleInterpolator,
  createStackNavigator,
} from '@react-navigation/stack';
import { HomeScreen } from '../screens/home/HomeScreen';

import { LoadingScreen } from '../screens/loading/LoadingScreen';
import { RegisterScreen } from '../screens/auth/Register/RegisterScreen';
import { LoginScreen } from '../screens/auth/Login/LoginScreen';

export type RootStackParams = {
  Login: undefined;
  Register: undefined;
  Loading: undefined;
  Home: undefined;
};

const Stack = createStackNavigator<RootStackParams>();

const fadeAnimation: StackCardStyleInterpolator = ({ current }) => {
  return {
    cardStyle: {
      opacity: current.progress,
    },
  };
};

export const MainStackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        options={{ cardStyleInterpolator: fadeAnimation }}
        name="Home"
        component={HomeScreen}
      />
      <Stack.Screen
        options={{ cardStyleInterpolator: fadeAnimation }}
        name="Login"
        component={LoginScreen}
      />
      <Stack.Screen
        options={{ cardStyleInterpolator: fadeAnimation }}
        name="Loading"
        component={LoadingScreen}
      />
      <Stack.Screen
        options={{ cardStyleInterpolator: fadeAnimation }}
        name="Register"
        component={RegisterScreen}
      />
    </Stack.Navigator>
  );
};
