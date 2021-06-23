import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { theme } from "../global/theme";

import { AppointmentDetails } from "../screens/AppointmentDetails";
import { HomeScreen } from "../screens/Home";
import { SignIn } from "../screens/SignIn";

const { Navigator, Screen } = createStackNavigator();

export function AuthRoutes() {
  return (
    <Navigator
      headerMode="none"
      screenOptions={{
        cardStyle: {
          backgroundColor: theme.colors.secondary100,
        },
      }}
    >
      <Screen name="SignIn" component={SignIn} />
      <Screen name="Home" component={HomeScreen} />
      <Screen name="AppointmentDetails" component={AppointmentDetails} />

    </Navigator>
  );
}
