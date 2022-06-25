import { useState, useRef } from "react";
import { Text, View, TouchableOpacity } from "react-native";
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

const SigninPhone = () => {
  const [value, setValue] = useState("");
  const [formattedValue, setFormattedValue] = useState("");
  const [valid, setValid] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const phoneInput = useRef(null);

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
        <Title>Введи номер телефона</Title>
        <Description>
          Мы привяжем аккаунт к нему, и ты никогда не потеряешь доступ к своей
          музыке
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
        <PhoneInput
          ref={phoneInput}
          defaultValue={value}
          defaultCode="RU"
          layout="first"
          onChangeText={(text) => {
            setValue(text);
          }}
          onChangeFormattedText={(text) => {
            setFormattedValue(text);
          }}
          withDarkTheme
          autoFocus
          placeholder="9110012345"
          textInputProps={{
            placeholderTextColor: "#504d52",
            selectionColor: "#ffffff40",
          }}
          containerStyle={{
            width: "100%",
            height: 60,
            backgroundColor: "#222023",
            borderRadius: 22,
          }}
          textInputStyle={{ color: "#ffffff" }}
          textContainerStyle={{ backgroundColor: "#222023", borderRadius: 22 }}
          countryPickerButtonStyle={{
            alignSelf: "center",
            height: "60%",
            borderRightWidth: 2,
            borderRightColor: "#7f7d85",
          }}
          codeTextStyle={{ color: "#ffffff" }}
        />
      </View>
      <TouchableOpacity
        onPress={() => {
          const checkValid = phoneInput.current?.isValidNumber(value);
          setShowMessage(true);
          setValid(checkValid ? checkValid : false);
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
      <TouchableOpacity style={{ flex: 0.2, justifyContent: "center" }}>
        <Police>Политика конфиденциальности</Police>
      </TouchableOpacity>
    </Container>
  );
};

export default SigninPhone;
