import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import SignUpEmail from '../pages/SignUpEmail';

import Header from '../components/Header';

const AuthStack = createStackNavigator();

const AuthRoutes: React.FC = () => (
  <AuthStack.Navigator screenOptions={{ headerShown: false }}>
    <AuthStack.Screen name="SignIn" component={SignIn} />
    <AuthStack.Screen
      name="SignUp"
      options={{
        headerShown: true,
        header: () => (<Header />)
      }}
      component={SignUp} />
    <AuthStack.Screen
      name="SignUpEmail"
      options={{
        headerShown: true,
        header: () => (<Header />)
      }}
      component={SignUpEmail}
    />
  </AuthStack.Navigator>
);

export default AuthRoutes;