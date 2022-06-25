import "react-native-gesture-handler";
import { Text, View, ImageBackground } from "react-native";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useFonts } from "expo-font";
import PlusIcon from "./assets/plus.svg";
import CanalsIconDefault from "./assets/canalsIconDefault.svg";
import CanalsIconActive from "./assets/canalsIconActive.svg";
import ProfileIconDefault from "./assets/profileIconDefault.svg";
import ProfileIconActive from "./assets/profileIconActive.svg";
import SearchIcon from "./assets/search.svg";

import Canals from "./pages/canalsStack/canals";
import CanalsSlug from "./pages/canalsStack/canalsSlug";
import Publication from "./pages/canalsStack/publication";
import CanalsPreview from "./pages/canalsStack/canalsPreview";
import CanalsPreviewArtist from "./pages/canalsStack/canalsPreviewArtist";

import Profile from "./pages/profileStack/profile";

import Auth from "./pages/regStack/auth";
import SigninPhone from "./pages/regStack/signinPhone";
import ConfirmSms from "./pages/regStack/confirmSms";
import SetName from "./pages/regStack/setName";

import { mySelf as users } from "./staticData";
import { AppContext } from "./appContext";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "transparent",
  },
};

function AuthStack() {
  return (
    <Stack.Navigator
      initialRouteName="SigninPhone"
      screenOptions={{
        headerStyle: { backgroundColor: "transparent" },
        headerTintColor: "#fff",
        headerTitleStyle: { fontWeight: "bold" },
        headerTitleAlign: "center",
        headerShadowVisible: false,
        headerBackTitleVisible: false,
      }}
    >
      <Stack.Screen
        name="Auth"
        component={Auth}
        options={{
          title: "Каналы",
          headerTransparent: true,
          headerTitleStyle: { display: "none" },
        }}
      />
      <Stack.Screen
        name="SigninPhone"
        component={SigninPhone}
        options={{
          title: "Вход",
        }}
      />
      <Stack.Screen
        name="ConfirmSms"
        component={ConfirmSms}
        options={{
          title: "Вход",
        }}
      />
      <Stack.Screen
        name="SetName"
        component={SetName}
        options={{
          title: "Вход",
        }}
      />
    </Stack.Navigator>
  );
}

function CanalsStack() {
  return (
    <Stack.Navigator
      initialRouteName="CanalsPreviewArtist"
      screenOptions={{
        headerStyle: { backgroundColor: "transparent" },
        headerTintColor: "#fff",
        headerTitleStyle: { fontWeight: "bold" },
        headerTitleAlign: "center",
        headerShadowVisible: false,
        headerBackTitleVisible: false,
      }}
    >
      <Stack.Screen
        name="CanalsPreview"
        component={CanalsPreview}
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
        name="CanalsPreviewArtist"
        component={CanalsPreviewArtist}
        options={{
          title: "Каналы",
          headerTransparent: true,
          headerTitleStyle: { display: "none" },
        }}
      />
      <Stack.Screen
        name="Canals"
        component={Canals}
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
        name="CanalsSlug"
        component={CanalsSlug}
        options={{
          title: "Каналы",
          headerTransparent: true,
          headerTitleStyle: { display: "none" },
        }}
      />
      <Stack.Screen
        name="Publication"
        component={Publication}
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

function AddStack() {
  return (
    <Stack.Navigator
      initialRouteName="Add"
      screenOptions={{
        headerStyle: { backgroundColor: "transparent" },
        headerTintColor: "#fff",
        headerTitleStyle: { fontWeight: "bold" },
        headerTitleAlign: "center",
        headerShadowVisible: false,
        headerBackTitleVisible: false,
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
    >
      <Stack.Screen
        name="Canals"
        component={Canals}
        options={{ title: "Каналы" }}
      />
    </Stack.Navigator>
  );
}

function ProfileStack() {
  return (
    <Stack.Navigator
      initialRouteName="Profile"
      screenOptions={{
        headerStyle: { backgroundColor: "#42f44b" },
        headerTintColor: "#fff",
        headerTitleStyle: { fontWeight: "bold" },
        headerBackTitleVisible: false,
      }}
    >
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{ title: "Профиль" }}
      />
    </Stack.Navigator>
  );
}

export default function App() {
  let [fontsLoaded] = useFonts({
    TTCommons: require("./assets/fonts/TTCommons-Medium.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  const selfID = 2;
  const userData = users.filter((item) => item.id === selfID);
  const check = !!userData.length;

  let subscribes = [];
  let favorites = [];

  for (const item of users) {
    if (
      userData[0].subscribes.includes(item.id) &&
      userData[0].id !== item.id
    ) {
      subscribes.push(item);
    }
  }

  for (const item of users) {
    for (const item2 of item.publications) {
      if (userData[0].favorites.includes(item2.id)) {
        favorites.push(item2);
      }
    }
  }

  return (
    <AppContext.Provider
      value={{
        check,
        userData,
        subscribes,
        favorites,
      }}
    >
      <ImageBackground
        style={{ flex: 1 }}
        source={require("./assets/background.png")}
        resizeMode="stretch"
      >
        <NavigationContainer theme={MyTheme}>
          <Tab.Navigator
            initialRouteName="Feed"
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
        </NavigationContainer>
      </ImageBackground>
    </AppContext.Provider>
  );
}
