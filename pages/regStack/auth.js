import { Text, View, TouchableOpacity, ImageBackground } from "react-native";
import styled from "styled-components/native";
import { StatusBar } from "expo-status-bar";
import Logo from "../../assets/logo.svg";

const Container = styled(ImageBackground)`
  flex: 1;
  row-gap: 1rem;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const LogoContainer = styled.View`
  margin-bottom: 64px;
`;

const Slogan = styled.Text`
  font-family: "TTCommons";
  font-size: 14px;
  color: #fff;
  text-align: center;
  font-weight: 600;
  line-height: 16px;
`;

const ButtonContainer = styled(TouchableOpacity)`
  flex-direction: row;
  width: 343px;
  height: 60px;
  margin-top: ${({ mrgTop }) => mrgTop};
  background-color: ${({ bgColor }) => bgColor};
  border-radius: 22px;
`;

const TextContainer = styled(Text)`
  font-family: "TTCommons";
  align-self: center;
  width: 100%;
  color: ${({ color }) => color};
  font-size: 20px;
  line-height: 23px;
  text-align: center;
  letter-spacing: -0.48px;
`;

const Google = styled(Text)`
  color: ${({ color }) => color};
`;

const SubText = styled(Text)`
  font-family: "TTCommons";
  margin-top: 16px;
  font-size: 20px;
  color: #7f7d85;
  font-weight: 400;
  text-align: center;
  line-height: 23px;
  letter-spacing: -0.048px;
`;

const Login = () => {
  return (
    <Container>
      <StatusBar style="auto" />
      <LogoContainer>
        <Slogan>Добро пожаловать в</Slogan>
        <Logo />
      </LogoContainer>
      <View>
        <ButtonContainer bgColor="#222023" mrgTop="0">
          <TextContainer color="#fff">Войти по номеру телефона</TextContainer>
        </ButtonContainer>
        <ButtonContainer bgColor="#222023" mrgTop="8px">
          <TextContainer color="#fff">
            Войти через <Google color="#4285f4">G</Google>
            <Google color="#eb4335">o</Google>
            <Google color="#fbbc05">o</Google>
            <Google color="#4285f4">g</Google>
            <Google color="#34a853">l</Google>
            <Google color="#eb4335">e</Google>
          </TextContainer>
        </ButtonContainer>
        <ButtonContainer bgColor="#0085ff" mrgTop="8px">
          <TextContainer color="#fff">Войти по VK ID</TextContainer>
        </ButtonContainer>
        <ButtonContainer bgColor="#222023" mrgTop="8px">
          <TextContainer color="#fff">Войти с Apple ID</TextContainer>
        </ButtonContainer>
        <Text
          style={{
            fontFamily: "TTCommons",
            marginTop: 16,
            marginBottom: 16,
            color: "#504d52",
            textAlign: "center",
          }}
        >
          или
        </Text>
        <ButtonContainer bgColor="#7a7ad0" mrgTop="0">
          <TextContainer color="#fff">Зарегистрироваться</TextContainer>
        </ButtonContainer>
        <SubText>
          Уже есть аккаунт? <Text style={{ color: "#5E5CE6" }}>Войти</Text>
        </SubText>
      </View>
    </Container>
  );
};

export default Login;
