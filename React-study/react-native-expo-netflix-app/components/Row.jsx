import {
  StyleSheet,
  Text,
  View,
  Pressable,
  ScrollView,
  Image,
} from "react-native";
import { useState, useEffect } from "react";
import axiosInstance from "../api/axios";

const Row = ({ title, fetchUrl, isLargeRow, openModal }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await axiosInstance.get(fetchUrl);
      // response.data.results : [{영화1데이터},{영화2데이터},{},{},...]
      setMovies(response.data.results);
    }
    fetchData();
  }, [fetchUrl]);

  return (
    <View style={styles.rowContainer}>
      <Text style={styles.row__title}>{title}</Text>
      <ScrollView horizontal contentContainerStyle={styles.row__posters}>
        {movies.map((movie) => (
          <Pressable
            key={movie.id}
            style={styles.poster}
            onPress={() => openModal(movie)}
          >
            <Image
              source={{
                uri: `https://image.tmdb.org/t/p/w500${
                  movie.poster_path || movie.backdrop_path
                }`,
              }}
              style={[
                styles.poster__image,
                {
                  width: isLargeRow ? 150 : styles.poster__image.width,
                  height: isLargeRow ? 220 : styles.poster__image.height,
                },
              ]}
            />
          </Pressable>
        ))}
      </ScrollView>
    </View>
  );
};

export default Row;

const styles = StyleSheet.create({
  rowContainer: {
    marginTop: 20,
    marginBottom: 10,
  },
  row__title: {
    marginBottom: 6,
    paddingLeft: 10,
    paddingRight: 6,
    color: "#F2F2F2",
    fontSize: 16,
    fontWeight: "bold",
  },
  row__posters: {
    paddingLeft: 10,
    paddingRight: 6,
  },
  poster__image: {
    width: 100,
    height: 140,
    marginRight: 10,
    borderRadius: 5,
  },
});
