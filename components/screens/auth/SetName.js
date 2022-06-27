import { useState, useContext } from "react";
import { Text, View, TouchableOpacity, TextInput } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import styled from "styled-components/native";
import { useNavigation } from "@react-navigation/native";
import { useToast } from "../../../utils/useToast";
import Arrow from "../../../assets/arrow-right.svg";
import { isLoggedContext } from "../../../appContext";

const Container = styled(View)`
  flex: 1;
  align-items: center;
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
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 100%;
  height: 60px;
  background-color: #222023;
  border-radius: 22px;
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
  flex: 1;
  padding: 16px 8px 0;
  background-color: #222023;
  border-radius: 22px;

  font-family: "TTCommons";
  font-weight: 600;
  font-size: 20px;
  line-height: 23px;
  letter-spacing: -0.048px;
  color: #ffffff;
`;

const InputIcon = styled(Text)`
  margin-bottom: 4px;
  padding-top: 16px;
  padding-left: 24px;
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

const Police = styled(Text)`
  font-family: "TTCommons";
  font-size: 14px;
  font-weight: 600;
  line-height: 16px;
  letter-spacing: -0.048px;
  color: #7f7d85;
`;

const SetName = () => {
  const navigation = useNavigation();
  const { successToast, errorToast } = useToast();
  const [, setIsLoggedIn] = useContext(isLoggedContext);
  const [value, setValue] = useState("");

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
          <Title>Давай знакомиться</Title>
          <Description>
            Выбери имя, под которым тебя будут видеть другие пользователи
          </Description>
        </View>
        <View style={{ flex: 0.2 }}>
          <InputContainer>
            <TextPlaceholder>Никнейм:</TextPlaceholder>
            <InputIcon>@</InputIcon>
            <Input
              value={value}
              onChangeText={setValue}
              placeholder="example_nickname"
              placeholderTextColor="#7f7d85"
            />
          </InputContainer>
        </View>
        <TouchableOpacity
          onPress={() => {
            if (value.length <= 64 && value.length >= 2) {
              setIsLoggedIn(true);
              successToast("Успешно");
              return navigation.navigate("App", { screen: "Preview" });
            }

            if (value.length > 64) {
              return errorToast("Уменьшите кол-во символов в имени");
            }

            if (value.length < 2) {
              return errorToast("Увеличьте кол-во символов в имени");
            }
          }}
          style={{
            flex: 0.2,
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <NextButton>Начать</NextButton>
          <Arrow style={{ marginLeft: 8 }} />
        </TouchableOpacity>
        <TouchableOpacity
          style={{ flex: 0.2, justifyContent: "center" }}
          onPress={() => navigation.navigate("Police")}
        >
          <Police>Политика конфиденциальности</Police>
        </TouchableOpacity>
      </Container>
    </KeyboardAwareScrollView>
  );
};

export default SetName;
