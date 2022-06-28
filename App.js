import "react-native-gesture-handler";
import { useState } from "react";
import { ImageBackground, StatusBar } from "react-native";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { useFonts } from "expo-font";
import Toast from "react-native-toast-message";
import RootStack from "./components/navigation/stacks";
import { mySelf as users } from "./staticData";
import { AppContext, isLoggedContext } from "./appContext";
import { toastConfig } from "./utils/toastConfig";

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "transparent",
  },
};

export default function App() {
  let [fontsLoaded] = useFonts({
    TTCommons: require("./assets/fonts/TTCommons-Medium.ttf"),
  });
  const [isLoggedIn, setIsLoggedIn] = useState(true);

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
        favorites.push({ ...item2, artist: item.name, online: item.online });
      }
    }
  }

  return (
    <isLoggedContext.Provider value={[isLoggedIn, setIsLoggedIn]}>
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
          <StatusBar
            barStyle="light-content"
            translucent
            backgroundColor="rgba(0,0,0,0)"
          />
          <NavigationContainer theme={MyTheme}>
            <RootStack isLoggedIn={isLoggedIn} />
          </NavigationContainer>
          <Toast config={toastConfig} />
        </ImageBackground>
      </AppContext.Provider>
    </isLoggedContext.Provider>
  );
}
