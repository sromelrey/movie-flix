import axios from "axios";

const API_KEY = "7c7eac8d"; // Replace with your actual OMDb API key

export const fetchMovies = async (queryString) => {
  try {
    const url = `http://www.omdbapi.com/${queryString}&apikey=${API_KEY}`;

    const response = await fetch(url);
    const data = await response.json();

    let transformedResponnse;
    if (queryString.includes("s=")) {
      const { Search } = data;
      transformedResponnse = Search;
    }

    if (queryString.includes("i=")) {
      const { Title, Year, Poster, Director, Plot } = data;
      transformedResponnse = { Title, Year, Poster, Director, Plot };
    }
    if (queryString.includes("t=")) {
      const { Title, Year, Poster, Director, Plot } = data;
      transformedResponnse = [{ Title, Year, Poster, Director, Plot }];
    }

    return transformedResponnse;
  } catch (error) {
    console.log(error);
  }
};

