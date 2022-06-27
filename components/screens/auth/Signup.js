import { useState, useContext, useRef } from "react";
import { Text, View, TouchableOpacity, TextInput } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import styled from "styled-components/native";
import { useToast } from "../../../utils/useToast";
import Arrow from "../../../assets/arrow-right.svg";
import { isLoggedContext } from "../../../appContext";

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
  letter-spacing: -0.048px;
  color: #ffffff;
`;

const Description = styled(Text)`
  font-family: "TTCommons";
  padding-bottom: 24px;
  font-size: 14px;
  font-weight: 500;
  line-height: 16px;
  letter-spacing: -0.048px;
  color: #ffffff;
`;

const InputContainer = styled(View)`
  position: relative;
`;

const TextPlaceholder = styled(Text)`
  position: absolute;
  top: 12px;
  left: 24px;
  z-index: 1;
  font-family: "TTCommons";
  font-size: 14px;
  font-weight: 500;
  line-height: 16px;
  letter-spacing: -0.048px;
  color: #7f7d85;
`;

const Input = styled(TextInput)`
  width: 100%;
  height: 60px;
  padding: 16px 24px 0;
  background-color: #222023;
  border-radius: 22px;

  font-family: "TTCommons";
  font-weight: 600;
  font-size: 20px;
  line-height: 23px;
  letter-spacing: -0.048px;
  color: #ffffff;
`;

const NextButton = styled(Text)`
  font-family: "TTCommons";
  font-size: 24px;
  font-weight: 600;
  line-height: 28px;
  letter-spacing: -0.048px;
  color: #ffffff;
`;

const Police = styled(Text)`
  font-family: "TTCommons";
  font-size: 14px;
  font-weight: 600;
  line-height: 16px;
  letter-spacing: -0.048px;
  color: #7f7d85;
`;

const Signup = () => {
  const emailRef = useRef(null);
  const passRef = useRef(null);
  const navigation = useNavigation();
  const { successToast, errorToast } = useToast();
  const [, setIsLoggedIn] = useContext(isLoggedContext);
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  return (
    <KeyboardAwareScrollView
      enableAutomaticScroll
      enableOnAndroid
      contentContainerStyle={{ flexGrow: 1 }}
      extraScrollHeight={16}
    >
      <Container>
        <View
          style={{
            flex: 0.4,
            justifyContent: "flex-end",
            alignSelf: "flex-start",
            maxWidth: 250,
            marginLeft: 32,
          }}
        >
          <Title>Регистрация</Title>
          <Description>
            Введи актуальный адрес почты и придумай пароль. Так мы всегда будем
            оставаться на связи
          </Description>
        </View>
        <View style={{ flex: 0.1, width: "100%" }}>
          <InputContainer>
            <TextPlaceholder>Почта:</TextPlaceholder>
            <Input
              ref={emailRef}
              value={email}
              onChangeText={setEmail}
              textContentType="emailAddress"
              placeholder="example@mail.com"
              placeholderTextColor="#504D52"
              style={{ marginBottom: 8 }}
            />
          </InputContainer>
          <InputContainer>
            <TextPlaceholder>Пароль:</TextPlaceholder>
            <Input
              ref={passRef}
              value={pass}
              onChangeText={setPass}
              secureTextEntry
              placeholder="********"
              placeholderTextColor="#504D52"
            />
          </InputContainer>
        </View>
        <TouchableOpacity
          onPress={() => {
            if (!!!email.length) {
              emailRef.current.focus();
              return errorToast("Заполните поле email");
            }

            if (email.length > 64) {
              emailRef.current.focus();
              return errorToast("Уменьшие кол-во символов в email");
            }

            if (!/^\S+@\S+\.\S+$/.test(email)) {
              emailRef.current.focus();
              return errorToast("Некорректный Email");
            }

            if (!!!pass.length) {
              passRef.current.focus();
              return errorToast("Заполните поле Пароль");
            }

            if (pass.length < 6 || pass.length > 32) {
              passRef.current.focus();
              return errorToast("Пароль должен содержать от 6 до 32 символов");
            }

            setIsLoggedIn(true);
            successToast("Успешно");
            return navigation.navigate("App", { screen: "Preview" });
          }}
          style={{
            flex: 0.2,
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <NextButton>Далее</NextButton>
          <Arrow style={{ marginLeft: 8 }} />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            flex: 0.2,
            justifyContent: "center",
          }}
          onPress={() => navigation.navigate("Police")}
        >
          <Police>Политика конфиденциальности</Police>
        </TouchableOpacity>
      </Container>
    </KeyboardAwareScrollView>
  );
};

export default Signup;
