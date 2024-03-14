import { StyleSheet, Text, View } from "react-native";
import Genre from "./Genre";

const DetailsText = ({ title, description, genres }) => {
  return (
    <View style={styles.detailsContainer}>
      <Text style={styles.details__title}>{title}</Text>
      <Genre genres={genres} />
      <Text style={styles.description}>{description}</Text>
    </View>
  );
};

export default DetailsText;

const styles = StyleSheet.create({
  detailsContainer: {
    position: "absolute",
    paddingHorizontal: 25,
    marginTop: 100,
  },
  details__title: {
    color: "#F2F2F2",
    fontSize: 38,
    fontWeight: "bold",
    marginBottom: 16,
  },
  description: {
    color: "#F2F2F2",
    fontSize: 16,
  },
});
