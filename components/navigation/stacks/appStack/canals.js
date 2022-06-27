import { createStackNavigator } from "@react-navigation/stack";
import { Main, Artist, Canal, Preview, Product } from "../../../screens/canals";
import SearchIcon from "../../../../assets/search.svg";

const Stack = createStackNavigator();

export function CanalsStack() {
  return (
    <Stack.Navigator
      initialRouteName="Preview"
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
        name="Preview"
        component={Preview}
        options={{
          title: "Каналы",
          headerRight: (props) => (
            <SearchIcon
              {...props}
              style={{ marginRight: 24 }}
              onPress={() => {
                // Do something
              }}
            />
          ),
        }}
      />
      <Stack.Screen
        name="Artist"
        component={Artist}
        options={{
          title: "Каналы",
          headerTransparent: true,
          headerTitleStyle: { display: "none" },
        }}
      />
      <Stack.Screen
        name="Main"
        component={Main}
        options={{
          title: "Каналы",
          headerRight: (props) => (
            <SearchIcon
              {...props}
              style={{ marginRight: 24 }}
              onPress={() => {
                // Do something
              }}
            />
          ),
        }}
      />
      <Stack.Screen
        name="Canal"
        component={Canal}
        options={{
          title: "Каналы",
          headerTransparent: true,
          headerTitleStyle: { display: "none" },
        }}
      />
      <Stack.Screen
        name="Product"
        component={Product}
        options={({ route }) => {
          return {
            title: route.params.data.artist,
            presentation: "card",
            headerBackgroundContainerStyle: {
              backgroundColor: "#121212",
            },
          };
        }}
      />
    </Stack.Navigator>
  );
}
