import React from "react";
import { StyleSheet, View, TextInput } from "react-native";
import { Button } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";
export default function SearchMovies({
  searchMoviesHandler,
  moviesInputHandler,
  moviesInputYearHandler,
}) {
  return (
    <View style={styles.contentWrapper}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder='Search by title'
          style={styles.textInput}
          onChangeText={moviesInputHandler}
        />
        <TextInput
          placeholder='Filter by Year'
          style={styles.textInput}
          onChangeText={moviesInputYearHandler}
        />
        {/* <Button
          type='solid'
          buttonStyle={{
            flex: 1,
            flexDirection: "row",
            flexBasis: "auto",
            height: 50,
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
            borderWidth: 2,
            borderColor: "black",
          }}
        >
          Search Movie
          <Icon name='save' color='white' />
        </Button> */}
        <Button
          icon={<Icon name='search' size={15} color='white' />}
          onPress={searchMoviesHandler}
          title='Search Movie'
        />
        {/* <Button title='Search'  /> */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  contentWrapper: {
    flex: 1,
    padding: 50,
    paddingHorizontal: 16,
    flex: 1,
    height: 100,
    flexDirection: "column",
  },
  inputContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
    height: "50%",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    paddingHorizontal: 16,
    height: 50,
    width: "85%",
  },
});
