import { useState } from "react";
import { Text, View, TouchableOpacity, TextInput, Alert } from "react-native";
import PhoneInput from "react-native-phone-number-input";
import styled from "styled-components/native";
import Arrow from "../../assets/arrow-right.svg";

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
  width: 100%;
  height: 60px;
  background-color: #222023;
  border-radius: 22px;
`;

const Input = styled(TextInput)`
  flex: 1;
  padding-left: 8px;
  padding-right: 8px;
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
  const [value, setValue] = useState("");

  return (
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
      {/* {showMessage && (
        <View>
          <Text style={{ color: "#ffffff" }}>Value : {value}</Text>
          <Text style={{ color: "#ffffff" }}>
            Formatted Value : {formattedValue}
          </Text>
          <Text style={{ color: "#ffffff" }}>
            Valid : {valid ? "true" : "false"}
          </Text>
        </View>
      )} */}
      <View style={{ flex: 0.2 }}>
        <InputContainer>
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
        onPress={() => {value.length > 10 && Alert.alert('BAD')}}
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
      <TouchableOpacity style={{ flex: 0.2, justifyContent: "center" }}>
        <Police>Политика конфиденциальности</Police>
      </TouchableOpacity>
    </Container>
  );
};

export default SetName;
