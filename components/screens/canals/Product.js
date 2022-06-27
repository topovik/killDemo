import { useState } from "react";
import {
  Text,
  View,
  Image,
  ScrollView,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import styled from "styled-components/native";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";
import size from "lodash/size";
import PlayIcon from "../../../assets/playIcon.svg";
import MoreIcon from "../../../assets/moreIcon.svg";
import ActiveIcon from "../../../assets/favoriteIconActive.svg";
import DisactiveIcon from "../../../assets/favoriteIconDisactive.svg";
import CommentsIcon from "../../../assets/commentsIcon.svg";

const Card = styled(ImageBackground)`
  flex: 1;
  flex-direction: row;
  align-items: center;
  height: 72px;
  margin: 8px 16px;
  padding: 0 24px 0 4px;
  border-radius: 22px;
`;

const Title = styled(Text)`
  font-family: "TTCommons";
  font-size: 17px;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: -0.048px;
  color: #ffffff;
`;

const Version = styled(Text)`
  font-family: "TTCommons";
  font-size: 14px;
  font-weight: 600;
  line-height: 16px;
  letter-spacing: -0.048px;
  color: #504d52;
`;

const Description = styled(Text)`
  font-family: "TTCommons";
  font-size: 17px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: -0.048px;
  color: #ffffff;
`;

const LikesComments = styled(Text)`
  font-family: "TTCommons";
  margin-left: 8px;
  font-size: 17px;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: -0.048px;
  color: #7f7d85;
`;

const Online = styled(Text)`
  font-family: "TTCommons";
  font-size: 14px;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: -0.048px;
  color: #504d52;
`;

const Product = ({ route }) => {
  const tabBarHeight = useBottomTabBarHeight();
  const {
    name,
    version,
    description,
    online,
    image,
    likes,
    id,
    comments,
    check,
  } = route.params.data;
  const checkLike = likes.includes(id);
  const [toggle, setToggle] = useState(checkLike);

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={{ flex: 1, backgroundColor: "#121212" }}
    >
      <Image source={{ uri: image }} style={{ height: 375 }} />
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          margin: 16,
        }}
      >
        <View style={{ flex: 1, flexDirection: "row", alignItems: "center" }}>
          <PlayIcon />
          <View style={{ marginLeft: 16 }}>
            <Title>{name}</Title>
            <Version>{version}</Version>
          </View>
        </View>
        <MoreIcon />
      </View>
      <Description style={{ margin: 16 }}>{description}</Description>
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          justifyContent: "space-between",
          margin: 16,
          paddingBottom: tabBarHeight,
        }}
      >
        <View style={{ flex: 1, flexDirection: "row", alignItems: "center" }}>
          <TouchableOpacity
            onPress={() => setToggle((prevState) => !prevState)}
            style={{ flexDirection: "row", alignItems: "center" }}
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
            <LikesComments>{size(likes)}</LikesComments>
          </TouchableOpacity>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginLeft: 16,
            }}
          >
            <CommentsIcon />
            <LikesComments>{size(comments)}</LikesComments>
          </View>
        </View>
        <Online>{check || online === "online" ? "Онлайн" : online}</Online>
      </View>
    </ScrollView>
  );
};

export default Product;
