import { View, Text } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { CanalsStack } from "./canals";
import { ProfileStack } from "./profile";
import { AddStack } from "./add";
import PlusIcon from "../../../../assets/plus.svg";
import CanalsIconDefault from "../../../../assets/canalsIconDefault.svg";
import CanalsIconActive from "../../../../assets/canalsIconActive.svg";
import ProfileIconDefault from "../../../../assets/profileIconDefault.svg";
import ProfileIconActive from "../../../../assets/profileIconActive.svg";

const Tab = createBottomTabNavigator();

export const AppStack = () => {
  return (
    <Tab.Navigator
      initialRouteName="CanalsStack"
      screenOptions={{
        tabBarShowLabel: false,
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarStyle: {
          position: "absolute",
          height: 100,
          elevation: 0,
          borderTopWidth: 0,
          backgroundColor: "#030102",
          borderTopLeftRadius: 32,
          borderTopRightRadius: 32,
        },
        tabBarItemStyle: {
          flex: 1,
          height: "100%",
        },
      }}
    >
      <Tab.Screen
        name="CanalsStack"
        component={CanalsStack}
        options={{
          // tabBarStyle: { display: "none" }, //hide tabbar
          tabBarIcon: ({ focused }) => {
            return (
              <View
                style={{
                  flex: 1,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {focused ? (
                  <CanalsIconActive
                    style={{
                      shadowColor: "rgba(255, 0, 0, 1)",
                      shadowOffset: {
                        width: 0,
                        height: 4,
                      },
                      shadowOpacity: 0.8,
                      shadowRadius: 8,
                      elevation: 12,
                    }}
                  />
                ) : (
                  <CanalsIconDefault />
                )}
                <Text
                  style={{
                    marginTop: 8,
                    color: focused ? "#ffffff" : "#7f7d85",
                  }}
                >
                  Каналы
                </Text>
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="AddStack"
        component={AddStack}
        options={{
          tabBarIcon: () => {
            return (
              <View
                style={{
                  justifyContent: "center",
                  flexDirection: "row",
                  width: 50,
                  height: 50,
                  backgroundColor: "#ff453a",
                  borderRadius: 23,
                  shadowColor: "rgba(255, 0, 0, 1)",
                  shadowOffset: {
                    width: 0,
                    height: 4,
                  },
                  shadowOpacity: 0.8,
                  shadowRadius: 8,
                  elevation: 12,
                }}
              >
                <PlusIcon style={{ flex: 1, alignSelf: "center" }} />
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="ProfileStack"
        component={ProfileStack}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View
                style={{
                  flex: 1,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {focused ? (
                  <ProfileIconActive
                    style={{
                      shadowColor: "rgba(255, 0, 0, 1)",
                      shadowOffset: {
                        width: 0,
                        height: 4,
                      },
                      shadowOpacity: 0.8,
                      shadowRadius: 8,
                      elevation: 12,
                    }}
                  />
                ) : (
                  <ProfileIconDefault />
                )}
                <Text
                  style={{
                    marginTop: 8,
                    color: focused ? "#ffffff" : "#7f7d85",
                  }}
                >
                  Профиль
                </Text>
              </View>
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};
