import { Text, View, TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";

const Title = styled(Text)`
  font-family: "TTCommons";
  margin-bottom: 32px;
  font-size: 24px;
  font-weight: 500;
  line-height: 28px;
  text-align: center;
  letter-spacing: -0.048px;
  color: #7f7d85;
`;

const Button = styled(TouchableOpacity)`
  align-items: center;
  justify-content: center;
  width: 298px;
  height: 60px;
  margin-bottom: 24px;
  background-color: #ff453a;
  border-radius: 22px;
`;

const ButtonText = styled(Text)`
  font-family: "TTCommons";
  font-size: 20px;
  font-weight: 500;
  line-height: 23px;
  letter-spacing: -0.048px;
  color: #ffffff;
`;

const SubText = styled(Text)`
  font-family: "TTCommons";
  font-size: 17px;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: -0.048px;
  color: #504d52;
`;

const Prevent = () => {
  const tabBarHeight = useBottomTabBarHeight();

  return (
    <View
      style={{
        flex: 1,
        paddingHorizontal: 32,
        alignItems: "center",
        justifyContent: "center",
        paddingBottom: tabBarHeight,
      }}
    >
      <Title>
        Упс! Чтобы добавить публикацию, нужно создать канал артиста.
      </Title>
      <Button>
        <ButtonText>Создать канал артиста</ButtonText>
      </Button>
      <SubText>Что такое канал артиста?</SubText>
    </View>
  );
};

export default Prevent;
