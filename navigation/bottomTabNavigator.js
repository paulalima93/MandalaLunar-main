import React, { Component } from "react";
import { StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";

import Home from "../screen/home";
import Calendar from "../screen/calendar";
import NewDay from "../screen/NewDay";
import Older from "../screen/older";
import Settings from "../screen/settings";
import fisico from'../screen/Físico';

const Tab = createBottomTabNavigator();

export default class BottomTabNavigator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      light_theme: true,
      isUpdated: false
    };
  }

  render() {
    return (
      <Tab.Navigator
        labeled={false}
        barStyle={
            styles.bottomTabStyle
        }
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === "Home") {
              iconName = focused ? "home" : "home-outline";
            } else if (route.name === "Calendar") {
              iconName = focused ? "add-circle" : "add-circle-outline";
            }
            return (
              <Ionicons
                name={iconName}
                size={25}
                color={color}
                style={styles.icons}
              />
            );
          }
        }
        
        )}
        activeColor={"#ee8249"}
        inactiveColor={"gray"}
      >
        <Tab.Screen
          name="home"
          component={Home}
        />
        <Tab.Screen
          name="calendar"
          component={Calendar}
        />
        <Tab.Screen
          name="newDay"
          component={NewDay}
        />
        <Tab.Screen
          name="older"
          component={Older}
        />
        <Tab.Screen
          name="settings"
          component={Settings}
        />
      </Tab.Navigator>
    );
  }
}

const styles = StyleSheet.create({
  bottomTabStyle: {
    backgroundColor: "#2f345d",
    height: "8%",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    overflow: "hidden",
    position: "absolute"
  },
  bottomTabStyleLight: {
    backgroundColor: "#eaeaea",
    height: "8%",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    overflow: "hidden",
    position: "absolute"
  },
  icons: {
    width: 30,
    height: 30
  }
});


