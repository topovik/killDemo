import { createStackNavigator } from "@react-navigation/stack";
import { Main } from "../../../screens/add";

const Stack = createStackNavigator();

export function AddStack() {
  return (
    <Stack.Navigator
      initialRouteName="Main"
      screenOptions={{
        headerStyle: { backgroundColor: "transparent" },
        // headerTintColor: "#ffffff",
        headerTitleStyle: { fontWeight: "bold" },
        headerTitleAlign: "center",
        headerShadowVisible: false,
        headerBackTitleVisible: false,
      }}
    >
      <Stack.Screen
        name="Main"
        component={Main}
        options={{ title: "Каналы" }}
      />
    </Stack.Navigator>
  );
}
