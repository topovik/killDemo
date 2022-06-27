import Toast from "react-native-toast-message";

export function useToast() {
  const successToast = (text) => {
    Toast.show({
      type: "success",
      text1: text,
      visibilityTime: 2000,
    });
  };

  const errorToast = (text) => {
    Toast.show({
      type: "error",
      text1: text,
      visibilityTime: 2000,
    });
  };

  return {
    successToast,
    errorToast,
  };
}
