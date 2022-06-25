import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";
import {
  Text,
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import styled from "styled-components/native";

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

const CanalsPreviewArtist = () => {
  const tabBarHeight = useBottomTabBarHeight();

  return (
    <ImageBackground
      style={{ flex: 1, paddingHorizontal: 16 }}
      source={require("../../assets/background-preview-artist.png")}
      resizeMode="stretch"
    >
      <View style={{ flex: 1, justifyContent: "center" }}>
        <Image
          source={{
            uri: "https://biogr.net/wp-content/uploads/2021/04/Screenshot_42-1.jpg",
          }}
          style={{
            alignSelf: "center",
            width: 128,
            height: 128,
            marginBottom: 16,
            borderRadius: 60,
          }}
        />
        <ArtistName>просто Лера</ArtistName>
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
        >
          <ButtonText>Подписаться</ButtonText>
        </TouchableOpacity>
        <Cost>за 99₽ в месяц</Cost>
      </View>
    </ImageBackground>
  );
};

export default CanalsPreviewArtist;
