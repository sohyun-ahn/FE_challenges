import { StyleSheet, Text, View } from "react-native";

const Genre = ({ genres }) => {
  console.log(genres);
  return (
    <View style={styles.genres}>
      {genres?.map((genre) => (
        <View key={genre.id} style={styles.genre}>
          <Text style={styles.genre__text}>{genre.name}</Text>
        </View>
      ))}
    </View>
  );
};

export default Genre;

const styles = StyleSheet.create({
  genres: {
    flexDirection: "row",
    gap: 7,
  },
  genre: {
    paddingHorizontal: 15,
    paddingVertical: 5,
    borderRadius: 25,
    borderColor: "#F2F2F2",
    borderWidth: 1,
    borderStyle: "solid",
    marginBottom: 16,
    width: "auto",
    alignItems: "center",
    justifyContent: "center",
  },
  genre__text: {
    color: "#F2F2F2",
    fontSize: 16,
  },
});
