import { View, Text } from "react-native";
import Success from "../assets/successIcon.svg";
import Error from "../assets/errorIcon.svg";

export const toastConfig = {
  success: ({ text1 }) => (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        height: 40,
        width: "auto",
        marginHorizontal: 32,
        paddingVertical: 8,
        paddingHorizontal: 16,
        backgroundColor: "#222023",
        borderRadius: 64,
      }}
    >
      <Success style={{ marginRight: 8 }} />
      <Text style={{ fontSize: 16, color: "#ffffff" }}>{text1}</Text>
    </View>
  ),
  error: ({ text1 }) => (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        height: 40,
        width: "auto",
        marginHorizontal: 32,
        paddingVertical: 8,
        paddingHorizontal: 16,
        backgroundColor: "#222023",
        borderRadius: 64,
      }}
    >
      <Error style={{ marginRight: 8 }} />
      <Text style={{ fontSize: 16, color: "#ffffff" }}>{text1}</Text>
    </View>
  ),
};
