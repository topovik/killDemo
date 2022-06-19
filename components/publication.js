import { useState } from "react";
import {
  Text,
  View,
  Image,
  FlatList,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import styled from "styled-components/native";
import ActiveIcon from "../assets/favoriteIconActive.svg";
import DisactiveIcon from "../assets/favoriteIconDisactive.svg";

const Publication = (data) => {
  const { name, mark, version, description, image, id, favorite, published } =
    data;

  return (
    <TouchableOpacity>
      <Image
        source={{ uri: image }}
        resizeMode="cover"
        style={{ width: 100, height: 100, borderRadius: 24 }}
      />
      <View>
        <View>
          <View>
            <Text>{name}</Text>
            <Text>{mark}</Text>
          </View>
          <Text>{version}</Text>
        </View>
        <Text>{description}</Text>
      </View>
      {favorite ? <ActiveIcon /> : <DisactiveIcon />}
    </TouchableOpacity>
  );
};

export default Publication;
