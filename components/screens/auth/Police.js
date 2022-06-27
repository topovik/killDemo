import { Text, View } from "react-native";
import styled from "styled-components/native";

const Container = styled(View)`
  flex: 1;
  align-items: center;
  height: 100%;
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
  color: #ffffff;
`;

const Police = () => {
  return (
    <Container>
      <View style={{ maxWidth: 250, marginTop: 32 }}>
        <Title>Политика конфиденциальности</Title>
      </View>
    </Container>
  );
};

export default Police;
