import React from "react";
import { StyleSheet, View, TextInput } from "react-native";
import { Button } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";
export default function SearchMovies({
  searchMoviesHandler,
  moviesInputHandler,
}) {
  return (
    <View style={styles.contentWrapper}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder='Search by title'
          style={styles.textInput}
          onChangeText={moviesInputHandler}
        />
        <Button
          icon={<Icon name='search' size={15} color='white' />}
          onPress={searchMoviesHandler}
          buttonStyle={{
            height: 50,
            width: 50,
            borderWidth: 2,
            borderColor: "black",
          }}
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
    marginVertical: 16,
    flexDirection: "row",
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
