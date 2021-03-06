import { StyleSheet, Text, View } from "react-native";

import { RootTabScreenProps } from "../types";

export default function SearchScreen({
  navigation,
}: RootTabScreenProps<"SearchScreen">) {
  return (
    <View style={styles.container}>
      <Text style={{ color: "white" }}>Hello from SearchScreen</Text>
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
