import axios, { Method } from "axios";

import { IDetailedMovieList } from "../interfaces";

// Main function to call the API
export async function callApi(
  method: Method,
  endpoint: string,
  data?: object,
): Promise<any> {
  const headers = {
    "Content-Type": "application/json",
  };

  try {
    const response = await axios({
      method,
      url: `https://app.sheetlabs.com/RAPI/${endpoint}`,
      data,
      headers,
    });

    return response.data;
  } catch (error: any) {
    return error.response.data;
  }
}

// Functions to request the API
export async function getListMovies(): Promise<IDetailedMovieList[]> {
  const url = `Top100movieslist`;
  return await callApi("GET", url);
}
