import React from "react";
import { Text, View, Image } from "react-native";
import { Song } from "../../types";
import styles from "./styles";

const song = {
  id: "1",
  imageUri:
    "https://cdn2.albumoftheyear.org/250x/album/155962-black-and-yellow-g-mix.jpg",
  title: "Black and Yellow",
  artist: "Wiz Khalifa",
};

const PlayerWidget = () => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: song.imageUri }} style={styles.image} />
      <Text style={styles.title}>{song.title}</Text>
      <Text style={styles.artist}>{song.artist}</Text>
    </View>
  );
};

export default PlayerWidget;
