import { useState, useEffect } from "react";
import {
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import styled from "styled-components/native";
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from "react-native-confirmation-code-field";

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

const ButtonGetSMS = styled(Text)`
  font-family: "TTCommons";
  font-size: 17px;
  font-weight: 500;
  line-height: 20px;
  text-align: center;
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

const CellText = styled(Text)`
  font-family: "TTCommons";
  font-size: 64px;
  font-weight: 400;
  line-height: 74px;
  text-align: center;
  letter-spacing: -0.048px;
  color: #ffffff;
`;

const RepeatCode = styled(Text)`
  font-family: "TTCommons";
  font-size: 17px;
  font-weight: 500;
  line-height: 20px;
  text-align: center;
  letter-spacing: -0.048px;
  color: #7f7d85;
`;

const CELL_COUNT = 4;

const SigninPhone = () => {
  const [value, setValue] = useState("");
  const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });
  const [seconds, setSeconds] = useState(10);
  const [active, setActive] = useState(false);

  useEffect(() => {
    getSms();
  }, []);

  function getSms() {
    setActive((prevState) => !prevState);
    let interval = setInterval(() => {
      setSeconds((prevState) => {
        if (!!!prevState) {
          setActive((prevState) => !prevState);
          clearInterval(interval);
          setSeconds(10);
        }
        return prevState - 1;
      });
    }, 1000);
  }

  return (
    <Container>
      <View
        style={{
          flex: 0.35,
          justifyContent: "flex-end",
          alignSelf: "center",
        }}
      >
        <Title>Код из SMS</Title>
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
        <CodeField
          ref={ref}
          {...props}
          value={value}
          onChangeText={setValue}
          cellCount={CELL_COUNT}
          keyboardType="number-pad"
          textContentType="oneTimeCode"
          renderCell={({ index, symbol, isFocused }) => (
            <View
              onLayout={getCellOnLayoutHandler(index)}
              key={index}
              style={{
                width: 60,
                height: 74,
                marginHorizontal: 16,
                justifyContent: "center",
                alignItems: "center",
                borderBottomColor: isFocused ? "#ffffff" : "#ccc",
                borderBottomWidth: isFocused ? 2 : 1,
              }}
            >
              <CellText>{symbol || (isFocused ? <Cursor /> : null)}</CellText>
            </View>
          )}
        />
      </View>
      <View style={{ flex: 0.25 }}>
        {active ? (
          <RepeatCode>{`Не пришёл код?\nПришлем новый через 00:${
            seconds < 10 ? `0${seconds}` : seconds
          }`}</RepeatCode>
        ) : (
          <TouchableOpacity
            onPress={() => getSms()}
            style={{
              flex: 0.2,
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <ButtonGetSMS>Отправить SMS</ButtonGetSMS>
          </TouchableOpacity>
        )}
      </View>
      <TouchableOpacity style={{ flex: 0.2, justifyContent: "center" }}>
        <Police>Политика конфиденциальности</Police>
      </TouchableOpacity>
    </Container>
  );
};

export default SigninPhone;
