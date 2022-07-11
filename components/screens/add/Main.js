import { useState, useEffect, useRef } from "react";
import {
  Text,
  TextInput,
  View,
  Image,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Dimensions,
} from "react-native";
import styled from "styled-components/native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";
import * as ImagePicker from "expo-image-picker";
import * as DocumentPicker from "expo-document-picker";

import ArrowUp from "../../../assets/arrow-up-select.svg";
import ArrowDown from "../../../assets/arrow-down-select.svg";

import ModalDropdown from "react-native-modal-dropdown";
import ImageView from "react-native-image-viewing";
import CloseIcon from "../../../assets/closeIcon.svg";
import PreviewIcon from "../../../assets/previewIcon.svg";

import SimplePlayer from "../../../utils/simplePlayer";

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
  position: relative;
  width: 100%;
  margin-top: 16px;
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
  padding: 24px 24px 0;
  background-color: #222023;
  border-radius: 22px;

  font-family: "TTCommons";
  font-size: 20px;
  line-height: 23px;
  letter-spacing: -0.048px;
  color: #ffffff;
`;

const Select = styled(ModalDropdown)`
  width: 100%;
  height: 60px;
  background-color: #222023;
  border-radius: 22px;
  overflow: hidden;
`;

const Main = () => {
  const textRef = useRef();
  const titleRef = useRef();
  const yearRef = useRef();
  const versionRef = useRef();
  const dropDownRef = useRef();

  const tabBarHeight = useBottomTabBarHeight();
  const [text, setText] = useState("");
  const [title, setTitle] = useState("");
  const [year, setYear] = useState("");
  const [version, setVersion] = useState(undefined);
  const [photo, setPhoto] = useState(null);
  const [track, setTrack] = useState({
    name: null,
    uri: null,
  });

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(undefined);
  const [visible, setIsVisible] = useState(false);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setPhoto(result.uri);
    }
  };

  const pickTrack = async () => {
    let result = await DocumentPicker.getDocumentAsync({});
    const { name, uri } = result;
    setTrack({ name, uri });
  };

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
          marginTop: 16,
          paddingHorizontal: 16,
          alignItems: "center",
          paddingBottom: tabBarHeight,
        }}
      >
        {photo && (
          <View
            style={{
              position: "relative",
              width: "100%",
              height: 186,
              marginBottom: 16,
              borderRadius: 22,
            }}
          >
            <TouchableOpacity
              onPress={() => setPhoto(null)}
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                position: "absolute",
                top: 8,
                right: 8,
                zIndex: 1,
                width: 24,
                height: 24,
                backgroundColor: "#121212",
                borderRadius: 32,
              }}
            >
              <CloseIcon style={{ width: 8, height: 8 }} />
            </TouchableOpacity>
            <Image
              source={{ uri: photo }}
              resizeMode="cover"
              style={{
                width: "100%",
                height: 186,
                borderRadius: 22,
              }}
            />
            <TouchableOpacity onPress={() => setIsVisible(true)}>
              <PreviewIcon
                style={{
                  position: "absolute",
                  bottom: 16,
                  right: 16,
                  width: 16,
                  height: 16,
                }}
              />
            </TouchableOpacity>
          </View>
        )}

        {track.uri && <SimplePlayer track={track} />}

        <Textarea
          ref={textRef}
          value={text}
          onChangeText={setText}
          multiline
          numberOfLines={6}
          editable
          placeholder="Текст публикации..."
          placeholderTextColor="#7f7d85"
          underlineColorAndroid="transparent"
          style={{ textAlignVertical: "top" }}
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
            value={year}
            onChangeText={setText}
            placeholder="Год записи песни"
            placeholderTextColor="#ffffff"
          />
        </InputContainer>
        <InputContainer>
          <TextPlaceholder>Версия</TextPlaceholder>
          <Select
            ref={versionRef}
            defaultValue="Версия трека"
            options={[
              "Демо",
              "Оригинал",
              "Измененная",
              "Последняя",
              "Версия 2.0",
            ]}
            onDropdownWillShow={() => setOpen(true)}
            onDropdownWillHide={() => setOpen(false)}
            showsVerticalScrollIndicator={false}
            isFullWidth
            textStyle={{
              height: "100%",
              fontFamily: "TTCommons",
              paddingTop: 26,
              paddingBottom: "100%",
              paddingLeft: 24,
              fontSize: 20,
              lineHeight: 23,
              letterSpacing: -0.048,
              color: "#fff",
            }}
            dropdownStyle={{
              backgroundColor: "#000",
              borderWidth: 0,
              borderTopLeftRadius: 22,
              borderTopRightRadius: 22,
              overflow: "hidden",
              flexDirection: "row",
              alignItems: "center",
            }}
            adjustFrame={({ right, ...rest }) => {
              return { ...rest, left: 0, right: 0, height: "40%", top: "60%" };
            }}
            dropdownTextStyle={{
              fontFamily: "TTCommons",
              paddingVertical: 12,
              fontSize: 20,
              lineHeight: 23,
              textAlign: "center",
              letterSpacing: -0.048,
              backgroundColor: "transparent",
              color: "#fff",
            }}
            dropdownTextHighlightStyle={{ color: "#ff453a" }}
            renderSeparator={() => null}
          />
          {open ? (
            <ArrowUp style={{ position: "absolute", top: 25, right: 16 }} />
          ) : (
            <ArrowDown style={{ position: "absolute", top: 25, right: 16 }} />
          )}
        </InputContainer>
        <View>
          <TouchableOpacity onPress={pickImage}>
            <Text>Фото</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={pickTrack}>
            <Text>Загрузить песню</Text>
          </TouchableOpacity>
        </View>
        <ImageView
          images={[{ uri: photo }]}
          imageIndex={0}
          visible={visible}
          onRequestClose={() => setIsVisible(false)}
        />
      </View>
    </KeyboardAwareScrollView>
  );
};

export default Main;
