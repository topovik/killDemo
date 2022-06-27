import { useState, useRef } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import PhoneInput from "react-native-phone-number-input";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import styled from "styled-components/native";
import { useNavigation } from "@react-navigation/native";
import Arrow from "../../../assets/arrow-right.svg";
import ArrowDown from "../../../assets/arrow-down.svg";
import { useToast } from "../../../utils/useToast";

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

const Signin = () => {
  const phoneInput = useRef(null);
  const navigation = useNavigation();
  const { successToast, errorToast } = useToast();
  const [formattedValue, setFormattedValue] = useState("");

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
          <Title>Введи номер телефона</Title>
          <Description>
            Мы привяжем аккаунт к нему, и ты никогда не потеряешь доступ к своей
            музыке
          </Description>
        </View>
        <View style={{ flex: 0.2 }}>
          <PhoneInput
            ref={phoneInput}
            defaultValue={formattedValue}
            defaultCode="RU"
            layout="first"
            onChangeFormattedText={(text) => {
              setFormattedValue(text);
            }}
            withDarkTheme
            autoFocus
            renderDropdownImage={<ArrowDown />}
            placeholder="Телефон"
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
            textContainerStyle={{
              backgroundColor: "#222023",
              borderRadius: 22,
            }}
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
            const checkValid =
              phoneInput.current?.isValidNumber(formattedValue);
            if (checkValid) {
              successToast("Успешно");
              return navigation.navigate("Sms");
            }

            return errorToast("Некорректный номер");
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
          style={{ flex: 0.2, justifyContent: "center" }}
          onPress={() => navigation.navigate("Police")}
        >
          <Police>Политика конфиденциальности</Police>
        </TouchableOpacity>
      </Container>
    </KeyboardAwareScrollView>
  );
};

export default Signin;
