import { Text, View, Image, FlatList, Platform } from "react-native";
import styled from "styled-components/native";
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

const Card = styled(LinearGradient)`
  flex: 1;
  flex-direction: row;
  align-items: center;
  height: 72px;
  margin: 16px;
  padding: 0 24px 0 4px;
  border-radius: 22px;
`;

const Canals = () => {
  return (
    <View style={{ flex: 1, backgroundColor: "#121212" }}>
      <View>
        <FlatList
          data={mySelf}
          renderItem={({ item }) => {
            const { name, online, mark, image } = item;

            return (
              <Card
                colors={["#5e5ce61a", "#5e5ce6", "#222023"]}
                start={{ x: 1.5, y: -7.0 }}
                locations={
                  Platform.OS === "ios" ? [0.0, 0.0, 0.94] : [0.0, 0.0, 0.75]
                }
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
                    <Text style={{ color: "#fff" }}>{name}</Text>
                    <View
                      style={{ flexDirection: "row", alignItems: "center" }}
                    >
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
          }}
          keyExtractor={(item) => item.id}
        />
        <Text>Подписки</Text>
        <FlatList
          data={subscribes}
          renderItem={({ item }) => {
            const { name, online, mark, image, newTracks } = item;

            return (
              <Card
                colors={["#5e5ce61a", "#5e5ce6", "#222023"]}
                start={{ x: 1.5, y: -7.0 }}
                locations={
                  Platform.OS === "ios" ? [0.0, 0.0, 0.94] : [0.0, 0.0, 0.75]
                }
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
                    <Text style={{ color: "#fff" }}>{name}</Text>
                    <View
                      style={{ flexDirection: "row", alignItems: "center" }}
                    >
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
          }}
          keyExtractor={(item) => item.id}
        />
        <Text>Избранное</Text>
      </View>
    </View>
  );
};

export default Canals;
