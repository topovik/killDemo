// import { useState } from "react";
// import {
//   Text,
//   View,
//   Image,
//   FlatList,
//   ScrollView,
//   useWindowDimensions,
//   TouchableOpacity,
//   Animated,
// } from "react-native";
// import { TabView, SceneMap } from "react-native-tab-view";
// import styled from "styled-components/native";
// import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";
// import { LinearGradient } from "expo-linear-gradient";
// import Arrow from "../../assets/arrow-right.svg";
// import { mySelf, subscribes } from "../../staticData";
// import SubscribesIcon from "../../assets/subscribesIcon.svg";
// import MoreIcon from "../../assets/moreIcon.svg";
// import FilterIcon from "../../assets/filterIcon.svg";

// import Publication from "../../components/publication";

// const NameArtist = styled(Text)`
//   font-family: "TTCommons";
//   font-size: 24px;
//   font-weight: 600;
//   line-height: 28px;
//   letter-spacing: -0.048px;
//   color: #ffffff;
// `;

// const DescriptionArtist = styled(Text)`
//   font-family: "TTCommons";
//   font-size: 14px;
//   font-weight: 500;
//   line-height: 16px;
//   letter-spacing: -0.048px;
//   color: #ffffff;
// `;

// const CountSubscribesArtist = styled(Text)`
//   font-family: "TTCommons";
//   margin-left: 8px;
//   margin-right: 27px;
//   font-size: 17px;
//   font-weight: 500;
//   line-height: 20px;
//   letter-spacing: -0.048px;
//   color: #7f7d85;
// `;

// const Title = styled(Text)`
//   font-family: "TTCommons";
//   font-size: 20px;
//   font-weight: 500;
//   line-height: 23px;
//   letter-spacing: -0.048px;
//   color: #ffffff;
// `;

// const TabStyle = styled(Animated.Text)`
//   font-family: "TTCommons";
//   margin-left: 24px;
//   font-size: 20px;
//   font-weight: 500;
//   line-height: 23px;
//   letter-spacing: -0.048px;
//   color: #ffffff;
// `;

// const _renderTabBar = (props, setIndex) => {
//   const inputRange = props.navigationState.routes.map((x, i) => i);

//   return (
// <View
//   style={{
//     flexDirection: "row",
//     alignItems: "center",
//     marginTop: 32,
//     marginBottom: 17,
//     marginLeft: 8,
//     marginRight: 16,
//   }}
// >
//   <View style={{ flex: 1, flexDirection: "row" }}>
//     {props.navigationState.routes.map((route, i) => {
// const opacity = props.position.interpolate({
//   inputRange,
//   outputRange: inputRange.map((inputIndex) =>
//     inputIndex === i ? 1 : 0.5
//   ),
// });

//       return (
//         <TouchableOpacity onPress={() => setIndex(i)} key={route.title}>
//           <TabStyle style={{ opacity }}>{route.title}</TabStyle>
//         </TouchableOpacity>
//       );
//     })}
//   </View>
//   <FilterIcon />
// </View>
//   );
// };

// const FirstRoute = ({ data }) => (
//   <View style={{ flex: 1, backgroundColor: "#ff4081" }}>
//     {data.map((el) => {
//       const filtered = el.publications.filter((item) => item.published);
//       return filtered.map((item) => {
//         return <Publication {...item} key={item.id} />;
//       });
//     })}
//   </View>
// );

// const SecondRoute = () => (
//   <View style={{ flex: 1, backgroundColor: "#673ab7" }} />
// );

// const CanalsSlug = ({ route }) => {
//   const layout = useWindowDimensions();
//   const tabBarHeight = useBottomTabBarHeight();
// const [index, setIndex] = useState(0);
// const [routes] = useState([
//   { key: "first", title: "Публикации" },
//   { key: "second", title: "Черновики" },
// ]);

//   const { id } = route.params;
//   const data = mySelf.filter((item) => item.id === id);

//   const renderScene = SceneMap({
//     first: () => <FirstRoute data={data} />,
//     second: SecondRoute,
//   });

//   return (
//     <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
// {data.map((item) => {
//   const {
//     name,
//     online,
//     mark,
//     image,
//     poster,
//     description,
//     subscribes,
//     id: userID,
//   } = item;
//   return (
//     <View key={userID}>
//       <Image source={{ uri: poster }} style={{ height: 240 }} />
//       <View
//         style={{
//           flexDirection: "row",
//           alignItems: "flex-end",
//           justifyContent: "space-between",
//           marginTop: -12,
//           marginLeft: 16,
//           marginRight: 16,
//         }}
//       >
//         <View style={{ flexDirection: "row" }}>
//           <View style={{ position: "relative", top: -8 }}>
//             <Image
//               source={{ uri: image }}
//               resizeMode="cover"
//               style={{
//                 width: 72,
//                 height: 72,
//                 borderRadius: 32,
//               }}
//             />
//             <View
//               style={{
//                 flex: 0,
//                 position: "absolute",
//                 bottom: -9,
//                 right: -9,
//                 width: 19,
//                 height: 19,
//                 marginRight: 8,
//                 borderRadius: 9.5,
//                 borderWidth: 3,
//                 borderColor: "#121212",
//                 backgroundColor: mark ? "#30d158" : "#7f7d85",
//               }}
//             />
//           </View>
//           <View style={{ alignSelf: "flex-end", marginLeft: 16 }}>
//             <NameArtist>{name}</NameArtist>
//             <DescriptionArtist>{description}</DescriptionArtist>
//           </View>
//         </View>
//         <View style={{ flexDirection: "row", alignItems: "center" }}>
//           <View style={{ flexDirection: "row", alignItems: "center" }}>
//             <SubscribesIcon />
//             <CountSubscribesArtist>{subscribes}</CountSubscribesArtist>
//           </View>
//           <MoreIcon />
//         </View>
//       </View>
//     </View>
//   );
// })}
//       <TabView
//         navigationState={{ index, routes }}
//         renderScene={renderScene}
//         renderTabBar={(props) => _renderTabBar(props, setIndex)}
//         onIndexChange={setIndex}
//         initialLayout={{ width: layout.width }}
//       />
//     </ScrollView>
//   );
// };

// export default CanalsSlug;

import { useRef } from "react";
import { Tabs } from "react-native-collapsible-tab-view";
import styled from "styled-components/native";
import { View, Text, TouchableOpacity } from "react-native";
import Animated, {
  interpolate,
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import Header from "../../components/canals_slug/header";
import FilterIcon from "../../assets/filterIcon.svg";
import { mySelf, subscribes } from "../../staticData";
import Publication from "../../components/publication";

import get from "lodash/get";

const TabStyle = styled(Animated.Text)`
  font-family: "TTCommons";
  margin-left: 24px;
  font-size: 20px;
  font-weight: 500;
  line-height: 23px;
  letter-spacing: -0.048px;
  color: #ffffff;
`;

const Example = ({ route }) => {
  const { id } = route.params;
  const data = mySelf.filter((item) => item.id === id);
  const publishedItems = data.map((el) => {
    return el.publications.filter((item) => item.published);
  });
  const unPublishedItems = data.map((el) => {
    return el.publications.filter((item) => !item.published);
  });

  const scrollY = useRef(new Animated.Value(0)).current;

  return (
    <Tabs.Container
      headerContainerStyle={{ backgroundColor: "#121212", elevation: 0 }}
      renderHeader={(props) => (
        <Header data={data} {...props} scrollY={scrollY} />
      )}
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
              <TouchableOpacity onPress={() => props.onTabPress("albums")}>
                <TabStyle style={[stylez2]}>Черновики</TabStyle>
              </TouchableOpacity>
            </View>
            <FilterIcon />
          </View>
        );
      }}
      minHeaderHeight={130}
    >
      <Tabs.Tab name="article" label="Публикации">
        <Tabs.FlatList
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { y: scrollY } } }],
            { useNativeDriver: true },
            { listener: (event) => console.log(event) }
          )}
          data={get(publishedItems, "[0]", [])}
          renderItem={(elem) => {
            const item = get(elem, "item", {});
            return <Publication {...item} key={item.id} />;
          }}
          showsVerticalScrollIndicator={false}
        />
      </Tabs.Tab>
      <Tabs.Tab name="albums" label="Черновики">
        <Tabs.FlatList
          data={[1255, 1255, 1255, 1255, 1255, 1255, 1255, 1255, 1255]}
          renderItem={(item) => <Text style={{ color: "#ffffff" }}>125</Text>}
          showsVerticalScrollIndicator={false}
        />
      </Tabs.Tab>
    </Tabs.Container>
  );
};

export default Example;
