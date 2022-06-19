import "react-native-gesture-handler";
import {
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
  Image,
  Button,
  StyleSheet,
} from "react-native";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import styled from "styled-components/native";
import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";
import Logo from "./assets/logo.svg";
import backGradient2 from "./assets/backGradient.png";
import PlusIcon from "./assets/plus.svg";
import CanalsIconDefault from "./assets/canalsIconDefault.svg";
import CanalsIconActive from "./assets/canalsIconActive.svg";
import ProfileIconDefault from "./assets/profileIconDefault.svg";
import ProfileIconActive from "./assets/profileIconActive.svg";
import SearchIcon from "./assets/search.svg";

import Canals from "./pages/canalsStack/canals";
import CanalsSlug from "./pages/canalsStack/canalsSlug";
import Publication from "./pages/canalsStack/publication";
import Profile from "./pages/profileStack/profile";

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

function CanalsStack() {
  return (
    <Stack.Navigator
      initialRouteName="Canals"
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

const Container = styled(ImageBackground)`
  flex: 1;
  row-gap: 1rem;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const LogoContainer = styled.View`
  margin-bottom: 64px;
`;

const Slogan = styled.Text`
  font-family: "TTCommons";
  font-size: 14px;
  color: #35353a;
  text-align: center;
  font-weight: 600;
  line-height: 16px;
`;

const ButtonContainer = styled(TouchableOpacity)`
  flex-direction: row;
  width: 343px;
  height: 60px;
  margin-top: ${({ mrgTop }) => mrgTop};
  background-color: ${({ bgColor }) => bgColor};
  border-radius: 22px;
`;

const TextContainer = styled(Text)`
  font-family: "TTCommons";
  align-self: center;
  width: 100%;
  color: ${({ color }) => color};
  font-size: 20px;
  line-height: 23px;
  text-align: center;
  letter-spacing: -0.48px;
`;

const Google = styled(Text)`
  color: ${({ color }) => color};
`;

const SubText = styled(Text)`
  font-family: "TTCommons";
  margin-top: 16px;
  font-size: 20px;
  color: #35353a;
  font-weight: 400;
  text-align: center;
  line-height: 23px;
  letter-spacing: -0.048px;
`;

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
    // <Container source={backGradient} resizeMode="cover">
    //   <StatusBar style="auto" />
    //   <LogoContainer>
    //     <Slogan>Добро пожаловать в</Slogan>
    //     <Logo />
    //   </LogoContainer>
    //   <View>
    //     <ButtonContainer bgColor="#fff" mrgTop="0">
    //       <TextContainer color="#35353a">
    //         Войти по номеру телефона
    //       </TextContainer>
    //     </ButtonContainer>
    //     <ButtonContainer bgColor="#fff" mrgTop="8px">
    //       <TextContainer color="#9f9fb7">
    //         Войти через <Google color="#4285f4">G</Google>
    //         <Google color="#eb4335">o</Google>
    //         <Google color="#fbbc05">o</Google>
    //         <Google color="#4285f4">g</Google>
    //         <Google color="#34a853">l</Google>
    //         <Google color="#eb4335">e</Google>
    //       </TextContainer>
    //     </ButtonContainer>
    //     <ButtonContainer bgColor="#0085ff" mrgTop="8px">
    //       <TextContainer color="#fff">Войти по VK ID</TextContainer>
    //     </ButtonContainer>
    //     <ButtonContainer bgColor="#35353a" mrgTop="8px">
    //       <TextContainer color="#fff">Войти с Apple ID</TextContainer>
    //     </ButtonContainer>
    //     <Text
    //       style={{
    //         fontFamily: "TTCommons",
    //         marginTop: 16,
    //         marginBottom: 16,
    //         textAlign: "center",
    //       }}
    //     >
    //       или
    //     </Text>
    //     <ButtonContainer bgColor="#7a7ad0" mrgTop="0">
    //       <TextContainer color="#fff">Зарегистрироваться</TextContainer>
    //     </ButtonContainer>
    //     <SubText>
    //       Уже есть аккаунт? <Text style={{ color: "#7a7ad0" }}>Войти</Text>
    //     </SubText>
    //   </View>
    // </Container>
  );
}
