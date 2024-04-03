import React from "react";
import { View, Text, Image, StyleSheet, Pressable } from "react-native";

export default function MovieItem({ movie, onPress }) {
  return (
    <View style={styles.gridItem}>
      <Pressable onPress={onPress}>
        <View style={[styles.innerContainer]}>
          <Image
            source={{ uri: movie.Poster }}
            style={{ flex: 1, height: 450 }}
          />
        </View>
        <View style={styles.detailsContainer}>
          <Text style={styles.title}>{movie.Title}</Text>
          <Text tyle={styles.year}>{movie.Year}</Text>
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    padding: 16,
  },
  imageContainer: {
    flex: 1,
    padding: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  detailsContainer: {
    flex: 1,
    padding: 16,
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
  },
  year: {
    fontWeight: "300",
    fontSize: 18,
  },
});
