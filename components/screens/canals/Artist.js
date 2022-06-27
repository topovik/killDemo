import {
  Text,
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";
import styled from "styled-components/native";
import { useNavigation } from "@react-navigation/native";

const ArtistName = styled(Text)`
  font-family: "TTCommons";
  font-size: 24px;
  font-weight: 600;
  line-height: 28px;
  text-align: center;
  letter-spacing: -0.048px;
  color: #ffffff;
`;

const CountPublications = styled(Text)`
  font-family: "TTCommons";
  font-size: 14px;
  font-weight: 500;
  line-height: 16px;
  text-align: center;
  letter-spacing: -0.048px;
  color: #ffffff;
`;

const ButtonText = styled(Text)`
  font-family: "TTCommons";
  font-size: 20px;
  font-weight: 500;
  line-height: 23px;
  letter-spacing: -0.048px;
  color: #ffffff;
`;

const Cost = styled(Text)`
  font-family: "TTCommons";
  font-size: 17px;
  font-weight: 500;
  line-height: 20px;
  text-align: center;
  letter-spacing: -0.048px;
  color: #ffffff;
`;

const Artist = () => {
  const tabBarHeight = useBottomTabBarHeight();
  const navigation = useNavigation();

  return (
    <ImageBackground
      style={{ flex: 1, paddingHorizontal: 16 }}
      source={require("../../../assets/background-preview-artist.png")}
      resizeMode="stretch"
    >
      <View style={{ flex: 1, justifyContent: "center" }}>
        <Image
          source={{
            uri: "https://i.ru-music.cc/img/artists/full/man-kaufman.png",
          }}
          style={{
            alignSelf: "center",
            width: 128,
            height: 128,
            marginBottom: 16,
            borderRadius: 60,
          }}
        />
        <ArtistName>Man Kaufman</ArtistName>
        <CountPublications>24 публикации</CountPublications>
      </View>
      <View
        style={{
          flex: 0.25,
          justifyContent: "center",
          paddingBottom: tabBarHeight,
        }}
      >
        <TouchableOpacity
          style={{
            alignSelf: "center",
            alignItems: "center",
            justifyContent: "center",
            width: 300,
            height: 60,
            marginBottom: 8,
            backgroundColor: "#5e5ce6",
            borderRadius: 22,
          }}
          onPress={() => navigation.navigate("Main")}
        >
          <ButtonText>Подписаться</ButtonText>
        </TouchableOpacity>
        <Cost>за 99₽ в месяц</Cost>
      </View>
    </ImageBackground>
  );
};

export default Artist;
