import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import styled from "styled-components/native";
import SubscribesIcon from "../../assets/subscribesIcon.svg";
import MoreIcon from "../../assets/moreIcon.svg";

import Animated, {
  interpolate,
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

const NameArtist = styled(Text)`
  font-family: "TTCommons";
  font-size: 24px;
  font-weight: 600;
  line-height: 28px;
  letter-spacing: -0.048px;
  color: #ffffff;
`;

const DescriptionArtist = styled(Text)`
  font-family: "TTCommons";
  font-size: 14px;
  font-weight: 500;
  line-height: 16px;
  letter-spacing: -0.048px;
  color: #ffffff;
`;

const CountSubscribesArtist = styled(Text)`
  font-family: "TTCommons";
  margin-left: 8px;
  margin-right: 27px;
  font-size: 17px;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: -0.048px;
  color: #7f7d85;
`;

const Header = ({ data, scrollY, ...rest }) => {
  console.log(rest.containerRef.current.captureRef)
  return (
    <View>
      {data.map((item) => {
        const {
          name,
          mark,
          image,
          poster,
          description,
          subscribes,
          id: userID,
        } = item;

        // const stylez1 = useAnimatedStyle(() => {
        //   return {
        //     opacity: interpolate(
        //       scrollY,
        //       [0, 1],
        //       [0.5, 1],
        //       Animated.Extrapolate.CLAMP
        //     ),
        //   };
        // });

        const opacity = scrollY.interpolate({
          inputRange: [0, 1],
          outputRange: [1, 0],
          extrapolate: "clam",
        });

        return (
          <View key={userID}>
            <Image source={{ uri: poster }} style={{ height: 240 }} />
            <View
              style={{
                flexDirection: "row",
                alignItems: "flex-end",
                justifyContent: "space-between",
                marginTop: -12,
                marginLeft: 16,
                marginRight: 16,
              }}
            >
              <View style={{ flexDirection: "row" }}>
                <View style={{ position: "relative", top: -8 }}>
                  <Animated.Image
                    source={{ uri: image }}
                    resizeMode="cover"
                    style={[
                      {
                        width: 72,
                        height: 72,
                        borderRadius: 32,
                        opacity
                      },
                      // stylez1,
                    ]}
                  />
                  <View
                    style={{
                      flex: 0,
                      position: "absolute",
                      bottom: -9,
                      right: -9,
                      width: 19,
                      height: 19,
                      marginRight: 8,
                      borderRadius: 9.5,
                      borderWidth: 3,
                      borderColor: "#121212",
                      backgroundColor: mark ? "#30d158" : "#7f7d85",
                    }}
                  />
                </View>
                <View style={{ alignSelf: "flex-end", marginLeft: 16 }}>
                  <NameArtist>{name}</NameArtist>
                  <DescriptionArtist>{description}</DescriptionArtist>
                </View>
              </View>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <SubscribesIcon />
                  <CountSubscribesArtist>{subscribes}</CountSubscribesArtist>
                </View>
                <MoreIcon />
              </View>
            </View>
          </View>
        );
      })}
    </View>
  );
};

export default Header;
