import { StatusBar } from "expo-status-bar";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import Banner from "./components/Banner";
import requests from "./api/requests";
import Row from "./components/Row";
import MovieDetails from "./components/MovieDetails";
import { useState } from "react";

export default function App() {
  const [isModalVisible, setIsModalVisible] = useState(false); // Row안의 Movie Image 클릭시 모달창이 열리는 상태
  const [selectedMovie, setSelectedMovie] = useState(null); // Row안의 Movie Image 클릭한 영화의 정보값 저장하는 상태

  function openModal(movie) {
    setIsModalVisible(true);
    setSelectedMovie(movie);
  }

  function closeModal() {
    setIsModalVisible(false);
    setSelectedMovie(null);
  }

  return (
    <View style={styles.container}>
      {/* {isModalVisible && ( // Modal창이 열렸을때만 보이는 MovieDetails Component */}
      <MovieDetails
        isVisible={isModalVisible}
        movie={selectedMovie}
        closeModal={closeModal}
      />
      {/* )} */}
      <ScrollView style={styles.scrollView}>
        <Banner fetchUrl={requests.fetchNowPlaying} />
        <Row
          title="Trending Now"
          fetchUrl={requests.fetchTrending}
          isLargeRow
          openModal={openModal}
        />
        <Row
          title="Top Rated"
          fetchUrl={requests.fetchTopRated}
          openModal={openModal}
        />
        <Row
          title="Action Movies"
          fetchUrl={requests.fetchActionMovies}
          openModal={openModal}
        />
        <Row
          title="Comedy Movies"
          fetchUrl={requests.fetchComedyMovies}
          openModal={openModal}
        />
      </ScrollView>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#171717",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 50,
  },
  scrollView: {
    width: "100%",
  },
});
