import axios from "axios";

const API_KEY = "7c7eac8d"; // Replace with your actual OMDb API key

export const fetchMovies = async (title) => {
  try {
    const url = `http://www.omdbapi.com/?s=${title}&apikey=${API_KEY}`;
    // console.log({ url });
    const response = await axios.get(url);
    // console.log({ Search: response.data });
    const { Search } = response.data;
    // const { Title, Year, Poster, Plot, Director } = Search;
    return Search;
  } catch (error) {
    console.error(error);
  }

  //   return response.data;
};

export const fetchMoviesById = async (imdbID) => {
  try {
    const url = `http://www.omdbapi.com/?i=${imdbID}&apikey=${API_KEY}`;

    const response = await axios.get(url);
    const { Title, Year, Poster, Director, Plot } = response.data;
    return { Title, Year, Poster, Director, Plot };
  } catch (error) {
    console.error(error);
  }
};
