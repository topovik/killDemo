import { useState } from "react";
import { Text, View, Image, TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import ActiveIcon from "../../assets/favoriteIconActive.svg";
import DisactiveIcon from "../../assets/favoriteIconDisactive.svg";

const Title = styled(Text)`
  font-family: "TTCommons";
  font-size: 17px;
  font-weight: 600;
  line-height: 20px;
  letter-spacing: -0.048px;
  color: #ffffff;
`;

const Mark = styled(Text)`
  align-self: center;
  font-family: "TTCommons";
  margin-left: 8px;
  font-size: 14px;
  font-weight: 600;
  line-height: 16px;
  letter-spacing: -0.048px;
  color: #ff453a;
`;

const Version = styled(Text)`
  font-family: "TTCommons";
  font-size: 14px;
  font-weight: 500;
  line-height: 16px;
  letter-spacing: -0.048px;
  color: #504d52;
`;

const ShortDescription = styled(Text)`
  font-family: "TTCommons";
  margin-top: 16px;
  font-size: 14px;
  font-weight: 500;
  line-height: 16px;
  letter-spacing: -0.048px;
  color: #7f7d85;
`;

const Publication = (data) => {
  const { name, mark, version, shortDescription, image, id } = data.item;
  const { navigation, name: artist, online, favorites, check } = data;
  const checkFavorite = favorites.includes(id);
  const [toggle, setToggle] = useState(checkFavorite);

  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate("Product", {
          data: { ...data.item, artist, online, check },
        })
      }
      style={{
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        paddingLeft: 16,
      }}
    >
      <Image
        source={{ uri: image }}
        resizeMode="cover"
        style={{ width: 100, height: 100, borderRadius: 24 }}
      />
      <View style={{ flex: 1, marginLeft: 32, marginRight: 16 }}>
        <View>
          <View style={{ flexDirection: "row" }}>
            <Title>{name}</Title>
            <Mark>{mark}</Mark>
          </View>
          <Version>{version}</Version>
        </View>
        <ShortDescription>{shortDescription}</ShortDescription>
      </View>
      <TouchableOpacity
        style={{ padding: 16, zIndex: 1 }}
        onStartShouldSetResponder={() => true}
        onPress={(e) => {
          e.stopPropagation();
          setToggle((prevState) => !prevState);
        }}
      >
        {toggle ? (
          <ActiveIcon
            style={{
              shadowColor: "rgba(255, 0, 0, 1)",
              shadowOffset: {
                width: 0,
                height: 0,
              },
              shadowOpacity: 0.9,
              shadowRadius: 8,
              elevation: 8,
            }}
          />
        ) : (
          <DisactiveIcon />
        )}
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

export default Publication;
