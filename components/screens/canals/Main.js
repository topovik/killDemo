import { useContext } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  Text,
  View,
  Image,
  FlatList,
  ScrollView,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import styled from "styled-components/native";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";
import Arrow from "../../../assets/arrow-right.svg";
import { AppContext } from "../../../appContext";

const Title = styled(Text)`
  font-family: "TTCommons";
  margin: 16px 32px 8px;
  color: #ffffff;
  font-weight: 500;
  font-size: 20px;
  line-height: 23px;
  letter-spacing: -0.48px;
`;

const Card = styled(ImageBackground)`
  flex: 1;
  flex-direction: row;
  align-items: center;
  height: 72px;
  margin: 8px 16px;
  padding: 0 24px 0 4px;
  border-radius: 22px;
`;

const Main = () => {
  const { check, userData, subscribes, favorites } = useContext(AppContext);
  const navigation = useNavigation();
  const tabBarHeight = useBottomTabBarHeight();

  return (
    <ScrollView style={{ flex: 1 }}>
      {userData.map((item) => {
        const { name, image, id } = item;

        return (
          <TouchableOpacity
            key={id}
            onPress={() => navigation.navigate("Canal", { data: item, check })}
          >
            <Card
              source={require("../../../assets/myself-background-card.png")}
              resizeMode="stretch"
            >
              <Image
                source={{ uri: image }}
                style={{ width: 64, height: 64, borderRadius: 22 }}
                resizeMode="cover"
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
                        backgroundColor: check ? "#30d158" : "#7f7d85",
                      }}
                    />
                    <Text style={{ color: "#7f7d85" }}>
                      {check ? "Вы" : ""}
                    </Text>
                  </View>
                </View>
                <Arrow />
              </View>
            </Card>
          </TouchableOpacity>
        );
      })}
      <Title>Подписки</Title>
      {subscribes.map((item) => {
        const { name, online, image, newTracks, id } = item;

        return (
          <TouchableOpacity
            key={id}
            onPress={() => navigation.navigate("Canal", { data: item })}
          >
            <Card
              source={require("../../../assets/subscribes-background-card.png")}
              resizeMode="stretch"
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
                        backgroundColor:
                          online === "online" ? "#30d158" : "#7f7d85",
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
          </TouchableOpacity>
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
      <View style={{ flex: 1, paddingBottom: tabBarHeight + 24 }}>
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
            const { name, image, artist, online } = item;

            return (
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("Product", {
                    data: { ...item, artist, online, check },
                  })
                }
              >
                <View>
                  <Image
                    source={{ uri: image }}
                    style={{ width: 148, height: 148, borderRadius: 18 }}
                  />
                  <Text
                    style={{ marginLeft: 8, marginTop: 8, color: "#ffffff" }}
                  >
                    {name}
                  </Text>
                </View>
              </TouchableOpacity>
            );
          }}
          ItemSeparatorComponent={() => <View style={{ margin: 4 }} />}
        />
      </View>
    </ScrollView>
  );
};

export default Main;
