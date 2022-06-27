import { Text, View, TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";
import { useNavigation } from "@react-navigation/native";
import Arrow from "../../../assets/arrow-right.svg";

const Container = styled(View)`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 0 16px;
`;

const Title = styled(Text)`
  font-family: "TTCommons";
  margin-bottom: 8px;
  font-size: 24px;
  font-weight: 500;
  line-height: 28px;
  text-align: center;
  letter-spacing: -0.048px;
  color: #7f7d85;
`;

const Description = styled(Text)`
  font-family: "TTCommons";
  padding-bottom: 24px;
  font-size: 14px;
  font-weight: 500;
  line-height: 16px;
  text-align: center;
  letter-spacing: -0.048px;
  color: #7f7d85;
`;

const NextButton = styled(Text)`
  font-family: "TTCommons";
  font-size: 24px;
  font-weight: 600;
  line-height: 28px;
  letter-spacing: -0.048px;
  color: #ffffff;
`;

const Preview = () => {
  const tabBarHeight = useBottomTabBarHeight();
  const navigation = useNavigation();

  return (
    <Container>
      <View style={{ maxWidth: 260, paddingBottom: tabBarHeight }}>
        <Title>Добро пожаловать в клуб</Title>
        <Description>
          Ты пока не подписан ни на один канал, но вся информация о них будет
          тут
        </Description>
        <TouchableOpacity
          onPress={() => navigation.navigate("Artist")}
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <NextButton>Далее</NextButton>
          <Arrow style={{ marginLeft: 8 }} />
        </TouchableOpacity>
      </View>
    </Container>
  );
};

export default Preview;
