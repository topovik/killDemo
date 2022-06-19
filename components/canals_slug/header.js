import { useContext } from "react";
import { View, Text, Image } from "react-native";
import styled from "styled-components/native";
import { useHeaderMeasurements } from "react-native-collapsible-tab-view";
import Animated, {
  interpolate,
  useAnimatedStyle,
  useDerivedValue,
} from "react-native-reanimated";
import size from "lodash/size";
import SubscribesIcon from "../../assets/subscribesIcon.svg";
import MoreIcon from "../../assets/moreIcon.svg";
import { AppContext } from "../../appContext";

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

const Header = (props) => {
  const { top } = useHeaderMeasurements();
  const { data, check } = props;
  const { name, image, poster, online, slogan, subscribes } = data;

  const translateX = useDerivedValue(() => {
    return interpolate(
      -top.value,
      [0, 240],
      [0, 15],
      Animated.Extrapolate.CLAMP
    );
  }, [top]);

  const translateY = useDerivedValue(() => {
    return interpolate(
      -top.value,
      [0, 240],
      [0, 14],
      Animated.Extrapolate.CLAMP
    );
  }, [top]);

  const scale = useDerivedValue(() => {
    return interpolate(
      -top.value,
      [0, 240],
      [1, 0.5],
      Animated.Extrapolate.CLAMP
    );
  }, [top]);

  const stylez1 = useAnimatedStyle(() => {
    return {
      transform: [
        { translateX: translateX.value },
        { translateY: translateY.value },
        { scale: scale.value },
      ],
    };
  });

  const positionTop = useDerivedValue(() => {
    return interpolate(
      -top.value,
      [0, 240],
      [0, 15],
      Animated.Extrapolate.CLAMP
    );
  }, [top]);

  const stylez2 = useAnimatedStyle(() => {
    return {
      top: positionTop.value,
    };
  });

  return (
    <View>
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
        <Animated.View style={[{ flexDirection: "row" }, stylez2]}>
          <View style={{ position: "relative", top: -8 }}>
            <Animated.Image
              source={{ uri: image }}
              resizeMode="cover"
              style={[
                {
                  width: 72,
                  height: 72,
                  borderRadius: 32,
                },
                stylez1,
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
                backgroundColor:
                  check || online === "online" ? "#30d158" : "#7f7d85",
              }}
            />
          </View>
          <View style={{ alignSelf: "flex-end", marginLeft: 16 }}>
            <NameArtist>{name}</NameArtist>
            <DescriptionArtist>{slogan}</DescriptionArtist>
          </View>
        </Animated.View>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <SubscribesIcon />
            <CountSubscribesArtist>{size(subscribes)}</CountSubscribesArtist>
          </View>
          <MoreIcon />
        </View>
      </View>
    </View>
  );
};

export default Header;
