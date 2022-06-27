import { createStackNavigator } from "@react-navigation/stack";
import { AppStack } from "./appStack";
import { AuthStack } from "./authStack";

const Stack = createStackNavigator();

export default function RootStack({ isLoggedIn }) {
  return (
    <Stack.Navigator
      initialRouteName={isLoggedIn ? "App" : "Auth"}
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Auth" component={AuthStack} />
      <Stack.Screen name="App" component={AppStack} />
    </Stack.Navigator>
  );
}
