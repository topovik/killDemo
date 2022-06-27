import { useState, useRef } from "react";
import { Text, TextInput, View, TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";
import { Picker } from "@react-native-picker/picker";

const Title = styled(Text)`
  font-family: "TTCommons";
  margin-bottom: 32px;
  font-size: 24px;
  font-weight: 500;
  line-height: 28px;
  text-align: center;
  letter-spacing: -0.048px;
  color: #7f7d85;
`;

const Button = styled(TouchableOpacity)`
  align-items: center;
  justify-content: center;
  width: 298px;
  height: 60px;
  margin-bottom: 24px;
  background-color: #ff453a;
  border-radius: 22px;
`;

const ButtonText = styled(Text)`
  font-family: "TTCommons";
  font-size: 20px;
  font-weight: 500;
  line-height: 23px;
  letter-spacing: -0.048px;
  color: #ffffff;
`;

const SubText = styled(Text)`
  font-family: "TTCommons";
  font-size: 17px;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: -0.048px;
  color: #504d52;
`;

const InputContainer = styled(View)`
  width: 100%;
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

const Textarea = styled(TextInput)`
  width: 100%;
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

const Select = styled(Picker)`
  width: 100%;
  font-family: "TTCommons";
  font-weight: 600;
  font-size: 20px;
  line-height: 23px;
  letter-spacing: -0.048px;
  color: #ffffff;
`;

const SelectContainer = styled(View)`
  width: 100%;
  height: 60px;
  padding-left: 16px;
  padding-top: 10px;
  /* padding: 16px 24px 0; */
  background-color: #222023;
  border-radius: 22px;
  overflow: hidden;
`;

const Main = () => {
  const textRef = useRef();
  const titleRef = useRef();
  const yearRef = useRef();
  const versionRef = useRef();
  const tabBarHeight = useBottomTabBarHeight();
  const [text, setText] = useState("");
  const [title, setTitle] = useState("");
  const [year, setYear] = useState("");
  const [version, setVersion] = useState(undefined);
  const [photo, setPhoto] = useState("");
  const [sound, setSound] = useState("");

  return (
    <KeyboardAwareScrollView
      enableAutomaticScroll
      enableOnAndroid
      contentContainerStyle={{ flexGrow: 1 }}
      extraScrollHeight={16}
    >
      <View
        style={{
          flex: 1,
          paddingHorizontal: 16,
          alignItems: "center",
          justifyContent: "center",
          paddingBottom: tabBarHeight,
        }}
      >
        <Textarea
          ref={textRef}
          value={text}
          onChangeText={setText}
          multiline
          numberOfLines={8}
          placeholder="Текст публикации..."
          placeholderTextColor="#7f7d85"
          underlineColorAndroid="transparent"
          style={{ marginBottom: 8 }}
        />
        <InputContainer>
          <TextPlaceholder>Название</TextPlaceholder>
          <Input
            ref={titleRef}
            value={title}
            onChangeText={setTitle}
            placeholder="Название песни и поста"
            placeholderTextColor="#ffffff"
          />
        </InputContainer>
        <InputContainer>
          <TextPlaceholder>Год создания</TextPlaceholder>
          <Input
            ref={yearRef}
            value={text}
            onChangeText={setText}
            placeholder="Год записи песни"
            placeholderTextColor="#ffffff"
          />
        </InputContainer>
        <SelectContainer>
          <TextPlaceholder>Версия</TextPlaceholder>
          <Select
            selectedValue={version}
            onValueChange={(itemValue) => setVersion(itemValue)}
            dropdownIconColor="#fff"
            itemStyle={{ backgroundColor: "grey", color: "blue",fontSize:17 }}
          >
            <Picker.Item label="Демо" value="demo" />
            <Picker.Item label="Оригинал" value="original" />
          </Select>
        </SelectContainer>
      </View>
    </KeyboardAwareScrollView>
  );
};

export default Main;
