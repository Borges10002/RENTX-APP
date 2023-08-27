import React from "react";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AppStackRoutes } from "./app.stack.routes";
import { useTheme } from "styled-components";
import { Platform } from "react-native";

import HomeSvg from "../assets/home.svg";
import CarSvg from "../assets/car.svg";
import PeopleSvg from "../assets/people.svg";
import { MyCars } from "../screens/MyCars";
import { Profile } from "../screens/Profile";

const { Navigator, Screen } = createBottomTabNavigator();

export function AppTabRoutes() {
  const { colors } = useTheme();

  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          height: 78,
          paddingVertical: Platform.OS === "ios" ? 20 : 0,
          backgroundColor: colors.background_primary,
        },
        tabBarActiveTintColor: colors.main,
        tabBarInactiveTintColor: colors.text_detail,
      }}
    >
      <Screen
        name="HomeTab"
        component={AppStackRoutes}
        options={{
          tabBarIcon: ({ color }) => (
            <HomeSvg width={24} height={24} fill={color} />
          ),
        }}
      />
      <Screen
        name="MyCarsTab"
        component={MyCars}
        options={{
          tabBarIcon: ({ color }) => (
            <CarSvg width={24} height={24} fill={color} />
          ),
        }}
      />
      <Screen
        name="ProfileTab"
        component={Profile}
        options={{
          tabBarIcon: ({ color }) => (
            <PeopleSvg width={24} height={24} fill={color} />
          ),
        }}
      />
    </Navigator>
  );
}
