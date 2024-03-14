import { StyleSheet, Text, View, Image } from "react-native";
import { useEffect, useState } from "react";
import axiosInstance from "../api/axios";
import PlayButton from "./PlayButton";
import AddWatchListButton from "./AddWatchListButton";

export const BASE_URL = "https://image.tmdb.org/t/p/w500";

const Banner = ({ fetchUrl }) => {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await axiosInstance.get(fetchUrl);
      // response.data.results : [{영화1데이터},{영화2데이터},{},{},...]
      setMovie(
        response.data.results[
          Math.floor(Math.random() * response.data.results.length)
        ]
      );
    }
    fetchData();
  }, []);

  return (
    <View style={styles.bannerContainer}>
      <Image
        source={{
          uri: `${BASE_URL}${movie?.poster_path || movie?.backdrop_path}`,
        }}
        style={styles.image}
      />
      <View style={styles.buttonContainer}>
        <View style={styles.button}>
          <PlayButton />
        </View>
        <View style={styles.button}>
          <AddWatchListButton />
        </View>
      </View>
    </View>
  );
};

export default Banner;

const styles = StyleSheet.create({
  bannerContainer: {
    width: "100%",
    height: 450,
    marginTop: 15,
    position: "relative",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "95%",
    height: 450,
    marginHorizontal: 10,
    borderRadius: 15,
    borderColor: "#3F3F45",
    objectFit: "cover",
  },
  buttonContainer: {
    flexDirection: "row",
    width: "90%",
    justifyContent: "space-around",
    marginHorizontal: 10,
    position: "absolute",
    padding: 5,
    bottom: 0,
    gap: 15,
  },
  button: {
    flex: 1,
  },
});
