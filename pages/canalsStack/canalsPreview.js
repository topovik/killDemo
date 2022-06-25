import { Text, View, TouchableOpacity } from "react-native";
import styled from "styled-components/native";

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

const CanalsPreview = () => {
  return (
    <Container>
      <View style={{ maxWidth: 260 }}>
        <Title>Добро пожаловать в клуб</Title>
        <Description>
          Ты пока не подписан ни на один канал, но вся информация о них будет
          тут
        </Description>
      </View>
    </Container>
  );
};

export default CanalsPreview;
