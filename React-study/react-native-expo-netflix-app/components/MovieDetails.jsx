import {
  Modal,
  StyleSheet,
  View,
  ScrollView,
  Button,
  ImageBackground,
} from "react-native";
import { useEffect, useState } from "react";
import axiosInstance from "../api/axios";
import DetailsText from "./DetailsText";
import { BASE_URL } from "./Banner";
import { LinearGradient } from "expo-linear-gradient";

const MovieDetails = ({ isVisible, movie, closeModal }) => {
  if (!movie) return null;

  const [details, setDetails] = useState(null);

  const type =
    movie.media_type === "movie" || !movie.media_type ? "movie" : "tv";

  const movieDetailsPath = `/${type}/${movie.id}?append_to_response=credits`;
  // api에서 응답을 보낼때 credits라는 정보를 함께 보내옴

  useEffect(() => {
    async function fetchDetails() {
      const response = await axiosInstance.get(movieDetailsPath);
      setDetails(response.data);
    }
    fetchDetails();
  }, []);

  return (
    // Modal visible: true 이면 보임
    <Modal visible={isVisible} animationType="slide">
      <View style={styles.container}>
        <ScrollView>
          <ImageBackground
            source={{
              uri: `${BASE_URL}${movie?.backdrop_path || movie?.poster_path}`,
            }}
            style={styles.backdrop}
          >
            <LinearGradient
              style={styles.radialGradient}
              colors={["transparent", "rgba(37,37,37,0.7)", "#171717"]}
            />
          </ImageBackground>
          <DetailsText
            title={movie?.title || movie?.original_title || movie?.name}
            description={details?.overview || movie?.overview}
            genres={details?.genres || movie?.genres}
          />
          <Button title="Close" onPress={closeModal} />
        </ScrollView>
      </View>
    </Modal>
  );
};

export default MovieDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#171717",
  },
  backdrop: {
    width: "100%",
    height: 450,
    objectFit: "cover",
    justifyContent: "flex-end",
    alignItems: "center",
    position: "relative",
  },
  radialGradient: {
    position: "absolute",
    height: 180,
    left: 0,
    right: 0,
    bottom: 0,
  },
});
