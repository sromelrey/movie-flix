import React, { useEffect, useState, useLayoutEffect } from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import { fetchMovies } from "../api";
export default function MovieOverviewScreen({ route, navigation }) {
  const { movie } = route.params;
  const [movieDetails, setMovieDetails] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const loadMovieDetails = async (imdbID) => {
    setIsLoading(true);
    const data = await fetchMovies(`?i=${imdbID}`);
    setMovieDetails(data || []);
    setIsLoading(false);
  };

  useEffect(() => {
    loadMovieDetails(movie.imdbID);
  }, []);

  useLayoutEffect(() => {
    navigation.setOptions({
      title: movie.Title,
    });
  }, [movie.Title, navigation]);

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={{ uri: movieDetails.Poster }} style={styles.image} />
      </View>

      <View style={styles.detailContainer}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Text style={{ fontWeight: "300", fontSize: 25 }}>
            {movieDetails.Year}
          </Text>
          <Text style={{ fontWeight: "300", fontSize: 25 }}>
            {movieDetails.Director}
          </Text>
        </View>
        <View style={{ flex: 1, marginTop: 20 }}>
          <Text style={{ fontWeight: "bold", fontSize: 25 }}>
            {movieDetails.Plot}
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  imageContainer: {
    flex: 9,
    height: "100%",
    padding: 16,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  detailContainer: {
    flex: 3,
    padding: 16,
    alignItems: "stretch",
    borderWidth: 2,
    borderColor: "red",
  },
});
