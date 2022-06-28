import { createStackNavigator } from "@react-navigation/stack";
import { Main, Prevent } from "../../../screens/add";

const Stack = createStackNavigator();

export function AddStack() {
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
        name="Prevent"
        component={Prevent}
        options={{ title: "Новая публикация" }}
      />
      <Stack.Screen
        name="Main"
        component={Main}
        options={{ title: "Новая публикация" }}
      />
    </Stack.Navigator>
  );
}
