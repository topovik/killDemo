import { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import Slider from "@react-native-community/slider";
import { Audio } from "expo-av";

export default function SimplePlayer({ track }) {
  const [sound] = useState(new Audio.Sound());
  const [soundStatus, setSoundStatus] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    (async () => {
      await sound.unloadAsync().then(() => {
        setSoundStatus(null);
        setIsPlaying(false);
      });
    })();
  }, [track]);

  async function playSound() {
    if (sound !== null && soundStatus === null) {
      const status = await sound.loadAsync({ uri: track.uri });
      await sound.playAsync();

      setIsPlaying(true);
      return setSoundStatus({ ...status, isPlaying: true });
    }

    if (soundStatus.isPlaying) {
      const status = await sound.pauseAsync();
      setIsPlaying(false);
      return setSoundStatus(status);
    }

    if (!soundStatus.isPlaying) {
      const status = await sound.playAsync();
      setIsPlaying(true);
      return setSoundStatus(status);
    }
  }

  return (
    <View>
      <TouchableOpacity onPress={playSound}>
        <Text style={{ color: "red" }}>{isPlaying ? "Stop" : "Play"}</Text>
      </TouchableOpacity>
    </View>
  );
}
