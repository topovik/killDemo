import { useState, forwardRef, useRef } from "react";
import { Tabs } from "react-native-collapsible-tab-view";
import styled from "styled-components/native";
import { View, Text, TouchableOpacity } from "react-native";
import Animated, {
  interpolate,
  useAnimatedStyle,
} from "react-native-reanimated";
import FilterIcon from "../../assets/filterIcon.svg";

const TabStyle = styled(Animated.Text)`
  font-family: "TTCommons";
  margin-left: 24px;
  font-size: 20px;
  font-weight: 500;
  line-height: 23px;
  letter-spacing: -0.048px;
  color: #ffffff;
`;

const Example = forwardRef(({ emptyContacts, ...props }, ref) => {
  const translation = useRef(new Animated.Value(0)).current;
  const [index, setIndex] = useState(0);

  return (
    <Tabs.Container
      headerContainerStyle={{ backgroundColor: "transparent", elevation: 0 }}
      ref={ref}
      {...props}
      renderTabBar={(props) => {
        console.log(props);

        let inputRange = [0, 1];

        return (
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginTop: 32,
              marginBottom: 17,
              marginLeft: 8,
              marginRight: 16,
            }}
          >
            <View style={{ flex: 1, flexDirection: "row" }}>
              <TouchableOpacity
                onPress={() => {
                  props.onTabPress("article");
                  setIndex(0);
                }}
              >
                <TabStyle
                  style={{
                    opacity: translation.interpolate({
                      inputRange,
                      outputRange: index === 0 ? [1, 0.5] : [0.5, 1],
                      extrapolate: "clamp",
                    }),
                  }}
                >
                  Hello 1
                </TabStyle>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  props.onTabPress("albums");
                  setIndex(1);
                }}
              >
                <TabStyle
                  style={{
                    opacity: translation.interpolate({
                      inputRange,
                      outputRange: index === 1 ? [1, 0.5] : [0.5, 1],
                      extrapolate: "clamp",
                    }),
                  }}
                >
                  Hello 2
                </TabStyle>
              </TouchableOpacity>
            </View>
            <FilterIcon />
          </View>
        );
      }}
    >
      <Tabs.Tab name="article" label="Публикации">
        <Tabs.FlatList
          data={[123, 123, 123, 123, 123, 123, 123, 123, 123]}
          renderItem={(item) => <Text style={{ color: "#ffffff" }}>123</Text>}
        />
      </Tabs.Tab>
      <Tabs.Tab name="albums" label="Черновики">
        <Tabs.FlatList
          data={[1255, 1255, 1255, 1255, 1255, 1255, 1255, 1255, 1255]}
          renderItem={(item) => <Text style={{ color: "#ffffff" }}>123</Text>}
        />
      </Tabs.Tab>
    </Tabs.Container>
  );
});

export default Example;
