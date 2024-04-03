import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import MovieScreens from "./screens/MovieScreen";
import MovieOverviewScreen from "./screens/MovieOverviewScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='MoviesScreen'
        screenOptions={{
          headerStyle: { backgroundColor: "#6b21a8" },
          headerTintColor: "white",
          headerLargeTitleStyle: { fontSize: 100, fontWeight: "bold" },
        }}
      >
        <Stack.Screen
          name='MoviesScreen'
          options={{
            title: "Movie Flix",
            headerStyle: {
              backgroundColor: "#6b21a8",
              justifyContent: "center",
            },
            headerLargeTitle: { fontSize: 300, fontWeight: "bold" },
            styles: {
              justifyContent: "center",
              fontSize: 300,
              fontWeight: "bold",
            },
          }}
          component={MovieScreens}
        />
        <Stack.Screen
          name='MoviesOverviewScreen'
          component={MovieOverviewScreen}
          // options={({ route, navigation }) => {
          //   const { movie } = route.params;
          //   return {
          //     title: movie.Title,
          //   };
          // }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
