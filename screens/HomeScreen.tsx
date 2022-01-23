import { StyleSheet, Text, View } from "react-native";
import AlbumComponent from "../components/Album";
import { RootTabScreenProps } from "../types";
import AlbumCategory from "../components/AlbumCategory";

const albumCategory = {
  id: "1",
  title: "Sasha's favorite music",
  albums: [
    {
      id: "1",
      imageUri:
        "https://cdn2.albumoftheyear.org/250x/album/155962-black-and-yellow-g-mix.jpg",
      artistsHeadLine: "Wiz Khalifa",
    },
    {
      id: "2",
      imageUri:
        "https://1.bp.blogspot.com/_BcHa1wsK9kY/TLdNSFZQb1I/AAAAAAAAAZo/hA8eqQQE3Fc/s1600/Tinie+Tempah+-+Disc-Overy+(Official+Album+Cover).jpg",
      artistsHeadLine: "Tinie Tempah",
    },
    {
      id: "3",
      imageUri:
        "https://gp1.wac.edgecastcdn.net/802892/http_public_production/photos/images/8451983/original/resize:600x600/crop:x0y44w350h263/aspect:1.0/hash:1463633009/192072.png?1463633009",
      artistsHeadLine: "Asking Alexandria",
    },
    {
      id: "4",
      imageUri: "https://i.ytimg.com/vi/mzsNuEjCAaY/maxresdefault.jpg",
      artistsHeadLine: "Night Lovell",
    },
    {
      id: "5",
      imageUri: "https://i.ytimg.com/vi/8RGEvivKlNk/maxresdefault.jpg",
      artistsHeadLine: "Enjoii",
    },
  ],
};

export default function HomeScreen({
  navigation,
}: RootTabScreenProps<"HomeScreen">) {
  return (
    <View style={styles.container}>
      {/* <AlbumView album={album} /> */}
      <AlbumCategory
        title={albumCategory.title}
        albums={albumCategory.albums}
      />
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
