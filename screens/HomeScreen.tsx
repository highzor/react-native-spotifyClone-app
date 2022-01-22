import { StyleSheet, Text, View } from "react-native";
import AlbumView from "../components/Album";
import { RootTabScreenProps } from "../types";
import AlbumCategory from "../components/AlbumCategory";

const album = {
  id: "1",
  imageUri:
    "https://cdn2.albumoftheyear.org/250x/album/155962-black-and-yellow-g-mix.jpg",
  artistsHeadLine: "Wiz Khalifa",
};

export default function HomeScreen({
  navigation,
}: RootTabScreenProps<"HomeScreen">) {
  return (
    <View style={styles.container}>
      {/* <AlbumView album={album} /> */}
      <AlbumCategory title={"a"} albums={} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
