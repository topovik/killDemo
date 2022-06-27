import { createStackNavigator } from "@react-navigation/stack";
import { Main } from "../../../screens/profile";

const Stack = createStackNavigator();

export function ProfileStack() {
  return (
    <Stack.Navigator
      initialRouteName="Main"
      screenOptions={{
        headerStyle: { backgroundColor: "#42f44b" },
        headerTintColor: "#ffffff",
        headerTitleStyle: { fontWeight: "bold" },
        headerBackTitleVisible: false,
      }}
    >
      <Stack.Screen
        name="Main"
        component={Main}
        options={{ title: "Профиль" }}
      />
    </Stack.Navigator>
  );
}
