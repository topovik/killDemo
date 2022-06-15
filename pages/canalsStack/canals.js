import {
  Text,
  View,
  Image,
  FlatList,
  ScrollView,
  Platform,
} from "react-native";
import styled from "styled-components/native";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";
import { LinearGradient } from "expo-linear-gradient";
import Arrow from "../../assets/arrow-right.svg";

const mySelf = [
  {
    name: "просто Лера",
    online: "Вы",
    mark: true,
    image: "https://biogr.net/wp-content/uploads/2021/04/Screenshot_43.jpg",
    id: 1,
  },
];

const subscribes = [
  {
    name: "Man Kaufman",
    online: "Сегодня в 15:56",
    mark: false,
    image: "https://i.ru-music.cc/img/artists/full/man-kaufman.png",
    newTracks: 8,
    id: 1,
  },
  {
    name: "Jonathan Bree",
    online: "Онлайн",
    mark: true,
    image: "https://modernrock.ru/wp-content/uploads/2019/11/jonathan-bree.jpg",
    newTracks: 0,
    id: 2,
  },
  {
    name: "Dan Abnormal",
    online: "3 недели назад",
    mark: false,
    image:
      "https://i.pinimg.com/originals/7d/43/ae/7d43ae9e903ca7988f94d9f5d58e500a.jpg",
    newTracks: 0,
    id: 3,
  },
];

const favorites = [
  {
    name: "Любить тебя",
    mark: "new",
    version: "Первая версия · 2015",
    description: "В этой песне есть то самое тепло во время холода, то...",
    image:
      "https://i.ru-music.cc/img/artists/full/%D0%BF%D1%80%D0%BE%D1%81%D1%82%D0%BE-%D0%BB%D0%B5%D1%80%D0%B0.png",
    id: 1,
  },
  {
    name: "В поисках демо",
    mark: "",
    version: "Первая версия · 2012",
    description: "В этой песне есть то самое тепло во время холода, то...",
    image:
      "https://i.ru-music.cc/img/artists/full/%D0%BF%D1%80%D0%BE%D1%81%D1%82%D0%BE-%D0%BB%D0%B5%D1%80%D0%B0.png",
    id: 2,
  },
  {
    name: "You are the man",
    mark: "new",
    version: "Первая версия · 2014",
    description: "В этой песне есть то самое тепло во время холода, то...",
    image:
      "https://i.ru-music.cc/img/artists/full/%D0%BF%D1%80%D0%BE%D1%81%D1%82%D0%BE-%D0%BB%D0%B5%D1%80%D0%B0.png",
    id: 3,
  },
  {
    name: "Любить тебя 2",
    mark: "",
    version: "Первая версия · 2020",
    description: "В этой песне есть то самое тепло во время холода, то...",
    image:
      "https://i.ru-music.cc/img/artists/full/%D0%BF%D1%80%D0%BE%D1%81%D1%82%D0%BE-%D0%BB%D0%B5%D1%80%D0%B0.png",
    id: 4,
  },
];

const Title = styled(Text)`
  font-family: "TTCommons";
  margin: 16px 32px 8px;
  color: #ffffff;
  font-weight: 500;
  font-size: 20px;
  line-height: 23px;
  letter-spacing: -0.48px;
`;

const Card = styled(LinearGradient)`
  flex: 1;
  flex-direction: row;
  align-items: center;
  height: 72px;
  margin: 8px 16px;
  padding: 0 24px 0 4px;
  border-radius: 22px;
`;

const Canals = () => {
  const tabBarHeight = useBottomTabBarHeight();

  return (
    <ScrollView style={{ flex: 1 }}>
      {mySelf.map((item) => {
        const { name, online, mark, image, id } = item;
        return (
          <Card
            colors={["#5e5ce61a", "#5e5ce6", "#222023"]}
            start={{ x: 1.5, y: -7.0 }}
            locations={
              Platform.OS === "ios" ? [0.0, 0.0, 0.94] : [0.0, 0.0, 0.75]
            }
            key={id}
          >
            <Image
              source={{ uri: image }}
              style={{ width: 64, height: 64, borderRadius: 22 }}
            />
            <View
              style={{
                flex: 1,
                alignItems: "center",
                justifyContent: "space-between",
                flexDirection: "row",
                marginLeft: 16,
              }}
            >
              <View>
                <Text style={{ color: "#ffffff" }}>{name}</Text>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <View
                    style={{
                      width: 8,
                      height: 8,
                      marginRight: 8,
                      borderRadius: 8,
                      backgroundColor: mark ? "#30d158" : "#7f7d85",
                    }}
                  />
                  <Text style={{ color: "#7f7d85" }}>{online}</Text>
                </View>
              </View>
              <Arrow />
            </View>
          </Card>
        );
      })}
      <Title>Подписки</Title>
      {subscribes.map((item) => {
        const { name, online, mark, image, newTracks, id } = item;

        return (
          <Card
            colors={["#5e5ce61a", "#5e5ce6", "#222023"]}
            start={{ x: 1.5, y: -7.0 }}
            locations={
              Platform.OS === "ios" ? [0.0, 0.0, 0.94] : [0.0, 0.0, 0.75]
            }
            key={id}
          >
            <Image
              source={{ uri: image }}
              style={{ width: 64, height: 64, borderRadius: 22 }}
            />
            <View
              style={{
                flex: 1,
                alignItems: "center",
                justifyContent: "space-between",
                flexDirection: "row",
                marginLeft: 16,
              }}
            >
              <View>
                <Text style={{ color: "#ffffff" }}>{name}</Text>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <View
                    style={{
                      width: 8,
                      height: 8,
                      marginRight: 8,
                      borderRadius: 8,
                      backgroundColor: mark ? "#30d158" : "#7f7d85",
                    }}
                  />
                  <Text style={{ color: "#7f7d85" }}>{online}</Text>
                </View>
              </View>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                {!!newTracks && (
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      width: 32,
                      height: 32,
                      marginRight: 16,
                      color: "#ffffff",
                      backgroundColor: "#504d5240",
                      borderRadius: 16,
                    }}
                  >
                    <Text
                      style={{
                        width: "100%",
                        textAlign: "center",
                        color: "#ffffff",
                      }}
                    >
                      {newTracks}
                    </Text>
                  </View>
                )}
                <Arrow />
              </View>
            </View>
          </Card>
        );
      })}
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Title style={{ marginBottom: 12 }}>Избранное</Title>
        <Title style={{ marginRight: 16, color: "#7f7d85" }}>Все</Title>
      </View>
      <View style={{ flex: 1 }}>
        <FlatList
          horizontal
          data={favorites}
          keyExtractor={(item) => item.id}
          contentContainerStyle={{
            paddingHorizontal: 16,
          }}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => {
            const { name, image } = item;

            return (
              <View>
                <Image
                  source={{ uri: image }}
                  style={{ width: 148, height: 148, borderRadius: 18 }}
                />
                <Text style={{ marginLeft: 8, marginTop: 8, color: "#ffffff" }}>
                  {name}
                </Text>
              </View>
            );
          }}
          ItemSeparatorComponent={() => <View style={{ margin: 4 }} />}
        />
      </View>
      <View style={{height: tabBarHeight + 24}}/>
    </ScrollView>
  );
};

export default Canals;
