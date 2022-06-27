import { createStackNavigator } from "@react-navigation/stack";
import {
  Main,
  SetName,
  Signin,
  Signup,
  Sms,
  Police,
} from "../../../screens/auth";

const Stack = createStackNavigator();

export function AuthStack() {
  return (
    <Stack.Navigator
      initialRouteName="Main"
      screenOptions={{
        headerStyle: { backgroundColor: "transparent" },
        headerTintColor: "#ffffff",
        headerTitleStyle: { fontWeight: "bold" },
        headerTitleAlign: "center",
        headerShadowVisible: false,
        headerBackTitleVisible: false,
      }}
    >
      <Stack.Screen
        name="Main"
        component={Main}
        options={{
          headerTransparent: true,
          headerTitleStyle: { display: "none" },
        }}
      />
      <Stack.Screen
        name="SetName"
        component={SetName}
        options={{
          title: "Вход",
        }}
      />
      <Stack.Screen
        name="Signin"
        component={Signin}
        options={{
          title: "Вход",
        }}
      />
      <Stack.Screen
        name="Signup"
        component={Signup}
        options={{
          title: "Вход",
        }}
      />
      <Stack.Screen
        name="Sms"
        component={Sms}
        options={{
          title: "Вход",
        }}
      />
      <Stack.Screen
        name="Police"
        component={Police}
        options={{
          title: "Вход",
        }}
      />
    </Stack.Navigator>
  );
}
