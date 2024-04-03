import React, { useState, useEffect } from "react";
import { FlatList, View, Text, StyleSheet } from "react-native";
import { MovieItem, SearchMovie } from "../components";
import { fetchMovies } from "../api";

export default function MovieScreens({ navigation }) {
  const [title, setTitle] = useState([]);
  const [year, setYear] = useState([]);
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const loadMovies = async (searchQuery) => {
    setIsLoading(true);
    const data = await fetchMovies(`?s=${searchQuery}`);
    setMovies(data || []);
    setIsLoading(false);
  };

  const handleSearchMovies = async () => {
    setIsLoading(true);
    const searchQuery =
      year.length > 0 ? `?t=${title}&y=${year}` : `?s=${title}`;
    const data = await fetchMovies(searchQuery);
    setMovies(data);
    setIsLoading(false);
  };
  const handleMoviesInput = (enteredSearch) => {
    setTitle(enteredSearch);
  };
  const handleMoviesYearInput = (enteredSearch) => {
    setYear(enteredSearch);
  };
  useEffect(() => {
    loadMovies("Batman");
  }, []);

  const renderItem = ({ item }) => {
    const onPressHandler = (e) => {
      navigation.navigate("MoviesOverviewScreen", { movie: item });
    };

    return <MovieItem movie={item} onPress={onPressHandler} />;
  };

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.title}>
        <Text style={styles.titleText}>Movie Flix</Text>
      </View>
      <View style={{ flex: 3, borderWidth: 2, borderColor: "black" }}>
        <SearchMovie
          searchMoviesHandler={handleSearchMovies}
          moviesInputHandler={handleMoviesInput}
          moviesInputYearHandler={handleMoviesYearInput}
        />
      </View>
      <View style={{ flex: 10 }}>
        <FlatList
          key={(item) => item.id}
          data={movies}
          renderItem={renderItem}
          numColumns={2}
          // onMomentumScrollEnd={() => console.log("done")}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    height: 10,
    marginTop: 16,
    justifyContent: "center",
    alignContent: "center",
    backgroundColor: "#3b0764",
    flex: 2,
  },
  titleText: {
    textAlign: "center",
    fontSize: 50,
    fontStyle: "italic",
    fontWeight: "bold",
    color: "#f5d0fe",
  },
});
