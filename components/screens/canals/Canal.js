import { useCallback } from "react";
import { Tabs } from "react-native-collapsible-tab-view";
import { useNavigation } from "@react-navigation/native";
import styled from "styled-components/native";
import { View, TouchableOpacity } from "react-native";
import Animated, {
  interpolate,
  useAnimatedStyle,
} from "react-native-reanimated";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";
import get from "lodash/get";
import Header from "../../../components/canals_slug/header";
import FilterIcon from "../../../assets/filterIcon.svg";
import Publication from "../../../components/canals_slug/publication";

const TabStyle = styled(Animated.Text)`
  font-family: "TTCommons";
  margin-left: 24px;
  font-size: 20px;
  font-weight: 500;
  line-height: 23px;
  letter-spacing: -0.048px;
  color: #ffffff;
`;

const Seporator = styled(View)`
  align-self: center;
  width: 85%;
  height: 1px;
  margin: 16px 0;
  background-color: rgba(80, 77, 82, 0.5);
`;

const ITEM_HEIGHT = 100;

const Canal = ({ route }) => {
  const navigation = useNavigation();
  const tabBarHeight = useBottomTabBarHeight();
  const { data, check } = route.params;

  const publishedItems = data.publications.filter((item) => item.published);
  const unPublishedItems = data.publications.filter((item) => !item.published);

  const getItemLayout = useCallback(
    (data, index) => ({
      length: ITEM_HEIGHT,
      offset: ITEM_HEIGHT * index,
      index,
    }),
    []
  );

  return (
    <Tabs.Container
      headerContainerStyle={{ backgroundColor: "#121212", elevation: 0 }}
      renderHeader={(props) => <Header {...props} {...route.params} />}
      renderTabBar={(props) => {
        const stylez1 = useAnimatedStyle(() => {
          return {
            opacity: interpolate(
              props.indexDecimal.value,
              [0, 1],
              [1, 0.5],
              Animated.Extrapolate.CLAMP
            ),
          };
        });

        const stylez2 = useAnimatedStyle(() => {
          return {
            opacity: interpolate(
              props.indexDecimal.value,
              [0, 1],
              [0.5, 1],
              Animated.Extrapolate.CLAMP
            ),
          };
        });

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
              <TouchableOpacity onPress={() => props.onTabPress("article")} ena>
                <TabStyle style={[stylez1]}>Публикации</TabStyle>
              </TouchableOpacity>
              {check && (
                <TouchableOpacity onPress={() => props.onTabPress("albums")}>
                  <TabStyle style={[stylez2]}>Черновики</TabStyle>
                </TouchableOpacity>
              )}
            </View>
            <FilterIcon />
          </View>
        );
      }}
      minHeaderHeight={60}
    >
      <Tabs.Tab name="article" label="Публикации">
        <Tabs.FlatList
          data={publishedItems}
          renderItem={(elem) => {
            const item = get(elem, "item", {});
            return (
              <Publication
                item={item}
                navigation={navigation}
                {...data}
                check={check}
                key={item.id}
              />
            );
          }}
          getItemLayout={getItemLayout}
          showsVerticalScrollIndicator={false}
          ItemSeparatorComponent={() => <Seporator />}
          style={{ marginTop: 16 }}
          contentContainerStyle={{ paddingBottom: tabBarHeight + 24 }}
        />
      </Tabs.Tab>
      {check && (
        <Tabs.Tab name="albums" label="Черновики">
          <Tabs.FlatList
            data={unPublishedItems}
            renderItem={(elem) => {
              const item = get(elem, "item", {});
              return (
                <Publication
                  item={item}
                  navigation={navigation}
                  {...data}
                  check={check}
                  key={item.id}
                />
              );
            }}
            getItemLayout={getItemLayout}
            showsVerticalScrollIndicator={false}
            ItemSeparatorComponent={() => <Seporator />}
            style={{ marginTop: 16 }}
            contentContainerStyle={{ paddingBottom: tabBarHeight + 24 }}
          />
        </Tabs.Tab>
      )}
    </Tabs.Container>
  );
};

export default Canal;
